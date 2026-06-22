## Goal
Make sure search crawlers can discover every key route via `robots.txt` → `sitemap.xml`.

## What I found
- **`robots.txt` is already correct.** Both `public/robots.txt` and `docs/robots.txt` allow all crawlers and already include:
  `Sitemap: https://benalayz.github.io/zach-benalayat-product-portfolio/sitemap.xml`
- **The sitemap is missing one live route.** There are 8 projects in `content/projects.json`, but `sitemap.xml` only lists 7. The featured project **`product-tier-analysis`** ("Seamless Tier × CRM-Connect Analysis") is absent, so crawlers can't discover `/work/product-tier-analysis` from the sitemap.
- **`llms.txt` is missing the same project** (7 of 8 listed), so AI crawlers also miss it.
- All other routes (`/`, `/about`, `/contact`, and the 7 listed `/work/*` pages) are present and correct.

## Changes

1. **Add the missing route to the sitemap** — insert a `<url>` entry for `/work/product-tier-analysis` (priority `0.9`, changefreq `monthly`, matching the other featured projects) in:
   - `public/sitemap.xml`
   - `docs/sitemap.xml` (the published GitHub Pages copy)

2. **Confirm `robots.txt` is correct** — no change needed; I'll verify the `Sitemap:` directive and `Allow: /` in both `public/` and `docs/` remain accurate. (Leave as-is unless you want tweaks.)

3. **Add the missing project to `llms.txt`** (optional but recommended) — add a `/work/product-tier-analysis` line to `public/llms.txt` and `docs/llms.txt` so AI search tools see the full project set.

## Verification
- Re-list all project slugs and confirm each has a matching `<loc>` in `sitemap.xml` (8 `/work/*` + `/`, `/about`, `/contact` = 11 URLs).
- Confirm `public/` and `docs/` sitemaps are identical.
- Confirm `robots.txt` `Sitemap:` URL resolves to the correct subpath.

## Notes
The sitemap is a hand-edited static file (no generator script), so I'll edit it directly and keep the `docs/` copy in sync for GitHub Pages.
