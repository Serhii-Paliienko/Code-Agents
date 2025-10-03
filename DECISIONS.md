# ADR — Architecture Decision Records

## ADR-000: Initialization

- Date: 2025-09-24
- Decision: Adopt `.dev/.ops` SoT structure.

## ADR-007: Dual-Track SPA ↔ Next 15

- Date: 2025-10-01
- Decision: Maintain **SPA Baseline** and **Next 15 Migration Delta** in `ARCHITECTURE.md`. Implementer must provide baseline + migration diff for changes affecting SSR/routing/metadata.

## ADR-SEO-SPA-NO-HELMET

- Date: 2025-10-01
- Decision: SPA uses custom **`<Seo/>`** (no Helmet); Next uses `generateMetadata`.

## ADR-019: Git LFS & Line Endings

- Date: 2025-10-01
- Decision: Normalize to LF; large `*.jsonl` via LFS.

## ADR-020: RouterPolicy

- Date: 2025-10-01
- Decision: Approve `routerPolicy.json` for engine selection and quality gates.

## ADR-023: Centralize on GPT-5 Thinking; remove Sonnet

- Date: 2025-10-03
- Decision: All agent roles run on **openai:gpt-5-thinking** as primary. Remove Anthropic Sonnet references, files, and raw-URL ACK dependency. Prompts live as machine-readable `*.prompt.json`. ACK line kept but local.

(Add new ADRs below)
