import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import type { Project } from '../../types'

interface SubCard {
  id?: string
  title: string
  tagline?: string
  bullets: string[]
  tech: string[]
  links?: Array<{ label: string; url: string }>
}

interface TimelineNodeProps {
  period: string
  company: string
  role?: string
  summary?: string
  /** Short impact metrics shown as badges (always visible) */
  metrics?: string[]
  accentColor: string
  subCards?: SubCard[]
  defaultExpanded?: boolean
  /** If true, the node dot pulses (active / current role) */
  active?: boolean
  /** If true, no line segment is drawn below this node */
  isLastNode?: boolean
}

function SubCardItem({ card, accentColor }: { card: SubCard; accentColor: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded border transition-colors"
      style={{
        background: 'var(--color-surface)',
        borderColor: open ? 'var(--color-border)' : 'var(--color-rule)',
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0">
          <div className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>
            {card.title}
          </div>
          {card.tagline && (
            <div className="mt-0.5 font-mono text-[0.65rem] uppercase tracking-[0.08em]" style={{ color: 'var(--color-faint)' }}>
              {card.tagline}
            </div>
          )}
        </div>
        <span
          className="mt-0.5 shrink-0 transition-transform"
          style={{ color: 'var(--color-faint)' }}
        >
          {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="sub-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="border-t px-4 pb-4 pt-3" style={{ borderColor: 'var(--color-rule)' }}>
              <ul className="space-y-1.5">
                {card.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: accentColor, opacity: 0.6 }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {card.tech.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {card.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              )}

              {card.links && card.links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3">
                  {card.links.map((lnk) => (
                    <a
                      key={lnk.label}
                      href={lnk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs transition-colors"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {lnk.label}
                      <ExternalLink size={11} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function TimelineNode({
  period,
  company,
  role,
  summary,
  metrics = [],
  accentColor,
  subCards = [],
  defaultExpanded = false,
  active = false,
  isLastNode = false,
}: TimelineNodeProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <div className="relative flex gap-6">
      {/* ── Spine column ── */}
      <div
        className="relative flex flex-col items-center"
        style={{ width: '1.25rem', flexShrink: 0 }}
      >
        {/* Dot */}
        <div
          className={`relative z-10 mt-1.5 h-3 w-3 rounded-full border-2 ${active ? 'dot-glow' : ''}`}
          style={{
            background: active ? accentColor : 'var(--color-surface)',
            borderColor: accentColor,
            boxShadow: active ? `0 0 8px ${accentColor}66` : undefined,
          }}
          aria-hidden="true"
        />
        {/* Continuous vertical spine — always rendered except on the last node */}
        {!isLastNode && (
          <div
            className="flex-1"
            style={{
              width: '2px',
              background: `linear-gradient(to bottom, ${accentColor}70 0%, var(--color-rule) 100%)`,
              marginTop: '4px',
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* ── Content ── */}
      <div className="min-w-0 flex-1 pb-10">
        {/* Header row — clickable to expand/collapse */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="group flex w-full items-start justify-between gap-3 text-left"
          aria-expanded={expanded}
        >
          <div className="min-w-0">
            <div
              className="font-mono text-[0.63rem] uppercase tracking-[0.14em]"
              style={{ color: accentColor, opacity: 0.9 }}
            >
              {period}
            </div>
            <h3
              className="mt-0.5 text-base font-bold leading-snug transition-colors"
              style={{ color: 'var(--color-ink)' }}
            >
              {company}
            </h3>
            {role && (
              <div
                className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-[0.06em]"
                style={{ color: 'var(--color-muted)' }}
              >
                {role}
              </div>
            )}
          </div>
          <span
            className="mt-1 shrink-0 transition-colors"
            style={{ color: 'var(--color-faint)' }}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </button>

        {/* Impact metrics — always visible */}
        {metrics.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {metrics.map((m) => (
              <span
                key={m}
                className="inline-flex items-center rounded px-2 py-0.5 font-mono text-[0.6rem] font-semibold"
                style={{
                  color: accentColor,
                  background: 'var(--color-inset)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* Expandable body */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="node-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="mt-3 space-y-3">
                {summary && (
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {summary}
                  </p>
                )}

                {subCards.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {subCards.map((card, i) => (
                      <SubCardItem key={card.id ?? i} card={card} accentColor={accentColor} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/** Convert a full Project into a SubCard */
export function projectToSubCard(p: Project): SubCard {
  return {
    id: p.id,
    title: p.title,
    tagline: `${p.org} · ${p.period}`,
    bullets: p.highlights,
    tech: p.tech,
    links: p.links,
  }
}
