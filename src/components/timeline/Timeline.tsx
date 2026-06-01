import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { TimelineNode, projectToSubCard } from './TimelineNode'
import { content } from '../../data/content'

/* ── Mynaric re-narrated sub-cards ──────────────────────── */
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

/* ── T&S leadership block ── */
const TS_LEADERSHIP_CARD = {
  id: 'ts-leadership',
  title: 'AUTOSAR Practice Leader — Founded & Scaled',
  tagline: 'T&S Engineering, Stuttgart · 2017–2025',
  bullets: [
    'Founded and scaled the AUTOSAR practice from 1 to 60+ engineers across Stuttgart, Lyon and Toulouse — the first and most successful practice of its kind at T&S.',
    '€11.2M annual revenue (2023) via a service-supplier model (full project ownership, not staff aug); 50+ technical-commercial presentations to OEMs and Tier 1s across Europe, the US, Israel and Korea.',
    'Founded the T&S AUTOSAR Academy (2021): internal onboarding plus a paid external training service; 26 engineers trained; adopted as the company-wide standard.',
    'Built the AUTOSAR Platform — reusable reference implementations to accelerate delivery and strengthen bids.',
    'Set up engineering backbone from zero: Jira, Bitbucket, knowledge base, hardware inventory, remote device/license access — across three cities.',
    'Among the first engineering-service providers to earn the Vector CEP for BSW Integration (2021).',
  ],
  tech: ['AUTOSAR Classic / Adaptive', 'Vector MICROSAR', 'ISO 26262', 'ISO 21434', 'ASPICE L2', 'Vector CEP'],
  links: [
    { label: 'T&S AUTOSAR Academy (press)', url: 'https://www.technologyandstrategy.com/news/discover-the-t-s-autosar-academy' },
  ],
}

/* ── Education sub-items ── */
const EDUCATION_ITEMS = [
  {
    id: 'ntust-internship',
    title: 'Technical Internship — NTUST, Taipei',
    tagline: 'National Taiwan University of Science & Technology · 2016',
    bullets: [
      'Built a LoRa-based smart-building prototype: connected-sensor firmware on STM32F4, LoRa radio drivers, and a sensor-management GUI — early hands-on with long-range RF in an international R&D lab.',
    ],
    tech: ['STM32F4', 'LoRa', 'Embedded C', 'C#', 'RF'],
    links: [] as Array<{ label: string; url: string }>,
  },
  {
    id: 'eseo-iot-ble',
    title: 'IoT Capstone for STMicroelectronics — BLE / BlueZ / Yocto',
    tagline: 'ESEO · industrial-monitoring IoT · led an 8-student team',
    bullets: [
      'Led an 8-student team building an end-to-end industrial-monitoring IoT system: STM32 BLE sensor nodes → an embedded-Linux coordinator running BlueZ5 → TCP/IP → an Android app. Built on Yocto / embedded Linux; owned firmware, BLE-stack integration, and project management.',
    ],
    tech: ['STM32', 'BLE', 'BlueZ5', 'Yocto / Embedded Linux', 'Android', 'TCP/IP'],
    links: [] as Array<{ label: string; url: string }>,
  },
  {
    id: 'bosch-internship',
    title: 'Embedded SW Trainee — Bosch, Stuttgart',
    tagline: 'AUTOSAR infotainment migration · end-customer GM · 2017',
    bullets: [
      'AUTOSAR infotainment software migration across Renesas microcontrollers — first hands-on with production AUTOSAR, the start of the automotive chapter.',
    ],
    tech: ['AUTOSAR', 'Renesas RH850 / V850', 'Embedded C'],
    links: [] as Array<{ label: string; url: string }>,
  },
]

/* ── Farming node ── */
const FARMING_ITEMS = [
  {
    id: 'farming',
    title: 'Seasonal farm worker — rural France',
    tagline: '~2005–2015',
    bullets: [
      'Seasonal farm worker through my school years — weekends and holidays, April to end of September. Started very young driving tractors, then on the summer melon harvest (also tomatoes, potatoes, peppers). In the later years I led a small crew, running the grading/calibration line, sale preparation, and weekend deliveries.',
    ],
    tech: [] as string[],
    links: [] as Array<{ label: string; url: string }>,
  },
]

function NodeWrapper({ children, delay, isLast }: { children: React.ReactNode; delay: number; isLast?: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: 'easeOut', delay: delay * 0.06 }}
      data-last={isLast ? 'true' : undefined}
    >
      {children}
    </motion.div>
  )
}

export function Timeline() {
  const { domains } = content
  const auto = domains.find((d) => d.key === 'auto')

  // T&S sub-cards: leadership FIRST, then project cards
  const autoProjectCards = auto?.projects
    .filter((p) => p.id !== 'autosar-practice') // already in leadership card
    .map(projectToSubCard) ?? []
  const tsSubCards = [TS_LEADERSHIP_CARD, ...autoProjectCards]

  return (
    <section id="timeline" aria-label="Career timeline" className="mt-12 scroll-mt-8">
      {/* Section label */}
      <div className="mb-8 flex items-center gap-3">
        <span className="pcb-tick" aria-hidden="true" />
        <h2
          className="font-mono text-2xl font-bold uppercase tracking-[0.06em]"
          style={{ color: 'var(--color-accent)' }}
        >
          Experience
        </h2>
      </div>

      {/* Timeline spine wrapper — the continuous vertical line is rendered by TimelineNode */}
      <div className="timeline-spine-container">
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
            isLastNode={false}
          />
        </NodeWrapper>

        {/* ── T&S Engineering (EXPANDED, leadership first) ── */}
        <NodeWrapper delay={1}>
          <TimelineNode
            period="2017 — 2025"
            company="T&S Engineering"
            role="AUTOSAR Practice Leader | Senior Embedded Software Engineer"
            summary="Eight years building and shipping production automotive ECU software — AUTOSAR Classic/Adaptive, ISO 26262 ASIL-D, multicore real-time scheduling, EV charging — for Mercedes-Benz, Volkswagen, BMW, Tesla, and Continental. Founded and scaled the AUTOSAR practice from 1 to 60+ engineers and €11.2M annual revenue."
            accentColor="var(--color-auto)"
            subCards={tsSubCards}
            defaultExpanded={true}
            active={false}
            isLastNode={false}
          />
        </NodeWrapper>

        {/* ── Education (COLLAPSED) ── */}
        <NodeWrapper delay={2}>
          <TimelineNode
            period="2012 — 2017"
            company="ESEO Angers — Diplôme d'Ingénieur"
            role="Embedded Systems · International Internships"
            summary="Five-year French engineering degree (MSc-equivalent) specialized in embedded systems — with an international internship in Taipei and hands-on IoT/BLE projects."
            accentColor="var(--color-edu)"
            subCards={EDUCATION_ITEMS}
            defaultExpanded={false}
            active={false}
            isLastNode={false}
          />
        </NodeWrapper>

        {/* ── Farming (last node — no line below) ── */}
        <NodeWrapper delay={3} isLast>
          <TimelineNode
            period="~2005 — 2015"
            company="Rural France — Seasonal Farm Work"
            role="Melon & vegetable harvest · tractor operator · crew lead"
            accentColor="var(--color-edu)"
            subCards={FARMING_ITEMS}
            defaultExpanded={false}
            active={false}
            isLastNode={true}
          />
        </NodeWrapper>
      </div>
    </section>
  )
}
