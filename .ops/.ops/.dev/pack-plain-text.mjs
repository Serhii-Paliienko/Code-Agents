// scripts/pack-plain-text.mjs

// Как запускать

// Привычный Markdown-дамп (рекомендуется для чтения в чате/гите):

// node .dev/pack-plain-text.mjs --format md

// Машиночитаемый вариант без сюрпризов:

// node .dev/pack-plain-text.mjs --format jsonl

//   (каждая строка — JSON с path, size, sha1, text_b64).

import fsp from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const argv = process.argv.slice(2);
const getArg = (name, def) => {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : def;
};

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const GUESSED_ROOT =
  path.basename(SCRIPT_DIR) === ".dev"
    ? path.resolve(SCRIPT_DIR, "..")
    : process.cwd();

const FORMAT = getArg("--format", "md"); // md | txt | jsonl
const ROOT = path.resolve(getArg("--root", GUESSED_ROOT));

const STAMP = new Date().toISOString().replace(/[:.]/g, "-");
const outExt = FORMAT === "jsonl" ? "jsonl" : FORMAT === "txt" ? "txt" : "md";
const DEFAULT_OUT = path.join(
  SCRIPT_DIR,
  "_dumps",
  `AGENTS_DUMP-${STAMP}.${outExt}`
);
const OUT = path.resolve(getArg("--out", DEFAULT_OUT));

const LIMIT = Math.max(1, Number(getArg("--limit-mb", "16"))) * 1024 * 1024;

const EXCLUDED_DIRS = new Set([
  ".git",
  ".next",
  "node_modules",
  ".dev",
  ".turbo",
  ".vercel",
  "dist",
  "build",
  "coverage",
  ".cache",
  "_dumps", // NEW: чтобы дампы не попадали в дамп
]);

const TEXT_EXT = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".jsonc",
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".md",
  ".mdx",
  ".txt",
  ".csv",
  ".env",
  ".env.local",
  ".yml",
  ".yaml",
  ".html",
  ".htm",
  ".svg",
  ".sql",
  ".prisma",
  ".sh",
  ".bash",
  ".zsh",
  ".gitignore",
  ".gitattributes",
  ".npmrc",
  ".nvmrc",
  ".config",
  ".lock",
  ".prettierrc",
  ".eslintrc",
  ".editorconfig",
  ".babelrc",
  ".dockerfile",
  ".dockerignore",
]);

const LANG_BY_EXT = {
  ".ts": "ts",
  ".tsx": "tsx",
  ".js": "js",
  ".jsx": "jsx",
  ".mjs": "js",
  ".cjs": "js",
  ".json": "json",
  ".jsonc": "json",
  ".css": "css",
  ".scss": "scss",
  ".sass": "sass",
  ".less": "less",
  ".md": "md",
  ".mdx": "md",
  ".txt": "text",
  ".csv": "csv",
  ".env": "bash",
  ".yml": "yaml",
  ".yaml": "yaml",
  ".html": "html",
  ".htm": "html",
  ".svg": "svg",
  ".sql": "sql",
  ".prisma": "prisma",
  ".sh": "bash",
  ".bash": "bash",
  ".zsh": "bash",
  ".dockerfile": "dockerfile",
};
const fenceLang = (rel) => LANG_BY_EXT[path.extname(rel).toLowerCase()] ?? "";

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function isLikelyTextBuffer(buf) {
  const sample = buf.subarray(0, Math.min(buf.length, 512));
  let nonText = 0;
  for (const b of sample) {
    if (b === 9 || b === 10 || b === 13) continue; // \t \n \r
    if (b >= 32 && b <= 126) continue; // ASCII
    if (b >= 0xc2 && b <= 0xf4) continue; // UTF-8 leaders
    if (++nonText > 8) return false;
  }
  return true;
}

function isTextFileByName(rel) {
  const bn = path.basename(rel).toLowerCase();
  if (bn === ".env.local") return true;
  const ext = path.extname(bn);
  if (TEXT_EXT.has(ext)) return true;
  return new Set(["dockerfile", "makefile", "license", "readme"]).has(bn);
}

