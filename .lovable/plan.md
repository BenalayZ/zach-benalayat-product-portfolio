# Copy audit — clarity, conciseness, human voice

## The problem in one paragraph

The site is well-structured but the voice slips into two failure modes:
**(1) repeated stock refrains** — "ship the monetization decision that comes out of it", "find where the value lives", "MVP is the starting line / not an end goal" appear 3–5 times each across hero, meta, About, and FAQ; and **(2) buzzword bingo** in a few sections (North Stars quotes, "How I Achieve Success" steps, some FAQ answers) that read like a LinkedIn post, not a person talking.

Below are the targeted edits. Tone target: plain, specific, first-person. No new sections, no layout changes.

## 1. Hero (`src/routes/index.tsx`)

- Subhead currently: *"SQL · Python · Power BI and Snowflake. I find where the value lives, then ship the monetization decision that comes out of it."*
  → *"SQL, Python, Power BI on Snowflake. I dig into the data, find what's actually driving revenue, and ship the call that comes out of it."*
- Eyebrow `6+ yrs · B2B SaaS · IoT · AI` → `6+ years · B2B SaaS · IoT · AI` (the `yrs` abbreviation reads cheap next to the tracking).
- Meta description (line 19) and og:description (line 25): rewrite to match the new subhead so the duplicated refrain doesn't appear twice in the page.

## 2. Positioning section (lines 397–415)

Currently the headline and the body paragraph say the same thing twice.

- Headline: *"The analysis comes first. The product bet comes out of it."* → keep.
- Body: *"I lead with the analysis. KPI tree, instrumentation, dashboards in Power BI, Looker, Tableau and Snowflake — then the PRD, roadmap, and launch fall out of what the data says."*
  → *"Most product calls I've shipped started as a dashboard or a SQL query, not a meeting. I build the KPI tree and the instrumentation first; the PRD, the roadmap, and the launch follow what the data shows."*

## 3. Top Skills (lines 59–76)

Bodies read like tool dumps. Rewrite for one human sentence each:

- BI & Executive Dashboarding: *"Power BI, Looker, Tableau on Snowflake — and the semantic modeling and ETL that make them trustworthy."*
- Product Analytics & Experimentation: *"A/B tests, funnels, and cohorts in SQL and Python. I design the KPI before I touch the dashboard."*
- Data & SQL Engineering: *"Stored procedures, ETL pipelines, identity resolution. The plumbing nobody notices until it breaks."*
- Analytics-Led Product Delivery: *"PRDs, OKRs, and roadmap bets that come from the analysis — not the other way around."* (keep — already human).

## 4. FAQ (lines 35–56)

Tighten the dense answers; keep the question wording.

- Q1 answer: drop the parenthetical list. → *"Full-time Senior Analyst, Staff Analyst, BI Lead, or analytics-led PM. Open to contract too — analytics audits, KPI design, BI builds, PRDs, 0→1 launches."*
- Q2 answer: keep but de-jargon. → *"B2B SaaS, IoT and telecom, AI platforms (MCP shipped on the GPT and Claude stores), data infrastructure, and nonprofit case management."*
- Q3: keep — best answer on the page.
- Q4 answer: *"Objectives → research → KPI framework → PRD → ship → post-launch funnel and cohort analysis. MVP is the starting line."*
  → *"Objectives, then research, then the KPI framework, then the PRD, then ship, then watch the funnels and cohorts. The launch is the start of the work, not the end."* (kills the "MVP is the starting line" refrain that also appears in About.)
- Q5: keep.

## 5. Engagement Models (lines 78–94)

- Subhead (line 553): *"Full-time is the priority — contract and consulting fill the gap when the seat isn't open yet."*
  → *"Full-time is the priority. Contract and consulting are how I help while the right seat opens up."*
- Full-time body: *"Embedded ownership of analytics, BI, or analytics-first product. Remote-first, open to hybrid."*
  → *"Embedded ownership of analytics, BI, or an analytics-led product team. Remote-first, open to hybrid."*
- Consulting body: keep.

## 6. CTA strip (lines 622–631)

- Headline `Ready to ship?` → keep, it's punchy.
- Body: *"Open to full-time Senior PM, Staff Analyst, or Senior BI roles — plus contract and consulting engagements. Let's build something significant."*
  → *"Open to full-time Senior PM, Staff Analyst, or Senior BI roles, plus contract and consulting work. If you've got a problem worth solving, send it over."* (kills "significant", makes the ask concrete.)

## 7. About page (`src/routes/about.tsx`)

This page has the biggest voice problem.

