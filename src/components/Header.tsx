import { motion } from 'framer-motion'
import { Link2, Code2, Globe } from 'lucide-react'
import type { Profile } from '../types'

const HEADLINE =
  'Optical Systems & High-Speed DSP Firmware Engineer — Coherent DWDM (100–400G), embedded optical control, AI-augmented development.'

const SUMMARY_PARAGRAPHS = [
  'Embedded engineer working at the intersection of coherent optical systems and high-speed DSP. On an ESA 1 Tbps optical-transport testbed I operate and characterize coherent DWDM links (100/200/400G) — WSS wavelength routing, optical mux/demux, EDFA chains, superchannel composition at mixed baud and modulation (QPSK/DPSK) — measured against OSNR and BER.',
  'At the metal I write bare-metal ARM Cortex-M7 optical-control firmware (blind 4-D polarization control, DDS pilot-tone generation, a Cholesky/CLS-collapsed FIR demodulation pipeline). Backed by 8 years of safety-critical real-time embedded (ASIL-D, multicore ARM SoCs, microsecond-precision scheduling) and an AI-augmented build style (multi-model orchestration, ~3–5× delivery speed).',
]

interface LinkButtonProps {
  href: string
  label: string
  icon: React.ReactNode
}

function LinkButton({ href, label, icon }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium"
      style={{
        color: 'var(--color-muted)',
        background: 'var(--color-inset)',
        border: '1px solid var(--color-border)',
        transition: 'color 0.15s, border-color 0.15s',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.color = 'var(--color-accent)'
        el.style.borderColor = 'var(--color-accent-dim)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.color = 'var(--color-muted)'
        el.style.borderColor = 'var(--color-border)'
      }}
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}

const EASING = [0.16, 1, 0.3, 1] as const

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: EASING, delay },
  }
}

export function Header({ profile }: { profile: Profile }) {
  const linkIcons: Record<string, React.ReactNode> = {
    LinkedIn: <Link2 size={14} />,
    GitHub: <Code2 size={14} />,
    'Stack Overflow': <Globe size={14} />,
  }

  return (
    <header id="top" className="pb-8">
      {/* Monogram + Name */}
      <motion.div {...fadeUp(0)} className="flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded font-mono text-base font-bold tracking-wide"
          style={{
            background: 'var(--color-accent-glow)',
            border: '1px solid var(--color-accent-dim)',
            color: 'var(--color-accent)',
          }}
        >
          CC
        </div>
        <h1
          className="text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ color: 'var(--color-ink)' }}
        >
          {profile.name}
        </h1>
      </motion.div>

      {/* Headline */}
      <motion.p
        {...fadeUp(0.1)}
        className="mt-4 text-base font-medium leading-snug sm:text-lg"
        style={{ color: 'var(--color-ink)' }}
      >
        {HEADLINE}
      </motion.p>

      {/* Summary */}
      <motion.div {...fadeUp(0.2)} className="mt-5 space-y-3">
        {SUMMARY_PARAGRAPHS.map((para, i) => (
          <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            {para}
          </p>
        ))}
      </motion.div>

      {/* Contact icon row */}
      <motion.nav
        {...fadeUp(0.3)}
        className="mt-6 flex flex-wrap gap-2"
        aria-label="Profiles"
      >
        {profile.links.map((link) => (
          <LinkButton
            key={link.label}
            href={link.url}
            label={link.label}
            icon={linkIcons[link.label] ?? <Globe size={14} />}
          />
        ))}
      </motion.nav>

      {/* Availability banner */}
      <motion.div
        {...fadeUp(0.4)}
        className="mt-5 flex items-center gap-3 rounded px-4 py-2.5"
        style={{
          background: 'var(--color-inset)',
          borderLeft: '3px solid var(--color-accent)',
        }}
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
            style={{ background: 'var(--color-accent)' }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: 'var(--color-accent)' }}
          />
        </span>
        <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
          Happily working in Munich —{' '}
          <span style={{ color: 'var(--color-ink)' }}>open to the USA.</span>
        </span>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        style={{
          transformOrigin: 'left',
          marginTop: '2rem',
          height: '1px',
          background: 'var(--color-rule)',
        }}
        aria-hidden="true"
      />
    </header>
  )
}
