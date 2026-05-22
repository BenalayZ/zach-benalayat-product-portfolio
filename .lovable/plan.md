Restructure the toolkit on both the homepage and About page with cleaner categories, visual hierarchy (primary vs. supporting), nested Python libraries, and a unified visual treatment.

### Final categories (used on both pages)

| Category | Subtitle | Primary | Supporting |
|---|---|---|---|
| Languages & Querying | What I write in. | SQL, Python *(pandas · NumPy · matplotlib)* | R |
| Data Platforms | Where data lives and how it moves. | Snowflake, dbt | BigQuery, Amazon S3, ETL & ELT, Data Warehousing, Database Design, Data Mining |
| BI & Reporting | How findings get seen and acted on. | Power BI, Looker | Tableau, Google Analytics, Excel / Sheets |
| Product & Delivery | How work gets shipped. | Jira, Agile | Scrum, Kanban, Confluence, GitHub, SharePoint, ServiceNow, N8N, Claude |
| Methods & Frameworks | The analyses behind the decisions. | A/B Testing, Funnel Analysis, Cohort Analysis | Linear Regression, Cost Modeling, Identity Resolution, Unit Testing, Time to Value |

### Dropped per your direction
- KPI Design, CTE, Git
- The entire "Ways of Working" category (Scrum Master, Backlog Grooming, PRDs & User Stories, Continuous Improvement) — Agile / Scrum / Kanban moved into Product & Delivery instead

### Implementation

1. **Replace the data structures** in `src/routes/index.tsx` (`toolkit`) and `src/routes/about.tsx` (`toolGroups`) with a single shared shape:
   ```ts
   { label, subtitle, items: [{ name, primary?, children? }] }
   ```
   pandas / NumPy / matplotlib live as `children` of Python.

2. **Unify the visual treatment** — apply the homepage's hairline bordered grid (5-up on lg) to the About page too, replacing the rounded card + pill chips. Matches the Noir & Emerald hairline aesthetic.

3. **Visual hierarchy inside each card**:
   - Category label (mono eyebrow, primary color) + one-line subtitle (muted)
   - Primary items: larger, bold, foreground color
   - Children (Python libs): inline beneath parent, smaller, muted, mono-dot separators
   - Supporting items: smaller, muted, listed below primaries with a hairline divider between the two tiers

4. **Files touched**:
   - `src/routes/index.tsx` — update `toolkit` array + Toolkit section JSX
   - `src/routes/about.tsx` — update `toolGroups` array + Toolkit section JSX (swap to grid style)

No new routes, no new components extracted (kept inline for now; can refactor later if reused).