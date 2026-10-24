import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { site } from '../../data/site'

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-dark to-accent p-8 text-center text-white shadow-glow sm:p-12">
          <div aria-hidden="true" className="absolute -right-16 -top-16 size-64 rounded-full bg-gold/40 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-20 -left-10 size-56 rounded-full bg-leaf/30 blur-3xl" />
          <h2 className="relative text-2xl font-bold sm:text-3xl">Ready to simplify your finances?</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-white/85">
            Book a free 30 minute consultation and get clear answers to your tax and compliance questions.
          </p>
          <div className="relative mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Button to="/contact">
              Book a free consultation
            </Button>
            <Button
              variant="secondary"
              className="!border-white/70 !bg-transparent !text-white hover:!border-white hover:!bg-white/15"
              href={site.phones[2].href}
            >
              Call {site.phones[2].display}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
