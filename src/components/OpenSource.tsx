import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useInView } from '../hooks/useInView'

interface ProjectCard {
  id: string
  title: string
  tagline: string
  description: string
  tech: string[]
  links: Array<{ label: string; url: string }>
  highlight?: boolean
}

/*
 * Project list per spec D. FinOracle removed.
 * NOTE: "OpenT A2L Forge" and "PowerNote / PowerPlanner" descriptions are DRAFTS —
 * confirm wording with Constantin before publishing.
 */
const OPEN_SOURCE_PROJECTS: ProjectCard[] = [
  {
    id: 'powerspawn',
    title: 'PowerSpawn',
    tagline: 'Multi-agent MCP orchestration',
    description:
      'Coordinates Claude, Codex, Copilot, Gemini, Grok and Mistral on a shared Markdown blackboard via a custom Inter-Agent Context protocol over MCP. CLI agents edit files and run commands; API agents provide web-grounded responses.',
    tech: ['Python', 'MCP', 'Claude Code', 'Codex CLI', 'Gemini', 'Grok', 'Mistral'],
    links: [
      { label: 'GitHub', url: 'https://github.com/CynaCons/PowerSpawn' },
      { label: 'powerspawn.com', url: 'https://powerspawn.com' },
    ],
  },
  {
    id: 'powertimeline',
    title: 'PowerTimeline',
    tagline: 'Git-like history & roadmap timeline editor',
    description:
      'Fork, merge and branch timelines the way developers branch code. 400+ Playwright E2E tests across the full surface. Integrates Gemini for content assistance and Firebase for real-time collaboration.',
    tech: ['React 19', 'TypeScript', 'Firebase', 'Gemini API', 'Playwright', 'Vite'],
    links: [
      { label: 'GitHub', url: 'https://github.com/CynaCons/powertimeline' },
      { label: 'powertimeline.com', url: 'https://powertimeline.com' },
    ],
  },
  {
    id: 'opent-a2l-forge',
    title: 'OpenT A2L Forge',
    tagline: 'Populate an A2L straight from an .elf',
    description:
      'Generate and update A2L (ASAM MCD-2 MC) calibration files directly from an .elf — auto-extracting variables, structs, arrays, matrices and nested types into A2L symbols, so you keep your A2L in sync and start monitoring variables in seconds. Also create, edit and validate A2L.',
    tech: ['.elf parsing', 'A2L / ASAM MCD-2 MC', 'XCP', 'Calibration'],
    links: [],
    highlight: true,
  },
  // DRAFT (confirm wording with Constantin):
  {
    id: 'powernote-powerplanner',
    title: 'PowerNote & PowerPlanner',
    tagline: 'Single-file apps — app + data in one HTML file',
    description:
      'Personal productivity apps on a novel single-file architecture: the entire application and its data live in one portable, self-contained HTML file — no backend, no install, fully shareable.',
    tech: ['Single-file HTML', 'JavaScript', 'Zero-backend'],
    links: [],
  },
  {
    id: 'arxmlexplorer',
    title: 'ARXMLExplorer',
    tagline: 'Cross-platform AUTOSAR ARXML editor',
    description:
      'Free, cross-platform AUTOSAR XML editor and viewer with XSD validation, handling files over 100 MB. Zero-cost alternative to per-seat tooling; used internally when Vector AUTOSAR licenses were expiring.',
    tech: ['Dart', 'Flutter', 'XSD validation'],
    links: [
      { label: 'GitHub', url: 'https://github.com/CynaCons/ARXMLExplorer' },
    ],
  },
  {
    id: 'stm32-explore',
    title: 'STM32 Peripherals Exploration',
    tagline: 'Bare-metal embedded C, register-level peripheral patterns',
    description:
      'Demonstrations of peripheral initialization and ISR-driven data paths at the register level — timers, UART, SPI, I2C, interrupt-driven design patterns on STM32 hardware.',
    tech: ['Embedded C', 'STM32', 'Bare-metal', 'Register-level'],
    links: [
      { label: 'GitHub', url: 'https://github.com/CynaCons/STM32-peripherals-exploration' },
    ],
  },
]

function ProjectCard({ project, index }: { project: ProjectCard; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.07 }}
      className="rounded border p-5"
      style={{
        background: project.highlight ? 'var(--color-accent-light)' : 'var(--color-surface)',
        borderColor: project.highlight ? 'var(--color-accent)' : 'var(--color-border)',
        boxShadow: project.highlight ? '0 0 0 1px var(--color-accent)' : undefined,
      }}
    >
      {/* Title + links row */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold" style={{ color: 'var(--color-ink)' }}>
              {project.title}
            </h3>
            {project.highlight && (
              <span
                className="rounded px-1.5 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.12em]"
                style={{ color: '#0B1410', background: 'var(--color-accent)' }}
              >
                Featured
              </span>
            )}
          </div>
          <div
            className="mt-0.5 font-mono text-[0.63rem] uppercase tracking-[0.10em]"
            style={{ color: 'var(--color-accent)', opacity: 0.85 }}
          >
            {project.tagline}
          </div>
        </div>
        {project.links.length > 0 && (
          <div className="flex shrink-0 flex-wrap gap-2">
            {project.links.map((lnk) => (
              <a
                key={lnk.label}
                href={lnk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[0.68rem] transition-colors"
                style={{
                  color: 'var(--color-accent)',
                  background: 'var(--color-accent-light)',
                  border: '1px solid rgba(19, 194, 150, 0.3)',
                }}
              >
                {lnk.label}
                <ExternalLink size={10} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="mt-2.5 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        {project.description}
      </p>

      {/* Tech chips */}
      {project.tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export function OpenSource() {
  return (
    <section
      id="opensource"
      aria-label="Personal and open source projects"
      className="mt-12 border-t pt-10 scroll-mt-8"
      style={{ borderColor: 'var(--color-rule)' }}
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="pcb-tick" aria-hidden="true" />
        <h2
          className="font-mono text-[0.65rem] uppercase tracking-[0.16em]"
          style={{ color: 'var(--color-accent)' }}
        >
          Personal / Open Source
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {OPEN_SOURCE_PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
