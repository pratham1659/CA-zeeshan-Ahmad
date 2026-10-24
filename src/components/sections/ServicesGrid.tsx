import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import RichText from '../ui/RichText'
import Card from '../ui/Card'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import IconBadge from '../ui/IconBadge'
import ServiceArt from '../ui/ServiceArt'
import { services, type Service } from '../../data/services'

function Heading({ children }: { children: ReactNode }) {
  return <h4 className="mt-6 border-b-2 border-gold/60 pb-1 text-base font-bold text-accent inline-block">{children}</h4>
}

const LONG_TEXT = 600

function textLength(s: Service) {
  return (
    s.intro.join('').length +
    (s.points?.join('').length ?? 0) +
    (s.sections?.reduce((n, sec) => n + sec.title.length + sec.text.length, 0) ?? 0)
  )
}

// Text starts collapsed to a few lines on mobile; on desktop only the longer services collapse
function Detail({ s }: { s: Service }) {
  const { hash } = useLocation()
  const [open, setOpen] = useState(hash === `#${s.id}`)

  // opening a service via a "Read more" link from the home page expands it
  useEffect(() => {
    if (hash === `#${s.id}`) setOpen(true)
  }, [hash, s.id])

  const long = textLength(s) > LONG_TEXT
  const more = open ? '' : long ? 'hidden' : 'max-md:hidden'
  const clamp = open ? '' : long ? 'line-clamp-3' : 'max-md:line-clamp-3'
  return (
    <>
      <div className="space-y-3 text-muted">
        {s.intro.map((p, i) => (
          <p key={p} className={i === 0 ? clamp : more}>
            <RichText text={p} />
          </p>
        ))}
      </div>
      {s.points && (
        <ul className={`mt-4 space-y-2 text-sm ${more}`}>
          {s.points.map((p) => (
            <li key={p} className="flex gap-2">
              <Icon name="check" size={18} className="mt-0.5 shrink-0 text-leaf-dark" />
              {p}
            </li>
          ))}
        </ul>
      )}
      {s.sections?.map((sec) => (
        <div key={sec.title} className={more}>
          <Heading>{sec.title}</Heading>
          <p className="mt-2 text-sm text-muted">{sec.text}</p>
        </div>
      ))}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`mt-3 inline-flex min-h-11 items-center gap-1 font-semibold text-accent transition active:scale-95 ${long ? '' : 'md:hidden'}`}
      >
        {open ? 'Show less' : 'Read more'}
        <Icon name="arrow" size={16} className={open ? '-rotate-90' : 'rotate-90'} />
      </button>
    </>
  )
}

// Full card on the Services page; glows briefly when opened from a link like /services#valuation
function DetailCard({ s }: { s: Service }) {
  const { hash, key } = useLocation()
  const [glow, setGlow] = useState(false)

  useEffect(() => {
    if (hash !== `#${s.id}`) return
    setGlow(true)
    const t = window.setTimeout(() => setGlow(false), 4000)
    return () => window.clearTimeout(t)
  }, [hash, key, s.id])

  return (
    <Reveal variant="zoom">
      <Card
        id={s.id}
        className={`group grid scroll-mt-24 gap-6 hover:border-leaf hover:shadow-glow md:grid-cols-[18rem_1fr] ${
          glow ? 'animate-glow border-gold ring-2 ring-gold' : ''
        }`}
      >
        <div>
          <ServiceArt id={s.id} className="aspect-[16/9] w-full rounded-xl" />
          <div className="mt-4 flex items-center gap-3">
            <IconBadge name={s.icon} />
            <h3 className="text-xl font-bold">{s.title}</h3>
          </div>
        </div>
        <div>
          <Detail s={s} />
        </div>
      </Card>
    </Reveal>
  )
}

// Home: image, icon, title and a Read more link. Services page (detailed): full text per service.
export default function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  if (detailed) {
    return (
      <div className="space-y-8">
        {services.map((s) => (
          <DetailCard key={s.id} s={s} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.id} delay={(i % 3) * 120} variant="zoom" className="h-full">
          <Card className="group flex h-full flex-col hover:border-leaf hover:shadow-glow">
            <ServiceArt id={s.id} className="-mx-6 -mt-6 mb-5 aspect-[16/9] w-[calc(100%+3rem)] max-w-none rounded-t-2xl" />
            <div className="flex items-center gap-3">
              <IconBadge name={s.icon} />
              <h3 className="text-lg font-bold leading-snug">{s.title}</h3>
            </div>
            <div className="mt-auto pt-5">
              <Button to={`/services#${s.id}`} variant="secondary">
                Read more <Icon name="arrow" size={18} />
              </Button>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
