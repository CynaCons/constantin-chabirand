import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

interface Principle {
  title: string
  body: string
  highlight?: boolean
}

const PRINCIPLES: Principle[] = [
  {
    title: 'High agency',
    body: "I don't limit myself to a job title or the task list in my contract. I do whatever it takes to make the thing I started succeed.",
  },
  {
    title: 'Hands-on, grounded',
    body: "I grew up working a family farm - no working hours, just what needs doing. When something's broken, I put my hands in it and fix it.",
  },
  {
    title: 'Built to crack hard problems',
    body: "On a hard problem I push my thinking into a do-or-die frame - not panic, sharper focus - surfacing the low-probability moves I'd otherwise miss. Resilient under chaos, I thrive in fast, dynamic environments.",
  },
  {
    title: 'AI: I ship, I don\'t just talk',
    body: 'Everyone talks about AI. I build production tools and real firmware with it - and I deliver 3-5× faster than before.',
    highlight: true,
  },
]

function PrincipleCard({ principle, index }: { principle: Principle; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
      className="rounded border p-5"
      style={{
        background: principle.highlight
          ? 'rgba(19, 194, 150, 0.08)'
          : 'var(--color-surface)',
        borderColor: principle.highlight
          ? 'rgba(19, 194, 150, 0.35)'
          : 'var(--color-border)',
        boxShadow: principle.highlight
          ? '0 0 0 1px rgba(19, 194, 150, 0.20)'
          : undefined,
        borderLeft: principle.highlight
          ? '3px solid var(--color-accent)'
          : undefined,
      }}
    >
      <div
        className="mb-2 text-sm font-bold uppercase tracking-[0.05em]"
        style={{
          color: principle.highlight ? 'var(--color-accent)' : 'var(--color-ink)',
        }}
      >
        {principle.title}
        {principle.highlight && (
          <span
            className="ml-2 rounded px-1.5 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.12em]"
            style={{ color: '#0B1410', background: 'var(--color-accent)' }}
          >
            Featured
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        {principle.body}
      </p>
    </motion.div>
  )
}

export function Mindset() {
  return (
    <section
      id="mindset"
      aria-label="Mindset"
      className="mt-12 border-t pt-10 scroll-mt-8"
      style={{ borderColor: 'var(--color-rule)' }}
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="pcb-tick" aria-hidden="true" />
        <h2
          className="font-mono text-2xl font-bold uppercase tracking-[0.06em]"
          style={{ color: 'var(--color-accent)' }}
        >
          Mindset
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {PRINCIPLES.map((principle, i) => (
          <PrincipleCard key={principle.title} principle={principle} index={i} />
        ))}
      </div>
    </section>
  )
}
