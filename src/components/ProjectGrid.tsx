import type { Domain } from '../types'
import { DomainIcon } from '../lib/icons'
import ProjectCard from './ProjectCard'

export default function ProjectGrid({
  domain,
  onOpenProject,
}: {
  domain: Domain
  onOpenProject: (projectId: string) => void
}) {
  const accent = `var(--color-${domain.accent})`
  return (
    <div className="mx-auto max-w-5xl">
      {/* Subsystem header strip */}
      <header className="rounded-lg border border-border-dim bg-elevated p-5 sm:p-6" style={{ borderLeft: `3px solid ${accent}` }}>
        <div className="flex items-center gap-3">
          <span className="rounded-md p-2" style={{ backgroundColor: `${accent}22`, color: accent }}>
            <DomainIcon name={domain.icon} className="h-5 w-5" />
          </span>
          <h2 className="font-display text-xl font-semibold text-primary">{domain.label}</h2>
        </div>
        <p className="mt-3 text-[0.9rem] font-medium" style={{ color: accent }}>
          {domain.tagline}
        </p>
        <p className="mt-2 max-w-3xl text-[0.85rem] leading-relaxed text-secondary">{domain.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {domain.skills.map((s) => (
            <span
              key={s}
              className="rounded border border-border-dim bg-panel px-2 py-0.5 font-mono text-[0.6rem] text-secondary"
            >
              {s}
            </span>
          ))}
        </div>
      </header>

      {/* Project cards */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {domain.projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} domain={domain} index={i} onOpen={() => onOpenProject(p.id)} />
        ))}
      </div>
    </div>
  )
}
