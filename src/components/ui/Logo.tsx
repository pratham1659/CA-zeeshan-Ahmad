import logo from '../../asset/logo.webp'

interface LogoProps {
  size?: number
  className?: string
}

// CA India mark, 2x WebP with transparent background; size is the rendered height in px
export default function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <img
      src={logo}
      alt="CA logo"
      height={size}
      width={Math.round((size * 1058) / 747)}
      decoding="async"
      className={className}
      style={{ height: size, width: 'auto' }}
    />
  )
}
