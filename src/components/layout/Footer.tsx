import { Link } from 'react-router-dom'
import footerLogo from '../../asset/footer-logo.webp'
import Icon from '../ui/Icon'
import { navLinks, site } from '../../data/site'
import { services } from '../../data/services'

export default function Footer() {
  // Accounting & Payroll is listed in the first column, right after Audit & Assurance
  const accounting = services.find((s) => s.id === 'accounting-payroll')!
  const ordered = services.filter((s) => s !== accounting)
  ordered.splice(3, 0, accounting)
  const half = Math.ceil(ordered.length / 2)
  return (
    <footer className="mt-12 bg-accent-dark text-white/80">
      <div aria-hidden="true" className="h-1.5 bg-tricolor" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_2.4fr_1.6fr_0.9fr]">
        <div>
          <div className="inline-block max-w-full rounded-xl bg-white p-2">
            <img src={footerLogo} alt={`${site.name}, Chartered Accountants`} width={476} height={142} className="block h-auto w-60 max-w-full" />
          </div>
          <p className="mt-3 text-sm text-white/65">{site.description}</p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 border-b-2 border-gold/60 pb-1 font-semibold text-white inline-block">Quick links</p>
          <ul className="space-y-2 text-sm text-white/65">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="inline-block transition hover:translate-x-1 hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 border-b-2 border-gold/60 pb-1 font-semibold text-white inline-block">Services</p>
          {/* one grid, filled row by row, so both columns line up even when a title wraps */}
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/65">
            {ordered.slice(0, half).flatMap((s, i) => [s, ordered[i + half]]).map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="inline-block whitespace-nowrap transition hover:translate-x-1 hover:text-gold">
                  {s.footerTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 border-b-2 border-gold/60 pb-1 font-semibold text-white inline-block">Contact</p>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex gap-2">
              <Icon name="phone" size={18} className="shrink-0 text-leaf" />
              <div className="space-y-1">
                {site.phones.map((p) => (
                  <a key={p.href} href={p.href} className="block transition hover:translate-x-1 hover:text-gold">
                    <span className="text-white/90">{p.label}:</span> {p.display}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex gap-2">
              <Icon name="mail" size={18} className="shrink-0 text-leaf" />
              <div className="min-w-0 space-y-1">
                {site.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="block whitespace-nowrap transition hover:translate-x-1 hover:text-gold">
                    {e}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex gap-2">
              <Icon name="pin" size={18} className="shrink-0 text-leaf" />
              <a href={site.mapHref} target="_blank" rel="noreferrer" className="inline-block transition hover:translate-x-1 hover:text-gold">
                {site.address}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 border-b-2 border-gold/60 pb-1 font-semibold text-white inline-block">Social</p>
          <ul className="space-y-3 text-sm text-white/65">
            {site.socials.map((s) => (
              <li key={s.label} className="flex gap-2">
                <Icon name={s.icon} size={18} className="shrink-0 text-leaf" />
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block transition hover:translate-x-1 hover:text-gold"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/65">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="mx-auto mt-2 max-w-3xl">
          Disclaimer: Information on this website is for general guidance only and is not professional advice.
          Please consult us before acting on it.
        </p>
      </div>
    </footer>
  )
}
