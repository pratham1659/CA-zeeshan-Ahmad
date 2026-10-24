import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ScrollEffects from '../ui/ScrollEffects'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingContact from './FloatingContact'

export default function Layout() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const target = hash ? document.querySelector(hash) : null
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo(0, 0)
  }, [pathname, hash, key])

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
      <FloatingContact />
    </>
  )
}
