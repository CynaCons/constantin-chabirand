# Constantin Chabirand — Interactive Portfolio

An interactive, domain-explorer portfolio. Pick a domain — **Space-Tech / Lasercom**,
**Automotive / Safety-Critical**, or **AI Tooling & Personal** — and drill into the work.
Design direction: a "Mission Console" (telemetry-panel aesthetic, command palette, deep-linkable).

**Live:** https://cynacons.github.io/constantin-chabirand/

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (design tokens via `@theme`)
- lucide-react icons
- No backend — fully static

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/constantin-chabirand/
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Content

All content lives in [`src/data/content.ts`](src/data/content.ts) — edit there, no component
changes needed. Each domain has a tagline, summary, skills, and projects; each project has
highlights, tech, and links.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages. In the repo: **Settings → Pages → Source = GitHub Actions** (one-time).

### Custom domain (optional)

To serve from a custom domain (e.g. `constantinchabirand.com`):
1. Change `base` in `vite.config.ts` from `'/constantin-chabirand/'` to `'/'`.
2. Add a `public/CNAME` file containing the domain.
3. Point the domain's DNS at GitHub Pages.
