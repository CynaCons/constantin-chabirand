import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '../types'

export default function ProjectModal({
  project,
  accent,
  onClose,
}: {
  project: Project
  accent: string
  onClose: () => void
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = `modal-${project.id}`

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab') {
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])',
        )
        if (!focusables || focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      prevFocus?.focus()
    }
  }, [onClose])

  return createPortal(
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(28,25,23,0.55)', backdropFilter: 'blur(3px)' }}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="modal-panel relative flex max-h-[88vh] w-full max-w-2xl flex-col rounded-[2px] border border-rule bg-surface sm:max-h-[88vh]"
        style={{ borderTop: `3px solid ${accent}` }}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-2xl leading-none text-muted transition-colors hover:text-accent"
        >
          ×
        </button>

        <div className="overflow-y-auto px-7 py-8 sm:px-10 sm:py-10" style={{ overscrollBehavior: 'contain' }}>
          <p className="font-mono text-[0.8125rem] text-muted">
            {project.role}
          </p>
          <h3 id={titleId} className="mt-2 font-display text-[1.75rem] font-semibold leading-[1.15] text-ink">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-[0.8125rem] text-faint">
            {project.org} · {project.period}
          </p>

          <p className="mt-5 text-[1.0625rem] leading-[1.65] text-muted">{project.summary}</p>

          <ul className="mt-5 space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-[1rem] leading-[1.6] text-muted">
                <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full" style={{ background: accent }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-[2px] border border-rule bg-inset px-2 py-0.5 font-mono text-[0.75rem] text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {project.links.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.8125rem] text-accent underline decoration-1 underline-offset-2 hover:underline-offset-4"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
