# Extract site copy to editable JSON

Goal: keep the current React/TanStack site exactly as-is visually, but move every piece of editable text/data out of `.tsx` files into JSON under a new `content/` directory at the repo root. You edit JSON in GitHub; the site re-renders on next build.

## What gets extracted

Currently inline in route files:

- `src/routes/index.tsx` (694 lines): `faqs`, `skills`, `engagementModels`, plus hero copy, section eyebrows/headings/ledes, logos band, toolkit list, CTA blocks.
- `src/routes/about.tsx` (350 lines): `experience`, `education`, `northStars`, `steps` (process), `toolGroups`, plus bio/hero copy and section intros.
- `src/routes/contact.tsx` (113 lines): `channels`, hero copy, form labels, footer note.
- `src/routes/work.$slug.tsx` (196 lines): no inline arrays — already reads from `src/data/projects.ts`. Project copy moves there.
- `src/data/projects.ts` (190 lines): converted to `content/projects.json`.
- `src/routes/__root.tsx`: nav labels, footer text, site metadata (title, description, OG defaults).

## New structure

```text
content/
  site.json          # site name, nav, footer, social, default SEO
  home.json          # hero, logos, skills, engagement models, faqs, CTAs
  about.json         # bio, principles, process, experience, education, toolkit
  contact.json       # hero, channels, form copy
  projects.json      # array of all project case studies
```

Each JSON file is plain, hand-friendly: short keys, arrays of objects with `title`/`body`/`bullets`, no JSX inside strings. Markdown is allowed in body fields (rendered via a tiny inline renderer — bold/italic/links only, no new heavy dep).

## How the React code changes

- Add `src/content/index.ts` that imports each JSON via `import home from "../../content/home.json"` etc. Vite handles JSON imports natively — no loader needed, no build config change.
- Add TypeScript types in `src/content/types.ts` so JSON edits get typechecked at build time (catches a missing field before deploy).
- Each route file replaces its inline `const faqs = [...]` etc. with `import { home } from "@/content"` and reads `home.faqs`, `home.skills`, etc. JSX layout/markup stays identical.
- `src/data/projects.ts` becomes a thin shim that re-exports from `content/projects.json` so `work.$slug.tsx` keeps working without churn (or it's updated directly — small file).
- `__root.tsx` reads nav/footer/SEO from `content/site.json`.

## What does NOT change

- Visual design, Tailwind classes, animations, fonts, routes.
- Build/deploy pipeline (`bun run deploy` → `gh-pages`) is unchanged.
- TanStack Router file-based routing stays.
- Project case-study URLs stay (`/work/$slug`).

## Editing workflow after this

1. Open `content/home.json` (or any file) in GitHub web UI.
2. Edit text. Commit.
3. GitHub Action / your `bun run deploy` rebuilds → static `dist/` published.

To add a new project: append an object to `content/projects.json` — no .tsx changes needed.
To add a new FAQ: append to `content/home.json` → `faqs`.

## Out of scope (ask if you want these too)

- Setting up a GitHub Action to auto-build & deploy on JSON commits (currently you run `bun run deploy` locally).
- Markdown-file-per-project (one `.md` per case study instead of one big JSON). Doable but adds a frontmatter parser dep — JSON is simpler for editing in GitHub.
- A visual CMS (Decap/TinaCMS) on top of the JSON.

## Steps

1. Create `content/` with the five JSON files, populated from current inline data.
2. Add `src/content/types.ts` + `src/content/index.ts`.
3. Refactor `index.tsx`, `about.tsx`, `contact.tsx`, `__root.tsx`, `work.$slug.tsx` to consume from `@/content`.
4. Delete now-redundant inline arrays; keep `src/data/projects.ts` as a re-export shim (or remove and update the one import).
5. Verify build, then a quick visual spot-check that nothing shifted.
