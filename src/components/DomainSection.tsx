import { useState } from 'react'
import type { Domain } from '../types'
import { useInView } from '../hooks/useInView'

const DEFAULT_SHOWN = 3

export default function DomainSection({
  domain,
  company,
  period,
  sectionId,
  onOpenProject,
}: {
  domain: Domain
  company: string
  period: string
  sectionId: string
  onOpenProject: (projectId: string) => void
}) {
  const [open, setOpen] = useState(false)
  const { ref, inView } = useInView<HTMLElement>()
  const color = `var(--color-${domain.key})`
  const head = domain.projects.slice(0, DEFAULT_SHOWN)
  const rest = domain.projects.slice(DEFAULT_SHOWN)

  return (
    <section
      ref={ref}
      id={sectionId}
      aria-labelledby={`${sectionId}-h`}
      className={`scroll-mt-24 ${inView ? 'fade-up' : 'opacity-0'}`}
    >
      {/* Header */}
      <div className="flex items-baseline justify-between border-l-[3px] pl-4" style={{ borderColor: color }}>
        <h2
          id={`${sectionId}-h`}
          className="font-display text-[1.05rem] font-semibold uppercase tracking-[0.12em] text-ink"
          style={{ fontVariant: 'small-caps' }}
        >
          {domain.label}
        </h2>
        <span className="font-mono text-[0.75rem] text-faint">
          {company} · {period}
        </span>
      </div>
      <p className="mt-3 pl-4 font-body text-[1.0625rem] italic leading-[1.5] text-muted">{domain.tagline}</p>

      {/* Project rows */}
      <div className="mt-5 space-y-5 pl-4">
        {head.map((p) => (
          <ProjectRow key={p.id} title={p.title} role={p.role} period={p.period} summary={p.summary} onOpen={() => onOpenProject(p.id)} />
        ))}
      </div>

      {rest.length > 0 && (
        <>
          <div className={`collapse-grid ${open ? 'open' : ''}`}>
            <div className="collapse-inner">
              <div className="mt-5 space-y-5 pl-4">
                {rest.map((p) => (
                  <ProjectRow key={p.id} title={p.title} role={p.role} period={p.period} summary={p.summary} onOpen={() => onOpenProject(p.id)} />
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="mt-4 pl-4 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-accent underline decoration-1 underline-offset-2 hover:underline-offset-4"
          >
            {open ? '↑ Collapse' : `↗ ${rest.length} more ${rest.length === 1 ? 'project' : 'projects'}`}
          </button>
        </>
      )}
    </section>
  )
}

function ProjectRow({
  title,
  role,
  period,
  summary,
  onOpen,
}: {
  title: string
  role: string
  period: string
  summary: string
  onOpen: () => void
}) {
  return (
    <button onClick={onOpen} className="group block w-full text-left">
      <h3 className="font-display text-[1.15rem] font-semibold leading-snug text-accent decoration-1 underline-offset-2 group-hover:underline">
        {title} <span aria-hidden="true">→</span>
      </h3>
      <p className="mt-0.5 font-mono text-[0.78rem] text-faint">
        {role} · {period}
      </p>
      <p className="mt-1.5 font-body text-[1rem] leading-[1.6] text-muted">{summary}</p>
    </button>
  )
}
