import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import ServiceArt from './ServiceArt'
import { slides } from '../../data/slides'
import { site } from '../../data/site'

const AUTOPLAY_MS = 5000
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
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="relative overflow-hidden"
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
              className={`relative w-full shrink-0 overflow-hidden bg-gradient-to-br ${s.gradient} flex min-h-[28rem] items-center px-5 py-12 text-white sm:min-h-[31rem] sm:px-16 sm:py-16`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-25 [background-image:radial-gradient(#fff_1.2px,transparent_1.2px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom_left,black,transparent_75%)]"
              />
              <Icon
                name={s.icon}
                size={460}
                strokeWidth={0.7}
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -left-24 rotate-12 text-white/10"
              />
              <svg aria-hidden="true" viewBox="0 0 200 120" className="pointer-events-none absolute right-0 top-0 hidden w-72 sm:block">
                <path d="M200 0v38c-52 8-104 28-150 56 0-40 0-70 0-94Z" fill="#F37920" opacity=".85" />
                <path d="M200 0v14c-34 8-70 24-100 44 0-20 0-40 0-58Z" fill="#55B848" opacity=".9" />
              </svg>
              <div aria-hidden="true" className="absolute -right-10 -top-10 size-56 rounded-full bg-white/10 blur-2xl" />
              <div aria-hidden="true" className="absolute -bottom-16 right-1/4 size-48 rounded-full bg-gold/30 blur-3xl" />
              <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <p className="inline-block rounded-full bg-gold px-3 py-1 text-xs text-accent-dark font-semibold uppercase tracking-widest">
                    {s.tag}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold sm:text-4xl">{s.title}</h3>
                  <p className="mt-3 text-white/90">{s.text}</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    {s.cta === 'book' ? (
                      <>
                        <Link to="/contact" tabIndex={i === index ? 0 : -1} className={btn + ' bg-gold text-accent-dark'}>
                          Book a free consultation <Icon name="arrow" size={18} />
                        </Link>
                        <Link
                          to="/services"
                          tabIndex={i === index ? 0 : -1}
                          className={btn + ' border-2 border-white/70 text-white hover:bg-white/15'}
                        >
                          Explore services
                        </Link>
                      </>
                    ) : (
                      <>
                        <a
                          href={`${site.whatsappHref}?text=${encodeURIComponent(`Hello, I would like to know more about ${s.enquiry}.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={i === index ? 0 : -1}
                          className={btn + ' bg-white text-accent'}
                        >
                          <Icon name="whatsapp" size={18} /> Chat on WhatsApp
                        </a>
                        <a
                          href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${s.tag}`)}&body=${encodeURIComponent(`Hello, I would like to know more about ${s.enquiry}.`)}`}
                          tabIndex={i === index ? 0 : -1}
                          className={btn + ' border-2 border-white/70 text-white hover:bg-white/15'}
                        >
                          <Icon name="mail" size={18} /> Email us
                        </a>
                      </>
                    )}
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-white/90 sm:text-sm">
                    {['Founded 2023', 'Ranchi, Jharkhand', 'Audit · Tax · Advisory'].map((t) => (
                      <li key={t} className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 backdrop-blur">
                        <Icon name="check" size={14} className="text-leaf" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative order-first w-full max-w-xs shrink-0 self-center sm:order-none sm:w-80 lg:w-[26rem] lg:max-w-none">
                  <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] border border-white/25" />
                  <div aria-hidden="true" className="absolute -inset-8 rounded-[2.5rem] border border-white/10" />
                  <span
                    aria-hidden="true"
                    className="absolute -left-5 top-8 z-10 grid size-12 animate-float place-items-center rounded-full bg-white text-accent shadow-glow"
                  >
                    <Icon name="check" size={22} />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -right-5 bottom-10 z-10 grid size-14 animate-float place-items-center rounded-full bg-gold text-accent-dark shadow-glow [animation-delay:-3s]"
                  >
                    <Icon name={s.icon} size={26} />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -top-5 right-12 z-10 grid size-10 animate-float place-items-center rounded-full bg-leaf text-white shadow-glow [animation-delay:-1.5s]"
                  >
                    <Icon name="star" size={18} />
                  </span>
                  {s.photo ? (
                    <img
                      src={s.photo}
                      alt="CA Zeeshan Ahmed"
                      width={640}
                      height={810}
                      loading="lazy"
                      decoding="async"
                      className="relative aspect-[16/10] w-full rounded-2xl object-cover object-[50%_20%] shadow-glow ring-1 ring-white/30 sm:aspect-[4/3]"
                    />
                  ) : (
                    s.art && <ServiceArt id={s.art} className="relative aspect-[16/9] w-full rounded-2xl shadow-glow ring-1 ring-white/30" />
                  )}
                </div>
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
