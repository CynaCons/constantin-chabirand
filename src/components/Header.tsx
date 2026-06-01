import { motion } from 'framer-motion'

const HEADLINE =
  'Embedded Software Engineer & Architect — real-time firmware, DSP & safety-critical systems, now hands-on in coherent optical communications.'

const SUMMARY_BULLETS = [
  'Embedded Software Engineer & Architect — 9 years shipping production firmware: real-time control, DSP, multicore ARM, bare-metal, functional safety to ASIL-D. ECUs in production vehicles for Mercedes-Benz, VW, BMW, Tesla, Continental.',
  'Built and led, not just coded — founded and scaled an embedded engineering practice from 1 to 60+ engineers (€11.2M annual revenue); founded the AUTOSAR Academy; 50+ technical-commercial presentations to OEMs and Tier-1s.',
  'Now hands-on in coherent optical comms — building the embedded control, DSP, and test-automation software around an ESA coherent-DWDM transport testbed (WSS, superchannels, OSNR/BER) and a free-space optical terminal. The firmware/systems engineer who makes the optics work.',
  'Deep technical authority — AUTOSAR (Vector CEP certified), multicore SoC bring-up (AURIX, Cortex-R52 hypervisor, TDA4VM), safety & security architecture.',
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

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
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
