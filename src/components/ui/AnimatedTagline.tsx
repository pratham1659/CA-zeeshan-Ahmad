// Tagline in bold italic serif, in the usual muted colour: every word bobs up and down in turn, endlessly
export default function AnimatedTagline({ text }: { text: string }) {
  return (
    <span aria-label={text} className="inline-block whitespace-nowrap font-display text-[clamp(10px,3.3vw,16px)] font-bold italic text-muted sm:whitespace-normal sm:text-base">
      {text.split(' ').map((w, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{ animationDelay: `${i * 160}ms` }}
          className="mr-[0.3em] inline-block animate-[wave_2.4s_ease-in-out_infinite]"
        >
          {w}
        </span>
      ))}
    </span>
  )
}
