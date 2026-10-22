import Section from '../components/ui/Section'
import ServicesGrid from '../components/sections/ServicesGrid'
import CtaBanner from '../components/sections/CtaBanner'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Services() {
  usePageTitle('Services')
  return (
    <>
      <Section eyebrow="Services" title="How we can help" intro="Choose a service below or reach out and we will recommend the right plan for you.">
        <ServicesGrid detailed />
      </Section>
      <CtaBanner />
    </>
  )
}
