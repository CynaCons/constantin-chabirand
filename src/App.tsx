import { useEffect, useMemo, useState } from 'react'
import { content } from './data/content'
import { useHashState } from './hooks/useHashState'
import TopBar from './components/TopBar'
import StatusBar from './components/StatusBar'
import { SubsystemRail, BottomTabs } from './components/SubsystemNav'
import Overview from './components/Overview'
import ProjectGrid from './components/ProjectGrid'
import MissionLogDrawer from './components/MissionLogDrawer'
import CommandPalette from './components/CommandPalette'

export default function App() {
  const { domain, project, go } = useHashState()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const { profile, domains, current } = content

  const projectCount = useMemo(
    () => domains.reduce((n, d) => n + d.projects.length, 0),
    [domains],
  )

  const activeDomain = domains.find((d) => d.key === domain) ?? null
  const domainKey = activeDomain?.key ?? null

  const projectIndex = activeDomain
    ? activeDomain.projects.findIndex((p) => p.id === project)
    : -1
  const activeProject = projectIndex >= 0 ? activeDomain!.projects[projectIndex] : null

  // ⌘K / Ctrl+K toggles the palette globally.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[70] focus:rounded focus:bg-elevated focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <TopBar onHome={() => go(null)} onOpenPalette={() => setPaletteOpen(true)} />

      <SubsystemRail domains={domains} active={domainKey} onSelect={(k) => go(k)} />
      <BottomTabs domains={domains} active={domainKey} onSelect={(k) => go(k)} />

      <main id="main" className="px-4 pb-24 pt-16 sm:px-6 lg:pb-12 lg:pl-[284px] lg:pr-8">
        {activeDomain ? (
          <ProjectGrid domain={activeDomain} onOpenProject={(pid) => go(activeDomain.key, pid)} />
        ) : (
          <Overview profile={profile} domains={domains} current={current} onSelect={(k) => go(k)} />
        )}
      </main>

      <StatusBar projectCount={projectCount} />

      {activeProject && activeDomain && (
        <MissionLogDrawer
          project={activeProject}
          domain={activeDomain}
          onClose={() => go(activeDomain.key)}
          onPrev={() => go(activeDomain.key, activeDomain.projects[projectIndex - 1]?.id)}
          onNext={() => go(activeDomain.key, activeDomain.projects[projectIndex + 1]?.id)}
          hasPrev={projectIndex > 0}
          hasNext={projectIndex < activeDomain.projects.length - 1}
        />
      )}

      {paletteOpen && (
        <CommandPalette
          domains={domains}
          onClose={() => setPaletteOpen(false)}
          onNavigate={(d, p) => go(d, p ?? null)}
        />
      )}
    </div>
  )
}
