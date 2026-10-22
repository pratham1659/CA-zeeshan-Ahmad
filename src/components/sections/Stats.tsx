import Icon from '../ui/Icon'
import CountUp from '../ui/CountUp'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/stats'

export default function Stats() {
  return (
    <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 100} variant="zoom">
        <div className="rounded-2xl border border-accent/15 bg-white p-6 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow active:scale-95">
          <span className="mx-auto mb-3 grid size-12 place-items-center rounded-full bg-leaf/15 text-leaf-dark">
            <Icon name={s.icon} size={24} />
          </span>
          <dt className="sr-only">{s.label}</dt>
          <dd className="font-display text-3xl font-bold text-gold sm:text-4xl"><CountUp value={s.value} /></dd>
          <p aria-hidden="true" className="mt-1 text-sm text-muted">
            {s.label}
          </p>
        </div>
        </Reveal>
      ))}
    </dl>
  )
}
