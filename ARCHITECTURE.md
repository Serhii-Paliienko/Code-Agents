# Architecture — Dual-Track (SPA Baseline ↔ Next 15 Delta)

> One canonical architecture for SPA (Vite) and Next 15 with strict TanStack Query v5 contracts, semantics, styles, and SEO.

## Stack

- React 18/19, TypeScript **strict** (no `any`)
- SPA: Vite + React Router; Next: **Next 15 App Router**
- Data: **TanStack Query v5**, Zustand (UI/business state)
- Styles: **CSS Modules only**; single global `modern-normalize`; tokens in `:root` via `tokens.css`; themes via `[data-theme]`
- API: REST over HTTPS; **all requests only from `@api` layer**; single Error Adapter
- Fonts: self-host `.woff2`, `preload`, `font-display: swap`, robust fallback stack

## Routes (SPA baseline)

- `/` (Home)
- `/catalog` (listing) — semantics **`ul[role="list"] > li`**
- `/catalog/:id` (details) — use `article` **only** for standalone content
- 404 catch-all

### SEO (SPA)

- Custom `<Seo/>` (no Helmet; React 19 friendly)

## TanStack Query v5 — Hard Contracts

- Keys:
  - `['cars', filters, pageOrLimit]`
  - `['car', id]` (enabled: `!!id`)
  - `['brands']`
- Defaults: `staleTime≈60s`, `gc≈10m`, `refetchOn* = false`, `retry=1`
- `placeholderData`: from cache; default **cap=200**; `instant` and `cap` via query/settings
- Pagination: with active filters, **auto-load up to `limit`/exhaustion**
- Dedup: by `id`
- **Strict price**: after backend response, keep **only** items with `rentalPrice === requested`

## State

- Zustand + `persist` (`key: rental:favs`) for favorites; use selectors to minimize re-renders

## Data Fetching & Errors

- All calls live in `@api` (separate client/server wrappers in Next)
- Error Adapter: normalize errors; UI shows friendly messages (no stack)
- Use `aria-busy` during background loads

## Accessibility

- Visible focus, proper aria; listing semantics — `ul > li`

---

## Next 15 — Migration Delta

- SSR prefetch + `HydrationBoundary`
- `params | searchParams: Promise<...>`
- Parallel segments + `default.tsx`
- `not-found.tsx` / `error.tsx`
- Use `generateMetadata` (do not use `next/head` in components)
- `next/image` with `remotePatterns`

### SEO (Next)

- Implement `generateMetadata` on pages

## Security

- Cookies: `httpOnly`, `secure`, `sameSite=lax|strict`; access/refresh split

## File Tree Reference

See `.dev/.ops/FILE_TREE.md`.
