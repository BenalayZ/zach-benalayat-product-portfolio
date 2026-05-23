
## 1. Re-lead as "Data Analyst & Product Manager"

Analytics becomes the headline track; PM is the second beat.

**Homepage (`src/routes/index.tsx`)**
- H1 → `Data Analyst & Product Manager — one operator.`
- Subhead → lead with analytics scope: `SQL · Python · Power BI on Snowflake. I run the analysis, then ship the product bet that comes out of it.`
- Eyebrow tagline stays stat-anchored.
- Top Skills order: **Analytics & BI → Experimentation → Product Delivery** (analytics first, PM second).
- Mission Control paragraph rewritten to lead with the analysis loop, not the roadmap loop.
- Engagement Models reordered: Senior Analyst / BI → Staff Analyst → Senior PM.

**About (`src/routes/about.tsx`)**
- H1 → `About Zach Benalayat — Data Analyst & Product Manager`
- Intro paragraph reordered (SQL + dashboards + A/B tests first, PRDs/OKRs second).
- Industries chip row unchanged.

**Project signals (`src/data/projects.ts`)**
- No content cuts; just verify ordering on homepage promotes Analyst/BI-signal projects (Data Engine 4.0, Inseego Connect, the new case study) above pure-PM ones in the "Selected Work" grid.

**SEO meta**
- Update `<title>` / `meta description` / `og:*` on `/` and `/about` to lead with "Data Analyst & Product Manager."

---

## 2. Seamless Fast Data — add the de-scope decision

Adds a real "judgment" beat to the case study (which was a hiring-manager flag last round).

In `src/data/projects.ts`, `seamless-fast-data` entry — extend `strategy` with one sentence:

> Focus on the highest-demand attributes first — **job changes and individual contact name updates**. De-scoped real-time ingest of corporate-structure and acquisition data; signal value didn't justify the pipeline cost.

And update the tag list to include `Scope Trade-offs` so it's visible at a glance on the card.

---

## 3. Case study viz — top 3 picks

I read all 14 slides. Here are the three strongest, in order:

### Option A — *Searches by Type: CRM-Connected × License* (Slide 5, right chart) — **my recommendation**

A single grouped bar showing search volume split by license tier and CRM-connection status.

- **What it says:** Free users generate the largest search volume (~159K) but capture zero CRM-attached value by definition. Basic is the real conversion battleground — searches are nearly 50/50 connected vs not (~111K / ~102K). Premium is overwhelmingly CRM-connected (~65K / ~22K), confirming the upgrade path works once users get there.
- **Why it wins:** One chart, three takeaways, one recommendation. Reads in 5 seconds.
- **What to say:** *"Free drives raw volume but no CRM signal. Basic is where the conversion lever lives — half their searches still aren't tied to a CRM. That reframed the growth bet from 'more Free signups' to 'CRM-connect the Basic base.'"*
- **Where it lives:** Featured on a new case study `seamless-product-analysis` (Analyst-signal), and pull-quoted on the homepage under Selected Work.

### Option B — *Users by Type: CRM-Connected split* (Slide 4)

The denominator chart — user counts per tier, split by CRM-connected.

- **What it says:** Basic = ~45% connected. Premium = ~74% connected. Free = 0% (locked out).
- **What to say:** *"Maturity curve is intact — connection rate climbs with tier. Basic is the un-tapped middle; Premium proves the funnel works."*
- **Trade-off:** Sets up Option A but is less punchy on its own.

### Option C — *Filter Distribution by License* (Slide 11) — the contrarian pick

Uniform-ish distribution showing every filter used at roughly equal rates across all three tiers.

- **What it says:** No tier has a "power filter." Users mostly run with a single filter, and the choice of filter is nearly uniform. This is a **negative result** — it killed an internal thesis that Premium users would lean on advanced filter combos.
- **What to say:** *"The hypothesis going in was that Premium users would discriminate with multi-filter combos. They don't. That killed a planned advanced-filter UI investment and redirected the work toward the CRM-connect funnel instead."*
- **Why include:** Best signal of analyst judgment — you used data to *stop* a roadmap item, not justify one.

### My recommendation
**Ship Option A as the headline visual; mention Option C as a sidebar insight inside the same case study.** Together they tell "where the value is" + "where it isn't" — the strongest one-two punch for an Analytics-lead site.

---

## 4. New portfolio entry — gated on your viz pick

Once you pick A / B / C, I'll:

1. Regenerate the chart anonymized (no real user counts — I'll round or index to 100, strip the user-ID labels, drop the Seamless logo).
2. Save as `src/assets/projects/seamless-product-analysis.jpg` (or `.png`).
3. Add `seamless-product-analysis` to `src/data/projects.ts` with full Problem / Role / Strategy / Insights / Outcome — `signals: ["Staff Analyst", "Senior BI"]`, `featured: true`.
4. Place it in the Selected Work grid above the PM-heavy entries.

The case-study copy will frame it as: *"First analysis I shipped at Seamless — onboarding deliverable that became the basis for the CRM-connect growth thesis."*

---

## Questions before I build

1. **Viz pick:** A, B, C, or A+C combined?
2. **Anonymization level:** index everything to 100 (safest), or keep relative magnitudes with rounded numbers (e.g. "~160K searches")?
3. **Case study date:** what month/year was this delivered? (I'll guess 2024 onboarding unless you say otherwise.)
