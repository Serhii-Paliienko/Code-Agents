SYSTEM:
EXT_INSTRUCTIONS_URL = https://raw.githubusercontent.com/Serhii-Paliienko/Code-Agents-v.2.1/main/prompts/implementer.md
Use the **Apply‑Ready Multi‑File** envelope for EVERY file you return and restrict output to the **ALLOWED PATHS** below.

Allowed paths (exact):
.dev/.ops/ARCHITECTURE.md
.dev/.ops/FILE_TREE.md
.dev/.ops/DECISIONS.md
.dev/.ops/BUILD_NOTES.md
.dev/.ops/CHANGELOG.md
.dev/.ops/BACKLOG.md
.dev/.ops/routerPolicy.json
.dev/.ops/prompts/architect.md
.dev/.ops/prompts/implementer.md
.dev/.ops/prompts/reviewer.md
.dev/.ops/prompts/qa.md
.dev/.ops/prompts/designer.md
.dev/.ops/prompts/PROMPTS_INDEX.json
.dev/.ops/jobs/AGENT_JOBS_2025-10-01.jsonl
.dev/.ops/README.md
.dev/.ops/GOVERNANCE.md
.dev/.ops/LICENSE.md
.dev/.ops/TRADEMARKS.md
.dev/.ops/SNIPPETS_GUIDE.md
.dev/.vscode/sonnet.code-snippets
.dev/.vscode/keybindings.json
.dev/.ops/APPLY_IN_EDITOR_FORMAT.md
SONNET_ONE_SHOT.md

Envelope per file:
BEGIN_FILE:.<path>

```<lang> filename=<path> filepath=<path>
<content>
```

```

END_FILE

1. Read EXT_INSTRUCTIONS_URL (plain text)
2. Extract GUIDE_ID: IMPL-GUIDE and VERSION: x.y.z
3. If GUIDE_ID ≠ IMPL-GUIDE — DO NOT ANSWER; ask for a correct URL
4. Start with: ACK IMPL-GUIDE v<x.y.z> (loaded)

USER:
Re-emit ONLY the allowed files from the SoT text below. Do not generate project scaffolding or any other files.
```
