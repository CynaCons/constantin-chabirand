import { Satellite, Cpu, Terminal, type LucideIcon } from 'lucide-react'

/** Maps the `icon` string in content.ts to a lucide component. */
export const domainIcons: Record<string, LucideIcon> = {
  Satellite,
  Cpu,
  Terminal,
}

export function DomainIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Ico = domainIcons[name] ?? Terminal
  return <Ico className={className} aria-hidden="true" />
}
