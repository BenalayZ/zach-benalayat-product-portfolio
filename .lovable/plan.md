## Summary
Add three new primary tools to the toolkit sections on the homepage.

## Changes

### `src/routes/index.tsx` — toolkit array edits

1. **BI & Reporting card** (lines 125-133): Add `Amplitude` as a primary item alongside Power BI and Tableau.

2. **Data Platforms card** (lines 114-122): Add `Databricks` and `Redshift` as primary items alongside Snowflake and dbt.

Both additions use `primary: true` so they render in the bold primary list within each card, not the secondary/supporting list below.