async function statSafe(p) {
  try {
    return await fsp.stat(p);
  } catch {
    return null;
  }
}

async function walk(dir, list = []) {
  const ents = await fsp.readdir(dir, { withFileTypes: true });
  for (const e of ents) {
    const abs = path.join(dir, e.name);
    const rel = path.relative(ROOT, abs);
    if (path.resolve(abs) === path.resolve(OUT)) continue; // не включаем сам артефакт
    if (e.isDirectory()) {
      if (EXCLUDED_DIRS.has(e.name)) continue;
      list.push({ type: "dir", abs, rel });
      await walk(abs, list);
    } else if (e.isFile()) {
      list.push({ type: "file", abs, rel });
    }
  }
  return list;
}

function buildAsciiTree(entries) {
  const rootLabel = path.basename(ROOT) || ".";
  const dirs = entries
    .filter((e) => e.type === "dir")
    .map((e) => toPosix(e.rel))
    .sort();
  const files = entries
    .filter((e) => e.type === "file")
    .map((e) => toPosix(e.rel))
    .sort();

  const makeNode = (name) => ({ name, dirs: new Map(), files: [] });
  const insert = (node, parts, isFile) => {
    let cur = node;
    for (let i = 0; i < parts.length - (isFile ? 1 : 0); i++) {
      const part = parts[i];
      if (!cur.dirs.has(part)) cur.dirs.set(part, makeNode(part));
      cur = cur.dirs.get(part);
    }
    if (isFile) cur.files.push(parts[parts.length - 1]);
  };

  const root = makeNode(rootLabel);
  for (const d of dirs) if (d) insert(root, d.split("/"), false);
  for (const f of files) if (f) insert(root, f.split("/"), true);

  const lines = [];
  lines.push(`${rootLabel}/`);
  const render = (node, prefix = "") => {
    const dirNames = Array.from(node.dirs.keys()).sort();
    const fileNames = node.files.slice().sort();
    const items = [
      ...dirNames.map((n) => ({ type: "dir", name: n })),
      ...fileNames.map((n) => ({ type: "file", name: n })),
    ];
    items.forEach((item, idx) => {
      const isLast = idx === items.length - 1;
      const branch = isLast ? "└── " : "├── ";
      if (item.type === "dir") {
        lines.push(`${prefix}${branch}${item.name}/`);
        render(node.dirs.get(item.name), prefix + (isLast ? "    " : "│   "));
      } else {
        lines.push(`${prefix}${branch}${item.name}`);
      }
    });
  };
  render(root, "");
  return lines.join(os.EOL);
}

const sha1 = (buf) => crypto.createHash("sha1").update(buf).digest("hex");

