# Update portfolio site from PDF

## Content changes

**Homepage (`/`)** — masonry of 7 expandable project cards. Each card shows hero image + title + one-line summary; clicking expands to reveal Problem / My Role / Strategy / Key Insights / Outcome.

Projects:
1. Seamless API — $750k ARR, AI platform integrations
2. Data Engine 4.0 — data quality + 20% AWS cost reduction
3. Seamless MCP — GPT + Claude Store launch in one quarter
4. Seamless Fast Data — 15x faster execution, biweekly → 2-hour updates
5. Inseego Connect — $1M+ ARR via IoT funnel pivot
6. Latin Hyper-Texts — student-managed digital scholarship platform
7. The Arc Southern Maryland — CaseWorthy implementation, 46% faster turnaround

Hero intro updated with the real bio from page 2 ("forensic approach to data analytics…").

**About (`/about`)** — rewritten with real content:
- Introduction (PDF page 2)
- Experience: Seamless (2024–2026), Inseego (2022–2024), CaseWorthy (2019–2022)
- Education: UT Austin (2017–2019), Dickinson College (2013–2017)
- **Product Strategy North Stars** — 6 principles (Agile Leadership, Stakeholder Communication, Continuous Improvement, 80/20 Mindset, Technical Skill, Data Storytelling) as a grid of quote cards
- **How I Achieve Success** — 8-step process as a vertical timeline

**Contact (`/contact`)** — email `zacharia.benalayat@gmail.com` + LinkedIn `in/zach-benalayat`. Remove phone number and Calendly placeholder.

**Root layout** — update LinkedIn URL in header/footer to the real handle.

## Assets

Copy these PDF-extracted images into `src/assets/` and replace the AI-generated placeholders:
- Seamless API UI screenshot (page 5)
- Data Engine / Seamless.AI search (page 6)
- Seamless MCP — ChatGPT + Claude logos (page 7)
- Seamless Fast Data architecture diagram (page 8)
- Inseego Connect + T-Mobile composite (page 9)
- Virtual Mappa / Latin Hyper-Texts screenshot (page 10)
- The Arc + CaseWorthy screenshot (page 11)

Delete the now-unused `src/assets/hero.jpg`, `seamless-api.jpg`, `inseego-connect.jpg`.

## Technical notes

- Project list lives as a typed array in `src/data/projects.ts` (slug, title, summary, image import, problem, role, strategy, insights, outcome, tags) so the homepage maps over it.
- Card expansion uses local `useState` + a small `<ProjectCard />` component; smooth height transition via Tailwind, no extra deps.
- North Stars and 8-step process render from inline arrays in `about.tsx`.
- Per-route `head()` metadata updated with the new bio for SEO; sitemap unchanged (same 3 routes).
- All colors continue to use semantic tokens; no design system changes.
