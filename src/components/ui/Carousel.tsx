import { useCallback, useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { slides } from '../../data/slides'
import { site } from '../../data/site'

const AUTOPLAY_MS = 5500
const btn =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition hover:-translate-y-0.5 active:scale-95'

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const startX = useRef<number | null>(null)
  const count = slides.length

  const go = useCallback((i: number) => setIndex((i + count) % count), [count])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduce) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, count])

  function onPointerUp(clientX: number) {
    if (startX.current === null) return
    const delta = clientX - startX.current
    startX.current = null
    if (Math.abs(delta) > 50) go(index + (delta < 0 ? 1 : -1))
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="mx-auto max-w-6xl px-5 py-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="relative overflow-hidden rounded-3xl shadow-glow"
        onPointerDown={(e) => {
          startX.current = e.clientX
          setPaused(true)
        }}
        onPointerUp={(e) => {
          onPointerUp(e.clientX)
          setPaused(false)
        }}
        onPointerCancel={() => {
          startX.current = null
          setPaused(false)
        }}
        style={{ touchAction: 'pan-y' }}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live={paused ? 'polite' : 'off'}
        >
          {slides.map((s, i) => (
            <div
              key={s.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
              className={`relative w-full shrink-0 bg-gradient-to-br ${s.gradient} px-6 py-12 text-white sm:px-14 sm:py-16`}
            >
              <div aria-hidden="true" className="absolute -right-10 -top-10 size-56 rounded-full bg-white/10 blur-2xl" />
              <div aria-hidden="true" className="absolute -bottom-16 right-1/4 size-48 rounded-full bg-gold/30 blur-3xl" />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <p className="inline-block rounded-full bg-gold px-3 py-1 text-xs text-accent-dark font-semibold uppercase tracking-widest">
                    {s.tag}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold sm:text-4xl">{s.title}</h3>
                  <p className="mt-3 text-white/90">{s.text}</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`${site.whatsappHref}?text=${encodeURIComponent(`Hello, I would like to know more about ${s.enquiry}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={i === index ? 0 : -1}
                      className={btn + ' bg-white text-accent'}
                    >
                      <Icon name="chat" size={18} /> Chat on WhatsApp
                    </a>
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${s.tag}`)}&body=${encodeURIComponent(`Hello, I would like to know more about ${s.enquiry}.`)}`}
                      tabIndex={i === index ? 0 : -1}
                      className={btn + ' border-2 border-white/70 text-white hover:bg-white/15'}
                    >
                      <Icon name="mail" size={18} /> Email us
                    </a>
                  </div>
                </div>
                <span className="hidden size-28 shrink-0 place-items-center rounded-3xl bg-white/10 sm:grid">
                  <Icon name={s.icon} size={56} strokeWidth={1.5} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="absolute left-3 top-1/2 hidden size-11 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/35 active:scale-90 sm:grid"
        >
          <Icon name="arrow" size={20} className="rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="absolute right-3 top-1/2 hidden size-11 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/35 active:scale-90 sm:grid"
        >
          <Icon name="arrow" size={20} />
        </button>

        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