- H1 (line 203): *"About Zach Benalayat — Product & Data Analyst"* — H1 inside an `/about` page shouldn't repeat the route label.
  → *"Hi, I'm Zach."*
- Tagline (line 206): *"SQL · Python · Power BI and Snowflake · Product Analytics · Forecasting"* → keep.
- Opening paragraph (line 212) is one comma-spliced sentence. Split:
  → *"I lead with the analysis. SQL on Snowflake, funnels and dashboards in Power BI / Looker / Tableau, A/B tests, forecasting, and Python when the transforms get heavy.*
  *I anchor every scope call to the metric that actually monetizes — the PRDs, OKRs, and roadmap bets fall out of what the data says."*
- Blockquote (lines 227–231): the "Success is a process, not an end goal. Continuous Improvement is my mantra…" line is the most LinkedIn-y sentence on the site. Replace with something more specific or delete the quote entirely.
  → Recommend deleting. If kept, rewrite to: *"Most of my best product calls started as something boring — a SQL query, a dashboard nobody was reading. That's where the work lives."*

### North Stars (lines 86–117)

All six quotes read like fortune cookies. Either rewrite them in plain first-person, or cut the section to 3 stronger principles. My recommendation: cut to 4 and rewrite.

- Agile Leadership → *"Ship small, learn fast. A team that can change direction in a sprint beats a team with a perfect annual plan."*
- Data Storytelling → *"The story is in the data. My job is to read it out loud — to engineers, to sales, to the CEO — in language each one will actually act on."*
- 80/20 Mindset → *"The boring 20% — naming a metric correctly, validating a join — moves more revenue than the flashy 80%."*
- Technical Skill → *"I write the SQL I'd ask an engineer to write. It keeps the conversations honest."*
- Cut: Stakeholder Communication ("bundle of arrows"), Continuous Improvement (already covered).

### "How I Achieve Success" (lines 119–128, 309)

Section title and the abstract noun-phrase steps are the weakest copy on the site.

- Title: *"How I Achieve Success"* → *"How I work a problem"*.
- Steps: replace the 8 abstract phrases with 5 concrete ones:
  1. *"Pin down what we're actually trying to move."*
  2. *"Get the data, get the context, talk to whoever's closest to the problem."*
  3. *"Frame the KPI tree and instrument it."*
  4. *"Ship the smallest thing that proves or kills the bet."*
  5. *"Measure honestly. Roll forward or roll back."*

### Experience bullets

Mostly strong already. One small fix on the Seamless bullet (line 37): the parenthetical "(SMB + mid-market, enterprise expansion underway)" interrupts the sentence — move to a second sentence:
→ *"Owned the 0→1 launch of the customer-facing B2B Public API to $1M ARR — SMB and mid-market first, enterprise expansion underway. Automated analytics workflows with Claude + N8N, cutting idea-to-design cycle time by 15%."*

## 8. Contact page (`src/routes/contact.tsx`)

- H1 `Let's connect` (line 56) → *"Let's talk."* (shorter, less networking-event.)
- Subhead (line 59): *"Open to full-time Senior PM, Staff Analyst, or Senior Data Analyst / BI roles, plus contract and consulting engagements."*
  → *"Open to full-time Senior PM, Staff Analyst, or Senior BI roles. Contract and consulting too."*
- Footer line (109): *"Prefer a form? Email is fastest — I check it every weekday."* → keep, it's the most human line on the site.

## 9. Project data (`src/data/projects.ts`)

Only one rewrite needed for voice — the rest is project-specific and reads well.

- **Seamless MCP** strategy (line 98): *"Don't reinvent the wheel — focus on the shortest path to delivering core functionality."* is the only project line that reads as a slogan.
  → *"Use MCP instead of building custom agent integrations per platform. Same surface area, a fraction of the build cost."*

## What I'm NOT changing

- Layout, spacing, components, design tokens — copy only.
- Project case-study bodies (problem/strategy/insights/outcome) — those are specific and earned.
- The ATS keyword block — it's intentionally machine-readable, not for humans.
- The hidden SEO meta keyword paragraph (lines 470–477).
- The Toolkit content lists — they're inventory, not voice.

## Why this is the right scope

Two refrains and one page (About) account for ~80% of the "AI-written" feel. Killing the refrains, splitting two dense paragraphs, and rewriting the North Stars + "How I Achieve Success" section gets the whole site to a consistent human voice without touching anything that's already working.

Estimated touch: 3 files (`src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/contact.tsx`) plus one small edit in `src/data/projects.ts`.
