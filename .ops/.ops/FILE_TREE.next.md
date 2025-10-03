rentalcar-next/
├─ app/
│ ├─ layout.tsx
│ ├─ globals.css
│ ├─ (home)/
│ │ └─ page.tsx
│ ├─ catalog/
│ │ ├─ page.tsx
│ │ ├─ @modal/ # параллельный сегмент под модалки
│ │ │ └─ default.tsx # обязателен для graceful fallback
│ │ └─ [id]/page.tsx
│ ├─ not-found.tsx
│ └─ error.tsx # глобальная (локальные по месту при необходимости)
├─ lib/
│ ├─ api/
│ │ ├─ clientApi.ts # axios для клиента, явные дженерики
│ │ └─ serverApi.ts # axios для сервера (SSR), общие интерцепторы
│ ├─ queryClient.ts # общий QueryClient (SSR prefetch)
│ ├─ errorAdapter.ts # нормализация {code,httpStatus,message,details}
│ └─ format.ts # формат "5 000 km", цены и т.п.
├─ components/
│ ├─ Layout/
│ │ ├─ Header.tsx
│ │ ├─ Footer.tsx
│ │ └─ Layout.module.css
│ ├─ CarCard/
│ │ ├─ CarCard.tsx
│ │ └─ CarCard.module.css
│ ├─ Filters/
│ │ ├─ Filters.tsx
│ │ ├─ Filters.module.css
│ │ └─ useFilters.ts # биндинг URLSearchParams ↔ UI (сброс на смене)
│ ├─ LoadMore/LoadMore.tsx
│ ├─ Spinner/Spinner.tsx
│ ├─ ErrorView/ErrorView.tsx
│ └─ Toast/
│ ├─ ToastProvider.tsx
│ └─ Toast.module.css
├─ styles/
│ ├─ tokens.css # :root токены
│ └─ modern-normalize.css # импортируется один раз в app/layout.tsx
├─ types/
│ └─ car.ts
├─ public/
│ └─ favicon.svg
├─ package.json
├─ tsconfig.json
├─ next.config.js
└─ README.md
