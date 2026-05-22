## Goal

Refresh the site copy and surface concrete analytics tooling (SQL, Python, Power BI, Looker, Tableau, Snowflake, A/B testing, KPI design) using the resume as the source of truth. Lead with "Product & Business Analytics" — not just "Product Analyst & Manager."

## Source-of-truth excerpts from resume

- Headline tagline: *"Product & Business Analytics | API & Product Data Strategy | SQL | Python"*
- Resume summary: *"Product and business analytics professional who partners with product and engineering teams to design analytics frameworks, define KPIs, and analyze product usage data to guide strategic decisions."*
- Tools called out: **SQL, Python, R, Git, Power BI, Looker, Tableau, Snowflake, Jira, Confluence, ServiceNow**
- Concrete analytics wins: **25% search-time reduction** (behavioral funnel analysis), **10% contact coverage / 25% data quality lift** (identity resolution), **15% cycle-time reduction** (workflow automation), **200K+ manuscripts** (data architecture at Latin Hyper-Texts), **33% fewer training sessions** (Qualtrics analysis at Latin Hyper-Texts).

## Edits

### 1. `src/routes/index.tsx`

**Hero (H1 + subhead, lines 125–133)**
- H1: keep "I'm Zach Benalayat." Swap signal/noise line for: *"I turn product data into shipped strategy."*
- Subhead → resume-grounded: *"Product & business analytics PM — SQL, Python, Power BI, Looker, Snowflake. I design the analytics frameworks, define the KPIs, and use what I find to drive PRDs and roadmaps across B2B SaaS, IoT, and AI."*

**"By the numbers" strip (lines 67–72)** — replace with analytics-flavored proof:
- `25%` Search time reduced (funnel analysis)
- `$2M+` ARR influenced
- `200K+` Records modeled
- `7` End-to-end launches

**Mission Control block (lines 217–232)** — rewrite the three paragraphs to lead with analytics framework design, KPI definition, and dashboarding before product strategy. Keep the three outcome metrics ($750k / $1M / 20%) but reframe them as analytics-driven wins.

**Top Skills grid (lines 74–91)** — rewrite the 4 cards so each one names the tools used:
- *Product Analytics* — funnel/behavioral analysis in SQL + Python; A/B tests, KPI design, activation/retention frameworks.
- *Data & SQL Modeling* — SQL stored procs, ETL pipelines, Snowflake, identity resolution; 200K+ records modeled, +10% coverage / +25% quality.
- *BI & Dashboarding* — Power BI, Looker, Tableau exec dashboards that drive GTM decisions (the $1M+ Inseego shift came out of a Power BI dashboard).
- *Analytics → Product Strategy* — translates findings into PRDs, OKRs, and roadmap bets.

**NEW: "Toolkit" strip (insert between Mission Control and Featured Projects)** — text-only logo wall replacement (the design memo bans bg-stripes; use a `gap-px` border-grid like Top Skills, or a single hairline row of mono labels). Groups:
- Data & SQL: SQL · Python · R · Snowflake · dbt-style ETL · Git
- BI: Power BI · Looker · Tableau
- Product & Workflow: Jira · Confluence · ServiceNow · N8N · Claude
- Methods: A/B Testing · KPI Design · Funnel Analysis · Identity Resolution

**FAQ Q3 (line 53)** — rewrite to name the exact stack: SQL, Python, Power BI, Looker, Snowflake, A/B testing.

**Meta description (line 11) + og:description (line 18)** — lead with "Product & Business Analytics PM" and name SQL/Python/Power BI/Looker.

### 2. `src/routes/about.tsx`

- Subhead under H1 (line 143): *"Product & Business Analytics PM · SQL · Python · Power BI"*
- Intro paragraphs (lines 148–162) — replace with resume summary language: analytics frameworks, KPI design, partnering with product + engineering, then the industries list.
- **Experience entries (lines 28–56)** — rewrite bullets from the resume so each role surfaces analytics work:
  - *Seamless*: API analytics frameworks, behavioral funnel analysis (−25% search time), executive Power BI/Looker dashboards, identity resolution (+10% coverage, +25% quality), workflow automation (−15% cycle time).
  - *Inseego*: SQL + Python customer/sales/federal-contract analysis → $1M+ microtargeting; Power BI dashboards for adoption/bundling on US Navy contracts.
  - *CaseWorthy*: SQL stored procs, ETL pipelines, analytics + reporting workflows for nonprofit/gov clients.
  - **Add fourth entry**: *Latin Hyper-Texts, Butler School of Music (2018–2023) — Data Architect*: 200K+ manuscript relational DB, metadata frameworks, Qualtrics analysis (−33% training sessions).
- **Toolkit groups (lines 115–132)** — align labels and fill from the resume:
  - Product Analytics: A/B Testing · KPI Design · Funnel Analysis · Backlog Analysis · Unit Testing · Continuous Improvement
  - Data & Programming: SQL · Python · R · Git · ETL Pipelines · Identity Resolution
  - BI & Warehousing: Power BI · Looker · Tableau · Snowflake · Data Modeling
  - Workflow & Delivery: Jira · Confluence · Kanban · ServiceNow · Agile (Certified) · PRDs & User Stories
- Meta description (line 11) — lead with the analytics framing.

### 3. `src/data/projects.ts` (optional surface polish)

For the three flagship cards, append the concrete analytics tool to `tags` so the chips reinforce the message:
- Seamless API: add `"SQL"`, `"Power BI"`
- Data Engine 4.0: add `"Snowflake"`, `"Python"`
- Inseego Connect: already has Python in body — add `"Power BI"`, `"SQL"` to tags

Strategy/insights/outcome prose stays as-is; only tags are touched.

## Out of scope (this pass)

- No layout/component changes — text + tag arrays only, plus one new "Toolkit" section on the homepage that reuses the existing `gap-px` grid pattern from Top Skills.
- No new routes, no resume re-upload, no scraping LinkedIn (you didn't share a URL — I'll mirror the resume which already matches your LinkedIn headline).

## Open questions

1. Want me to **replace** the homepage Top Skills cards with the analytics-flavored ones above, or **keep** the current four and add the Toolkit strip *in addition*?
2. The hero H1 alt I proposed ("I turn product data into shipped strategy") swaps your current "signal in the noise" line — keep that line, swap it, or you'd rather pick from 2–3 options after approval?