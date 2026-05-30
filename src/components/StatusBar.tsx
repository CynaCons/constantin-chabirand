export default function StatusBar({ projectCount }: { projectCount: number }) {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 hidden h-7 items-center justify-between border-t border-border-dim bg-statusbar px-4 font-mono text-[0.65rem] text-muted lg:flex">
      <span className="flex items-center gap-1.5">
        <span className="text-green">◉</span> main
      </span>
      <span className="flex items-center gap-4">
        <span>{projectCount} PROJECTS</span>
        <span className="text-amber">⚡ OPEN TO US RELOCATION · H-1B / J-1</span>
      </span>
    </footer>
  )
}
