# Jobs Usage (JSONL)

## What is this

Each line in `.dev/.ops/jobs/AGENT_JOBS_*.jsonl` is a single job object for an agent (Architect, Implementer, Reviewer, QA).

## Manual run (GPT-5 Thinking)

1. Open the JSONL file and copy exactly one job line.
2. Paste it to your GPT-5 Thinking chat with a short SYSTEM preface:

SYSTEM:
Work IN THE CURRENT WORKSPACE. Use per-file envelopes (BEGIN_FILE/END_FILE). Respect aliases from tsconfig\*.json. Preserve export shapes. Reuse-first. English-only in code/docs.

USER:
<paste one JSON line here>

Return FULL FILES via envelopes; update .dev/.ops/\* if structure changes.

## Notes

- Keep JSON lines one per job; no trailing commas; UTF-8 LF.
- Archive old packs under `.dev/.ops/jobs/archive/`.
