# File Tree (SoT)

Update after each iteration. Use **LF**, no spaces in names.

```
.dev/
├── .ops/
│   ├── _dumps/                    # history of dumps (large *.jsonl via LFS)
│   ├── repo_dumps/               # 3rd-party/own reference dumps
│   ├── gpt_prompts/              # prompt archive/variants
│   ├── origin/                   # original PRD/backend docs (no secrets)
│   ├── research/                 # Deep Research (1 topic = 1 file)
│   ├── jobs/
│   │   └── AGENT_JOBS_YYYY-MM-DD.jsonl
│   ├── prompts/
│   │   ├── implementer.md        # GUIDE_ID + VERSION in header
│   │   ├── architect.md
│   │   ├── reviewer.md
│   │   ├── qa.md
│   │   ├── designer.md
│   │   └── PROMPTS_INDEX.json    # semver + sha (sha filled by script)
│   ├── ARCHITECTURE.md
│   ├── FILE_TREE.md
│   ├── DECISIONS.md
│   ├── BUILD_NOTES.md
│   ├── CHANGELOG.md
│   ├── BACKLOG.md
│   ├── routerPolicy.json
│   ├── LICENSE.md
│   ├── TRADEMARKS.md
│   ├── README.md
│   ├── GOVERNANCE.md
│   └── APPLY_IN_EDITOR_FORMAT.md
└── .vscode/                      # editor helpers live under .dev/.vscode
    ├── sonnet.code-snippets
    └── keybindings.json
```

(Project folders for SPA/Next live in their repos; routes: `/`, `/catalog`, `/catalog/:id`, `404`.)
