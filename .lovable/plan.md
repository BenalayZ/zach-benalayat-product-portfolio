## Goal

Four polish items for the GitHub Pages portfolio: add a monogram favicon, clean up the `data-engine-4` slug, verify the resume PDF + 404 SPA fallback resolve on the subpath, and add structured data (per-project `CreativeWork` + homepage `Person`).

## What I found

- **No favicon** is referenced in `index.html` (browsers fall back to a blank/default icon).
- **`data-engine-4` slug** appears in `content/projects.json`, `public/sitemap.xml`, and `public/llms.txt` (and their built `docs/` copies).
- **Resume + 404 already resolve correctly** — verification only, no code change:
  - `withBase(site.resumeFile)` → `/zach-benalayat-product-portfolio/Zach_J_Benalayat.pdf`; the file exists in both `public/` and `docs/`.
  - The Vite `spa404Fallback` plugin copies `index.html` → `docs/404.html` on build, and that shell loads the bundle via absolute base-prefixed URLs, so deep-link refreshes boot the SPA. Confirmed in the built `docs/404.html`.
- **Structured data caveat:** the app renders no `<HeadContent />` / Helmet, so per-route `head()` output is not injected client-side; only the static `index.html`/`404.html` head reaches crawlers. The `Person` schema is **already present** in the static `index.html` head. So per-project JSON-LD needs a real injection path (a small `useEffect` that writes a `<script type="application/ld+json">` into `document.head`), which Googlebot (JS-executing) reads.

## Plan

### 1. Monogram favicon (Emerald Prestige)
- Generate a square "ZB" monogram mark — deep emerald background, gold lettering — and save to `public/favicon.png` (512×512), plus reuse as `apple-touch-icon`.
- Add to `index.html` `<head>`:
  ```html
  <link rel="icon" type="image/png" href="/zach-benalayat-product-portfolio/favicon.png" />
  <link rel="apple-touch-icon" href="/zach-benalayat-product-portfolio/favicon.png" />
  ```
  (base-prefixed to match the deployed subpath; rebuild copies it into `docs/`).

### 2. Clean slug `data-engine-4` → `data-engine`
- Update `slug` in `content/projects.json` (the `image` key stays `"data-engine"`, already correct).
- Update the URL in `public/sitemap.xml` and the link in `public/llms.txt`.
- No route file changes (route is dynamic `/work/$slug`).

### 3. Verify resume + 404 (no code change)
- Confirm `docs/Zach_J_Benalayat.pdf` and `docs/404.html` exist after rebuild and that the 404 shell references the current hashed bundle. Report the resolved URLs back.

### 4. Structured data
- **Per-project `CreativeWork`:** in `src/routes/work.$slug.tsx`, add a small `useEffect` in `CaseStudy` that injects a `<script type="application/ld+json">` `CreativeWork` node (name = title, description = summary, `about`/`keywords` from tags, `dateCreated` from date, `image` anchored to `SITE_ORIGIN`, `author` = Person ref, `url` self-referencing) and removes it on unmount.
- **Homepage `Person`:** already static in `index.html`. I'll keep that as the canonical source for crawlers and verify it's accurate (no duplicate injection needed). If you'd prefer it also re-injected on client-side navigation, I can add a matching `useEffect` to `index.tsx` — noted as optional.

### 5. Rebuild
- Run `bun run build` so `docs/` (index.html, 404.html, sitemap.xml, llms.txt, favicon.png) regenerates with all changes.

## Technical notes
- Favicon/icon links and JSON-LD live in static `index.html` → propagate to `docs/` via the build; the per-project script is client-injected for Googlebot.
- I will not introduce `HeadContent`/Helmet in this pass (larger scope); flagging that existing per-route `head()` meta is currently inert if you later want true per-page social previews.
