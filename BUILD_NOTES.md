# 🔧 Build Notes & Development Setup

## 📄 Git Configuration

### Line Endings & Binary Files

Create `.gitattributes` to enforce consistent line endings:

```gitattributes
* text=auto eol=lf
*.png binary
*.jpg binary
*.zip binary
*.woff2 binary
```

### 📦 Git LFS Setup

```bash
# Initialize Git LFS
git lfs install

# Track large JSON log files
git lfs track "*.jsonl"

# Commit configuration
git add .gitattributes
git commit -m "chore: normalize endings + LFS for dumps"
```

## 🔤 Typography & Fonts

- **Format:** Self‑host `.woff2` files only
- **Performance:** `preload` critical fonts
- **Display:** `font-display: swap` for better UX
- **Fallbacks:** Robust fallback stack for each font family

## 🎨 CSS Architecture

- **Modules Only:** Use CSS Modules exclusively
- **Import Style:** Relative imports only (`./styles.module.css`)
- **Code Splitting:** Lazy CSS loading via route/feature-level splitting
- **Global Styles:** Only `modern-normalize` and CSS custom properties

## 🏗️ HTML Semantics & Accessibility

- **Catalog Structure:** `ul[role="list"] > li` for all listings
- **Loading States:** `aria-busy` attribute during background operations
- **Focus Management:** Ensure visible focus indicators throughout
- **Screen Readers:** Proper ARIA labels and live regions

## ⚡ React Query v5 Requirements

- **Query Keys:** Strictly follow defined patterns
- **Deduplication:** Implement by unique `id` field
- **Price Filtering:** Strict equality matching post-response
- **Auto-loading:** Implement load-to-limit with active filters
- **Testing:** All contracts must be covered by tests

## 🧹 Repository Hygiene

- **Naming:** No spaces or Cyrillic characters in file paths
- **URL Compatibility:** All paths must be raw-URL friendly
- **Archive Management:** Move old jobs to `jobs/archive/` directory
- **Documentation:** Keep all `.dev/.ops/` files synchronized

---

# Build Notes

## Endings & Attributes

Add `.gitattributes` to enforce LF and mark binaries:

```
* text=auto eol=lf
*.png binary
*.jpg binary
*.zip binary
*.woff2 binary
```

## Git LFS

```bash
git lfs install
git lfs track "*.jsonl"
git add .gitattributes
git commit -m "chore: normalize endings + LFS for dumps"
```

## Fonts

- Self-host `.woff2` + `preload` + `font-display: swap` + robust fallback stack.

## CSS

- **CSS Modules only**; import styles **relatively** (`./*.module.css`)
- Lazy CSS via code-splitting by routes/features

## Semantics & A11y

- Catalogs = `ul[role="list"] > li`; use `aria-busy` during background loads; ensure visible focus

## TanStack Query v5

- Keys / dedup / strict price / auto-load-to-limit must be implemented and covered by tests

## Repo Hygiene

- No spaces/cyrillic in paths; raw-URL friendly; move old jobs to `jobs/archive/`

## Code Hygiene — Reuse-first & Cleanup

- Before adding any constant/component/style: scan codebase and reuse existing
- Remove dead exports / files created by mistake; align default vs named exports
- **CSS Modules housekeeping:** remove unused selectors; ensure JSX `className` has matching selector; prefer tokens `var(--*)`

---

## Current Implementation Status

### ✅ Completed

- React 18 + TypeScript strict setup
- Vite build configuration
- React Router v6 with lazy loading
- CSS Modules with design tokens
- Zustand store for favorites
- Basic API layer with Axios
- Component library (Button, Input, Select, Textarea)

### 🔄 In Progress

- TanStack Query v5 migration (currently using basic React Query)
- Proper semantic markup for catalog (`ul > li`)
- Error boundaries implementation

### ⚠️ Needs Attention

- **Query keys standardization**: Align with `['cars', filters, pageOrLimit]` pattern
- **Strict price filtering**: Implement backend response validation
- **Accessibility**: Add `aria-busy`, proper focus management
- **CSS cleanup**: Remove unused selectors, ensure all classes have matching JSX
- **Font optimization**: Self-host fonts with proper preloading

### 🚨 Breaking Changes Required

- Replace React Query with TanStack Query v5
- Update catalog semantics to use `ul[role="list"] > li`
- Implement custom `<Seo/>` component (remove any Helmet dependencies)
- Standardize error handling through single Error Adapter

---

\_Last updated:
