## Goal

Make the homepage "The stack I actually use" section feel focused. Keep only **certifications** and **real tools** (concrete products you log into / write in). Move frameworks, methods, and practice-style items into a compact chip row directly under the Toolkit grid.

## Changes (homepage only — `src/routes/index.tsx`)

### 1. Rebuild the `toolkit` array — 4 cards, tools only

```
01 — Certifications
   • Agile / Scrum Certified — Atlassian
   • Data Management — UT Austin

02 — Languages & Querying
   • SQL, Python (pandas · NumPy · matplotlib), R

03 — Data Platforms
   • Snowflake, dbt, BigQuery, Amazon S3

04 — BI & Reporting
   • Power BI, Looker, Tableau, Google Analytics, Excel / Sheets

05 — Product & Delivery (tools only)
   • Jira, Confluence, GitHub, SharePoint, ServiceNow, N8N, Claude
```

Grid stays the existing `lg:grid-cols-5` hairline layout — now genuinely tool-focused. Certifications get the lead slot so they read first.

Removed from cards: ETL & ELT, Data Warehousing, Database Design, Data Mining, Agile, Scrum, Kanban, A/B Testing, Funnel Analysis, Cohort Analysis, Linear Regression, Cost Modeling, Identity Resolution, Unit Testing, Time to Value.

### 2. Add a chip row under the Toolkit grid

Inside the same Toolkit section, right beneath the grid, add a small block:

```
FRAMEWORKS & METHODS // 02
[Agile] [Scrum] [Kanban] [A/B Testing] [Funnel Analysis]
[Cohort Analysis] [Linear Regression] [Cost Modeling]
[Identity Resolution] [ETL & ELT] [Data Warehousing]
[Database Design] [Data Mining] [Unit Testing] [Time to Value]
```

Style: small inline-flex wrap of pills — `border border-border px-3 py-1 text-xs text-muted-foreground` with `hover:border-primary hover:text-primary` transition. Eyebrow uses the same mono `text-primary` treatment used elsewhere. No new section, no extra vertical padding — keeps the section compact and visually subordinate to the cards.

### 3. Out of scope

No changes to: section header copy, About page, Top Skills grid, hero, projects, routes, design tokens, fonts. Nothing else touches.

## Files

- `src/routes/index.tsx` — replace `toolkit` array (lines ~93–158) and the JSX inside the Toolkit section (lines ~298–346) to add the chip row.
