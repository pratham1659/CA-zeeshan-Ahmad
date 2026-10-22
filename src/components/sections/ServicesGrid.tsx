import Card from '../ui/Card'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import IconBadge from '../ui/IconBadge'
import { services } from '../../data/services'

export default function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.id} delay={(i % 3) * 120} variant="zoom" className="h-full">
        <Card id={s.id} className="group h-full hover:border-leaf hover:shadow-glow">
          <IconBadge name={s.icon} className="mb-4" />
          <h3 className="text-xl font-bold">{s.title}</h3>
          <p className="mt-2 text-muted">{s.summary}</p>
          {detailed && (
            <ul className="mt-4 space-y-2 text-sm">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <Icon name="check" size={18} className="shrink-0 text-leaf-dark" />
                  {p}
                </li>
              ))}
            </ul>
          )}
        </Card>
        </Reveal>
      ))}
    </div>
  )
}
