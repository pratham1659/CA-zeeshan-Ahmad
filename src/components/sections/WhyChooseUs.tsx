import Card from '../ui/Card'
import Reveal from '../ui/Reveal'
import type { IconName } from '../ui/Icon'
import IconBadge from '../ui/IconBadge'

const reasons: { icon: IconName; title: string; text: string }[] = [
  { icon: 'shield', title: 'Trusted & certified', text: 'ICAI-qualified professionals with years of hands-on experience.' },
  { icon: 'clock', title: 'Always on time', text: 'Deadlines are tracked for you, so you never pay a late fee.' },
  { icon: 'chat', title: 'Plain-language advice', text: 'No jargon. We explain what matters and what to do next.' },
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
