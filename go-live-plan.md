# Go-Live Plan: Zeeshan Ahmed & Co. Website

How to put the site online, receive enquiries by email and WhatsApp, at the lowest cost.

Prices and free-tier limits change. Check each provider's current page before you sign up. Figures here are rough guides.

## 1. Summary of the recommended setup

| Need | Recommended (low cost) | Cost |
|---|---|---|
| Hosting | Cloudflare Pages or Netlify (static hosting) | Free |
| Domain | `.in` or `.com` from any registrar | Roughly ₹700–1,500 per year |
| HTTPS / SSL | Included with the host | Free |
| Contact form emails | Web3Forms (already wired in) | Free tier |
| Business email address (`hello@yourdomain`) | Cloudflare Email Routing (forwards to Gmail) or Zoho Mail free plan | Free |
| WhatsApp | `wa.me` links (already in the site) + free WhatsApp Business app | Free |
| Analytics | Cloudflare Web Analytics or Google Analytics | Free |

The only unavoidable yearly cost is the domain. Everything else can run on free tiers.

## 2. Make the site live

1. **Put the code in a Git repository** on GitHub (free, private is fine).
2. **Connect it to Cloudflare Pages or Netlify.** Both build and publish automatically each time you push.
   - Build command: `npm run build`
   - Output folder: `dist`
   - Node version: 20 or newer
3. **Set the form key** in the host's dashboard under environment variables: `VITE_WEB3FORMS_KEY`. Do not commit `.env` to Git.
4. **Buy a domain** (Cloudflare Registrar sells at cost; GoDaddy, Namecheap and BigRock also work). Point it at the host. The host's dashboard shows the exact DNS records to add.
5. **Check HTTPS** works on the live address and `www` redirects to the main address.

### One change to make before launch: URLs
The site uses hash URLs today (`/#/about`). They work anywhere, but Google handles them poorly, so each page is unlikely to be indexed separately. Before launch, I recommend:
- Switch to normal URLs (`/about`, `/services`) by changing the router.
- Add a rule so the host serves the app for every path. On Netlify this is a one-line `_redirects` file; Cloudflare Pages handles it by default.
- Add `sitemap.xml`, and per-page titles and descriptions (titles are already set).

This is a small change, and I can do it.

## 3. Email: receiving enquiries

### Contact form
Both forms already post to **Web3Forms**, which emails each submission to the CA. Setup:
1. Create a free key at web3forms.com using the CA's real email address.
2. Add the key to the host as `VITE_WEB3FORMS_KEY`.
3. In the Web3Forms dashboard, restrict the key to the live domain if the option is offered. The key is visible in the site's code by design, so the restriction limits misuse.
4. Send a test enquiry. Check the spam folder.

Spam protection already in the site: a hidden trap field and form validation. If spam becomes a problem, add Cloudflare Turnstile (free captcha).

Alternatives if Web3Forms limits become a problem: Formspree, or Netlify Forms if you host on Netlify.

### A professional email address
Using `hello@yourdomain.in` looks more trustworthy than a Gmail address. Low-cost options:
- **Cloudflare Email Routing** (free): mail sent to `hello@yourdomain` is forwarded to the CA's Gmail. Replies can be sent "as" that address from Gmail using SMTP settings.
- **Zoho Mail free plan**: a real mailbox on the custom domain, with limits. Check the current terms.
- **Google Workspace**: the most polished option, but paid per user each month. Worth it later if the practice grows.

Then update `email` in `src/data/site.ts`.

## 4. WhatsApp

The site already uses `wa.me` links, with a pre-written message on the carousel buttons and a floating button on mobile. To finish:
1. Put the real number in `src/data/site.ts`. Use the international format without `+` in the link, for example `https://wa.me/919876543210`.
2. Install the **free WhatsApp Business app** on the CA's phone, on a number used for work. It gives a business profile, a greeting message, an away message and quick replies. This is enough for a small practice.
3. Do not buy the WhatsApp Business API or a chatbot service yet. It costs money per conversation and is only worth it at high volume.
4. Keep the number visible in the footer and on the Contact page, with the working hours.

## 5. Reviews and testimonials

Removed from the site for now. The review page, the review form and the testimonials section no longer exist. If they are wanted later (for example after checking ICAI's advertising rules), the options were: email and approve by hand, a Google Sheet with an "Approved" column, or a link to the firm's Google Business Profile.

## 6. Before launch checklist

**Content**
- [ ] Real firm name, address, phone, email, working hours (`src/data/site.ts`)
- [ ] Real services, wording and, if allowed, credentials and membership number
- [ ] Photo of the CA, and the logo
- [ ] Replace the placeholder "Years/Clients" statistics with true figures, or remove them
- [ ] Replace the placeholder map location

**Legal and trust**
- [ ] Privacy Policy page: the forms collect names, phone numbers and emails, so say what is collected and why. India's Digital Personal Data Protection Act applies, so have it reviewed.
- [ ] Terms and disclaimer page (a short disclaimer already sits in the footer)
- [ ] Check that all site claims, including the client-count statistic, follow ICAI advertising rules

**Technical**
- [ ] Live domain with HTTPS
- [ ] Form key set, and test enquiry received
- [ ] Favicon, page titles, meta descriptions, Open Graph image, `sitemap.xml`, `robots.txt`
- [ ] Test on a real phone (menu, carousel swipe, forms, WhatsApp and email buttons)
- [ ] Lighthouse check (speed, accessibility, SEO)

**After launch**
- [ ] Add the site to Google Search Console and submit the sitemap
- [ ] Set up the Google Business Profile
- [ ] Add free analytics (Cloudflare Web Analytics needs no cookie banner)
- [ ] Back up: the Git repository is the backup

## 7. Phases

| Phase | What | Effort |
|---|---|---|
| 1. Launch | Real content, host on Cloudflare Pages or Netlify, domain, form key, forwarding email | 1–2 days |
| 2. Polish | Normal URLs, sitemap, privacy policy page, Turnstile if needed, analytics | 1 day |
| 3. Local presence | Google Business Profile | 0.5 day |
| 4. Grow | Blog or tax-deadline updates, appointment booking (Calendly free tier), WhatsApp Business catalogue | Ongoing |

## 8. Minimum yearly cost

Domain only: roughly ₹700–1,500 per year. Hosting, forms, email forwarding, WhatsApp Business and analytics can all stay on free tiers.
