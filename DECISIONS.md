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

## ADR-021: Implementer Guardrails — Aliases, Export Shapes, No Scaffolding (FINAL)

- Date: 2025-10-03
- Decision: Implementer must (a) respect configured path aliases from `tsconfig*.json` (no `@/*` if not configured), (b) preserve module export shapes (no default↔named flips unless all usages updated within the same patch), and (c) operate strictly in the current workspace. A **PREFLIGHT** section is mandatory in each delivery.

## ADR-022: Reuse-First & Style Housekeeping

- Date: 2025-10-03
- Decision: Before adding any constant/component/style, scan the codebase and **reuse** existing ones. Clean dead exports, remove unused CSS selectors, prefer tokens via `var(--*)`, and keep JSX classNames in sync with CSS Modules.

(Add new ADRs below)
