import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { TimelineNode, projectToSubCard } from './TimelineNode'
import { content } from '../../data/content'

/* Hand-crafted re-narrated content for Mynaric node (optical-interconnect framing) */
const ESA_PEGASUS_CARD = {
  id: 'esa-pegasus-renarrated',
  title: 'ESA Pegasus — Coherent DWDM Optical-Transport Systems',
  tagline: 'Mynaric · ESA ScyLight/HydRON · 2026–present',
  bullets: [
    'Compose and characterize superchannels (multiple wavelengths, mixed speed/modulation — QPSK/DPSK) across a WSS-routed DWDM testbed, reaching up to 400G in tests.',
    'Characterize OSNR/BER across link scenarios; tune wavelength routing through optical mux/demux, EDFA chains, and wavelength-selective switches.',
    'Own the embedded control and test-automation layer end-to-end: device daemons over WebSocket/JSON-RPC, a React/FastAPI control app, an MCP voice/text bench controller, and single-file interactive test reports.',
  ],
  tech: ['Coherent DWDM', 'WSS', 'QPSK/DPSK', 'OSNR/BER', 'EDFA', 'React', 'FastAPI', 'MCP', 'WebSocket/JSON-RPC'],
  links: [] as Array<{ label: string; url: string }>,
}

const SPACE_BACN_CARD = {
  id: 'space-bacn-renarrated',
  title: 'DARPA Space-BACN — Coherent Free-Space Optical Terminal Firmware',
  tagline: 'Mynaric · DARPA · 2025–present',
  bullets: [
    'Bare-metal ARM Cortex-M7 optical control firmware: blind 4-D polarization control (single-Stokes observability), achieving stable left/right-hand circular polarization on the link (~5× faster response vs. prior approach).',
    'DDS pilot-tone generation (DMA-to-DAC, zero CPU overhead during tone output) — sine/square tones runtime-configurable in frequency and modulation index.',
    'Cholesky/CLS-collapsed FIR demodulation pipeline: full on-MCU DSP chain (complex mixer, BPF, LPF, FIR) with center frequency and bandwidth reconfigurable at runtime without a firmware rebuild.',
    'PAT (pointing/acquisition/tracking) modes coordinating beam intensity, elevation/azimuth, fast steering mirrors, and EDFA/optical-filter control.',
    'Cut MCU CPU load ~25% by redesigning stepper-motor drive (DMA lookup-table profiles), freeing real-time budget for DSP and communications processing.',
  ],
  tech: ['ARM Cortex-M7', 'SAMV71', 'Bare-metal C', 'ARM CMSIS-DSP', 'DDS', 'DMA', 'FIR/IIR', 'Polarization control', 'EDFA', 'PAT'],
  links: [] as Array<{ label: string; url: string }>,
}

const MYNARIC_SUMMARY =
  'Sole embedded firmware engineer on DARPA Space-BACN and ESA Pegasus at Mynaric Lasercom (now part of Rocket Lab). Delivered the optical-control stack from zero lasercom background in ~6 months; now extends to a 1 Tbps ESA DWDM testbed.'

/* Education sub-items */
const EDUCATION_ITEMS = [
  {
    id: 'eseo-degree',
    title: "Diplôme d'Ingénieur (MSc equiv.) — Embedded Systems",
    tagline: 'ESEO, Angers, France · 2012–2017',
    bullets: [
      'Led an 8-person IoT/BLE final-year project (Raspberry Pi, Android, Yocto Linux, STMicroelectronics BLE module).',
      "IoT internship at NTUST, Taipei (2016) — LoRa mesh on STM32F4.",
      'Embedded SW trainee at Bosch Stuttgart (2017) — AUTOSAR infotainment migration, end-customer GM.',
    ],
    tech: ['Embedded C', 'STM32', 'LoRa', 'AUTOSAR', 'Yocto Linux', 'BLE'],
    links: [] as Array<{ label: string; url: string }>,
  },
]

