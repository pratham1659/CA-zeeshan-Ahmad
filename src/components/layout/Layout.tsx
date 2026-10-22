import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ScrollEffects from '../ui/ScrollEffects'
import Navbar from './Navbar'
import Footer from './Footer'
import Icon from '../ui/Icon'
import { site } from '../../data/site'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash ? document.querySelector(hash) : null
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollEffects />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-30 grid size-14 place-items-center rounded-full bg-leaf text-white shadow-glow transition active:scale-90 md:hidden"
      >
        <Icon name="chat" />
      </a>
    </>
  )
}
