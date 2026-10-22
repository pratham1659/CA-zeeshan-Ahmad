import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary'

const base =
  'group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 disabled:opacity-60'
const variants: Record<Variant, string> = {
  primary: 'border-2 border-gold bg-gold-light text-accent shadow-soft hover:bg-gold hover:text-white hover:shadow-glow',
  secondary: 'border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white',
}

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined }
type LinkProps = CommonProps & { to: string; href?: undefined }
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined }

export default function Button(props: ButtonProps | LinkProps | AnchorProps) {
  const { variant = 'primary', className = '', children } = props
  const cls = `${base} ${variants[variant]} ${className}`

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={cls}>
        {children}
      </Link>
    )
  }
  if (props.href !== undefined) {
    const { variant: _v, className: _c, children: _ch, to: _t, ...anchor } = props
    return (
      <a className={cls} {...anchor}>
        {children}
      </a>
    )
  }
  const { variant: _v, className: _c, children: _ch, to: _t, href: _h, ...button } = props
  return (
    <button className={cls} {...button}>
      {children}
    </button>
  )
}
