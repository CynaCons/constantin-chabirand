import { useState, type CSSProperties } from 'react'
import { GitCommit, ChevronDown } from 'lucide-react'
import type { TimelineSegment, DomainKey } from '../types'

type Filter = 'all' | DomainKey

const FILTERS: { key: Filter; label: string; accent: string }[] = [
  { key: 'all', label: 'All', accent: 'var(--color-secondary)' },
  { key: 'space', label: 'Space', accent: 'var(--color-domain-space)' },
  { key: 'auto', label: 'Auto', accent: 'var(--color-domain-auto)' },
  { key: 'ai', label: 'AI', accent: 'var(--color-domain-ai)' },
]

function nodeColor(domain?: DomainKey) {
  return domain ? `var(--color-domain-${domain})` : 'var(--color-border-active)'
}

export default function GitTimeline({
  segments,
  onOpenProject,
}: {
  segments: TimelineSegment[]
  onOpenProject: (domain: string, projectId: string) => void
}) {
  const [filter, setFilter] = useState<Filter>('all')
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  const toggle = (i: number) =>
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-5 flex items-center gap-2 overflow-x-auto pb-1">
        <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted">
          branch: career
        </span>
        <span className="text-muted">·</span>
        {FILTERS.map((f) => {
          const active = filter === f.key
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-wide transition-colors ${
                active ? 'bg-overlay' : 'border-border-dim text-muted hover:text-secondary'
              }`}
              style={active ? { borderColor: f.accent, color: f.accent } : undefined}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      {/* Segments */}
      <div className="space-y-2">
        {segments.map((seg, si) => {
          const accentVar = `var(--color-${seg.accent})`
          const visible = seg.commits.filter((c) => filter === 'all' || c.domain === filter)
          if (visible.length === 0) return null

          const limit = seg.collapseAfter ?? visible.length
          const isExpanded = expanded.has(si)
          const shown = isExpanded ? visible : visible.slice(0, limit)
          const hiddenCount = visible.length - shown.length

          return (
            <div
              key={seg.company}
              className="timeline-branch relative pl-8"
              style={{ '--segment-accent': accentVar } as CSSProperties}
            >
              {/* Segment header / company ref-tag */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2">
                <span
                  className="relative z-10 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-wide"
                  style={{ borderColor: accentVar, color: accentVar, backgroundColor: 'var(--color-panel)' }}
                >
                  <GitCommit className="h-3 w-3" aria-hidden="true" />
                  {seg.company}
                </span>
                <span className="font-mono text-[0.65rem] text-muted">{seg.period}</span>
              </div>

              {/* Commits */}
              <ul className="space-y-1 pb-3">
                {shown.map((c, ci) => {
                  const clickable = !!(c.domain && c.projectId)
                  const Inner = (
                    <>
                      <span
                        className="absolute left-[-23px] top-[0.55rem] h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: nodeColor(c.domain), boxShadow: '0 0 0 2px var(--color-void)' }}
                        aria-hidden="true"
                      />
                      <span className="block text-[0.9rem] font-medium leading-snug text-primary">
                        {c.label}
                      </span>
                      {c.sublabel && (
                        <span className="mt-0.5 block font-mono text-[0.68rem] text-muted">
                          {c.sublabel}
                        </span>
                      )}
                    </>
                  )
                  return (
                    <li key={ci} className="relative">
                      {clickable ? (
                        <button
                          onClick={() => onOpenProject(c.domain as string, c.projectId as string)}
                          className="group block w-full rounded-md py-1.5 pl-1 pr-2 text-left transition-colors hover:bg-overlay/50"
                        >
                          {Inner}
                        </button>
                      ) : (
                        <div className="py-1.5 pl-1 pr-2">{Inner}</div>
                      )}
                    </li>
                  )
                })}

                {hiddenCount > 0 && (
                  <li className="relative">
                    <button
                      onClick={() => toggle(si)}
                      className="inline-flex items-center gap-1.5 py-1 pl-1 font-mono text-[0.68rem] uppercase tracking-wide text-muted transition-colors hover:text-secondary"
                    >
                      <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                      +{hiddenCount} more
                    </button>
                  </li>
                )}
                {isExpanded && seg.collapseAfter && (
                  <li>
                    <button
                      onClick={() => toggle(si)}
                      className="py-1 pl-1 font-mono text-[0.68rem] uppercase tracking-wide text-muted transition-colors hover:text-secondary"
                    >
                      collapse
                    </button>
                  </li>
                )}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
