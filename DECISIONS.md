# 📝 ADR — Architecture Decision Records

## 🚀 ADR-000: Initialization

- **Date:** 2025‑09‑24
- **Decision:** Adopt `.dev/.ops` Source of Truth structure
- **Impact:** Centralized documentation and governance

## 🔄 ADR-007: Dual‑Track SPA ↔ Next 15

- **Date:** 2025‑10‑01
- **Decision:** Maintain **SPA Baseline** and **Next 15 Migration Delta** in `ARCHITECTURE.md`
- **Requirement:** Implementer must provide baseline + migration diff for SSR/routing/metadata changes
- **Impact:** Unified development approach across frameworks

## 🔍 ADR-SEO-SPA-NO-HELMET

- **Date:** 2025‑10‑01
- **Decision:** SPA uses custom **`<Seo/>`** component (no Helmet); Next uses `generateMetadata`
- **Rationale:** React 19 compatibility and framework-specific optimization
- **Impact:** Improved SEO performance and future-proofing

## 🔬 ADR-014…018: Deep Research (Draft Status)

- **Topics Under Investigation:**
  1. 🎨 **Fluid/Intrinsic Design** + CSS Modules (container queries, clamp‑type, anti‑patterns)
  2. 🔤 **Font Performance** (variable WOFF2: preload, unicode‑range, cache strategies)
  3. ⚡ **TanStack Query v5** (placeholderData cap/instant, infinite + dedup patterns)
  4. 🚀 **Next 15 Migration Delta** (performance gains & potential risks)
  5. 🤖 **Agent Pipelines & Privacy** (chat vs API, logging protocols, fallback strategies)
- **Status:** **Draft** — Results documented in `research/` directory
- **Timeline:** Summary integration pending

## 📄 ADR-019: Git LFS & Line Endings

- **Date:** 2025‑10‑01
- **Decision:** Normalize all files to LF; Use Git LFS for large `*.jsonl` files
- **Impact:** Consistent cross-platform development and efficient version control

## 🎛️ ADR-020: AI Router Policy

- **Date:** 2025‑10‑01
- **Decision:** Implement `routerPolicy.json` for intelligent engine selection and quality gates
- **Features:** Role-based routing, fallback chains, quality monitoring
- **Impact:** Optimized AI assistance and consistent code quality

---

> 📝 **Note:** Add new ADRs below following the established format
