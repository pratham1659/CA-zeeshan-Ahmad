import type { HTMLAttributes } from 'react'

export default function Card({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-2xl bg-white p-6 border border-accent/15 shadow-card transition duration-300 hover:-translate-y-1 active:scale-[0.98] ${className}`} {...rest} />
}
