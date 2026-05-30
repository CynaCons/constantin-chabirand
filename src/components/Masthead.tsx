import type { Profile } from '../types'

export default function Masthead({ profile }: { profile: Profile }) {
  return (
    <header id="top" className="pb-10">
      <h1
        className="fade-up font-display text-[2.5rem] font-semibold leading-[1.05] text-ink sm:text-[3.5rem]"
        style={{ animationDelay: '0ms' }}
      >
        {profile.name}
      </h1>
      <p
        className="fade-up mt-2 font-body text-[1.125rem] italic leading-[1.5] text-muted"
        style={{ animationDelay: '80ms' }}
      >
        {profile.shortDescriptor}
      </p>

      <p
        className="fade-up mt-4 max-w-[56ch] font-body text-[1.15rem] leading-[1.6] text-ink"
        style={{ animationDelay: '140ms' }}
      >
        {profile.bio}
      </p>

      <div
        className="draw-rule mt-6 h-px w-full bg-rule"
        style={{ animationDelay: '240ms' }}
        aria-hidden="true"
      />

      {/* Availability — prominent */}
      <div
        className="fade-up mt-6 border-l-2 bg-surface/60 py-2 pl-4"
        style={{ animationDelay: '280ms', borderColor: 'var(--color-accent)' }}
      >
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent">Availability</p>
        <p className="mt-1 font-body text-[1.0625rem] leading-[1.5] text-ink">{profile.availability}</p>
      </div>

      {/* Badges + links */}
      <div
        className="fade-up mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3"
        style={{ animationDelay: '360ms' }}
      >
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-faint">
          9 Years · Space · Automotive · AI
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-1" aria-label="Profiles">
          {profile.links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.8125rem] text-accent underline decoration-1 underline-offset-2 transition-all hover:underline-offset-4"
            >
              {l.label} ↗
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
