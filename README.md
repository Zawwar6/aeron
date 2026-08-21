# AERON — Move Different.

A premium, animated, one-page shoes e-commerce site built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## What's inside

- **Design system**: light theme only, with a signature single-line "contour" sneaker illustration (`src/components/ShoeArt.jsx`) used across the hero, product cards, category tiles, and the interactive showcase instead of stock photography.
- **Sections**: navbar, hero, featured product, categories, filterable best-sellers grid, an Apple-style interactive product showcase, horizontally-scrolling new arrivals, a parallax collection banner, brand story with animated counters, benefits, testimonials, newsletter, and footer.
- **Commerce interactions**: add-to-cart with required size selection, a slide-in cart drawer with quantity controls and subtotal, a quick-view modal, wishlist toggling with a heart micro-animation, and a full-screen search overlay — all backed by a single `AppContext` (`src/context/AppContext.jsx`).
- **Motion**: page-load sequencing in the hero, scroll-triggered reveals (`src/components/Reveal.jsx`), animated number counters, and a custom cursor that's disabled on touch devices.
- **Data**: all product/category/testimonial content lives in `src/data/products.js` — edit this file to change catalog content.

## Notes

- Fonts: Bricolage Grotesque (display) + Inter (body), loaded via Google Fonts in `index.html`.
- Tailwind v4 is configured via the `@tailwindcss/vite` plugin; design tokens (colors, fonts) live in `src/index.css` under `@theme`.
- No dark mode, no external product photography — the shoe illustrations are original SVG artwork so the project runs with zero image assets.
