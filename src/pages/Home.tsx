import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import Carousel from '../components/ui/Carousel'
import Section from '../components/ui/Section'
import Accordion from '../components/ui/Accordion'
import Reveal from '../components/ui/Reveal'
import { faqs } from '../data/faqs'
import ServicesGrid from '../components/sections/ServicesGrid'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import CtaBanner from '../components/sections/CtaBanner'
import RichText from '../components/ui/RichText'
import Card from '../components/ui/Card'
import IconBadge from '../components/ui/IconBadge'
import { firmPillars, firmParagraphs, tagline } from '../data/about'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle()
  return (
    <>
      <Carousel />

      <Section eyebrow="About us" title="Zeeshan Ahmed & Co." intro={tagline}>
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="space-y-4 text-justify text-muted [hyphens:auto] [text-wrap:pretty] lg:col-span-3">
            <p><RichText text={firmParagraphs[0]} /></p>
            <p><RichText text={firmParagraphs[1]} /></p>
            <div className="pt-2">
              <Button to="/about" variant="secondary">
                Read more about us <Icon name="arrow" size={18} />
              </Button>
            </div>
          </div>
          <Card className="group lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold">What we do</h3>
            <ul className="space-y-3">
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
        </div>
      </Section>

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

      <Section eyebrow="FAQ" title="Common questions">
        <Reveal>
          <Accordion items={faqs} />
        </Reveal>
      </Section>

      <CtaBanner />
    </>
  )
}
