// Simple on-brand illustration for each service (blue background, white line art, orange and green accents)
const O = '#F37920'
const G = '#55B848'

const scenes: Record<string, React.ReactNode> = {
  'direct-taxation': (
    <>
      <rect x="100" y="30" width="90" height="118" rx="8" fill="#fff" />
      <path d="M116 56h58M116 74h58M116 92h38" stroke="#023C6C" strokeWidth="5" strokeLinecap="round" />
      <path d="M116 118h24" stroke={G} strokeWidth="5" strokeLinecap="round" />
      <circle cx="198" cy="112" r="30" fill={O} />
      <path d="M186 124l24-24" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <circle cx="187" cy="102" r="4.5" fill="#fff" />
      <circle cx="209" cy="122" r="4.5" fill="#fff" />
    </>
  ),
  'indirect-taxation': (
    <>
      <path d="M104 28h112v124l-14-9-14 9-14-9-14 9-14-9-14 9-14-9-14 9Z" fill="#fff" />
      <text x="160" y="62" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="22" fill="#023C6C">GST</text>
      <path d="M122 82h76M122 98h76M122 114h44" stroke="#023C6C" strokeWidth="5" strokeLinecap="round" opacity=".35" />
      <circle cx="206" cy="116" r="24" fill={G} />
      <path d="M197 125l18-18" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="198" cy="108" r="3.5" fill="#fff" />
      <circle cx="214" cy="124" r="3.5" fill="#fff" />
    </>
  ),
  'audit-assurance': (
    <>
      <rect x="92" y="32" width="88" height="112" rx="8" fill="#fff" />
      <path d="M108 58h56M108 76h56M108 94h30" stroke="#023C6C" strokeWidth="5" strokeLinecap="round" opacity=".4" />
      <circle cx="184" cy="98" r="30" fill="#fff" fillOpacity=".15" stroke="#fff" strokeWidth="7" />
      <path d="M206 120l24 24" stroke="#fff" strokeWidth="9" strokeLinecap="round" />
      <path d="M170 98l10 10 18-20" stroke={G} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  rera: (
    <>
      <rect x="96" y="50" width="70" height="98" rx="4" fill="#fff" />
      <rect x="166" y="80" width="58" height="68" rx="4" fill="#fff" fillOpacity=".75" />
      <g fill="#023C6C" opacity=".45">
        <rect x="108" y="64" width="14" height="14" /><rect x="140" y="64" width="14" height="14" />
        <rect x="108" y="90" width="14" height="14" /><rect x="140" y="90" width="14" height="14" />
        <rect x="108" y="116" width="14" height="14" /><rect x="178" y="94" width="14" height="14" />
        <rect x="200" y="94" width="14" height="14" /><rect x="178" y="118" width="14" height="14" />
      </g>
      <rect x="143" y="122" width="16" height="26" fill={O} />
      <path d="M86 148h150" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <circle cx="222" cy="52" r="20" fill={G} />
      <path d="M212 52l7 7 12-14" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  valuation: (
    <>
      <path d="M92 148h136" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <rect x="104" y="108" width="24" height="40" rx="3" fill="#fff" />
      <rect x="138" y="84" width="24" height="64" rx="3" fill={G} />
      <rect x="172" y="60" width="24" height="88" rx="3" fill="#fff" />
      <rect x="206" y="36" width="24" height="112" rx="3" fill={O} />
      <path d="M104 90l34-24 34-6 44-26" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="1 9" />
    </>
  ),
  'company-llp': (
    <>
      <rect x="96" y="62" width="128" height="86" rx="12" fill="#fff" />
      <path d="M138 62v-10a8 8 0 0 1 8-8h28a8 8 0 0 1 8 8v10" stroke="#fff" strokeWidth="7" fill="none" />
      <path d="M96 100h128" stroke="#023C6C" strokeWidth="5" opacity=".35" />
      <rect x="148" y="92" width="24" height="18" rx="4" fill={O} />
      <circle cx="224" cy="52" r="18" fill={G} />
      <path d="M215 52l7 7 12-13" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  'roc-compliance': (
    <>
      <rect x="92" y="38" width="136" height="110" rx="12" fill="#fff" />
      <path d="M92 70h136V50a12 12 0 0 0-12-12H104a12 12 0 0 0-12 12Z" fill={O} />
      <path d="M122 28v20M198 28v20" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
      <g fill="#023C6C" opacity=".35">
        <rect x="108" y="84" width="16" height="12" rx="2" /><rect x="136" y="84" width="16" height="12" rx="2" />
        <rect x="164" y="84" width="16" height="12" rx="2" /><rect x="108" y="108" width="16" height="12" rx="2" />
        <rect x="136" y="108" width="16" height="12" rx="2" />
      </g>
      <rect x="192" y="84" width="16" height="12" rx="2" fill={G} />
      <rect x="164" y="108" width="16" height="12" rx="2" fill={G} />
    </>
  ),
  'consultancy-advisory': (
    <>
      <path d="M92 44h96a10 10 0 0 1 10 10v44a10 10 0 0 1-10 10h-60l-22 18v-18h-14a10 10 0 0 1-10-10V54a10 10 0 0 1 10-10Z" fill="#fff" />
      <path d="M108 64h64M108 82h40" stroke="#023C6C" strokeWidth="5" strokeLinecap="round" opacity=".4" />
      <path d="M212 82h30a10 10 0 0 1 10 10v30a10 10 0 0 1-10 10h-6v16l-20-16h-4a10 10 0 0 1-10-10V92a10 10 0 0 1 10-10Z" fill={G} />
      <circle cx="218" cy="107" r="4" fill="#fff" /><circle cx="232" cy="107" r="4" fill="#fff" /><circle cx="246" cy="107" r="0" fill="#fff" />
    </>
  ),
  'business-setup': (
    <>
      <path d="M92 70l12-30h112l12 30Z" fill={O} />
      <path d="M92 70a14 14 0 0 0 28 0 14 14 0 0 0 26 0 14 14 0 0 0 28 0 14 14 0 0 0 26 0 14 14 0 0 0 28 0v0Z" fill="#fff" />
      <rect x="100" y="84" width="120" height="64" fill="#fff" />
      <rect x="116" y="100" width="42" height="48" fill="#023C6C" opacity=".4" />
      <rect x="172" y="100" width="34" height="26" fill={G} />
      <path d="M90 148h140" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  'documentation-drafting': (
    <>
      <rect x="98" y="30" width="96" height="120" rx="8" fill="#fff" />
      <path d="M114 56h64M114 74h64M114 92h64M114 110h30" stroke="#023C6C" strokeWidth="5" strokeLinecap="round" opacity=".4" />
      <path d="M232 52L156 128l-8 22 22-8 76-76a14 14 0 0 0-20-20Z" fill={O} stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
      <path d="M216 68l20 20" stroke="#fff" strokeWidth="5" />
      <path d="M148 150h40" stroke={G} strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  'accounting-payroll': (
    <>
      <rect x="106" y="28" width="108" height="124" rx="12" fill="#fff" />
      <rect x="120" y="42" width="80" height="30" rx="6" fill="#023C6C" opacity=".85" />
      <text x="194" y="64" textAnchor="end" fontFamily="Georgia, serif" fontWeight="700" fontSize="18" fill="#fff">₹ 1,24,500</text>
      <g fill="#023C6C" opacity=".35">
        <circle cx="130" cy="94" r="8" /><circle cx="160" cy="94" r="8" /><circle cx="190" cy="94" r="8" />
        <circle cx="130" cy="120" r="8" /><circle cx="160" cy="120" r="8" />
        <circle cx="130" cy="144" r="0" />
      </g>
      <circle cx="190" cy="120" r="8" fill={O} />
      <rect x="122" y="134" width="76" height="10" rx="5" fill={G} />
    </>
  ),
  'trust-ngo': (
    <>
      <circle cx="160" cy="90" r="64" fill="#fff" fillOpacity=".12" />
      <path d="M160 140l-44-44a26 26 0 0 1 37-37l7 7 7-7a26 26 0 0 1 37 37Z" fill={O} />
      <circle cx="104" cy="132" r="10" fill="#fff" /><path d="M88 152a16 16 0 0 1 32 0Z" fill="#fff" />
      <circle cx="216" cy="132" r="10" fill="#fff" /><path d="M200 152a16 16 0 0 1 32 0Z" fill="#fff" />
      <circle cx="160" cy="150" r="0" />
      <path d="M142 150a18 18 0 0 1 36 0Z" fill={G} /><circle cx="160" cy="134" r="10" fill={G} />
    </>
  ),
}

export default function ServiceArt({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 320 180" role="img" aria-hidden="true" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#012a4d" />
          <stop offset="1" stopColor="#0b5394" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill={`url(#bg-${id})`} />
      <path d="M232 0h88v30c-30 6-62 18-88 34 0-30 0-50 0-64Z" fill={O} opacity=".9" />
      <path d="M262 0h58v10c-22 6-44 14-62 26Z" fill={G} opacity=".9" />
      {scenes[id]}
    </svg>
  )
}
