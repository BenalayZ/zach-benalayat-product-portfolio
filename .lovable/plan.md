Add the following tools and skills to both the homepage (`src/routes/index.tsx`) and About page (`src/routes/about.tsx`) toolkit arrays, slotting each into the most appropriate existing category.

**New items:** Unit Testing, Kanban, Funnel Analysis, Time to Value, Database Design, Data Mining, Cost Modeling, pandas, dbt, matplotlib, numPy, CTE, GitHub, Excel, Sheets

Note: Funnel Analysis and Kanban already exist on the About page; they will be added to the homepage toolkit to maintain parity.

### Homepage (`src/routes/index.tsx`) — `toolkit`
- **Data & SQL**: add Database Design, Data Mining, pandas, dbt, matplotlib, numPy, CTE, GitHub
- **BI & Dashboards**: add Excel, Sheets
- **Product & Workflow**: add Unit Testing, Kanban, Time to Value
- **Methods**: add Cost Modeling

### About page (`src/routes/about.tsx`) — `toolGroups`
- **Product Analytics**: add Cost Modeling
- **Data & Programming**: add Database Design, Data Mining, pandas, dbt, matplotlib, numPy, CTE, GitHub
- **BI & Warehousing**: add Excel, Sheets
- **Workflow & Delivery**: add Unit Testing, Time to Value

No layout changes, new sections, or structural refactoring required.