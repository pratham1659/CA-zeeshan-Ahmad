import { Link } from 'react-router-dom'
import Brand from '../ui/Brand'
import Icon from '../ui/Icon'
import { navLinks, site } from '../../data/site'
import { services } from '../../data/services'

export default function Footer() {
  return (
    <footer className="mt-12 bg-accent-dark text-white/80">
      <div aria-hidden="true" className="h-1.5 bg-tricolor" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-xl bg-white px-4 py-3">
            <Brand />
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
          <ul className="space-y-2 text-sm text-white/65">
            {services.map((s) => (
              <li key={s.id}>
                <Link to="/services" className="inline-block transition hover:translate-x-1 hover:text-gold">
                  {s.title}
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
              <a href={site.phoneHref} className="inline-block transition hover:translate-x-1 hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Icon name="mail" size={18} className="shrink-0 text-leaf" />
              <a href={`mailto:${site.email}`} className="inline-block transition hover:translate-x-1 hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Icon name="pin" size={18} className="shrink-0 text-leaf" />
              <span>{site.address}</span>
            </li>
          </ul>
          <ul className="mt-4 flex gap-3 text-sm">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/20 px-3 py-2 text-white/85 transition hover:-translate-y-0.5 hover:border-gold hover:text-gold active:scale-95"
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
