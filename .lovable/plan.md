## Goal

Tune every public-facing surface so a recruiter or hiring manager skimming for any of the three target roles — **Senior PM (Zillow-class)**, **Staff Analyst (Hims & Hers-class)**, or **Senior Data Analyst / BI (Crash Champions-class)** — sees direct evidence in the first 5 seconds. Drop "fractional" everywhere; replace with **Full-Time · Contract · Consultant**.

---

## 1. Availability rewrite (site-wide)

Replace "fractional" everywhere — it signals part-time and undersells.

- **Hero badge** (`index.tsx` line 172): `Available — Full-Time, Contract & Consulting`
- **Homepage FAQ** (line 18–19): rewrite the engagements answer around full-time PM / Analyst roles + contract and consulting engagements (analytics audits, KPI/instrumentation design, PRD authoring, 0→1 launch leadership, BI/dashboard builds).
- **Homepage final CTA** (lines 527–528): "Open to full-time PM/Analyst roles, contract engagements, and consulting work."
- **Contact page** (line 42): same swap.
- Audit one more pass with `rg -i fractional` to make sure none remain.

## 2. Hero positioning — broaden the target line

Current subhead targets "Senior Product Manager and Data Analyst roles" (line 193). All three JDs use slightly different titles, so widen without diluting:

- Change to: **"Targeting Senior PM, Staff Analyst, and Senior Data Analyst / BI roles"**
- Keep the functional subhead (line 183) — already strong, but append **"Power BI · Looker · Tableau"** explicitly since Crash Champions and H&H both name dashboards as table stakes.

## 3. New "Engagement Models" section (homepage)

Add a compact 3-card section between Top Skills and the existing FAQ — directly answers "how can I work with you?" for the three buyer types:

```text
┌──────────────────┬──────────────────┬──────────────────┐
│ FULL-TIME        │ CONTRACT         │ CONSULTING       │
│ Senior PM /      │ 3–12 month       │ Scoped audits,   │
│ Staff Analyst /  │ embedded         │ KPI frameworks,  │
│ Senior BI        │ PM or analyst    │ BI builds,       │
│                  │ ownership        │ PRD authoring    │
└──────────────────┴──────────────────┴──────────────────┘
```

Uses the existing 3-up hairline-divider grid pattern (same `border-bg` treatment as Top Skills, but 3 cols instead of 4).

## 4. By the Numbers — tune the stats for all three JDs

Current four (line 40–45) are good but lean PM. Swap one in to surface BI/analyst depth that Crash Champions + H&H care about:

- Keep: `25%` search-time reduction, `$2M+` ARR influenced, `7` launches
- Replace `200K+ records modeled` with **`20%` AWS cost cut via Data Engine 4.0** (operational analytics outcome — H&H "operational performance: throughput, cost, quality")
- Or add a fifth tile and shift to a 5-up: **`46%` faster intake via Arc workflow analytics** — directly maps to H&H's "throughput / SLAs" language.

## 5. Top Skills — re-balance the four tiles

Current order is Product Analytics → Data & SQL Modeling → BI & Dashboarding → Analytics→Product Strategy. Re-order and tune copy so each tile maps explicitly to a JD signal:

1. **Product Analytics & Experimentation** — A/B tests, funnel/cohort, KPI design *(Zillow + H&H)*
2. **BI & Executive Dashboarding** — Power BI / Looker / Tableau on Snowflake; data modeling; warehouse/ETL fluency *(Crash Champions + H&H)* — explicitly mention **Power BI + data modeling + ETL** (Crash Champions calls these out by name).
3. **Data & SQL Engineering** — SQL stored procedures, ETL, Snowflake, identity resolution *(all three)*
4. **AI-Assisted Analytics & Product** — MCP integrations on GPT/Claude stores, Claude + N8N agentic workflows, LLM copilots in the analytics loop *(Zillow "AI/LLM fluency" + H&H "preferred: AI-assisted analytics")* — this is the differentiator across all three target JDs and currently buried in FAQ copy.

## 6. Toolkit — surface the JD keywords

Audit the Toolkit section against the three JDs and add anything missing without keyword-stuffing:

- **Add explicitly named:** Microsoft Fabric (Crash Champions), dbt (H&H preferred), BigQuery (H&H preferred — note as "Snowflake-equivalent" if Zach hasn't shipped on it), Looker (already there, double-check).
- **Keep prominent:** Power BI (primary for Crash Champions), Snowflake, SQL, Python, A/B testing, MCP / Claude / GPT agents.
- Do not invent tools — only add ones Zach has real exposure to. Confirm Fabric/dbt/BigQuery before listing.

## 7. Selected Work — re-tag projects for each track

Each ProjectCard currently has a single role framing. Add a small **"Strongest signal for:"** chip row under each card with 1–2 of: `Senior PM` · `Staff Analyst` · `Senior BI`. Suggested mapping:

- **Seamless API** → Senior PM (0→1, scaled to $1M ARR, customer-facing, SMB→enterprise)
- **Inseego Connect** → Staff Analyst + Senior BI (Power BI funnel surfaced $1M+ ARR shift; ops/finance translation)
- **Data Engine 4.0** → Staff Analyst + Senior BI (ETL, warehouse, 20% cost reduction)
- **Arc** → Staff Analyst (operational throughput, −1 FTE, 46% faster)
- **Butler / CaseWorthy** → Senior BI (200K records modeled, reporting reliability)
- **Fast Data** → Senior PM (customer-facing 0→1)

## 8. About page — tighten the narrative arc

Reframe the bullets so each role's accomplishment ends with a measurable business outcome in JD-vocabulary terms (throughput, cost, retention, conversion, ARR, decision speed). Light pass — copy edits only, no structural changes. Confirm "fractional" not present.

## 9. Contact page — three clear paths

Restructure intent options to mirror the new engagement framing:

- "I'm hiring for a full-time role"
- "I need contract / embedded help"
- "I want a scoped consulting engagement (audit, KPI framework, dashboard build, PRD)"

Helps the inbound message self-route.

## 10. SEO + share metadata

- Update homepage `<title>` and meta description to include all three target titles: "Senior PM · Staff Analyst · Senior BI" so search/share snippets match what recruiters search.
- Confirm `og:title` / `og:description` on every route file (`/`, `/about`, `/contact`, `/work/$slug`) — none should reuse the home page's copy.

---

## Technical / file-level notes

- All copy changes land in `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/contact.tsx`, and `src/data/projects.ts`. No new dependencies.
- Engagement Models section uses the existing `border-b border-border` + `gap-px` 3-col grid pattern from Top Skills — no new tokens.
- Project chip row: tiny `text-[10px] uppercase tracking-[0.2em]` pill, `border border-primary/30 text-primary` — reuses the eyebrow style already on the homepage.
- After all edits, run a final `rg -i "fractional"` to confirm zero matches, then rebuild.

## Out of scope (intentionally)

- No new routes, no new images, no palette changes.
- No "Case Studies vs. Projects" restructure — current work routes are fine.
- No blog / writing section — not asked for, and the JDs don't ask for it.

---

Want me to ship all 10 in one pass, or do you want to gate any of them (e.g. skip the Engagement Models section or the by-the-numbers swap)?
