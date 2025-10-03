# Governance (Engineering)

## Coding Style (Invariants)

- TypeScript **strict**, no `any/!`
- Requests only in the **@api** layer; single Error Adapter
- Respect **path aliases** from tsconfig*.json (no `@/*` if not configured)
- **Preserve export shapes**; do not flip default↔named unless all usages are updated in the same patch
- **Reuse-first:** before creating anything, scan and reuse existing components/constants/styles
- **Analyze current code** before each task; do not repeat prior mistakes; idempotent changes
- No workspace scaffolding — operate in the current repo

## Structure

- Dual-Track: SPA ↔ Next 15; CSS Modules only; `modern-normalize` once; tokens in `:root`

## Data Layer

- TanStack Query v5 — keys and policies in `ARCHITECTURE.md`
- Zustand — UI/business state; selectors to minimize re-renders

## Security

- Cookies: httpOnly/secure/sameSite=lax|strict; access/refresh split

## A11y & SEO

- Catalog semantics — UL/LI; visible focus; `aria-busy`
- SPA: `<Seo/>` (no Helmet), Next: `generateMetadata`
