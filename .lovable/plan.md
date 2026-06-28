## Goal

Reposition the entire portfolio around **Data Analyst / BI Developer** and **Data Engineering** only. Cut the Product Management framing everywhere — hero, copy, tracks, case-study emphasis, SEO — so a DA/BI/DE reviewer sees a focused specialist, not a PM who also analyzes.

## 1. Strip PM positioning sitewide

- **Hero (`content/home.json`)**
  - Headline: drop "Product & Data Analyst" → lead with a data title, e.g. "Data Analyst & BI Developer" / "Analytics & Data Engineering".
  - Tagline: remove product-bet language; lead with SQL, Snowflake, dbt, Power BI, pipelines, and analysis.
  - `eyebrow`: drop the PM-flavored phrasing.
  - `proofStats`: replace the three tracks (`Senior BI / Staff Analyst / Senior PM`) with data-only framing. Keep the strong numbers ($1M+ ARR Power BI funnel, 46% faster intake, 20% AWS savings) but re-attribute them to BI/analytics/engineering outcomes, not PM.
  - `availability` / `engagement` / `cta`: change "Senior PM" and "analytics-led PM" mentions to Data Analyst, BI Developer, Analytics Engineer, Data Engineer.
- **About (`content/about.json`)**: rewrite bio + subtitle to remove "PRDs, OKRs, roadmap bets" as the headline; keep them only as a minor "also can" line if useful. Lead with analysis, modeling, pipelines.
- **FAQ + skills + engagement models**: remove "analytics-led PM" / "Senior PM" options; reframe around DA, BI Developer, Analytics Engineer, Data Engineer.
- **SEO (`home.json`, `about.json`, `contact.json`)**: titles/descriptions/og drop "Product Manager / Product Analyst / Senior PM"; lead with "Data Analyst · BI Developer · Data Engineer". Update `toolkit.atsKeywords` to remove PM-centric terms (Product Manager, PRD, Roadmap, GTM) and emphasize DE/DA/BI (dbt, ELT/ETL, data warehousing, semantic modeling, DAX, orchestration, pipeline).
- **`content/site.json`**: any PM-leaning nav/footer copy → data framing.

## 2. Two tracks instead of three (Analytics/BI vs. Data Engineering)

Projects already carry `signals`. Remap to two reviewer lenses and retire `Senior PM`:

- **Analytics / BI** ← `Senior BI` + `Staff Analyst` (dashboards, semantic models, A/B tests, cohort/funnel, forecasting).
- **Data Engineering** ← pipeline/infra work (Data Engine 4.0, Fast Data, identity resolution, ELT).
- Update the `RoleSignal` type in `src/data/projects.ts` to the new set (e.g. `"Analytics/BI" | "Data Engineering"`) and update `content/projects.json` signals accordingly.
- Add a **track toggle** in the work section: `All · Analytics / BI · Data Engineering`. Filtering reorders the grid (matches first, others below a divider). Persist as `?track=` for shareable recruiter links.

## 3. Recast projects for the data lens

- **Seamless API** currently reads as a PM/monetization 0→1 story. Reframe its case study (`content/projects.json`) to lead with the **data/forecasting/analytics** angle (async credit-consumption metric, run-rate forecast model) rather than product ownership; soften "Product Owner" role wording to "Analytics Lead".
- **Seamless MCP / Fast Data**: reframe outcomes around data delivery/latency/pipeline rather than product launches; retag to Data Engineering where appropriate.
- Make the strongest **engineering** case study (Data Engine 4.0) a true pipeline story: source → ingestion → dbt transforms → Snowflake/Redshift model → consumption, with volumes, run cadence/SLA, dedupe/identity resolution, failure handling, and the cost/perf work behind 20% AWS savings. Add an architecture diagram image (generated) and an optional on-page SQL/dbt snippet to make the engineering claim verifiable.

## 4. Engineering-depth touches

- Reframe homepage skill cards so **Data & SQL Engineering** and **BI / Semantic Modeling** lead; remove "Analytics-Led Product Delivery" as a headline card.
- **GitHub link** in nav/footer + contact channels so SQL/Python/dbt is verifiable (needs URL — see question).
- Keep the AI/agentic toolkit group but below the core data stack.

## Out of scope

- No backend/CMS — content stays in `content/*.json` + `src/data`.
- No change to the Emerald Prestige visual system.
- Any new/removed route is reflected in `public/` sitemap + `llms.txt` and regenerated into `docs/` via the build so dist-check stays green.

## Technical notes

- `RoleSignal` union + `signals` values updated together; `proofStats` and any `track` references in `index.tsx` updated to the two-track model.
- Per-track hero copy: extend `home.json` with a `tracks` map (`{ all, analytics, data }` → `{ tagline, leadStat }`), default `all` = new data-forward copy.
- Toggle: client component reading/writing a `track` search param via TanStack Router; filtering in `Index()` over `projects.signals`. No new deps.
- New architecture image: add to `src/assets/projects/`, register in `imageMap` in `src/data/projects.ts`; add optional `codeSnippet` to the `Project` type, render in `work.$slug.tsx` as a monospace block.

## Open question

GitHub: do you have a public repo/profile URL to link, or leave it out for now and focus on the repositioning + DE case study?
