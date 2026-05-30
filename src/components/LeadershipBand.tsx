import { useState } from 'react'
import type { LeadershipBlock } from '../types'

export default function LeadershipBand({ data }: { data: LeadershipBlock }) {
  const [open, setOpen] = useState(false)
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-h"
      className="scroll-mt-24 rounded-[2px] border border-rule bg-inset px-6 py-8 sm:px-10 sm:py-10"
    >
      <h2 id="leadership-h" className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent">
        {data.title}
      </h2>
      <p className="mt-3 max-w-[60ch] font-body text-[1.25rem] italic leading-[1.45] text-ink">
        {data.tagline}
      </p>

      {/* Metrics */}
      <div className="mt-7 grid gap-6 sm:grid-cols-3">
        {data.metrics.map((m) => (
          <div key={m} className="border-t border-rule pt-3">
            <p className="font-display text-[1.6rem] font-medium leading-tight" style={{ color: 'var(--color-accent)' }}>
              {m}
            </p>
          </div>
        ))}
      </div>

      {/* Full story (collapsible) */}
      <div className={`collapse-grid mt-2 ${open ? 'open' : ''}`}>
        <div className="collapse-inner">
          <ul className="mt-5 space-y-3">
            {data.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 font-body text-[1rem] leading-[1.6] text-muted">
                <span className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full" style={{ background: 'var(--color-accent)' }} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-5 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-accent underline decoration-1 underline-offset-2 hover:underline-offset-4"
      >
        {open ? '↑ Less' : 'The full story →'}
      </button>
    </section>
  )
}
