# 📋 RentalCar Project — Source of Truth Package

## 🌟 Overview

**Canonical development artifacts (SoT)** for Dual‑Track SPA↔Next rental car application.

This package contains all architectural decisions, build configurations, and development workflows for maintaining consistency across SPA (Vite) and Next.js 15 implementations.

## 🛠️ Tech Stack

| Layer        | Technology              | Purpose            |
| ------------ | ----------------------- | ------------------ |
| **Frontend** | Next 15 / React 18–19   | UI Framework       |
| **Language** | TypeScript (strict)     | Type Safety        |
| **Data**     | React Query v5, Zustand | State Management   |
| **Styling**  | CSS Modules             | Component Styling  |
| **API**      | REST over HTTPS         | Data Communication |

## 🚀 Quick Start

### 1. **📦 Setup SoT Structure**

```bash
# Pull this SoT repo (or copy the .dev folder) into your project
git clone <sot-repo> .dev
```

### 2. **🔧 Configure Development Environment**

```bash
# Normalize line endings and enable LFS (see BUILD_NOTES.md)
git lfs install
git lfs track "*.jsonl"

# Add .gitattributes for consistent line endings
echo "* text=auto eol=lf" > .gitattributes
echo "*.woff2 binary" >> .gitattributes
```

### 3. **🤖 Execute Job Workflow**

```bash
# Run the job pack from jobs/AGENT_JOBS_2025-10-01.jsonl
# Follow the priority order: P0 → P1 → P2
```

## 📚 Documentation Structure

| Document                                | Purpose                  | Audience               |
| --------------------------------------- | ------------------------ | ---------------------- |
| 🏗️ [`ARCHITECTURE.md`](ARCHITECTURE.md) | System design & patterns | Developers, Architects |
| 📁 [`FILE_TREE.md`](FILE_TREE.md)       | Project structure        | All team members       |
| 📝 [`DECISIONS.md`](DECISIONS.md)       | Architecture decisions   | Technical leads        |
| 🔧 [`BUILD_NOTES.md`](BUILD_NOTES.md)   | Setup & build info       | Developers             |
| 📈 [`CHANGELOG.md`](CHANGELOG.md)       | Version history          | All stakeholders       |
| 📋 [`BACKLOG.md`](BACKLOG.md)           | Feature roadmap          | Product team           |

## 🎯 Key Features

### ✨ **Dual-Track Architecture**

- **SPA Baseline:** Vite + React Router foundation
- **Next Delta:** Incremental Next.js 15 migration path
- **Shared Contracts:** Consistent React Query patterns

### 🎨 **Design System**

- **CSS Modules:** Component-scoped styling
- **Design Tokens:** Centralized theme management
- **Accessibility:** WCAG 2.1 AA compliance

### ⚡ **Performance Optimizations**

- **Lazy Loading:** Route-level CSS code splitting
- **Font Strategy:** Self-hosted WOFF2 with preload + swap
- **Data Fetching:** Optimized React Query v5 patterns

## 🤖 AI-Assisted Development

### 🎛️ **Router Policy**

Intelligent AI engine selection based on task type:

- **Architect/Reviewer/QA:** GPT-5 primary
- **Implementer:** Anthropic Sonnet-4 primary
- **Quality Gates:** Automated compliance checking

### 📝 **Role-Based Prompts**

Specialized prompts for each development role:

- 🏗️ **Architect:** System design and planning
- 👨‍💻 **Implementer:** Code implementation
- 🔍 **Reviewer:** Quality assurance
- 🧪 **QA:** Testing and validation
- 🎨 **Designer:** Visual design system

## 🛡️ Quality Standards

### 🚫 **Non-Negotiable Requirements**

- **TypeScript:** Strict mode, no `any` types
- **CSS:** Modules only, no external frameworks
- **API:** Centralized in `@api` directory
- **Semantics:** `ul[role="list"] > li` for catalogs
- **Fonts:** Self-hosted with performance optimization

### ✅ **Quality Gates**

- React Query key compliance
- Strict price filtering
- ID-based deduplication
- Auto-load to limit functionality
- Accessibility standards
- Performance benchmarks

## 🔗 Resources

- **📧 Support:** [code-agents@example.com](mailto:code-agents@example.com)
- **🐛 Issues:** Use project issue tracker
- **📖 Wiki:** Additional documentation and examples
- **💬 Discord:** Development community discussions

## 📄 License

**Code:** MIT License — Free to use, modify, and distribute
**Trademarks:** "Code-Agents" name usage restricted — See [`TRADEMARKS.md`](TRADEMARKS.md)

---

**Last Updated:** October 1, 2025 | **Version:** 2.2.0
