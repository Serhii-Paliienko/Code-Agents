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

> 🎯 **Quality Gate:** All items above must be implemented and verified before release
