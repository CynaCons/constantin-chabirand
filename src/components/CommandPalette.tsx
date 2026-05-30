import { useEffect, useMemo, useRef, useState } from 'react'
import { Home, CornerDownLeft } from 'lucide-react'
import type { Domain } from '../types'
import { DomainIcon } from '../lib/icons'

interface Item {
  id: string
  label: string
  hint: string
  icon: string | 'home'
  accent: string
  go: () => void
}

export default function CommandPalette({
  domains,
  onClose,
  onNavigate,
}: {
  domains: Domain[]
  onClose: () => void
  onNavigate: (domain: string | null, project?: string | null) => void
}) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const items = useMemo<Item[]>(() => {
    const list: Item[] = [
      {
        id: 'home',
        label: 'Overview / Home',
        hint: 'HOME',
        icon: 'home',
        accent: 'var(--color-cyan)',
        go: () => onNavigate(null),
      },
    ]
    for (const d of domains) {
      list.push({
        id: `d-${d.key}`,
        label: `Open ${d.label}`,
        hint: 'SUBSYSTEM',
        icon: d.icon,
        accent: `var(--color-${d.accent})`,
        go: () => onNavigate(d.key),
      })
      for (const p of d.projects) {
        list.push({
          id: `p-${p.id}`,
          label: p.title,
          hint: d.label.split(' ')[0].toUpperCase(),
          icon: d.icon,
          accent: `var(--color-${d.accent})`,
          go: () => onNavigate(d.key, p.id),
        })
      }
    }
    return list
  }, [domains, onNavigate])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((it) => (it.label + ' ' + it.hint).toLowerCase().includes(q))
  }, [items, query])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  useEffect(() => {
    setSelected(0)
  }, [query])

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected((s) => Math.min(s + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected((s) => Math.max(s - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      filtered[selected]?.go()
      onClose()
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Command palette">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div className="absolute left-1/2 top-[18vh] w-[92vw] max-w-[560px] -translate-x-1/2 overflow-hidden rounded-lg border border-border-active bg-elevated shadow-[0_16px_48px_rgba(0,0,0,0.55)]">
        <div className="flex items-center gap-2 border-b border-border-dim px-4 py-3">
          <span className="font-mono text-sm text-cyan">{'>'}</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKey}
            placeholder="Search subsystems and projects…"
            className="flex-1 bg-transparent font-mono text-sm text-primary placeholder:text-muted focus:outline-none"
            aria-label="Search"
          />
          <kbd className="rounded border border-border-dim px-1.5 py-0.5 font-mono text-[0.6rem] text-muted">
            ESC
          </kbd>
        </div>

        <ul className="max-h-[50vh] overflow-y-auto py-1">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center font-mono text-[0.75rem] text-muted">No matches</li>
          )}
          {filtered.map((it, i) => (
            <li key={it.id}>
              <button
                onMouseEnter={() => setSelected(i)}
                onClick={() => {
                  it.go()
                  onClose()
                }}
                className={`flex w-full items-center gap-3 border-l-2 px-4 py-2.5 text-left ${
                  i === selected ? 'bg-overlay' : ''
                }`}
                style={{ borderLeftColor: i === selected ? it.accent : 'transparent' }}
              >
                <span className="shrink-0" style={{ color: it.accent }}>
                  {it.icon === 'home' ? (
                    <Home className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <DomainIcon name={it.icon} className="h-4 w-4" />
                  )}
                </span>
                <span className="min-w-0 flex-1 truncate text-[0.85rem] text-primary">{it.label}</span>
                <span className="shrink-0 font-mono text-[0.6rem] tracking-wide text-muted">{it.hint}</span>
                {i === selected && <CornerDownLeft className="h-3 w-3 text-muted" aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
