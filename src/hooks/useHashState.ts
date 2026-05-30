import { useEffect, useState, useCallback } from 'react'

export interface HashState {
  domain: string | null
  project: string | null
}

function parseHash(): HashState {
  const raw = window.location.hash.replace(/^#\/?/, '')
  if (!raw) return { domain: null, project: null }
  const [domain, project] = raw.split('/')
  return { domain: domain || null, project: project || null }
}

/**
 * URL-synced explorer state: location.hash <-> { domain, project }.
 * Gives back/forward, deep links and shareable URLs with no router lib.
 */
export function useHashState() {
  const [state, setState] = useState<HashState>(parseHash)

  useEffect(() => {
    const onHash = () => setState(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const go = useCallback((domain: string | null, project: string | null = null) => {
    const next = domain ? `#${domain}${project ? `/${project}` : ''}` : '#'
    if (window.location.hash !== next) {
      window.location.hash = next
    } else {
      setState({ domain, project })
    }
  }, [])

  return { ...state, go }
}
