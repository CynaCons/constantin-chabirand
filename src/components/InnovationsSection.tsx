import { Sparkles } from 'lucide-react'
import type { Innovation } from '../types'

export default function InnovationsSection({ items }: { items: Innovation[] }) {
  return (
    <section aria-label="Recent innovations">
      <div className="mb-3 flex items-center gap-2">
        <Sparkles className="h-3.5 w-3.5 text-cyan" aria-hidden="true" />
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted">
          Recent innovations
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((it) => {
          const accent = `var(--color-${it.accent})`
          return (
            <article
              key={it.title}
              className="rounded-lg border border-border-dim bg-elevated p-4"
              style={{ borderLeft: `3px solid ${accent}` }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-[0.95rem] font-semibold leading-snug text-primary">
                  {it.title}
                </h3>
                <span className="shrink-0 font-mono text-[0.65rem] text-muted">{it.year}</span>
              </div>
              <p className="mt-2 text-[0.83rem] leading-relaxed text-secondary">{it.blurb}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
