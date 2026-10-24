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
        <span className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#55B848] sm:text-[10px]">
          Chartered Accountants
        </span>
      </span>
    </span>
  )
}