/* Farming node — short and characterful */
const FARMING_ITEMS = [
  {
    id: 'farming',
    title: '10 years operating farm machinery — rural France',
    tagline: '~2005–2015',
    bullets: [
      'Mechanical discipline and systems thinking grounded in operating and troubleshooting agricultural machinery from adolescence.',
    ],
    tech: [] as string[],
    links: [] as Array<{ label: string; url: string }>,
  },
]

function NodeWrapper({ children, delay }: { children: React.ReactNode; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: 'easeOut', delay: delay * 0.06 }}
    >
      {children}
    </motion.div>
  )
}

export function Timeline() {
  const { domains } = content
  const auto = domains.find((d) => d.key === 'auto')
  const ai = domains.find((d) => d.key === 'ai')

  const autoSubCards = auto?.projects.map(projectToSubCard) ?? []
  const aiSubCards = ai?.projects.map(projectToSubCard) ?? []

  return (
    <section id="timeline" aria-label="Career timeline" className="mt-12 scroll-mt-8">
      <h2
        className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.16em]"
        style={{ color: 'var(--color-accent)', opacity: 0.7 }}
      >
        Career Timeline
      </h2>

      <div>
        {/* ── Mynaric / Rocket Lab (EXPANDED) ── */}
        <NodeWrapper delay={0}>
          <TimelineNode
            period="2025 — present"
            company="Mynaric Lasercom (now Rocket Lab)"
            role="Senior Embedded Software Engineer"
            summary={MYNARIC_SUMMARY}
            accentColor="var(--color-space)"
            subCards={[ESA_PEGASUS_CARD, SPACE_BACN_CARD]}
            defaultExpanded={true}
            active={true}
          />
        </NodeWrapper>

        {/* ── T&S Engineering (EXPANDED, sub-cards collapsed) ── */}
        <NodeWrapper delay={1}>
          <TimelineNode
            period="2018 — 2025"
            company="T&S Engineering"
            role="Senior Embedded Software Engineer | AUTOSAR Practice Leader"
            summary="Eight years building and shipping production automotive ECU software — AUTOSAR Classic/Adaptive, ISO 26262 ASIL-D, multicore real-time scheduling, EV charging — for Mercedes-Benz, Volkswagen, BMW, Tesla, and Continental. Founded and scaled the AUTOSAR practice from 1 to 60+ engineers and €11.2M annual revenue."
            accentColor="var(--color-auto)"
            subCards={autoSubCards}
            defaultExpanded={true}
            active={false}
          />
        </NodeWrapper>

        {/* ── Personal / Open Source (COLLAPSED) ── */}
        <NodeWrapper delay={2}>
          <TimelineNode
            period="2025 — present (parallel)"
            company="Personal / Open Source"
            role="Human-architected, AI-accelerated builds"
            summary="Production-grade software built outside the day job: multi-agent orchestration, desktop tooling that displaces five-figure vendor licenses, and full-stack web apps validated by hundreds of automated tests."
            accentColor="var(--color-ai)"
            subCards={aiSubCards}
            defaultExpanded={false}
            active={false}
          />
        </NodeWrapper>

        {/* ── Education (COLLAPSED) ── */}
        <NodeWrapper delay={3}>
          <TimelineNode
            period="2012 — 2017"
            company="ESEO Angers — Diplôme d'Ingénieur"
            role="Embedded Systems · International Internships"
            accentColor="var(--color-edu)"
            subCards={EDUCATION_ITEMS}
            defaultExpanded={false}
            active={false}
          />
        </NodeWrapper>

        {/* ── Farming (COLLAPSED, no sub-cards — inline bullets) ── */}
        <NodeWrapper delay={4}>
          <TimelineNode
            period="~2005 — 2015"
            company="Rural France — Farm Machinery Operator"
            role="10 years of mechanical discipline"
            accentColor="var(--color-edu)"
            subCards={FARMING_ITEMS}
            defaultExpanded={false}
            active={false}
          />
        </NodeWrapper>
      </div>
    </section>
  )
}
