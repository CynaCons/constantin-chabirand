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
  /** compact early-career / foundations line */
  earlier?: string
  links: Link[]
}

/** Highlighted "what I'm working on now" item. */
export interface CurrentItem {
  title: string
  context: string
  blurb: string
  tags: string[]
  /** CSS color token name, e.g. 'domain-space' */
  accent: string
  link?: Link
}

/** The T&S "Department Backbone" leadership callout. */
export interface LeadershipBlock {
  title: string
  tagline: string
  metrics: string[]
  bullets: string[]
}

/** A recent-innovation highlight. */
export interface Innovation {
  title: string
  blurb: string
  year: string
  /** CSS color token name */
  accent: string
}

/** A node on the single-branch git timeline. */
export interface TimelineCommit {
  label: string
  sublabel?: string
  /** if set (with projectId), clicking opens the Mission Log drawer */
  domain?: DomainKey
  projectId?: string
}

/** A company / era segment of the timeline branch. */
export interface TimelineSegment {
  company: string
  period: string
  /** CSS color token for the branch line, e.g. 'domain-space' */
  accent: string
  commits: TimelineCommit[]
  /** show this many commits before a "+N more" expander */
  collapseAfter?: number
}

export interface PortfolioContent {
  profile: Profile
  current: CurrentItem[]
  leadership: LeadershipBlock
  innovations: Innovation[]
  timeline: TimelineSegment[]
  domains: Domain[]
}
