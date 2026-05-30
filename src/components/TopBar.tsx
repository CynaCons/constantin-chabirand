import { useEffect, useState } from 'react'
import { Command } from 'lucide-react'

function Clock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const t = now.toISOString().slice(11, 19)
  return (
    <span className="font-mono text-[0.7rem] text-muted tabular-nums" aria-live="off">
      {t}Z
    </span>
  )
}

export default function TopBar({
  onHome,
  onOpenPalette,
}: {
  onHome: () => void
  onOpenPalette: () => void
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-12 items-center justify-between border-b border-border-dim bg-statusbar px-4">
      <button
        onClick={onHome}
        className="group flex items-center gap-2 font-mono text-[0.7rem] tracking-wide text-secondary transition-colors hover:text-primary"
      >
        <span className="text-cyan">◆</span>
        <span className="hidden sm:inline">MISSION:</span>
        <span className="text-primary">PORTFOLIO-CC</span>
      </button>

      <div className="flex items-center gap-2 font-mono text-[0.7rem]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green led-pulse" aria-hidden="true" />
        <span className="hidden text-secondary sm:inline">LINK: NOMINAL</span>
      </div>

      <div className="flex items-center gap-3">
        <Clock />
        <button
          onClick={onOpenPalette}
          aria-label="Open command palette"
          className="flex items-center gap-1.5 rounded-md border border-border-dim bg-elevated px-2 py-1 font-mono text-[0.7rem] text-secondary transition-colors hover:border-border-active hover:text-primary"
        >
          <Command className="h-3 w-3" aria-hidden="true" />
          <span className="hidden sm:inline">K</span>
        </button>
      </div>
    </header>
  )
}
