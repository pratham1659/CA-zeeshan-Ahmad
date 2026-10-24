import Card from '../ui/Card'
import Reveal from '../ui/Reveal'
import type { IconName } from '../ui/Icon'
import IconBadge from '../ui/IconBadge'

const reasons: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'shield',
    title: 'Integrated expertise',
    text: 'Financial, tax and legal perspectives under one roof, so you get practical, forward looking advice.',
  },
  {
    icon: 'chat',
    title: 'Clarity and precision',
    text: 'Complex statutory requirements explained plainly, aligned with your long-term business objectives.',
  },
  {
    icon: 'users',
    title: 'Trust and transparency',
    text: 'A client centric approach built on integrity, confidentiality, responsiveness and accountability.',
  },
]

export default function WhyChooseUs() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {reasons.map((r, i) => (
        <Reveal key={r.title} delay={i * 150} className="h-full">
        <Card className="group h-full text-center">
          <IconBadge name={r.icon} tone="saffron" round className="mx-auto mb-4" />
          <h3 className="text-lg font-bold">{r.title}</h3>
          <p className="mt-2 text-muted">{r.text}</p>
        </Card>
        </Reveal>
      ))}
    </div>
  )
}
