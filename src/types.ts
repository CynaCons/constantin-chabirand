export interface Link {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  org: string
  period: string
  role: string
  summary: string
  highlights: string[]
  tech: string[]
  links: Link[]
}

export type DomainKey = 'space' | 'auto' | 'ai'

export interface Domain {
  key: DomainKey
  label: string
  /** lucide-react icon name */
  icon: string
  /** CSS color token name, e.g. 'domain-space' */
  accent: string
  tagline: string
  summary: string
  skills: string[]
  projects: Project[]
}

export interface Profile {
  name: string
  headline: string
  shortDescriptor: string
  bio: string
  location: string
  availability: string
  languages: string[]
  education: string[]
  certifications: string[]
  links: Link[]
}

export interface PortfolioContent {
  profile: Profile
  domains: Domain[]
}
