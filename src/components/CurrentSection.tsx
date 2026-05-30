import type { CurrentItem } from '../types'

export default function CurrentSection({ items }: { items: CurrentItem[] }) {
  return (
    <section
      aria-label="Currently working on"
      className="mt-8 overflow-hidden rounded-lg border border-border-active bg-elevated/80"
      style={{ boxShadow: '0 0 0 1px rgba(0,200,255,0.06), 0 0 40px rgba(0,200,255,0.05)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-border-dim bg-panel px-5 py-3">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 led-pulse" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
        </span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-green">
          Active
        </span>
        <h2 className="font-display text-sm font-semibold text-primary">
          What I'm working on now
        </h2>
      </div>

      {/* Items */}
      <div className="grid gap-px bg-border-dim sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => {
          const accent = `var(--color-${it.accent})`
          return (
            <article key={it.title} className="flex flex-col bg-elevated p-5">
              <span
                className="font-mono text-[0.6rem] uppercase tracking-wide"
                style={{ color: accent }}
              >
                {it.context}
              </span>
              <h3 className="mt-1.5 font-display text-[1rem] font-semibold leading-snug text-primary">
                {it.title}
              </h3>
              <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-secondary">{it.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {it.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border bg-panel px-1.5 py-0.5 font-mono text-[0.58rem] text-secondary"
                    style={{ borderColor: `${accent}55` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
