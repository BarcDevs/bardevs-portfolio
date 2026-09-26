# Bar Cohen — Portfolio

Personal portfolio site for Bar Cohen, Full-Stack Engineer.

**Live:** https://portfolio.bardevs.com/

Single-page site built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind 4. No backend, no database, no auth — all content (bio, experience, education, projects, skills) lives in typed constants under `src/constants/` and is rendered by presentational components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev           # start dev server (turbopack)
npm run build         # production build
npm run start          # serve the build
npm run buildAndStart  # build then start
npm run typecheck      # tsc --noEmit
npm run lint:check     # eslint
npm run lint:fix       # eslint --fix
```

## Editing content

To change copy (bio, an experience entry, a project, a skill), edit the matching file in `src/constants/` — see `docs/architecture.md` for the full map of constants to sections.

## Links

- LinkedIn: https://www.linkedin.com/in/barcohendev
- GitHub: https://github.com/BarcDevs

For architecture and conventions, see `CLAUDE.md` and `docs/`.
