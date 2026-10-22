import Icon, { type IconName } from './Icon'

interface IconBadgeProps {
  name: IconName
  size?: number
  round?: boolean
  tone?: 'green' | 'saffron'
  className?: string
}

const tones = {
  green: 'bg-leaf/15 text-leaf-dark group-hover:bg-leaf group-hover:text-white',
  saffron: 'bg-gold/15 text-gold group-hover:bg-gold group-hover:text-white',
}

export default function IconBadge({ name, size = 28, round = false, tone = 'green', className = '' }: IconBadgeProps) {
  return (
    <span
      className={`grid size-14 shrink-0 place-items-center transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-active:scale-95 ${tones[tone]} ${
        round ? 'rounded-full' : 'rounded-2xl'
      } ${className}`}
    >
      <Icon name={name} size={size} />
    </span>
  )
}
