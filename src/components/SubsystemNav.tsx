import type { ReactNode } from 'react'
import { Home, ChevronRight } from 'lucide-react'
import type { Domain } from '../types'
import { DomainIcon } from '../lib/icons'

interface Props {
  domains: Domain[]
  active: string | null
  onSelect: (key: string | null) => void
}

/** Desktop left rail. */
export function SubsystemRail({ domains, active, onSelect }: Props) {
  return (
    <nav
      aria-label="Subsystems"
      className="fixed bottom-7 left-0 top-12 z-20 hidden w-[260px] flex-col gap-1 border-r border-border-dim bg-panel/60 p-3 lg:flex"
    >
      <p className="px-2 py-2 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-muted">
        Subsystem Manifest
      </p>
      <NavRow
        label="Overview"
        sub="mission home"
        icon={<Home className="h-4 w-4" aria-hidden="true" />}
        accentVar="var(--color-cyan)"
        active={active === null}
        onClick={() => onSelect(null)}
      />
      {domains.map((d) => (
        <NavRow
          key={d.key}
          label={d.label}
          sub={`${d.projects.length} projects`}
          icon={<DomainIcon name={d.icon} className="h-4 w-4" />}
          accentVar={`var(--color-${d.accent})`}
          active={active === d.key}
          onClick={() => onSelect(d.key)}
        />
      ))}
    </nav>
  )
}

function NavRow({
  label,
  sub,
  icon,
  accentVar,
  active,
  onClick,
}: {
  label: string
  sub: string
  icon: ReactNode
  accentVar: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={`group flex items-center gap-3 rounded-md border-l-[3px] px-3 py-2.5 text-left transition-colors ${
        active ? 'bg-overlay' : 'hover:bg-overlay/60'
      }`}
      style={{ borderLeftColor: active ? accentVar : 'transparent' }}
    >
      <span
        className="shrink-0 transition-colors"
        style={{ color: active ? accentVar : 'var(--color-secondary)' }}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-display text-[0.8rem] font-medium text-primary">
          {label}
        </span>
        <span className="block font-mono text-[0.6rem] uppercase tracking-wide text-muted">
          {sub}
        </span>
      </span>
      <ChevronRight
        className="h-3.5 w-3.5 shrink-0 text-muted transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </button>
  )
}

/** Mobile bottom tab bar. */
export function BottomTabs({ domains, active, onSelect }: Props) {
  const items = [
    { key: null as string | null, label: 'Home', icon: 'Home' },
    ...domains.map((d) => ({ key: d.key as string | null, label: d.label.split(' ')[0], icon: d.icon })),
  ]
  return (
    <nav
      aria-label="Subsystems"
      className="fixed inset-x-0 bottom-0 z-30 flex h-16 items-stretch border-t border-border-dim bg-statusbar pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      {items.map((it) => {
        const isActive = active === it.key
        const accent =
          it.key === null
            ? 'var(--color-cyan)'
            : `var(--color-${domains.find((d) => d.key === it.key)?.accent})`
        return (
          <button
            key={it.label}
            onClick={() => onSelect(it.key)}
            aria-current={isActive ? 'page' : undefined}
            className="flex flex-1 flex-col items-center justify-center gap-1"
            style={{ color: isActive ? accent : 'var(--color-muted)' }}
          >
            {it.icon === 'Home' ? (
              <Home className="h-5 w-5" aria-hidden="true" />
            ) : (
              <DomainIcon name={it.icon} className="h-5 w-5" />
            )}
            <span className="font-mono text-[0.6rem] uppercase tracking-wide">{it.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
