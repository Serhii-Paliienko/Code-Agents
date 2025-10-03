# 📏 Engineering Governance

## 🎯 Code Quality Standards (Invariants)

### 🔧 **TypeScript Requirements**

- **Strict Mode:** `"strict": true` in `tsconfig.json`
- **No Any Types:** Prohibited `any` or `!` type assertions
- **Explicit Types:** All function parameters and returns typed
- **Interface Design:** Prefer interfaces over type aliases for objects

### 🌐 **API Architecture**

- **Centralized Requests:** All HTTP calls through `@api` directory only
- **Error Handling:** Single Error Adapter for consistent error normalization
- **Type Safety:** All API responses properly typed
- **Authentication:** Secure token management and refresh flows

## 🏗️ **Architectural Structure**

### 🔄 **Dual-Track Strategy**

- **SPA Baseline:** Core functionality using Vite + React Router
- **Next 15 Delta:** Incremental migration path with SSR benefits
- **Shared Contracts:** Consistent data patterns across both tracks
- **Migration Safety:** Zero-downtime transition capabilities

### 🎨 **Styling Standards**

- **CSS Modules Only:** No global CSS except `modern-normalize`
- **Token System:** CSS custom properties in `:root` for theming
- **Theme Support:** `[data-theme]` attribute-based theme switching
- **Performance:** Route-level lazy CSS loading

## 📊 **Data Layer Governance**

### ⚡ **React Query v5 Contracts**

```typescript
// Mandatory query key patterns
["cars", filters, pageOrLimit][("car", id)]["brands"]; // Car listings // Single car (enabled: !!id) // Available brands
```

### 📋 **Data Management Rules**

- **Cache Strategy:** `staleTime ≈ 60s`, `gcTime ≈ 10m`
- **Refetch Policy:** `refetchOn* = false` for performance
- **Retry Logic:** `retry = 1` to avoid excessive requests
- **Placeholder Data:** Cache-based with 200-item cap

### 🎯 **Business Logic Requirements**

- **Strict Price Filtering:** Post-response `rentalPrice === requested`
- **Deduplication:** By unique `id` field across all datasets
- **Auto-loading:** Load to limit with active filter preservation

## 🗄️ **State Management**

### 🎪 **Zustand Store Design**

- **Persistence:** `localStorage` integration for user preferences
- **Selector Pattern:** Minimize re-renders with proper selectors
- **Store Separation:** UI state vs. business state boundaries
- **Type Safety:** Fully typed store interfaces and actions

## 🔒 **Security Standards**

### 🍪 **Cookie Policy**

```typescript
// Required cookie attributes
{
  httpOnly: true,      // Prevent XSS access
  secure: true,        // HTTPS only
  sameSite: 'lax'     // CSRF protection
}
```

### 🔐 **Authentication Strategy**

- **Token Splitting:** Separate access/refresh token handling
- **Secure Storage:** HttpOnly cookies for sensitive data
- **Rotation Policy:** Automatic token refresh implementation
- **Session Management:** Proper logout and session cleanup

## ♿ **Accessibility & SEO Requirements**

### 🎯 **Semantic HTML Standards**

- **Catalog Structure:** `ul[role="list"] > li` for all product listings
- **Focus Management:** Visible focus indicators throughout application
- **ARIA Support:** Proper labeling and live regions
- **Loading States:** `aria-busy` during asynchronous operations

### 🔍 **SEO Implementation**

- **SPA Strategy:** Custom `<Seo/>` component (React 19 compatible)
- **Next Strategy:** `generateMetadata` function per page
- **Meta Management:** Unique titles and descriptions per route
- **Schema Markup:** Structured data for rich snippets

## 📱 **Responsive Design Standards**

### 🎨 **Layout Principles**

- **Mobile First:** Progressive enhancement from mobile base
- **Fluid Design:** CSS `clamp()` for responsive typography
- **Container Queries:** Component-level responsive behavior
- **Touch Targets:** Minimum 44px touch target size

### 🔤 **Typography System**

- **Self-hosted Fonts:** WOFF2 format with performance optimization
- **Loading Strategy:** `preload` + `font-display: swap`
- **Fallback Stack:** Robust system font fallbacks
- **Performance:** Minimal font loading impact

## 🧪 **Testing Standards**

### ✅ **Test Coverage Requirements**

- **Unit Tests:** All utility functions and hooks
- **Integration Tests:** React Query contracts and data flows
- **Component Tests:** User interaction scenarios
- **Accessibility Tests:** Automated a11y validation

### 🎯 **Quality Gates**

- **Code Coverage:** Minimum 80% for critical paths
- **Performance:** Core Web Vitals compliance
- **Accessibility:** WCAG 2.1 AA automated testing
- **Bundle Size:** Monitor and prevent regression

## 🛠️ **Development Workflow**

### 🔄 **Git Standards**

- **Line Endings:** LF normalization via `.gitattributes`
- **Large Files:** Git LFS for `*.jsonl` and binary assets
- **Commit Messages:** Conventional commits format
- **Branch Strategy:** Feature branches with pull request reviews

### 📝 **Documentation Requirements**

- **Code Comments:** Why over what, focus on business logic
- **README Updates:** Synchronize with architectural changes
- **ADR Process:** Document significant architectural decisions
- **API Documentation:** OpenAPI specs for all endpoints

---

**Governance Version:** 2.2.0 | **Last Review:** October 1, 2025
