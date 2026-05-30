import { content } from './data/content'
import { useHashState } from './hooks/useHashState'
import Masthead from './components/Masthead'
import NavRail from './components/NavRail'
import CurrentStrip from './components/CurrentStrip'
import DomainSection from './components/DomainSection'
import LeadershipBand from './components/LeadershipBand'
import InnovationsList from './components/InnovationsList'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'

const META: Record<string, { company: string; period: string; sectionId: string }> = {
  auto: { company: 'T&S Engineering', period: '2017 — 2025', sectionId: 'sec-auto' },
  space: { company: 'Mynaric Lasercom', period: '2025 — present', sectionId: 'sec-space' },
  ai: { company: 'Independent', period: '2025 — present', sectionId: 'sec-ai' },
}

export default function App() {
  const { profile, domains, current, leadership, innovations } = content
  const { domain, project, go } = useHashState()

  const byKey = Object.fromEntries(domains.map((d) => [d.key, d]))
  const auto = byKey['auto']
  const space = byKey['space']
  const ai = byKey['ai']

  const activeDomain = domains.find((d) => d.key === domain)
  const activeProject = activeDomain?.projects.find((p) => p.id === project)

  return (
    <div className="min-h-screen">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[70] focus:rounded focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-[940px] gap-12 px-5 py-12 sm:px-8 lg:py-20">
        <NavRail />
        <main className="mx-auto w-full max-w-[680px]">
          <Masthead profile={profile} />

          <div className="mt-12">
            <CurrentStrip items={current} />
          </div>

          {auto && (
            <div className="mt-14">
              <DomainSection
                domain={auto}
                company={META.auto.company}
                period={META.auto.period}
                sectionId={META.auto.sectionId}
                onOpenProject={(pid) => go('auto', pid)}
              />
            </div>
          )}

          <div className="mt-12">
            <LeadershipBand data={leadership} />
          </div>

          {space && (
            <div className="mt-14">
              <DomainSection
                domain={space}
                company={META.space.company}
                period={META.space.period}
                sectionId={META.space.sectionId}
                onOpenProject={(pid) => go('space', pid)}
              />
            </div>
          )}

          {ai && (
            <div className="mt-14">
              <DomainSection
                domain={ai}
                company={META.ai.company}
                period={META.ai.period}
                sectionId={META.ai.sectionId}
                onOpenProject={(pid) => go('ai', pid)}
              />
            </div>
          )}

          <div className="mt-14">
            <InnovationsList items={innovations} />
          </div>

          <div className="mt-14">
            <Footer profile={profile} domains={domains} />
          </div>
        </main>
      </div>

      {activeProject && activeDomain && (
        <ProjectModal
          project={activeProject}
          accent={`var(--color-${activeDomain.key})`}
          onClose={() => go(null)}
        />
      )}
    </div>
  )
}
