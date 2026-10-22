interface LogoProps {
  size?: number
  className?: string
}

// "CA" mark in Ateneo Blue
export default function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="CA logo" className={className}>
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="28"
        fill="#023C6C"
      >
        CA
      </text>
    </svg>
  )
}
