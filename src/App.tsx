import { content } from './data/content'
import { Header } from './components/Header'
import { Timeline } from './components/timeline'
import { Skills } from './components/Skills'

export default function App() {
  const { profile } = content

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:px-3 focus:py-2 focus:text-sm"
        style={{ background: 'var(--color-surface)', color: 'var(--color-accent)' }}
      >
        Skip to content
      </a>

      <main className="mx-auto max-w-[720px] px-5 py-12 sm:px-8 lg:py-16">
        <Header profile={profile} />
        <Timeline />
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
          <p className="mt-1 text-xs" style={{ color: 'var(--color-faint)' }}>
            Contact via{' '}
            {profile.links.map((l, i) => (
              <span key={l.label}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: 'var(--color-muted)' }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--color-muted)')}
                >
                  {l.label}
                </a>
                {i < profile.links.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
        </footer>
      </main>
    </div>
  )
}
