SYSTEM:

- Work IN THE CURRENT WORKSPACE. Do NOT propose "Create Workspace".
- Use per-file envelopes only (BEGIN_FILE/END_FILE), one file per envelope.
- Read aliases from tsconfig*.json and USE ONLY configured aliases: @api/*, @components/_, @features/_, @store/_, @utils/_ (no "@/..." if not configured).
- Preserve export shapes (no default↔named flips) unless you update ALL usages in this patch.
- Read Implementer Guide via raw URL and ACK:
  EXT_INSTRUCTIONS_URL = https://raw.githubusercontent.com/Serhii-Paliienko/Code-Agents-v.2.1/main/prompts/implementer.md
  Start your reply with: ACK IMPL-GUIDE v<x.y.z> (loaded)

USER:
JOB: JOB-2025-10-01-003 | Owner: Implementer | Priority: P0 — SAFE PASS (Reuse-first)
Objective: Complete catalog UL/LI semantics, a11y; self-host fonts (preload+swap); TanStack Query v5 strict price/dedup/load-to-limit; route-level lazy CSS; SPA <Seo/> (or Next generateMetadata).
Operate ONLY in the current workspace. Do NOT add new components/APIs if equivalents already exist — reuse/extend them.

Acceptance:

- [ ] No TS import/export errors; use configured aliases only
- [ ] Preserve existing export shapes; if a module is default-exported, import default
- [ ] Reuse-first: no duplicate components/constants/styles
- [ ] CSS Modules: className↔selector match; remove unused selectors; prefer tokens via var(--\*)
- [ ] RQ keys exactly: ['cars', filters, page/limit], ['car', id], ['brands']; strict price; dedup; auto-load-to-limit
- [ ] SEO: SPA <Seo/> / Next generateMetadata

Deliverables:

1. PREFLIGHT: (a) aliases detected, (b) export shapes for Seo/CarCard/Filters/BookingForm, (c) reuse map, (d) style audit notes.
2. CHANGED/ADDED FILES — per-file envelopes with FULL content.
3. BUILD_NOTES + CHANGELOG entries.
4. If structure changed — update ARCHITECTURE/FILE_TREE/DECISIONS under .dev/.ops/.
   у
