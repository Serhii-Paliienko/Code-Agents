# 📁 File Tree (Source of Truth)

> **Update after each iteration.** Use **LF**, no spaces in names.

```
📦 .dev/
├── 📂 _dumps/                     # 📜 history of dumps (large *.jsonl via LFS)
├── 📂 repo_dumps/                 # 🔗 3rd-party/own reference dumps
├── 📂 gpt_prompts/                # 💭 prompt archive/variants
├── 📂 origin/                     # 📋 original PRD/backend docs (no secrets)
├── 📂 research/                   # 🔬 Deep Research (1 topic = 1 file)
├── 📂 .vscode/                    # 🔧 editor helpers
│   ├── 🧩 gpt.code-snippets
│   └── ⌨️ keybindings.json
└── 📂 .ops/
    ├── 📂 jobs/
    │   ├── 📄 AGENT_JOBS_YYYY-MM-DD.jsonl
    │   └── 📂 archive/
    ├── 📂 prompts/
    │   ├── 🏗️ architect.prompt.json
    │   ├── 🛠️ implementer.prompt.json
    │   ├── 👀 reviewer.prompt.json
    │   ├── 🧪 qa.prompt.json
    │   ├── 🎨 designer.prompt.json
    │   └── 📊 PROMPTS_INDEX.json      # semver + sha
    ├── 🏛️ ARCHITECTURE.md
    ├── 📁 FILE_TREE.md
    ├── 💡 DECISIONS.md
    ├── 🔧 BUILD_NOTES.md
    ├── 📝 CHANGELOG.md
    ├── 📋 BACKLOG.md
    ├── 🛣️ routerPolicy.json
    ├── ⚖️ LICENSE.md
    ├── ™️ TRADEMARKS.md
    ├── 📖 README.md
    ├── 🏛️ GOVERNANCE.md
    ├── ✏️ APPLY_IN_EDITOR_FORMAT.md
    └── 📋 JOBS_USAGE.md
```

---

## 🚀 Project Structure Overview

**Routes:** `/` → `/catalog` → `/catalog/:id` → `404`

> 📌 **Note:** Project folders for SPA/Next live in their respective repositories.

### 🎯 Key Sections

| Section        | Purpose                   | Icon |
| -------------- | ------------------------- | ---- |
| **`.ops/`**    | Operations & Architecture | 🏗️   |
| **`_dumps/`**  | Historical Data           | 📜   |
| **`prompts/`** | AI Agent Instructions     | 🤖   |
| **`.vscode/`** | Development Tools         | 🛠️   |

### 📋 Documentation Hierarchy

```
🏛️ ARCHITECTURE.md     ← Core system design (Dual-Track SPA ↔ Next 15)
├── 📁 FILE_TREE.md     ← You are here!
├── 💡 DECISIONS.md     ← ADRs & rationale
├── 🔧 BUILD_NOTES.md   ← Implementation notes
├── 📝 CHANGELOG.md     ← Version history
└── 📋 BACKLOG.md       ← Future work
```

### 🏗️ Architecture Notes

- **Dual-Track**: SPA (Vite) baseline + Next 15 migration delta
- **TanStack Query v5**: Strict contracts, keys, defaults
- **CSS Modules only**: tokens.css + [data-theme] theming
- **TypeScript strict**: No `any` allowed
- **SEO**: Custom `<Seo/>` (SPA) → `generateMetadata` (Next)

---

\_Last updated: 2025-
