import { useEffect, useRef, useState, type ReactNode } from 'react'

type Variant = 'up' | 'left' | 'right' | 'zoom'

const animations: Record<Variant, string> = {
  up: 'animate-fade-up',
  left: 'animate-fade-left',
  right: 'animate-fade-right',
  zoom: 'animate-zoom-in',
}

interface RevealProps {
  children: ReactNode
  delay?: number
  variant?: Variant
  className?: string
}

export default function Reveal({ children, delay = 0, variant = 'up', className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${shown ? animations[variant] : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