async function main() {
  const t0 = Date.now();
  const list = await walk(ROOT);

  // притягиваем .env.local из корня
  const envPath = path.join(ROOT, ".env.local");
  const stEnv = await statSafe(envPath);
  if (
    stEnv?.isFile() &&
    !list.some(
      (e) => e.type === "file" && path.resolve(e.abs) === path.resolve(envPath)
    )
  ) {
    list.push({ type: "file", abs: envPath, rel: ".env.local" });
  }

  await fsp.mkdir(path.dirname(OUT), { recursive: true });

  if (FORMAT === "jsonl") {
    const fd = await fsp.open(OUT, "w");
    try {
      const files = list
        .filter((e) => e.type === "file")
        .sort((a, b) => toPosix(a.rel).localeCompare(toPosix(b.rel)));
      for (const f of files) {
        const buf = await fsp.readFile(f.abs);
        const size = buf.byteLength;
        const isText = isTextFileByName(f.rel) || isLikelyTextBuffer(buf);
        const record = {
          path: toPosix(f.rel),
          size,
          sha1: sha1(buf),
          text_b64: isText ? Buffer.from(buf).toString("base64") : null,
          binary: !isText,
        };
        await fd.writeFile(JSON.stringify(record) + "\n", "utf8");
      }
    } finally {
      await fd.close();
    }
    console.log(`OK ${OUT}`);
    return;
  }

  // md / txt
  const chunks = [];
  chunks.push(`# Project Source Dump`);
  chunks.push(`# Root: ${ROOT}`);
  chunks.push(`# Date: ${new Date().toISOString()}`);
  chunks.push(
    `# Platform: ${os.platform()} ${os.arch()} (node ${process.version})`
  );
  chunks.push("");

  // 1) дерево
  chunks.push(`===================== 1) FILE STRUCTURE =====================`);
  const treeText = buildAsciiTree(list);
  if (FORMAT === "md") {
    chunks.push("```text");
    chunks.push(treeText);
    chunks.push("```");
  } else {
    chunks.push(treeText);
  }
  chunks.push("");

  // 2) файлы
  chunks.push(`===================== 2) FILES (PATH + CONTENT) =============`);
  chunks.push(`# NOTE: excluded dirs: ${[...EXCLUDED_DIRS].join(", ")}`);
  chunks.push(`# NOTE: .env.local is included if present`);
  chunks.push("");

  let filesCount = 0,
    truncated = 0,
    skippedBinary = 0;
  const files = list
    .filter((e) => e.type === "file")
    .sort((a, b) => toPosix(a.rel).localeCompare(toPosix(b.rel)));

  for (const f of files) {
    const rel = toPosix(f.rel);
    const buf = await fsp.readFile(f.abs);
    const size = buf.byteLength;
    const isText = isTextFileByName(rel) || isLikelyTextBuffer(buf);
    const hash = sha1(buf);

    if (FORMAT === "md") {
      chunks.push(`### FILE: ${rel}`);
      chunks.push(`- size: ${size} bytes`);
      chunks.push(`- sha1: \`${hash}\``);
    } else {
      chunks.push(`--- FILE: ${rel} (${size} bytes, sha1 ${hash}) ---`);
    }

    if (!isText) {
      chunks.push(
        FORMAT === "md"
          ? "_binary or non-text file skipped_"
          : "(binary or non-text file skipped)"
      );
      if (FORMAT !== "md") chunks.push(`--- END FILE: ${rel} ---`);
      chunks.push("");
      skippedBinary++;
      filesCount++;
      continue;
    }

    let text = buf.toString("utf8");
    let wasTrunc = false;
    if (buf.byteLength > LIMIT) {
      text = buf.subarray(0, LIMIT).toString("utf8");
      wasTrunc = true;
      truncated++;
    }

    if (FORMAT === "md") {
      const lang = fenceLang(rel);
      chunks.push("```" + lang);
      chunks.push(text.endsWith("\n") ? text : text + "\n");
      chunks.push("```");
      if (wasTrunc) chunks.push(`> [TRUNCATED at ${LIMIT} bytes of ${size}]`);
    } else {
      chunks.push(text.endsWith("\n") ? text : text + "\n");
      if (wasTrunc)
        chunks.push(`--- [TRUNCATED at ${LIMIT} bytes of ${size}] ---`);
      chunks.push(`--- END FILE: ${rel} ---`);
    }

    chunks.push("");
    filesCount++;
  }

  chunks.push(`===================== SUMMARY =====================`);
  chunks.push(`Files listed: ${filesCount}`);
  chunks.push(
    `Truncated (>${Math.round(LIMIT / (1024 * 1024))} MB): ${truncated}`
  );
  chunks.push(`Skipped as binary: ${skippedBinary}`);
  chunks.push(`Time: ${Date.now() - t0} ms`);
  chunks.push("");

  await fsp.writeFile(OUT, chunks.join(os.EOL), "utf8");
  console.log(`OK ${OUT}`);
}

main().catch((e) => {
  console.error("[ERROR]", e?.stack || e?.message || e);
  process.exit(1);
});
