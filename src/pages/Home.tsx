import Button from '../components/ui/Button'
import Logo from '../components/ui/Logo'
import Icon from '../components/ui/Icon'
import Carousel from '../components/ui/Carousel'
import Section from '../components/ui/Section'
import Accordion from '../components/ui/Accordion'
import Reveal from '../components/ui/Reveal'
import { faqs } from '../data/faqs'
import ServicesGrid from '../components/sections/ServicesGrid'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Stats from '../components/sections/Stats'
import CtaBanner from '../components/sections/CtaBanner'
import { site } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle()
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-gold/10 via-white to-leaf/20">
        <div aria-hidden="true" className="absolute -left-24 -top-24 size-80 rounded-full bg-gold/35 blur-3xl [transform:translateY(calc(var(--scroll-y,0)*0.15*1px))]" />
        <div aria-hidden="true" className="absolute -bottom-32 right-0 size-96 rounded-full bg-leaf/35 blur-3xl [transform:translateY(calc(var(--scroll-y,0)*-0.1*1px))]" />
        <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold bg-gold-light px-4 py-1.5 text-sm font-semibold text-accent-dark">
              <span className="size-2 rounded-full bg-gold" /> Chartered Accountants
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Chartered Accountants you can{' '}
              <span className="bg-gradient-to-r from-accent via-accent to-leaf bg-clip-text text-transparent">trust with your numbers</span>
            </h1>
            <p className="mt-5 text-lg text-muted">{site.description}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact" className="shadow-glow">
                Book a free consultation <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button to="/services" variant="secondary">
                Explore services
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {['ICAI certified', '12+ years experience', '800+ clients'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" size={16} className="text-leaf-dark" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-right"><div className="animate-float">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-accent-dark to-accent p-8 text-white shadow-glow border-t-4 border-gold transition duration-500 hover:rotate-1 hover:scale-[1.02]">
              <span className="inline-grid size-16 place-items-center rounded-2xl bg-white"><Logo size={52} /></span>
              <p className="mt-2 text-white/85">Your trusted finance partner</p>
              <ul className="mt-6 space-y-3 text-sm">
                {['Tax & GST filing on time', 'Audit and assurance', 'Plain-language advice'].map((t) => (
                  <li key={t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                    <Icon name="check" size={18} className="shrink-0 text-leaf" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </section>
      </div>

      <Carousel />

      <Section eyebrow="What we do" title="Services for every stage" intro="From your first tax return to a company audit, we handle the numbers so you can focus on what you do best.">
        <ServicesGrid />
        <div className="mt-10 text-center">
          <Button to="/services" variant="secondary">
            View all services
          </Button>
        </div>
      </Section>

      <Section eyebrow="Why us" title="Why clients choose us">
        <WhyChooseUs />
      </Section>

      <Section>
        <Stats />
      </Section>

      <Section eyebrow="FAQ" title="Common questions">
        <Reveal>
          <Accordion items={faqs} />
        </Reveal>
      </Section>

      <CtaBanner />
    </>
  )
}
