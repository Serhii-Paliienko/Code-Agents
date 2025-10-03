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

## 2025-10-03: Catalog UL/LI + Fonts + Query v5 Implementation

### ✅ Completed Features

#### 🔤 Font System

- **Self-hosted Manrope fonts** (.woff2 format)
- **Preload strategy** in index.html for critical font weights (400, 500, 600, 700)
- **font-display: swap** for optimal loading performance
- **Robust fallback stack** via CSS custom properties

#### 🎯 TanStack Query v5 Contracts

- **Query keys**: `['cars', filters, pageOrLimit]`, `['car', id]`, `['brands']`
- **Strict defaults**: staleTime≈60s, gc≈10m, refetchOn\*=false, retry=1
- **Strict price filtering**: Post-response filtering to match exact rentalPrice
- **Deduplication**: Filter duplicate cars by ID in select function
- **Auto-load to limit**: Default cap=200, configurable per query
- **Placeholder data**: From cache for instant UI updates

#### 🎨 Semantic HTML & Accessibility

- **UL/LI semantics** for car listings with `role="list"`
- **aria-busy** indicators during loading states
- **Visible focus** styling with outline and offset
- **Screen reader** friendly labels and descriptions
- **Proper heading hierarchy** and landmark roles

#### ⚡ Lazy CSS Loading

- **Route-level CSS modules** for each page component
- **Lazy component imports** with React.lazy()
- **Suspense boundaries** with proper fallbacks
- **CSS-in-CSS approach** (no runtime CSS-in-JS)

#### 🔍 SEO Implementation

- **Custom `<Seo/>` component** (React 19 friendly, no Helmet)
- **Dynamic meta tags** via useEffect DOM manipulation
- **Open Graph tags** for social sharing
- **Canonical URLs** for proper indexing
- **Structured content** with semantic HTML

### 🔧 Technical Implementation

#### API Layer

```typescript
// Centralized query keys
queryKeys.cars(filters, pageOrLimit);
queryKeys.car(id);
queryKeys.brands();

// Strict price filtering
if (filters.rentalPrice) {
  filteredCars = cars.filter((car) => car.rentalPrice === filters.rentalPrice);
}
```

---

> 🎯 **Quality Gate:** All items above must be implemented and verified before release
