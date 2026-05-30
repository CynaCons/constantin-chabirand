import { useEffect, useState } from 'react'

const LANDMARKS = [
  { id: 'now', label: 'Now' },
  { id: 'sec-auto', label: 'Automotive' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'sec-space', label: 'Space-Tech' },
  { id: 'sec-ai', label: 'Personal' },
]

export default function NavRail() {
  const [active, setActive] = useState('now')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    LANDMARKS.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav
      aria-label="Sections"
      className="sticky top-24 hidden w-[150px] shrink-0 flex-col gap-2.5 lg:flex"
    >
      {LANDMARKS.map((l) => {
        const isActive = active === l.id
        return (
          <button
            key={l.id}
            onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="group flex items-center gap-2 text-left font-mono text-[0.72rem] uppercase tracking-[0.12em] transition-colors"
            style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-faint)' }}
          >
            <span
              className="h-px transition-all"
              style={{
                width: isActive ? '20px' : '10px',
                background: isActive ? 'var(--color-accent)' : 'var(--color-rule)',
              }}
            />
            {l.label}
          </button>
        )
      })}
    </nav>
  )
}
