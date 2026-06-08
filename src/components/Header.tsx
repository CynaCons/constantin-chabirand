import { motion } from 'framer-motion'

const HEADLINE =
  'Embedded Software Engineer & Architect — real-time firmware, multicore SoCs, safety & cybersecurity, AI-augmented — now hands-on in coherent optical comms.'

const FOCUS_TAGS = ['Space-Tech', 'Real-Time Embedded', 'Multicore SoCs', 'Safety & Cybersecurity', 'AI-Augmented', 'Optical Comms']

const SUMMARY_BULLETS = [
  'Embedded Software Engineer & Architect — 9 years shipping production firmware: real-time control, DSP, multicore ARM, bare-metal, functional safety to ASIL-D. ECUs in production vehicles for Mercedes-Benz, VW, BMW, Tesla, Continental.',
  'Built and led, not just coded — founded and scaled an embedded engineering practice from 1 to 60+ engineers (€11.2M annual revenue); founded the AUTOSAR Academy; 50+ technical-commercial presentations to OEMs and Tier-1s.',
  'Now hands-on in coherent optical communications across two flagship programs — DARPA Space-BACN (sole firmware engineer on a free-space optical terminal) and ESA Pegasus (coherent-DWDM transport: WSS, superchannels, OSNR/BER, up to 400G). On Space-BACN I own the on-MCU DSP and microsecond control loops that keep a coherent link locked — blind polarization control, a runtime-reconfigurable FIR demod chain, DDS pilot-tone generation. That is the control-and-DSP layer a silicon-photonics interconnect needs to hold a link stable between accelerators.',
  'Deep in runtime architecture & deterministic systems — OS internals, custom multicore schedulers, and deterministic data exchange and timing to microsecond precision across a 6-core ASIL-D SoC; AUTOSAR (Vector CEP certified), multicore SoC bring-up (AURIX, Cortex-R52 hypervisor, TDA4VM), safety & security architecture.',
  'AI-augmented builder — multi-model orchestration (PowerSpawn) and self-built tooling (Radeau, replacing ~$10k/yr CANoe); ~3–5× delivery velocity.',
]

const EASING = [0.16, 1, 0.3, 1] as const

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: EASING, delay },
  }
}

export function Header() {
  return (
    <header id="summary" className="pb-8 scroll-mt-8">
      {/* Focus / domain tags */}
      <motion.div {...fadeUp(0)} className="mb-4 flex flex-wrap gap-2">
        {FOCUS_TAGS.map((t) => (
          <span
            key={t}
            className="rounded px-2 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em]"
            style={{
              color: 'var(--color-accent)',
              background: 'rgba(19,194,150,0.10)',
              border: '1px solid rgba(19,194,150,0.30)',
            }}
          >
            {t}
          </span>
        ))}
      </motion.div>

      {/* Headline */}
      <motion.p
        {...fadeUp(0)}
        className="text-base font-semibold leading-snug sm:text-lg"
        style={{ color: 'var(--color-ink)' }}
      >
        {HEADLINE}
      </motion.p>

      {/* Summary bullets */}
      <motion.ul {...fadeUp(0.1)} className="mt-5 space-y-3">
        {SUMMARY_BULLETS.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: 'var(--color-accent)' }}
              aria-hidden="true"
            />
            <span style={{ color: 'var(--color-muted)' }}>{bullet}</span>
          </li>
        ))}
      </motion.ul>

      {/* Cross-domain discipline bridge */}
      <motion.aside
        {...fadeUp(0.2)}
        className="mt-6 rounded-lg p-4 sm:p-5"
        style={{
          background: 'rgba(19,194,150,0.06)',
          border: '1px solid rgba(19,194,150,0.25)',
        }}
      >
        <p
          className="mb-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em]"
          style={{ color: 'var(--color-accent)' }}
        >
          Why automotive → optics
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          Eight years of ASIL-D automotive firmware — where a bug ships in a million cars and a field
          fix is impossible — drilled a discipline of formal timing budgets, deterministic scheduling,
          and first-time-right bring-up. A coherent optical link demands the same rigor: microsecond
          control loops that must never drop lock. Few engineers carry both the functional-safety
          discipline <em>and</em> the hands-on photonic-DSP layer.
        </p>
      </motion.aside>

    </header>
  )
}
