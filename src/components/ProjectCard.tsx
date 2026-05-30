import { ArrowRight } from 'lucide-react'
import type { Project, Domain } from '../types'

export default function ProjectCard({
  project,
  domain,
  index,
  onOpen,
}: {
  project: Project
  domain: Domain
  index: number
  onOpen: () => void
}) {
  const accent = `var(--color-${domain.accent})`
  const id = `P-${String(index + 1).padStart(3, '0')}`
  return (
    <button
      onClick={onOpen}
      className="group flex h-full flex-col rounded-md border border-border-dim bg-elevated p-4 text-left transition-all hover:border-border-active"
      style={{ borderLeft: `3px solid ${accent}` }}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-[0.65rem] text-muted">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
          {id} · NOMINAL
        </span>
        <span
          className="rounded px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wide"
          style={{ backgroundColor: `${accent}22`, color: accent }}
        >
          {domain.label.split(' ')[0]}
        </span>
      </div>

      <h3 className="mt-3 font-display text-[1.05rem] font-semibold leading-snug text-primary">
        {project.title}
      </h3>
      <p className="mt-1 font-mono text-[0.7rem] text-muted">
        {project.org} · {project.period}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded border border-border-dim bg-overlay px-1.5 py-0.5 font-mono text-[0.6rem] text-secondary"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="px-1 py-0.5 font-mono text-[0.6rem] text-muted">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <span
        className="mt-4 inline-flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-wide transition-transform group-hover:gap-2"
        style={{ color: accent }}
      >
        View mission log <ArrowRight className="h-3 w-3" aria-hidden="true" />
      </span>
    </button>
  )
}
