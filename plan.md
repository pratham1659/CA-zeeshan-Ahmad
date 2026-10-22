# CA Services Website: Plan

A static, responsive, clean, modern, professional website for a Chartered Accountant (CA) to present their services and get enquiries from clients.

## 1. Goals
- Build trust: credentials, experience, clear services.
- Convert visitors into enquiries (contact form, call, WhatsApp, email).
- Work well on mobile and desktop, load fast, and be accessible.

## 2. Tech Stack
| Concern | Choice | Why |
|---|---|---|
| Framework | React 18 + TypeScript | As requested |
| Build tool | Vite | Fast, simple, outputs a static `dist/` |
| Routing | React Router (`HashRouter`) | Works on any static host with no server rewrites |
| Styling | Tailwind CSS v3 + PostCSS, free and MIT-licensed | Brand colors, fonts and shadows defined once in `tailwind.config.js` (v4 native binary is blocked by the npm registry here) |
| Forms | React Hook Form + Zod | Typed validation with little code |
| Form delivery | Formspree or Web3Forms (free tier) | A static site has no backend; the service emails the CA |
| Icons | lucide-react | Light, consistent |
| Quality | ESLint, Prettier, Vitest + Testing Library | Keeps the code typed and tested |
| Hosting | Netlify, Vercel, GitHub Pages or Cloudflare Pages | Free static hosting |

## 3. Site Map
1. **Home** (`/`): hero with CTA, services preview, why choose me, stats, FAQ, final CTA. (Testimonials and the review page were later removed.)
2. **About** (`/about`): bio, qualifications (ICAI membership, certifications), experience, values, timeline.
3. **Services** (`/services`): cards for each service, with detail on expand or on a section anchor.
   - Income tax filing and planning
   - GST registration and returns
   - Audit and assurance
   - Bookkeeping and accounting
   - Company/LLP registration and ROC compliance
   - Business advisory and financial consulting
4. **Contact** (`/contact`): enquiry form, phone, email, WhatsApp, address, map embed, office hours.
5. **404** page.

**Global:** sticky navbar (hamburger menu on mobile), footer (quick links, services, contact details, social links, disclaimer, copyright), floating WhatsApp/call button on mobile.

## 4. Design System: Clean Professional
Replaced neumorphism (low contrast, hard to read) with a clean corporate style that suits finance.
- **Palette:** white and light slate backgrounds, navy accent (`#0f3d6e`), gold highlights (`#b8862f`).
- **Surfaces:** white cards with a thin slate border and a soft shadow (`shadow-card`), small hover lift.
- **Typography:** Georgia serif for headings (authority), Inter for body text.
- **Components:** solid navy primary button, outlined secondary button, bordered inputs with a focus ring, navy hero card and call-to-action band.
- **Accessibility:** text meets WCAG AA contrast, visible focus rings, `prefers-reduced-motion` respected.
- **Dark mode (optional, phase 2).**

## 5. Project Structure
```
src/
  assets/            images, logo
  components/
    layout/          Navbar, Footer, Layout, ScrollToTop
    ui/              Button, Card, Input, Textarea, Select, Section, Accordion
    sections/        Hero, ServicesGrid, WhyChooseUs, Stats, Carousel, CTA
  pages/             Home, About, Services, Contact, NotFound
  data/              services.ts, stats.ts, site.ts (name, contact info, socials)
  styles/            index.css (Tailwind directives)
  hooks/             useScrollSpy, useMediaQuery
  types/             shared interfaces
  App.tsx
  main.tsx
```
All CA-specific content lives in `src/data/`, so the CA can edit text without touching components.

## 6. Contact Form
- Fields: name, email, phone, service interested in (select), message, consent checkbox.
- Zod validation with inline error messages, a loading state, and success and failure states.
- Spam protection: honeypot field, plus reCAPTCHA or Turnstile if needed.
- Direct contact alternatives next to the form: `tel:`, `mailto:`, and a WhatsApp `wa.me` link.

## 7. Responsive and UX
- Mobile-first breakpoints: 480 / 768 / 1024 / 1280.
- Hamburger drawer navigation on mobile, with the current page highlighted.
- Minimum 44px touch targets, smooth scrolling, and scroll-to-top on route change.
- Semantic HTML, alt text, keyboard navigation, and a skip-to-content link.

## 8. SEO and Performance
- Per-page title and meta description (`react-helmet-async`), Open Graph tags, favicon.
- JSON-LD `ProfessionalService` schema, `sitemap.xml`, `robots.txt`.
- Lazy-loaded routes and images, optimized WebP images, system-font fallback.
- Target Lighthouse score of 90 or higher on all four categories.

## 9. Milestones
1. **Setup:** Vite + React + TS, ESLint/Prettier, Tailwind v3, folder structure, theme tokens.
2. **UI kit:** Button, Card, Inputs, plus a small preview page.
3. **Layout:** Navbar (desktop and mobile), Footer, routing.
4. **Pages:** Home, About, Services, then Contact with the working form.
5. **Polish:** responsive pass, accessibility audit, animations, SEO.
6. **Test and deploy:** unit tests for the form and nav, Lighthouse run, deploy to static host.

## 10. Open Questions for the CA
- Name, firm name, logo, and brand color preference?
- Exact list of services and any pricing display (or "get a quote" only)?
- Credentials (membership number, years of experience), photo?
- Contact details: phone, WhatsApp, email, office address, hours?
- Domain name, and which form service or email should receive enquiries?
- Extras wanted: blog, appointment booking (Calendly embed), downloadable checklists, a tax calculator?

## 11. Assumptions
Until answered, the build uses placeholder content and a placeholder name ("Zeeshan Ahmed & Co."). Real content can be swapped in `src/data/`.
