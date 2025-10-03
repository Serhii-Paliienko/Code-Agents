# Common Invariants (copy-in)

> Этот раздел **вставляется в начало каждого мастер-промпта** (copy-in). Он отражает единые правила из GOVERNANCE.md и ADR. Любые расхождения решаются через ADR и обновление \_common.md.

## Tracks & Decision Flow

- Поддерживаем **Dual-Track** до финализации **ADR-007 (Framework Selection)**: Next.js 15 (App Router) и React (Vite). После решения фиксируем единый трек в ARCHITECTURE.md и закрываем второй через _Migration Delta_.

## Tooling & Packages

- TypeScript **strict**. Запрещены `any`, бессрочные `@ts-ignore`.
- Менеджер пакетов: **npm**. Зависимости ставим как **@latest**. Lock — `package-lock.json`.
- Единые NPM-скрипты: `dev`, `build`, `start`, `lint`, `test`.
- **Алиасы импортов (React/Vite):** единая схема — `@app/*, @api/*, @components/*, @features/*, @pages/*, @shared/*, @store/*, @utils/*, @styles/*`. Обязателен **vite-tsconfig-paths**. Импорты **только через алиасы** (не смешивать с относительными и «голыми» путями).

## Styling & Theming

- **CSS Modules only**. **Запрещены inline-стили и `!important`**, **исключение — только внутри SVG** (`<svg>`/`.svg`).
- Глобальные стили: `@styles/globals.css`; normalize — **`modern-normalize/modern-normalize.css`** (один глобальный импорт).
- **Theme tokens:** один источник правды `@styles/tokens.css`. Минимум 3 темы: **light (brand)**, **dark**, **neutral**. Токены в `:root` и `[data-theme="..."]`.
  - Имена токенов (стандартизовано):  
    `--clr-bg, --clr-bg-alt, --clr-text, --clr-muted, --clr-primary, --clr-border;`  
    `--sp-1, --sp-2, --sp-3, --sp-4, --sp-6, --sp-8;`  
    `--radius, --fs-sm, --fs-md, --fs-lg, --fs-xl, --fs-2xl`.
- Сетка каталога: **4 колонки** на десктопе (адаптив 3/2/1).
- **Хвосты**: неиспользуемые классы/переменные — удалять.

## Routing

**Next 15 (App Router):**

- Динамика: `[id]`, `[...slug]`; параллельные сегменты `@sidebar/@modal` с обязательным `default.tsx`.
- Обязательны `not-found.tsx` и (при необходимости) локальные/глобальные `error.tsx`.
- **Server Components**: допустимы `params: Promise<...>` и `searchParams: Promise<...>` — не переписывать в sync.
- SSR-prefetch: `QueryClient` → `prefetchQuery` → `dehydrate` → `HydrationBoundary` (без «мигания»).

**React (Vite):**

- Router с lazy-страницами; guards; обязательные маршруты: `/`, `/catalog`, `/catalog/:id`, `*`. Общий Header в корне.

## Data Layer

- HTTP: **Axios**. Запросы — **только** в API-слое.
- **Error Adapter**: `{code, httpStatus, message, details}`. UI не видит «сырые» Axios-ошибки.
- **React Query 5** (дефолты провайдера):  
  `staleTime ≥ 60s`, `gcTime ≥ 10m`, `refetchOnWindowFocus=false`, `refetchOnReconnect=false`, `refetchOnMount=false`, `retry=1`.
- **Ключи кэша**: `["cars", filters, page]`, `["car", id]`, `["brands"]`. При смене фильтров — **новый ключ** и **сброс** предыдущих результатов.
- **Placeholder UX**: допускается `placeholderData` (cap по памяти), **всегда** фоновой refetch.

## Forms

- Formik + Yup. Ошибки — человекочитаемо.

## Filters & Pagination

- Фильтрация — на бэкенде; дополнительно строгий пост-фильтр цены в UI (если API отдаёт «≤ N»).
- Нормализовать числовые строки (автосвап `min>max`).
- При активных фильтрах **автодогружать** страницы, пока не набран видимый лимит (или страницы кончились). Допустим дедуп по `id`.

## Favorites & Numbers

- Избранное: только `id[]` в `localStorage` с префиксом `rental:favs`.
- Пробег показывать как `5 000 km` (единая функция форматирования).

## A11y & Content

- Одна локаль (по умолчанию — EN). Статусы с `role="status"` и `aria-live="polite"`.
- 404/Empty/Loader — дружелюбные состояния без внешних либ.

## Performance

- Code-splitting; Next: `next/image`; React: `<img loading="lazy">`.

## Operations

- Выдавать **полные файлы**, без «хвостов».
- Любое спорное — фиксировать **Assumption** в ADR и двигаться дальше.

## Secrets & Environment

- В репозитории только демо `.env.local`. Реальные ключи — в окружении. Для Vite — только `VITE_*`.

## References

- `.dev/.ops/GOVERNANCE.md`, `.dev/.ops/DECISIONS.md` (включая ADR-007); эталоны: `.dev/.ops/dumps/*.jsonl`.

---

**Version:** 1.3.0 — 2025-09-26  
**Changelog:**

- Добавлены алиасы, дефолты React Query, placeholder UX, правила фильтров/пагинации.
- Формализованы темы (light/dark/neutral) и нейминг токенов.
- Чёткие требования к сетке каталога и чистке «хвостов».
