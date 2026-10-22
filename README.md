# CA Website: Zeeshan Ahmed & Co.

A static, responsive website for a Chartered Accountant to present their services and receive client enquiries.

## Tech stack

- React 19 + TypeScript, built with Vite
- React Router (`HashRouter`, works on any static host)
- Tailwind CSS 3 + PostCSS
- Zod for form validation
- Web3Forms for delivering form submissions by email

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/contact` | Contact and enquiry form |
| `*` | 404 |

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
cp .env.example .env   # then add your Web3Forms key
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run the TypeScript checker only |

## Environment variables

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_KEY` | Web3Forms access key. Without it, form submission is disabled. |

Never commit `.env`. Set the variable in your host's dashboard for production.

## Project structure

```
public/        Static assets (favicon, robots.txt, _redirects)
src/
  components/  layout, sections and ui components
  data/        Site content: services, FAQs, stats, contact details
  hooks/       Custom hooks
  lib/         Helpers (form submission)
  pages/       Route pages
  styles/      Global CSS
```

Most site content (name, phone, email, services, FAQs) lives in `src/data/`, so it can be updated without touching components.

## Deployment

Build with `npm run build` and publish the `dist/` folder on Cloudflare Pages, Netlify, Vercel or GitHub Pages. Full steps are in [go-live-plan.md](go-live-plan.md).

## Further docs

- [plan.md](plan.md): site plan, design system and structure
- [go-live-plan.md](go-live-plan.md): hosting, domain, email and WhatsApp setup
