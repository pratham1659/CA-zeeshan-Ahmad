import { useEffect, useRef, useState } from 'react'

// Animates the number inside a value like "800+" or "100%" when scrolled into view
export default function CountUp({ value, duration = 1500 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : 0
  const suffix = match ? match[2] : ''
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || !match || reduce || typeof IntersectionObserver === 'undefined') {
      setN(target)
      return
    }
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        setN(Math.round(target * (1 - Math.pow(1 - t, 3))))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}
