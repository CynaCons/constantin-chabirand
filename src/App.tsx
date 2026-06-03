import { content } from './data/content'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Mindset } from './components/Mindset'
import { Timeline } from './components/timeline'
import { OpenSource } from './components/OpenSource'
import { Initiatives } from './components/Initiatives'
import { Skills } from './components/Skills'

export default function App() {
  const { profile } = content

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <a
        href="#summary"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:px-3 focus:py-2 focus:text-sm"
        style={{ background: 'var(--color-surface)', color: 'var(--color-accent)' }}
      >
        Skip to content
      </a>

      {/*
        Two-column layout:
        - Left: sticky dark sidebar (280px)
        - Right: main content (warm near-white, fills remaining width)
        Max total width ~1280px centered.
        Responsive: stacks on narrow screens.
      */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">

          {/* ── Sidebar (dark panel) ── */}
          <div className="lg:sticky lg:top-8 lg:w-[280px] lg:shrink-0 pt-10 lg:pt-12 pb-6 lg:pb-12">
            <Sidebar profile={profile} />
          </div>

          {/* ── Main content (light) ── */}
          <main className="flex-1 min-w-0 pt-6 lg:pt-12 pb-12">
            {/* 1. Summary */}
            <Header />

            {/* 2. Experience — career timeline */}
            <Timeline />

            {/* 3. Personal / Open Source */}
            <OpenSource />

            {/* 4. Closed Source Initiatives */}
            <Initiatives />

            {/* 5. Mindset */}
            <Mindset />

            {/* 6. Skills */}
            <Skills />

            {/* Footer */}
            <footer
              className="mt-12 border-t pb-8 pt-6"
              style={{ borderColor: 'var(--color-rule)' }}
            >
              <p
                className="font-mono text-[0.6rem] uppercase tracking-[0.14em]"
                style={{ color: 'var(--color-faint)' }}
              >
                Constantin Chabirand · Munich, Germany · {new Date().getFullYear()}
              </p>
            </footer>
          </main>

        </div>
      </div>
    </div>
  )
}
