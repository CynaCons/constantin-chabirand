import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

interface SkillGroup {
  label: string
  accentColor: string
  items: string[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Optical & DSP',
    accentColor: 'var(--color-space)',
    items: [
      'Coherent DWDM (100/200/400G)',
      'Wavelength-Selective Switching (WSS)',
      'Optical mux/demux',
      'Superchannels (mixed baud/modulation)',
      'OSNR/BER characterization',
      'QPSK/DPSK',
      'EDFA',
      'Free-space & fiber optics',
      'Polarization control (blind 4-D)',
      'DDS pilot-tone generation',
      'FIR/IIR + complex mixer (collapsed-pipeline demod)',
      'ARM CMSIS-DSP',
      'Bare-metal ARM Cortex-M7',
    ],
  },
  {
    label: 'Embedded & Real-Time',
    accentColor: 'var(--color-auto)',
    items: [
      'Embedded C (expert, 9+ years)',
      'ARM Cortex-M/R/A families',
      'Bare-metal RTOS',
      'Real-time scheduling (µs precision)',
      'DMA / DAC / ADC',
      'ISR-driven design patterns',
      'Assembly (ARM / TriCore startup & debug)',
      'SPI / I2C / UART / CAN / CAN-FD',
      'Lauterbach TRACE32 · GDB · oscilloscope',
      'MIPI CSI-2 / GMSL3 / DSI3',
    ],
  },
  {
    label: 'Automotive, AUTOSAR & Safety',
    accentColor: 'var(--color-auto)',
    items: [
      'AUTOSAR Classic BSW (OS, RTE, Dcm, Dem, Com, NvM, E2E, EcuM, BswM, SecOC)',
      'ISO 26262 up to ASIL-D: MPU partitioning, E2E, watchdog, mixed-ASIL isolation',
      'Multicore SoCs: AURIX TC3XX (TriCore), ST SR6P6 (Cortex-R52), TI TDA4VM (A72/R5F)',
      'ARMv8-R hypervisor (EL1/EL2)',
      'Vector MICROSAR · DaVinci · CANoe · CANape — CEP certified',
      'Automotive Ethernet (SOME/IP · DoIP) · CAN-FD · LIN · FlexRay',
      'ISO 15118 / SLAC / CCS (EV charging)',
      'UDS diagnostics · Secure Boot · SecOC · ISO 21434',
      'CI/CD: Jenkins + Python + CANoe.XCP pipelines',
      'ASPICE L2',
    ],
  },
  {
    label: 'AI Tooling & Modern Dev',
    accentColor: 'var(--color-ai)',
    items: [
      'Multi-agent AI orchestration (MCP; Claude, Codex, Copilot, Grok, Gemini, Mistral)',
      'Python',
      'Rust / Tauri',
      'React 19 / TypeScript / Vite',
      'Firebase · FastAPI · WebSocket · JSON-RPC',
      'Playwright E2E testing (400+ tests)',
      'LLM API integration (Anthropic, OpenAI, Gemini, Mistral)',
      'Context engineering via shared Markdown state',
    ],
  },
  {
    label: 'Desktop & Cross-Platform',
    accentColor: 'var(--color-ai)',
    items: [
      'Dart / Flutter (cross-platform desktop/mobile)',
      'Qt5 / QML',
      'CAPL / CANoe scripting',
      'Yocto / Linux embedded',
      'C++17 (Adaptive AUTOSAR)',
    ],
  },
]

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.07 }}
      className="rounded border p-4"
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div
        className="mb-3 font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em]"
        style={{ color: group.accentColor, opacity: 0.85 }}
      >
        {group.label}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <span key={item} className="tech-tag">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section aria-label="Technical skills" className="mt-12 border-t pt-10" style={{ borderColor: 'var(--color-rule)' }}>
      <h2
        className="mb-6 font-mono text-[0.65rem] uppercase tracking-[0.16em]"
        style={{ color: 'var(--color-accent)', opacity: 0.7 }}
      >
        Technical Skills
      </h2>
      <div className="space-y-3">
        {SKILL_GROUPS.map((group, i) => (
          <SkillGroupCard key={group.label} group={group} index={i} />
        ))}
      </div>
    </section>
  )
}
