import { useEffect, useRef, type ReactNode } from 'react'
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project, Domain } from '../types'

export default function MissionLogDrawer({
  project,
  domain,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  project: Project
  domain: Domain
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const accent = `var(--color-${domain.accent})`

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      else if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={`Mission log: ${project.title}`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <div className="absolute inset-y-0 right-0 flex w-full max-w-[480px] flex-col border-l border-border-active bg-panel shadow-[0_16px_48px_rgba(0,0,0,0.55)]">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-border-dim px-5 py-4">
          <div className="min-w-0">
            <span
              className="font-mono text-[0.6rem] uppercase tracking-wide"
              style={{ color: accent }}
            >
              {domain.label} · Mission Log
            </span>
            <h2 className="mt-1 font-display text-lg font-semibold leading-snug text-primary">
              {project.title}
            </h2>
            <p className="mt-1 font-mono text-[0.7rem] text-muted">
              {project.role}
            </p>
            <p className="font-mono text-[0.7rem] text-muted">
              {project.org} · {project.period}
            </p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="ml-2 shrink-0 rounded-md border border-border-dim p-1.5 text-secondary transition-colors hover:border-border-active hover:text-primary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <Section label="Mission Brief">
            <p className="text-[0.85rem] leading-relaxed text-secondary">{project.summary}</p>
          </Section>

          <Section label="Key Signals">
            <ul className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-[0.85rem] leading-relaxed text-secondary">
                  <span className="mt-1.5 shrink-0" style={{ color: accent }}>◆</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section label="Tech Stack">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border bg-overlay px-2 py-0.5 font-mono text-[0.65rem] text-secondary"
                  style={{ borderColor: `${accent}55` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </Section>

          {project.links.length > 0 && (
            <Section label="Links">
              <div className="flex flex-wrap gap-2">
                {project.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border-dim bg-elevated px-3 py-1.5 font-mono text-[0.7rem] text-secondary transition-colors hover:border-border-active hover:text-primary"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </Section>
          )}
        </div>

        {/* Prev / Next footer */}
        <div className="flex items-center justify-between border-t border-border-dim px-5 py-3">
          <NavBtn disabled={!hasPrev} onClick={onPrev} dir="prev" />
          <NavBtn disabled={!hasNext} onClick={onNext} dir="next" />
        </div>
      </div>
    </div>
  )
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mb-6">
      <h3 className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted">{label}</h3>
      {children}
    </section>
  )
}

function NavBtn({ disabled, onClick, dir }: { disabled: boolean; onClick: () => void; dir: 'prev' | 'next' }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="inline-flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-wide text-secondary transition-colors enabled:hover:text-primary disabled:opacity-30"
    >
      {dir === 'prev' ? (
        <>
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" /> Prev
        </>
      ) : (
        <>
          Next <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </>
      )}
    </button>
  )
}
