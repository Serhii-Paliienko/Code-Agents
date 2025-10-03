Project: RentalCar — SPA Frontend

Goal: Implement a production‑ready frontend for the RentalCar company as a React (Vite) SPA consuming the public API: https://car-rental-api.goit.global.

Key Pages & Routes

/ — Home page with CTA banner and View Catalog button linking to /catalog.

/catalog — Catalog page with server‑side filtering (brand, price, mileage), Load more pagination, Favorites toggle, Read more per card → navigates to details page.

/catalog/:id — Car details page with photo, specs, and a Rental (Booking) form with success notification.

Data & API

Use Axios for HTTP, React Query 5 for caching/fetching.

All filtering must be executed on the backend (no client-side filtering of full lists).

API endpoints (base https://car-rental-api.goit.global):

GET /cars — list with query params: brand, rentalPrice, minMileage, maxMileage, limit, page.

GET /cars/{id} — car details.

GET /brands — brands list for filter select.

Pagination: backend‑driven via page/limit, Load more fetches the next page while preserving current filters.

UX/Functionality

Filters: single select brand, single select price, mileage range (minMileage, maxMileage).

Reset results on filter change: when any filter changes → clear current list, fetch page 1 with new params; URL reflects filters (/catalog?brand=BMW&price=50&minMileage=1000&maxMileage=5000).

Favorites: add/remove from catalog or details; persisted across reloads (localStorage).

Mileage format: display as 5 000 km (thin/regular space separator by thousands).

Loader during async operations.

Toasts/notices for booking success and error states.

SEO/head minimal setup (title/description, favicon). Desktop layout per provided design; responsive optional.

Quality Gates (Scoring)

Critical (failing loses 1–4 points):

Pixel-accurate layout vs provided mockups.

No console errors/warnings in production build.

Filtering works and is executed on backend.

Routing works on deployed site (Vercel/Netlify).

Backend pagination (not client-only).

Supporting: head tags, formatted code, semantic HTML, tidy repo (no junk files), cursor: pointer for clickable buttons, robust API layer, meaningful README, granular commits, loaders for async states.

Delivery

Two links: public repo + live deployment (Vercel or Netlify).
