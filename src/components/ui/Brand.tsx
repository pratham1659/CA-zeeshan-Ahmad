import Logo from './Logo'
import { site } from '../../data/site'

// CA mark, then the firm name underlined in blue with the profession in green below
export default function Brand({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Logo size={40} className="shrink-0" />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-bold text-accent underline decoration-2 underline-offset-4 sm:text-xl">
          {site.name}
        </span>
        {/* w-0 min-w-full: the line takes the width of the firm name above, and the letters spread across it */}
        <span
          role="img"
          aria-label="Chartered Accountants"
          className="mt-1 flex w-0 min-w-full justify-between text-[10px] font-extrabold uppercase text-[#55B848] sm:text-[11px]"
        >
          {[...'Chartered Accountants'].map((ch, i) => (
            <span key={i} aria-hidden="true">
              {ch === ' ' ? '\u00a0' : ch}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}
