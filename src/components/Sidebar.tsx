import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { Profile } from '../types'

/* ── Inline SVG brand icons ────────────────────────────────── */
function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function StackOverflowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.36 1.618zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.751 0z" />
    </svg>
  )
}

function MailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  )
}

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

/* ── Outline nav sections - 6 sections ────────────────────── */
const NAV_SECTIONS = [
  { id: 'summary',     label: 'Summary' },
  { id: 'timeline',   label: 'Experience' },
  { id: 'opensource', label: 'Personal / Open Source' },
  { id: 'initiatives', label: 'Closed Source' },
  { id: 'mindset',    label: 'Mindset' },
  { id: 'skills',     label: 'Skills' },
]

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const visibilityMap: Record<string, number> = {}

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibilityMap[id] = entry.intersectionRatio
          const best = Object.entries(visibilityMap).sort((a, b) => b[1] - a[1])[0]
          if (best && best[1] > 0) setActive(best[0])
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0], rootMargin: '-20% 0px -20% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids])

  return active
}

/* ── Contact link icon map ──────────────────────────────────── */
function ContactIcon({ label, size }: { label: string; size?: number }) {
  if (label === 'LinkedIn') return <LinkedInIcon size={size} />
  if (label === 'GitHub') return <GitHubIcon size={size} />
  if (label === 'Stack Overflow') return <StackOverflowIcon size={size} />
  if (label === 'Email') return <MailIcon size={size} />
  if (label === 'Phone') return <PhoneIcon size={size} />
  return (
    <svg width={size ?? 16} height={size ?? 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

/* ── Sidebar component ─────────────────────────────────────── */
export function Sidebar({ profile }: { profile: Profile }) {
  const sectionIds = useRef(NAV_SECTIONS.map((s) => s.id))
  const active = useActiveSection(sectionIds.current)

  return (
    <aside
      className="sidebar-aside rounded-lg overflow-hidden"
      aria-label="Navigation and profile"
      style={{
        background: 'var(--color-sidebar-bg)',
        border: '1px solid var(--color-sidebar-border)',
      }}
    >
      <div className="p-5">
        {/* Monogram + Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0 }}
          className="flex items-center gap-3"
        >
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded font-mono text-sm font-bold tracking-wide"
            style={{
              background: 'rgba(19, 194, 150, 0.12)',
              border: '1.5px solid var(--color-accent)',
              color: 'var(--color-accent)',
            }}
          >
            CC
          </div>
          <div>
            <div
              className="text-base font-bold leading-tight tracking-tight"
              style={{ color: 'var(--color-sidebar-ink)' }}
            >
              {profile.name}
            </div>
            <div
              className="font-mono text-[0.6rem] uppercase tracking-[0.12em]"
              style={{ color: 'var(--color-sidebar-muted)' }}
            >
              Munich, Germany
            </div>
          </div>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="mt-5 flex items-start gap-2.5 rounded px-3 py-2.5"
          style={{
            background: 'rgba(19, 194, 150, 0.08)',
            borderLeft: '3px solid var(--color-accent)',
          }}
        >
          <span className="relative flex h-2 w-2 shrink-0 mt-1">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50"
              style={{ background: 'var(--color-accent)' }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: 'var(--color-accent)' }}
            />
          </span>
          <div>
            <div className="text-sm font-semibold leading-snug" style={{ color: 'var(--color-sidebar-ink)' }}>
              Looking for opportunities in the USA
            </div>
            <div className="mt-0.5 text-[0.7rem] leading-snug" style={{ color: 'var(--color-sidebar-muted)' }}>
              Visa-eligible - J-1 Research Scholar or Specialist (Cultural Vistas/IREX), or H-1B.
            </div>
          </div>
        </motion.div>

        {/* Contact icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
          className="mt-5 flex flex-wrap gap-2.5"
        >
          {[
            ...profile.links,
            { label: 'Email', url: 'mailto:constantin.chabirand@gmail.com' },
            { label: 'Phone', url: 'tel:+4915203440909' },
          ].map((link) => {
            const external = link.url.startsWith('http')
            return (
            <a
              key={link.label}
              href={link.url}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              className="flex items-center justify-center rounded p-2 transition-colors"
              style={{
                color: 'var(--color-sidebar-muted)',
                background: 'var(--color-sidebar-surface)',
                border: '1px solid var(--color-sidebar-border)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.color = 'var(--color-accent)'
                el.style.borderColor = 'var(--color-accent)'
                el.style.background = 'rgba(19, 194, 150, 0.10)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.color = 'var(--color-sidebar-muted)'
                el.style.borderColor = 'var(--color-sidebar-border)'
                el.style.background = 'var(--color-sidebar-surface)'
              }}
            >
              <ContactIcon label={link.label} size={16} />
            </a>
            )
          })}
        </motion.div>

        {/* Divider */}
        <div
          className="mt-5"
          style={{ height: '1px', background: 'var(--color-sidebar-border)' }}
          aria-hidden="true"
        />

        {/* Outline nav */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4"
          aria-label="Page sections"
        >
          <div
            className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.18em]"
            style={{ color: 'var(--color-sidebar-faint)' }}
          >
            Outline
          </div>
          <ul className="space-y-0.5">
            {NAV_SECTIONS.map((section) => {
              const isActive = active === section.id
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-center gap-2.5 rounded px-2 py-1.5 font-mono text-[0.82rem] font-bold uppercase tracking-[0.06em] transition-colors"
                    style={{
                      color: isActive ? 'var(--color-accent)' : 'var(--color-sidebar-muted)',
                      background: isActive ? 'rgba(19, 194, 150, 0.10)' : 'transparent',
                      textDecoration: 'none',
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                  >
                    <span
                      className="h-1 w-3 shrink-0 transition-all"
                      style={{
                        background: isActive ? 'var(--color-accent)' : 'var(--color-sidebar-border)',
                        borderRadius: '1px',
                      }}
                      aria-hidden="true"
                    />
                    {section.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.nav>

        {/* Divider */}
        <div
          className="mt-5"
          style={{ height: '1px', background: 'var(--color-sidebar-border)' }}
          aria-hidden="true"
        />

        {/* Certifications / languages mini-block */}
        <div className="mt-4 space-y-3">
          <div>
            <div className="font-mono text-[0.58rem] uppercase tracking-[0.18em]" style={{ color: 'var(--color-sidebar-faint)' }}>
              Certifications
            </div>
            <ul className="mt-1.5 space-y-1">
              <li className="text-[0.72rem] leading-snug" style={{ color: 'var(--color-sidebar-muted)' }}>
                Vector CEP BSWInt - 2021/2024
              </li>
              <li className="text-[0.72rem] leading-snug" style={{ color: 'var(--color-sidebar-muted)' }}>
                TOEIC 960 · Cambridge First (A)
              </li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[0.58rem] uppercase tracking-[0.18em]" style={{ color: 'var(--color-sidebar-faint)' }}>
              Languages
            </div>
            <ul className="mt-1.5 space-y-1">
              <li className="text-[0.72rem] leading-snug" style={{ color: 'var(--color-sidebar-muted)' }}>French - native</li>
              <li className="text-[0.72rem] leading-snug" style={{ color: 'var(--color-sidebar-muted)' }}>English - fluent</li>
              <li className="text-[0.72rem] leading-snug" style={{ color: 'var(--color-sidebar-muted)' }}>German - professional</li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}
