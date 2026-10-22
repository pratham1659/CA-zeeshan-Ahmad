import { useEffect, useState } from 'react'
import Icon from './Icon'

// Top progress bar + back-to-top button, driven by scroll position
export default function ScrollEffects() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
      setShowTop(window.scrollY > 600)
      document.documentElement.style.setProperty('--scroll-y', String(window.scrollY))
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-1">
        <div className="h-full origin-left bg-gold" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-5 left-5 z-30 grid size-12 place-items-center rounded-full bg-gold text-accent-dark shadow-glow transition duration-300 hover:-translate-y-1 active:scale-90 md:bottom-8 md:left-auto md:right-8 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <Icon name="up" size={20} />
      </button>
    </>
  )
}
