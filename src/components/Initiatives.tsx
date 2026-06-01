import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

interface Initiative {
  id: string
  title: string
  tagline: string
  description: string
  tech: string[]
  impact?: string
  highlight?: boolean
}

const INITIATIVES: Initiative[] = [
  {
    id: 'spacebacn-control',
    title: 'SpaceBACN terminal control & test-automation suite',
    tagline: 'React + Python control app for the optical link test bed',
    description:
      'A large React + Python (Vite) application driving two optical terminals on the link test bed: run acquisition sequences, monitor PAT (pointing/acquisition/tracking) and SDA states, record full terminal telemetry, automate test campaigns, and produce reports.',
    tech: ['React', 'Python', 'Vite', 'Test automation', 'Optical link test bed'],
  },
  {
    id: 'dynamic-app-report',
    title: 'Dynamic App-Report',
    tagline: 'A new report format — data + a web app in one portable .HTML',
    description:
      'A new way to deliver test results. Instead of a static PDF, Excel sheet or Confluence page, the test-automation tools emit a single self-contained .HTML file with all the data embedded plus a built-in web app to replay and explore it — dynamic charts, zoom, drill-down. A report you interrogate, not just read. Introduced on SpaceBACN and Pegasus.',
    tech: ['Single-file HTML', 'Embedded data', 'JS charting', 'Portable reports'],
    highlight: true,
  },
  {
    id: 'radeau',
    title: 'RadEAU',
    tagline: 'Internal CANoe + CANape replacement — deployed at Mynaric',
    description:
      'A corporate replacement for Vector CANoe and CANape: CAN/CAN-FD trace analysis and ECU calibration including A2L support. Deployed on the production line. Built with React + Rust + Tauri.',
    tech: ['React', 'Rust', 'Tauri', 'CAN / CAN-FD', 'A2L / ASAM MCD-2 MC', 'JSON-RPC'],
    impact: '~$10k/user/yr in CANoe licensing saved',
  },
  {
    id: 'arch-dbc-viz',
    title: 'Architecture & CAN-bus visualizers',
    tagline: 'Software architecture & .DBC rendered in AUTOSAR RTE conventions',
    description:
      'Visualization tools that render software architecture and CAN communication using AUTOSAR RTE visual conventions — components, sender/receiver ports and connectors — so system structure and bus traffic (.DBC) are readable at a glance.',
    tech: ['AUTOSAR RTE', 'DBC / CAN', 'Architecture visualization'],
  },
  {
    id: 'sil-twin',
    title: 'SIL-Twin',
    tagline: 'Software-in-the-loop digital twin — real firmware on a PC',
    description:
      'A custom SIL-MCAL replaces the microcontroller HAL so production firmware runs unmodified on a PC. Mixes real and virtual CAN nodes on the same bus simultaneously. Integrated into RadEAU over JSON-RPC.',
    tech: ['Embedded C', 'Rust', 'JSON-RPC', 'CAN', 'Virtual ECU / SIL'],
    impact: 'Unblocked firmware dev during hardware shortage; ~€8k/seat/yr commercial tooling replaced',
  },
  {
    id: 'optical-calibration',
    title: 'Optical-filter production calibration system',
    tagline: 'AI-augmented, built in ~24 h — used on the production line',
    description:
      'Complete calibration flow built in roughly 24 hours via AI-augmented tool composition: instrument data parsing, optimal-mapping search, and automated per-device voltage→wavelength lookup-table generation. Tables feed directly into production firmware.',
    tech: ['Python', 'CAN', 'RadEAU', 'AI-augmented development', 'Optical spectrum analysis'],
  },
  {
    id: 'mcp-bench',
    title: 'MCP optical-bench controller',
    tagline: 'Voice / text agent control of the optical test bench',
    description:
      'An MCP layer that lets engineers drive the Pegasus optical bench by voice or text: actuate devices (optical amplifiers, attenuators, photodiodes, power meters) and read back measurements in real time.',
    tech: ['Python', 'MCP', 'FastAPI', 'WebSocket / JSON-RPC', 'Claude API'],
  },
]

function InitiativeCard({ item, index }: { item: Initiative; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.07 }}
      className="rounded border p-5"
      style={{
        background: item.highlight ? 'var(--color-accent-light)' : 'var(--color-surface)',
        borderColor: item.highlight ? 'var(--color-accent)' : 'var(--color-border)',
        boxShadow: item.highlight ? '0 0 0 1px var(--color-accent)' : undefined,
      }}
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold" style={{ color: 'var(--color-ink)' }}>
            {item.title}
          </h3>
          {item.highlight && (
            <span
              className="rounded px-1.5 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.12em]"
              style={{ color: '#0B1410', background: 'var(--color-accent)' }}
            >
              Innovation
            </span>
          )}
        </div>
        <div
          className="mt-0.5 font-mono text-[0.63rem] uppercase tracking-[0.10em]"
          style={{ color: item.highlight ? 'var(--color-accent)' : 'var(--color-auto)', opacity: 0.85 }}
        >
          {item.tagline}
        </div>
      </div>

      {/* Description */}
      <p className="mt-2.5 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        {item.description}
      </p>

      {/* Impact badge */}
      {item.impact && (
        <div
          className="mt-2.5 inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium"
          style={{
            background: 'rgba(19, 194, 150, 0.08)',
            border: '1px solid rgba(19, 194, 150, 0.25)',
            color: 'var(--color-accent-dim)',
          }}
        >
          <span aria-hidden="true">&#x25B2;</span>
          {item.impact}
        </div>
      )}

      {/* Tech chips */}
      {item.tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export function Initiatives() {
  return (
    <section
      id="initiatives"
      aria-label="Closed source initiatives"
      className="mt-12 border-t pt-10 scroll-mt-8"
      style={{ borderColor: 'var(--color-rule)' }}
    >
      <div className="mb-2 flex items-center gap-3">
        <span className="pcb-tick" aria-hidden="true" />
        <h2
          className="font-mono text-[0.65rem] uppercase tracking-[0.16em]"
          style={{ color: 'var(--color-accent)' }}
        >
          Closed Source Initiatives
        </h2>
      </div>
      <p className="mb-6 text-xs" style={{ color: 'var(--color-faint)' }}>
        Internal tools built at Mynaric — no public repos.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {INITIATIVES.map((item, i) => (
          <InitiativeCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
