# Changelog

## [2.2.3] — 2025-10-03

- Prompts converted to machine-readable JSON: \*.prompt.json (no visual formatting)
- Implementer Guide bumped to **1.0.3** (reuse-first, preflight, no-scaffold, alias/export guardrails)
- Added JOBS_USAGE.md (how to run JSONL jobs)
- ADR-021/022 finalized (guardrails + reuse-first/style housekeeping)
- Jobs pack paths/constraints aligned to .ops and envelopes

## [2.2.1] — 2025-10-02

- English-only SoT docs
- Fixed ARCHITECTURE (added `@api`, UL/LI semantics, `limit` wording)
- Normalized FILE_TREE to `.dev/.vscode/`
- Implementer Guide header now two lines (GUIDE_ID / VERSION)

## [2.2.0] — 2025-10-01

- SoT moved to public `Code-Agents-v.2.1` (raw access)
- Sonnet ACK protocol (Implementer Guide via raw URL)
- Invariants: **CSS Modules via `./`**, fluid/intrinsic-first, lazy CSS
- Catalog semantics = **UL/LI**; `article` only for standalone content
- TanStack Query contracts: strict price, dedup, auto-load to `limit`
- SEO: SPA `<Seo/>` / Next `generateMetadata`
- Dual-Track SPA↔Next captured in ADR-007
- SoT cleanup plan (LFS, .gitattributes, duplicates, names) added
- Initial Jobs updated
