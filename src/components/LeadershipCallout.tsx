import { Users } from 'lucide-react'
import type { LeadershipBlock } from '../types'

export default function LeadershipCallout({ data }: { data: LeadershipBlock }) {
  const accent = 'var(--color-domain-auto)' // violet — the T&S / automotive era
  return (
    <section
      aria-label={data.title}
      className="overflow-hidden rounded-lg border border-border-dim bg-elevated"
      style={{ borderLeft: `3px solid ${accent}` }}
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2.5">
          <span className="rounded-md p-2" style={{ backgroundColor: `${accent}22`, color: accent }}>
            <Users className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="font-display text-lg font-semibold text-primary">{data.title}</h2>
        </div>

        <p className="mt-3 max-w-[68ch] text-[0.95rem] leading-relaxed text-secondary">
          {data.tagline}
        </p>

        {/* Metrics */}
        <div className="mt-4 flex flex-wrap gap-2">
          {data.metrics.map((m) => (
            <span
              key={m}
              className="rounded-md border px-2.5 py-1 font-mono text-[0.7rem] font-medium"
              style={{ borderColor: `${accent}55`, color: accent }}
            >
              {m}
            </span>
          ))}
        </div>

        {/* Bullets */}
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {data.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-[0.875rem] leading-relaxed text-secondary">
              <span className="mt-1.5 shrink-0" style={{ color: accent }}>
                ◆
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
