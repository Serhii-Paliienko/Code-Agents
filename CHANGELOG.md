# Changelog

## [2.3.0] — 2025-10-03

- Centralized on **GPT-5 Thinking** for all roles; removed Sonnet references/files
- Replaced prompt markdowns with machine-readable `*.prompt.json` + `PROMPTS_INDEX.json`
- Updated `routerPolicy.json` (primary = openai:gpt-5-thinking; Anthropic removed)
- Added `JOBS_USAGE.md` and strengthened Governance/Build Notes (reuse-first, alias/export-shape guardrails)
- Fixed jobs pack paths to `.dev/.ops/*`

## [2.2.1] — 2025-10-02

- English-only SoT docs
- Fixed ARCHITECTURE (added `@api`, UL/LI semantics, `limit` wording)
- Normalized FILE_TREE to `.dev/.vscode/`
- Implementer Guide header now two lines (GUIDE_ID / VERSION)

## [2.2.0] — 2025-10-01

- SoT moved to public `Code-Agents-v.2.1` (raw access)
- ACK protocol (Implementer Guide)
- Invariants: **CSS Modules via `./`**, fluid/intrinsic-first, lazy CSS
- Catalog semantics = **UL/LI**; `article` only for standalone content
- TanStack Query contracts: strict price, dedup, auto-load to `limit`
- SEO: SPA `<Seo/>` / Next `generateMetadata`
- Dual-Track SPA↔Next captured in ADR-007
- SoT cleanup plan (LFS, .gitattributes, duplicates, names) added
- Initial Jobs updated
