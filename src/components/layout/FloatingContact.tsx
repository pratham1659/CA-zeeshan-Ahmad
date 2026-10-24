import { useState } from 'react'
import Icon from '../ui/Icon'
import { site } from '../../data/site'

// Mobile-only call and WhatsApp buttons; the close button hides them until the page is reloaded
export default function FloatingContact() {
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-center gap-3 md:hidden">
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss call and WhatsApp buttons"
        className="grid size-7 place-items-center rounded-full bg-accent-dark/80 text-white shadow-soft transition active:scale-90"
      >
        <Icon name="close" size={16} />
      </button>
      <a
        href={site.phoneHref}
        aria-label="Call us"
        className="grid size-14 place-items-center rounded-full bg-accent text-white shadow-glow transition active:scale-90"
      >
        <Icon name="phone" />
      </a>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid size-14 place-items-center rounded-full bg-leaf text-white shadow-glow transition active:scale-90"
      >
        <Icon name="whatsapp" />
      </a>
    </div>
  )
}
