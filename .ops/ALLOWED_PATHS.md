# Allowed Output Paths (SoT Emission)

LLMs must only create/overwrite the following files:

- .dev/.ops/ARCHITECTURE.md
- .dev/.ops/FILE_TREE.md
- .dev/.ops/DECISIONS.md
- .dev/.ops/BUILD_NOTES.md
- .dev/.ops/CHANGELOG.md
- .dev/.ops/BACKLOG.md
- .dev/.ops/routerPolicy.json
- .dev/.ops/prompts/architect.md
- .dev/.ops/prompts/implementer.md
- .dev/.ops/prompts/reviewer.md
- .dev/.ops/prompts/qa.md
- .dev/.ops/prompts/designer.md
- .dev/.ops/prompts/PROMPTS_INDEX.json
- .dev/.ops/jobs/AGENT_JOBS_2025-10-01.jsonl
- .dev/.ops/README.md
- .dev/.ops/GOVERNANCE.md
- .dev/.ops/LICENSE.md
- .dev/.ops/TRADEMARKS.md
- .dev/.ops/SNIPPETS_GUIDE.md
- .dev/.vscode/sonnet.code-snippets
- .dev/.vscode/keybindings.json
- .dev/.ops/APPLY_IN_EDITOR_FORMAT.md
- SONNET_ONE_SHOT.md

Any other path MUST be refused.
