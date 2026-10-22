import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Stats from '../components/sections/Stats'
import CtaBanner from '../components/sections/CtaBanner'
import Icon from '../components/ui/Icon'
import { usePageTitle } from '../hooks/usePageTitle'

const timeline = [
  { year: '2012', text: 'Qualified as a Chartered Accountant (ICAI).' },
  { year: '2014', text: 'Started independent practice focused on tax and GST.' },
  { year: '2018', text: 'Expanded into audit, advisory and company law services.' },
  { year: '2023', text: 'Crossed 800 clients across India with a growing team.' },
]

const credentials = ['Associate Member, ICAI (Membership No. 000000)', 'Certified in GST and Indirect Taxation', 'Diploma in Information Systems Audit (DISA)']

export default function About() {
  usePageTitle('About')
  return (
    <>
      <Section eyebrow="About us" title="Meet CA Zeeshan Ahmed" intro="A practice built on clarity, honesty and long-term relationships.">
        <div className="grid items-start gap-10 md:grid-cols-5">
          <div className="mx-auto grid aspect-square w-full max-w-xs place-items-center rounded-2xl bg-gradient-to-br from-accent-dark to-accent border-b-8 border-gold shadow-glow md:col-span-2">
            <span className="font-display text-7xl font-bold text-gold-light">ZA</span>
          </div>
          <div className="space-y-4 text-muted md:col-span-3">
            <p>
              With over 12 years in practice, I help individuals, startups and established businesses stay compliant,
              save tax legally and make confident financial decisions.
            </p>
            <p>
              My approach is simple: explain things in plain language, meet every deadline, and treat every client&apos;s
              finances as if they were my own.
            </p>
            <ul className="space-y-2 pt-2">
              {credentials.map((c) => (
                <li key={c} className="flex gap-2 text-ink">
                  <Icon name="check" size={20} className="shrink-0 text-leaf-dark" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <Stats />
      </Section>

      <Section eyebrow="Our journey" title="Experience timeline">
        <ol className="mx-auto max-w-2xl space-y-6">
          {timeline.map((t) => (
            <li key={t.year}>
              <Card className="flex items-center gap-5">
                <span className="text-2xl font-extrabold text-gold">{t.year}</span>
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
