import type { ReactNode } from 'react'

interface SectionProps {
  title?: string
  eyebrow?: string
  intro?: ReactNode
  children: ReactNode
  id?: string
}

export default function Section({ title, eyebrow, intro, children, id }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
      {title && (
        <header className="mx-auto mb-10 max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-gold" />
              {eyebrow}
              <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-leaf" />
            </p>
          )}
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          <div aria-hidden="true" className="mx-auto mt-4 flex h-1 w-20 overflow-hidden rounded-full">
            <span className="w-1/2 bg-gold" />
            <span className="w-1/2 bg-leaf" />
          </div>
          {intro && <p className="mt-4 text-muted">{intro}</p>}
        </header>
      )}
      {children}
    </section>
  )
}
