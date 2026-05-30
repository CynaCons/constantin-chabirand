import type { Profile, Domain } from '../types'

export default function Footer({ profile, domains }: { profile: Profile; domains: Domain[] }) {
  return (
    <footer className="mt-4 border-t border-rule pt-8">
      <div className="grid gap-10 sm:grid-cols-2">
        {/* Skills, grouped by domain */}
        <div>
          <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent">Skills</h2>
          <div className="mt-4 space-y-4">
            {domains.map((d) => (
              <div key={d.key}>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-faint">{d.label}</p>
                <p className="mt-1 font-mono text-[0.8rem] leading-[1.7] text-muted">
                  {d.skills.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-5">
          <Detail label="Education" lines={profile.education} />
          <Detail label="Languages" lines={profile.languages} />
          <Detail label="Certifications" lines={profile.certifications} />
          {profile.earlier && (
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-faint">Earlier</p>
              <p className="mt-1 font-body text-[0.92rem] italic leading-[1.55] text-muted">{profile.earlier}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
            {profile.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.8125rem] text-accent underline decoration-1 underline-offset-2 hover:underline-offset-4"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-10 font-mono text-[0.68rem] text-faint">
        {profile.name} · {profile.location} · built with React + Vite
      </p>
    </footer>
  )
}

function Detail({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-faint">{label}</p>
      {lines.map((l, i) => (
        <p key={i} className="mt-1 font-body text-[0.92rem] leading-[1.5] text-muted">
          {l}
        </p>
      ))}
    </div>
  )
}
