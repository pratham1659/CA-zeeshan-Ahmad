import { useEffect, useRef, useState } from 'react'
import Icon from '../ui/Icon'
import { site } from '../../data/site'

const DELAY_MS = 2000

const points = [
  `You are visiting this website on your own initiative, to learn more about ${site.name} for your personal use.`,
  `${site.name} and its people have not advertised, contacted you personally, invited you, or encouraged you in any way to seek professional work through this website.`,
  'Any information you obtain or material you download from this website is entirely your own choice.',
  'The content on this website is general in nature. It is not a professional opinion and must not be treated as professional advice under any circumstances.',
]

// ICAI declaration: shown 2 seconds after every visit and cannot be dismissed; the site stays locked until "I Agree", and "I Do Not Agree" leaves for Google
export default function DeclarationModal({ onOpenChange }: { onOpenChange: (open: boolean) => void }) {
  const [open, setOpen] = useState(false)
  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const t = window.setTimeout(() => setOpen(true), DELAY_MS)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    onOpenChange(open)
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    button.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open, onOpenChange])

  if (!open) return null

  // Not saved anywhere: the declaration shows again on every fresh visit or page reload
  const agree = () => setOpen(false)

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-accent-dark/80 p-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="declaration-title"
        // Esc is swallowed: the only ways out are the two buttons
        onKeyDown={(e) => {
          if (e.key === 'Escape') e.preventDefault()
        }}
        className="flex max-h-[92vh] w-full max-w-2xl animate-zoom-in flex-col overflow-hidden rounded-2xl bg-white shadow-glow"
      >
        <div aria-hidden="true" className="h-1.5 shrink-0 bg-tricolor" />
        <div className="overflow-y-auto px-5 py-6 sm:px-8">
          <h2 id="declaration-title" className="flex items-center gap-2 text-2xl font-bold text-accent">
            <Icon name="shield" size={26} className="text-gold" /> Declaration
          </h2>
          <div className="mt-4 space-y-4 text-justify text-sm leading-relaxed text-muted [text-wrap:pretty] sm:text-base">
            <p>
              Under the <strong className="font-semibold text-ink">Chartered Accountants Act, 1949</strong> and the guidelines issued by the{' '}
              <strong className="font-semibold text-ink">Institute of Chartered Accountants of India (ICAI)</strong>, Chartered Accountants may not
              solicit clients or professional work, whether directly or indirectly. This website exists only to share general information about{' '}
              {site.name} and the services the firm provides.
            </p>
            <p className="font-semibold text-ink">By selecting “I Agree”, you confirm that:</p>
            <ol className="space-y-3">
              {points.map((p, i) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold-light text-sm font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">{p}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <a
              href="https://www.google.com"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border-2 border-accent/40 px-8 py-3 font-semibold text-accent transition duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-white active:translate-y-0 active:scale-95 sm:w-auto"
            >
              I Do Not Agree
            </a>
            <button
              ref={button}
              type="button"
              onClick={agree}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border-2 border-gold bg-gold-light px-8 py-3 font-semibold text-accent shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-gold hover:text-white active:translate-y-0 active:scale-95 sm:w-auto"
            >
              I Agree <Icon name="check" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
