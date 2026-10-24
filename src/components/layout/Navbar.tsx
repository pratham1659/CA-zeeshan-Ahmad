import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from '../ui/Icon'
import Brand from '../ui/Brand'
import Button from '../ui/Button'
import { navLinks, site } from '../../data/site'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `relative rounded-lg px-4 py-2 font-medium transition after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-gold after:transition-transform after:duration-300 active:scale-95 ${
    isActive ? 'text-accent after:scale-x-100' : 'text-ink after:scale-x-0 hover:text-accent hover:after:scale-x-100'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-accent/10 bg-white/80 backdrop-blur-lg">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" aria-label={`${site.name}, Chartered Accountants`} className="transition active:scale-95">
          <Brand />
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            <Button to="/contact">Get in touch</Button>
          </li>
        </ul>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-xl border-2 border-accent/40 text-accent transition active:scale-90 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          onClick={(e) => {
            // close on any link tap, including links to the page the user is already on
            if ((e.target as HTMLElement).closest('a')) setOpen(false)
          }}
          className="mx-5 mb-4 space-y-2 rounded-2xl bg-white p-4 border border-accent/15 shadow-card md:hidden">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end className={(s) => `block ${linkClass(s)}`}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Button to="/contact" className="w-full">
              Get in touch
            </Button>
          </li>
        </ul>
      )}
    </header>
  )
}
