# 🏛️ Architecture — Dual-Track (SPA Baseline ↔ Next 15 Delta)

> **One canonical architecture** for SPA (Vite) and Next 15 with strict TanStack Query v5 contracts, semantics, styles, and SEO.

---

## 🚀 Stack

| Layer        | Technology                                                                                                            | Notes             |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ----------------- |
| **Frontend** | React 18/19, TypeScript **strict** (no `any`)                                                                         | 🚫 Zero any types |
| **Routing**  | SPA: Vite + React Router; Next: **Next 15 App Router**                                                                | 🔄 Dual approach  |
| **Data**     | **TanStack Query v5**, Zustand (UI/business state)                                                                    | 🎯 Query-first    |
| **Styles**   | **CSS Modules only**; single global `modern-normalize`; tokens in `:root` via `tokens.css`; themes via `[data-theme]` | 🎨 Modular CSS    |
| **API**      | REST over HTTPS; **all requests only from `@api` layer**; single Error Adapter                                        | 🔒 Centralized    |
| **Fonts**    | self-host `.woff2`, `preload`, `font-display: swap`, robust fallback stack                                            | ⚡ Performance    |

---

## 🛣️ Routes (SPA baseline)

```
📁 Application Structure
├── 🏠 `/` (Home)
├── 📋 `/catalog` (listing) — semantics **`ul[role="list"] > li`**
├── 🔍 `/catalog/:id` (details) — use `article` **only** for standalone content
└── ❌ 404 catch-all
```

### 🔍 SEO (SPA)

- Custom `<Seo/>` (no Helmet; React 19 friendly)

---

## 🎯 TanStack Query v5 — Hard Contracts

### 🔑 Query Keys

```typescript
// Standardized key patterns
["cars", filters, pageOrLimit][("car", id)]["brands"]; // 📋 Car listings // 🚗 Single car (enabled: !!id) // 🏷️ Available brands
```

### ⚙️ Defaults

| Setting      | Value | Reason               |
| ------------ | ----- | -------------------- |
| `staleTime`  | ≈60s  | 🕐 Reasonable cache  |
| `gc`         | ≈10m  | 🗑️ Memory management |
| `refetchOn*` | false | 🚫 Explicit control  |
| `retry`      | 1     | ⚡ Fast failure      |

### 📊 Data Management

- **`placeholderData`**: from cache; default **cap=200**; `instant` and `cap` via query/settings
- **Pagination**: with active filters, **auto-load up to `limit`/exhaustion**
- **Dedup**: by `id`
- **🎯 Strict price**: after backend response, keep **only** items with `rentalPrice === requested`

---

## 🏪 State

```typescript
// Zustand + persist for favorites
{
  key: 'rental:favs',
  selectors: true  // minimize re-renders
}
```

---

## 📡 Data Fetching & Errors

### 🔧 API Layer

- All calls live in `@api` (separate client/server wrappers in Next)
- Error Adapter: normalize errors; UI shows friendly messages (no stack)
- Use `aria-busy` during background loads

### 🎨 Loading States

```typescript
// Accessible loading indicators
<div aria-busy={isLoading}>{/* content */}</div>
```

---

## ♿ Accessibility

- ✅ Visible focus indicators
- ✅ Proper ARIA attributes
- ✅ Listing semantics — `ul > li`
- ✅ Screen reader friendly

---

## ⚡ Next 15 — Migration Delta

### 🔄 Server-Side Features

- **SSR prefetch** + `HydrationBoundary`
- **`params | searchParams: Promise<...>`**
- **Parallel segments** + `default.tsx`
- **`not-found.tsx` / `error.tsx`**
- **`generateMetadata`** (no `next/head` in components)
- **`next/image`** with `remotePatterns`

### 🔍 SEO (Next)

- Use `generateMetadata` on pages

---

## 🔒 Security

### 🍪 Cookie Strategy

```typescript
// Secure cookie configuration
{
  httpOnly: true,
  secure: true,
  sameSite: 'lax|strict',
  // Split access/refresh tokens
}
```

---

## 📚 References

> 📁 **File Tree Reference**  
> See [`.dev/.ops/FILE_TREE.md`](.dev/.ops/FILE_TREE.md)

---

## 🎯 Key Principles

| Principle           | Implementation                   |
| ------------------- | -------------------------------- |
| **Type Safety**     | TypeScript strict, no `any`      |
| **Performance**     | Query caching, font optimization |
| **Accessibility**   | ARIA, semantic HTML              |
| **Maintainability** | Modular CSS, centralized API     |
| **SEO**             | Custom components, metadata      |

---

_🚀 Built for scale, optimized for developer experience_
