import type { Innovation } from '../types'
import { useInView } from '../hooks/useInView'

export default function InnovationsList({ items }: { items: Innovation[] }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} aria-labelledby="innov-h" className={inView ? 'fade-up' : 'opacity-0'}>
      <h2 id="innov-h" className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent">
        Recent innovations
      </h2>
      <div className="mt-4 grid gap-x-10 border-t border-rule sm:grid-cols-2">
        {items.map((it) => (
          <article key={it.title} className="border-b border-rule py-4">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-[1.05rem] font-semibold leading-snug text-ink">{it.title}</h3>
              <span className="font-mono text-[0.72rem] text-faint">{it.year}</span>
            </div>
            <p className="mt-1.5 font-body text-[0.95rem] leading-[1.55] text-muted">{it.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
