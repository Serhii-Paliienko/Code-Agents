# Jobs Usage (JSONL)

## What is this

Each line in `.dev/.ops/jobs/AGENT_JOBS_*.jsonl` is a single job object for an agent (Architect, Implementer, Reviewer, QA).

## Manual run

1. Open the file and copy exactly one JSON line.
2. Paste it to the target model with a short SYSTEM preface:

SYSTEM:
Operate IN THE CURRENT WORKSPACE. Use per-file envelopes (BEGIN_FILE/END_FILE). Respect aliases from tsconfig\*.json. Preserve export shapes. Reuse-first.

USER:
<paste one JSON line here>

Return FULL FILES via envelopes; update .dev/.ops/\* if structure changes.

## Notes

- Keep JSON lines one per job; no trailing commas; UTF-8 LF.
- Archive old packs under `.dev/.ops/jobs/archive/`.
