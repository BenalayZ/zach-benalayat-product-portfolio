## Top 3 standout upgrades

### 1. Rewrite the hero headline + intro

Replace the generic "Product Manager & Data Analyst with a data-driven approach to product" with a line that uses your unique archaeology → forensics → product arc.

Proposed copy (in `src/routes/index.tsx`):
- Eyebrow stays: `Open to new roles`
- Headline: `Hello! I'm Zach Benalayat, a Product Manager who treats products like dig sites — excavating signal from messy data until the next decision is obvious.`
- Highlighted span on "dig sites" (primary color) to anchor the metaphor visually
- Subline (replaces existing): `Trained in archaeology and forensics. Shipping B2B SaaS, IoT, and AI-platform products end-to-end — from PRD through post-launch analysis.`

This keeps the same buttons (See my work / Download resume / Get in touch).

### 2. Add 3 outcome metric tiles to the hero

Insert a metric strip directly under the hero CTAs, above the "What I'm looking for" section, so proof shows without scrolling on desktop:

- `$750k ARR` — Seamless API, year one
- `$1M+ ARR` — Inseego Connect uplift
- `20% lower` — AWS spend on Data Engine 4.0

Each tile: large primary-colored number, small muted label underneath, separated by subtle dividers. Built inline in `index.tsx` using existing tokens (`text-primary`, `text-muted-foreground`, `border-border`). Responsive: 3-up on md+, stacked on mobile.

### 3. Add a one-line outcome chip to every ProjectCard

Currently the card shows title + summary + tags. Add a single primary-tinted outcome line above the tags so a recruiter sees the result without expanding the card.

Implementation:
- Extend `Project` type in `src/data/projects.ts` with a new optional `headline` field (short, metric-led, ≤ ~80 chars). Populate for all 7 projects:
  - Seamless API → `$750k ARR in year one`
  - Data Engine 4.0 → `20% lower AWS spend, deduped data`
  - Seamless MCP → `Launched on GPT + Claude in one quarter`
  - Seamless Fast Data → `15x faster execution, 30% less compute`
  - Inseego Connect → `$1M+ ARR uplift via GTM re-targeting`
  - Latin Hyper-Texts → `Cited in dozens of musicology journals`
  - The Arc → `−1 FTE, 46% faster course turnaround`
- In `src/components/ProjectCard.tsx`, render `project.headline` as a small badge-style line ABOVE the summary paragraph, using `text-primary` + `font-semibold`.

### Files touched
- `src/routes/index.tsx` (hero copy + metric tiles)
- `src/data/projects.ts` (add `headline` field + values)
- `src/components/ProjectCard.tsx` (render headline)

No new routes, no design system changes, no library additions.