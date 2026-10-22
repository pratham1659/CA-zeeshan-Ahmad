export interface AccordionItem {
  question: string
  answer: string
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-accent/15 bg-white px-6 py-4 shadow-soft open:shadow-card"
        >
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
