import type { CurrentItem } from '../types'
import { useInView } from '../hooks/useInView'

export default function CurrentStrip({ items }: { items: CurrentItem[] }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} id="now" aria-labelledby="now-h" className={inView ? 'fade-up' : 'opacity-0'}>
      <h2 id="now-h" className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent">
        Currently working on
      </h2>
      <ul className="mt-4 divide-y divide-rule border-y border-rule">
        {items.map((it) => (
          <li key={it.title} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="font-display text-[1.0625rem] font-semibold text-ink sm:w-1/3 sm:shrink-0">
              {it.title}
            </span>
            <span className="flex-1 font-body text-[0.95rem] leading-[1.55] text-muted">{it.blurb}</span>
            <span className="font-mono text-[0.68rem] uppercase tracking-wide text-faint sm:text-right">
              {it.context}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
