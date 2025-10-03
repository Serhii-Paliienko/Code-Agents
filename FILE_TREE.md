# 📁 File Tree (Source of Truth)

> **Update after each iteration.** Use **LF**, no spaces in names.

```
📦 .dev/
├── 📂 .ops/
│   ├── 📂 _dumps/                     # 📜 history of dumps (large *.jsonl via LFS)
│   ├── 📂 repo_dumps/                 # 🔗 3rd-party/own reference dumps
│   ├── 📂 gpt_prompts/                # 💭 prompt archive/variants
│   ├── 📂 origin/                     # 📋 original PRD/backend docs (no secrets)
│   ├── 📂 research/                   # 🔬 Deep Research (1 topic = 1 file)
│   ├── 📂 jobs/
│   │   └── 📄 AGENT_JOBS_YYYY-MM-DD.jsonl
│   ├── 📂 prompts/
│   │   ├── 🛠️ implementer.md          # GUIDE_ID + VERSION in header
│   │   ├── 🏗️ architect.md
│   │   ├── 👀 reviewer.md
│   │   ├── 🧪 qa.md
│   │   ├── 🎨 designer.md
│   │   └── 📊 PROMPTS_INDEX.json      # semver + sha (sha filled by script)
│   ├── 🏛️ ARCHITECTURE.md
│   ├── 📁 FILE_TREE.md
│   ├── 💡 DECISIONS.md
│   ├── 🔧 BUILD_NOTES.md
│   ├── 📝 CHANGELOG.md
│   ├── 📋 BACKLOG.md
│   ├── 🛣️ routerPolicy.json
│   ├── ⚖️ LICENSE.md
│   ├── ™️ TRADEMARKS.md
│   ├── 📖 README.md
│   ├── 🏛️ GOVERNANCE.md
│   └── ✏️ APPLY_IN_EDITOR_FORMAT.md
└── 📂 .vscode/                        # 🔧 editor helpers live under .dev/.vscode
    ├── 🧩 sonnet.code-snippets
    └── ⌨️ keybindings.json
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
🏛️ ARCHITECTURE.md     ← Core system design
├── 📁 FILE_TREE.md     ← You are here!
├── 💡 DECISIONS.md     ← ADRs & rationale
├── 🔧 BUILD_NOTES.md   ← Implementation notes
├── 📝 CHANGELOG.md     ← Version history
└── 📋 BACKLOG.md       ← Future work
```

---

_Last updated: 2025-_
