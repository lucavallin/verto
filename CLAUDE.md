# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start Next.js development server
npm run build        # Run prebuild (data generation) + Next.js build
npm run prebuild     # Generate data/data.json from GitHub/GitLab APIs (requires GH_PAT env var)
npm run lint         # Run ESLint with auto-fix
npm test             # Run Jest tests
npx jest <path>      # Run a single test file
ANALYZE=true npm run build  # Build with bundle analyzer
```

## Environment Variables

- `GH_PAT` — GitHub Personal Access Token required by `npm run prebuild` to fetch repository data. Set it in your shell or in `.env.local`.

## Architecture

**Data Pipeline (build-time, not runtime)**

The app never calls GitHub/GitLab at runtime. Instead, `npm run prebuild` runs `data/index.ts` via `ts-node`, which calls GitHub and GitLab APIs and writes `data/data.json`. This static JSON file is imported at build time via `app/data-loader.ts`. As a side effect, `data/index.ts` also prunes repositories from `config.json` that no longer meet the inclusion criteria.

Data sources are defined in [config.json](config.json) as an array of `Source` objects, each with a `provider` (`"github"` or `"gitlab"`), a list of repositories, and label names used to filter issues. Adding a new project means adding its entry to `config.json` in lexicographic order, then running `prebuild`.

**State Management**

All runtime filtering and sorting happens in [context/AppDataContext.tsx](context/AppDataContext.tsx), a single React context that wraps the whole app. It holds the full repository list from `data.json` and exposes filtering functions (by tag, language, text query) and sort-order state. The companion hook lives in [hooks/useAppData.tsx](hooks/useAppData.tsx).

**Routing**

The app uses the Next.js App Router. Dynamic routes at `app/tag/[tag]/` and `app/language/[language]/` render pre-filtered views of repositories.

**Key Types** ([types.ts](types.ts))

- `Repository` — core data model (id, name, owner, stars, language, issues, tags)
- `Issue` — issue linked to a repository (title, url, labels, created_at)
- `Source` — config entry pointing to a provider + repository list + label filters
- `Data` — shape of `data.json` (repositories, languages, tags with counts)
- `RepositorySortOrder` — enum controlling sort mode in context

**Testing**

Tests live in `data/__tests__/` and use Jest + ts-jest. They cover the shared data-processing utilities (`shared.ts`, `utils.ts`). Test environment is `jest-environment-node`.
