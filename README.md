# Alfatech Resources Ltd — Website

Static Next.js 16 + Tailwind 4 site (office, IT & security supply). Deploys to GitHub Pages via `.github/workflows/pages.yml`.

- `npm install && npm run dev` — local dev
- `npm run build` — static export to `out/`
- Contact form uses Web3Forms: set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (see `.env.example`; add it as a GitHub Actions secret for deploys).
- Company data lives in `src/lib/site.ts`. Logo/favicons were extracted from the company letterhead into `public/`.
