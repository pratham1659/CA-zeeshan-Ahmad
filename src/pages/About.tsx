import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import RichText from '../components/ui/RichText'
import Reveal from '../components/ui/Reveal'
import CtaBanner from '../components/sections/CtaBanner'
import Icon from '../components/ui/Icon'
import IconBadge from '../components/ui/IconBadge'
import photo from '../asset/photo.webp'
import { usePageTitle } from '../hooks/usePageTitle'
import {
  achievements,
  clientTypes,
  expertise,
  firmParagraphs,
  firmPillars,
  founderParagraphs,
  tagline,
  timeline,
  values,
} from '../data/about'

function Chip({ children }: { children: string }) {
  return (
    <li className="rounded-full border border-accent/20 bg-white px-3 py-1.5 text-sm font-medium text-accent shadow-soft">{children}</li>
  )
}

export default function About() {
  usePageTitle('About')
  return (
    <>
      <Section eyebrow="About us" title="Zeeshan Ahmed & Co." intro={tagline}>
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="space-y-4 text-muted lg:col-span-3">
            {firmParagraphs.map((p) => (
              <p key={p}>
                <RichText text={p} />
              </p>
            ))}
          </div>
          <div className="space-y-6 lg:col-span-2">
            <Card className="group">
              <h3 className="mb-4 text-lg font-bold">What we do</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {firmPillars.map((p) => (
                  <li key={p.title} className="flex items-center gap-3 font-medium text-ink">
                    <IconBadge name={p.icon} size={22} className="!size-11" />
                    {p.title}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Button to="/services" variant="secondary">
                  Read more <Icon name="arrow" size={18} />
                </Button>
              </div>
            </Card>
            <Card>
              <h3 className="mb-4 text-lg font-bold">Who we serve</h3>
              <ul className="flex flex-wrap gap-2">
                {clientTypes.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </ul>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <Icon name="pin" size={18} className="shrink-0 text-leaf-dark" /> Founded in 2023, office in Ranchi, Jharkhand
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section eyebrow="Our values" title="What we stand for">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 150} className="h-full">
              <Card className="group h-full text-center">
                <IconBadge name={v.icon} tone="saffron" round className="mx-auto mb-4" />
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-muted">{v.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="About founder" title="Meet ZA Zeeshan Ahmed" intro="A Chartered Accountant with a multidisciplinary foundation in law, commerce, taxation, audit and regulatory advisory.">
        <div className="grid items-start gap-10 md:grid-cols-5">
          <img
            src={photo}
            alt="CA Zeeshan Ahmed"
            width={640}
            height={810}
            decoding="async"
            className="mx-auto aspect-[4/5] w-full max-w-xs rounded-2xl object-cover object-top shadow-[0_30px_60px_-15px_rgb(2_60_108/0.45),0_12px_24px_-8px_rgb(2_60_108/0.3)] ring-1 ring-black/5 md:sticky md:top-24 md:col-span-2"
          />
          <div className="space-y-4 text-muted md:col-span-3">
            {founderParagraphs.map((p) => (
              <p key={p}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <Icon name="award" size={22} className="text-gold" /> Highlights & achievements
            </h3>
            <ul className="space-y-2">
              {achievements.map((a) => (
                <li key={a} className="flex gap-2 text-ink">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-leaf-dark" />
                  {a}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <Icon name="star" size={22} className="text-gold" /> Areas of expertise
            </h3>
            <ul className="flex flex-wrap gap-2">
              {expertise.map((e) => (
                <Chip key={e}>{e}</Chip>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Our journey" title="Experience timeline">
        <ol className="mx-auto max-w-2xl space-y-6">
          {timeline.map((t) => (
            <li key={t.label}>
              <Card className="flex items-center gap-8">
                <span className="w-32 shrink-0 text-lg font-extrabold text-gold sm:w-36 sm:text-xl">{t.label}</span>
                <p className="text-muted">{t.text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBanner />
    </>
  )
}
