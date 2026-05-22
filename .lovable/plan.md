
## Goal

Deploy the portfolio as a static site at:
`https://benalayz.github.io/Zacharia-Benalayat-Portfolio/`

The current project is built on **TanStack Start** with a Cloudflare Workers server entry (SSR + server route for `/sitemap.xml`). GitHub Pages only serves static files — no Node/Worker runtime — so we need to convert to a static SPA build, add a base path, and remove server-only pieces.

---

## Changes

### 1. Drop server-only pieces
- Delete `src/routes/sitemap[.]xml.ts` (dynamic server handler — not supported on Pages).
- Delete `src/server.ts` (Cloudflare Worker entry).
- Delete `wrangler.jsonc` (Cloudflare config).
- Delete `src/start.ts` (server middleware registration).
- Remove `@cloudflare/vite-plugin` from `package.json`.

### 2. Switch from TanStack Start (SSR) to TanStack Router (SPA)
TanStack Start targets a server runtime. For static Pages hosting we use the SPA build of TanStack Router (same file-based routing under `src/routes/`, same `__root.tsx`, same `Link`/`useNavigate` APIs — just no SSR).

- Replace `@lovable.dev/vite-tanstack-config` usage in `vite.config.ts` with a plain Vite config using `@vitejs/plugin-react`, `@tanstack/router-plugin/vite` (SPA mode), `@tailwindcss/vite`, and `vite-tsconfig-paths`.
- Update `src/router.tsx` / route shell so `__root.tsx` renders a standard `<RouterProvider />` mount (no `shellComponent` / `HeadContent` / `Scripts` — those are SSR-only). Move `<head>` tags into a static `index.html`.
- Add `index.html` at project root as the SPA entry, with all the meta tags, Google Fonts preconnect/stylesheet, JSON-LD `<script>`, and viewport tags currently injected via `__root.tsx`'s `head()`.
- Strip `head()` blocks from route files (or keep them only as comments for future migration). Per-page `<title>` updates can be handled with a tiny `useEffect`-based hook if you want them; otherwise the site uses the single static `<title>` from `index.html`.

### 3. Configure base path for project site
GitHub project sites are served from a subpath. All asset URLs and router links need to know about `/Zacharia-Benalayat-Portfolio/`.

- `vite.config.ts`: set `base: "/Zacharia-Benalayat-Portfolio/"`.
- `src/router.tsx`: pass `basepath: "/Zacharia-Benalayat-Portfolio"` to `createRouter`.
- Update any hard-coded absolute paths (e.g. `/Zach_J_Benalayat.pdf` in `__root.tsx`) to use `import.meta.env.BASE_URL` or a small `withBase()` helper so they resolve under the subpath.

### 4. SPA routing on GitHub Pages
GitHub Pages serves `404.html` for any unknown path. The standard SPA trick:

- Add `public/404.html` that's a copy of `index.html` (or contains the standard SPA redirect script). This makes deep links like `/Zacharia-Benalayat-Portfolio/about` work on refresh.
- Add `public/.nojekyll` (empty file) so Pages doesn't run Jekyll over the build.

### 5. Update build scripts and deploy flow
- `package.json` scripts:
  - `build` stays `vite build` (now outputs static files to `dist/`).
  - Remove `build:dev` Cloudflare-specific behavior (or keep it as a normal dev build).
- Manual deploy: from your machine, `bun install && bun run build`, then push the contents of `dist/` to the `gh-pages` branch (or configure Pages to serve from `/docs` — your call later). No GitHub Actions per your answer.

### 6. README
- Update the README to describe the new GitHub Pages flow: static SPA, base path, manual deploy steps, removed Cloudflare/Workers section.

---

## Files touched

**Delete**
- `src/routes/sitemap[.]xml.ts`
- `src/server.ts`
- `src/start.ts`
- `wrangler.jsonc`

**Create**
- `index.html` (SPA entry with meta/fonts/JSON-LD moved out of `__root.tsx`)
- `src/main.tsx` (mounts `<RouterProvider />`)
- `public/404.html` (SPA fallback for deep links)
- `public/.nojekyll`

**Edit**
- `vite.config.ts` — plain Vite + router plugin, `base` set
- `src/router.tsx` — add `basepath`
- `src/routes/__root.tsx` — remove `shellComponent`, `HeadContent`, `Scripts`, `head()`; keep header/footer/Outlet only
- `src/routes/index.tsx`, `about.tsx`, `contact.tsx`, `work.$slug.tsx` — remove `head()` blocks; optionally add a `useDocumentTitle` hook
- `package.json` — drop `@cloudflare/vite-plugin` and `@tanstack/react-start`; adjust scripts
- `README.md` — replace Cloudflare/Wrangler section with GitHub Pages instructions
- Any component referencing absolute paths (`/Zach_J_Benalayat.pdf`, etc.) — wrap with base URL

---

## Tradeoffs to know

- **No SSR / no SSG.** Initial HTML will be the empty SPA shell; content paints after JS loads. Fine for a portfolio, but SEO crawlers see less prerendered content. (Could be addressed later with `@tanstack/router-plugin`'s prerender option if you want — happy to add as a follow-up.)
- **No dynamic `/sitemap.xml`.** Removed per your decision. We can later hand-write a static `public/sitemap.xml` if you want.
- **Per-route `<title>` / OG tags become static** unless we add a small client-side document-title hook. The homepage's title from `index.html` becomes the default everywhere.
- **Custom domain later** would let us drop the base path and use a user-site-style root. Easy to revisit.

Ready to implement on approval.
