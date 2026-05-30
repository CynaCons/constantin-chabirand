import type { ReactNode } from 'react'
import { MapPin, GraduationCap, Languages, Award, ArrowUpRight, Plane } from 'lucide-react'
import type { Profile, Domain } from '../types'
import { DomainIcon } from '../lib/icons'

export default function Overview({
  profile,
  domains,
  onSelect,
}: {
  profile: Profile
  domains: Domain[]
  onSelect: (key: string) => void
}) {
  return (
    <div className="mx-auto max-w-5xl">
      {/* ---- Title-block bio (plain-English anchor) ---- */}
      <section className="overflow-hidden rounded-lg border border-border-dim bg-elevated">
        <div className="flex items-center justify-between border-b border-border-dim bg-panel px-5 py-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
          <span>Identity · Title Block</span>
          <span>REV 2026.05</span>
        </div>
        <div className="p-5 sm:p-7">
          <h1 className="font-display text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 font-display text-base text-secondary">{profile.shortDescriptor}</p>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-secondary">{profile.bio}</p>

          {/* Availability chip */}
          <div className="mt-5 inline-flex items-start gap-2 rounded-md border border-amber/40 bg-amber/10 px-3 py-2">
            <Plane className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber" aria-hidden="true" />
            <span className="text-[0.8rem] text-amber">{profile.availability}</span>
          </div>

          {/* Quick facts */}
          <dl className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            <Fact icon={<MapPin className="h-3.5 w-3.5" />} label="Location" value={profile.location} />
            <Fact
              icon={<Languages className="h-3.5 w-3.5" />}
              label="Languages"
              value={profile.languages.join(' · ')}
            />
            <Fact
              icon={<GraduationCap className="h-3.5 w-3.5" />}
              label="Education"
              value={profile.education[0]}
            />
            <Fact
              icon={<Award className="h-3.5 w-3.5" />}
              label="Certifications"
              value={profile.certifications.join(' · ')}
            />
          </dl>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border-dim bg-panel px-3 py-1.5 font-mono text-[0.7rem] text-secondary transition-colors hover:border-border-active hover:text-primary"
              >
                {l.label}
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Domain grid ---- */}
      <p className="mb-3 mt-8 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted">
        Select a subsystem to explore
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {domains.map((d) => {
          const accent = `var(--color-${d.accent})`
          return (
            <button
              key={d.key}
              onClick={() => onSelect(d.key)}
              className="group flex flex-col items-start rounded-lg border border-border-dim bg-elevated p-5 text-left transition-all hover:border-border-active"
              style={{ borderLeft: `3px solid ${accent}` }}
            >
              <span className="mb-3 rounded-md p-2" style={{ backgroundColor: `${accent}22`, color: accent }}>
                <DomainIcon name={d.icon} className="h-5 w-5" />
              </span>
              <span className="font-display text-base font-semibold text-primary">{d.label}</span>
              <span className="mt-2 text-[0.8rem] leading-relaxed text-secondary">{d.tagline}</span>
              <span className="mt-4 font-mono text-[0.65rem] uppercase tracking-wide" style={{ color: accent }}>
                {d.projects.length} projects →
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Fact({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-2.5">
      <span className="mt-0.5 text-muted">{icon}</span>
      <div className="min-w-0">
        <dt className="font-mono text-[0.6rem] uppercase tracking-wide text-muted">{label}</dt>
        <dd className="text-[0.8rem] text-secondary">{value}</dd>
      </div>
    </div>
  )
}
