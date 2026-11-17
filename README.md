# Alfatech Resources Ltd — Website

Static Next.js 16 + Tailwind 4 site (office, IT & security supply). Deploys to GitHub Pages via `.github/workflows/pages.yml`.

- `npm install && npm run dev` — local dev
- `npm run build` — static export to `out/`
- Contact form opens a pre-filled email (mailto, with a Gmail fallback link) addressed to the company inbox; no backend or API key needed.
- Company data lives in `src/lib/site.ts`. Logo/favicons were extracted from the company letterhead into `public/`.
