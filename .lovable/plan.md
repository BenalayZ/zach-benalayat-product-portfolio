Add the new tools/skills to the Toolkit (index.tsx) and toolGroups (about.tsx) arrays, slotted into existing categories. No new sections, no layout changes.

**`src/routes/index.tsx` — `toolkit`:**
- Data & SQL → add `R` already exists; add `BigQuery`, `Amazon S3`, `ETL & ELT` (replace "ETL Pipelines"), `Data Warehousing`
- BI & Dashboards → add `Looker` already there; add `Google Analytics`
- Product & Workflow → add `SharePoint`, `Confluence` already there, `Claude` already there; add `Backlog Grooming`, `Scrum Master`
- Methods → `Cohort Analysis` already there; add `Linear Regression`

**`src/routes/about.tsx` — `toolGroups`:**
- Product Analytics → add `Linear Regression`
- Data & Programming → `R` already there; replace `ETL Pipelines` with `ETL & ELT`; add `BigQuery`, `Amazon S3`, `Data Warehousing`
- BI & Warehousing → add `Google Analytics`
- Workflow & Delivery → add `SharePoint`, `Scrum Master`, `Backlog Grooming` (keep `Agile (Certified)`)