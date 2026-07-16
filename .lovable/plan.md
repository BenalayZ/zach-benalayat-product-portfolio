## Goal

Redesign the homepage to look like a **2018 full-bleed parallax agency site**, keeping the current Emerald Prestige palette (deep emerald canvas, cream type, gold accent). Deliver as a **rendered preview** first. No project files change until you pick a direction.

## What "2018 parallax agency" means here

Concrete era signals baked into every direction:

- **Full-bleed hero** with a giant name/title, thin-weight sans (Montserrat / Raleway / Playfair Display era), all-caps eyebrow, blinking cursor or scroll-down chevron.
- **Section-snap parallax bands** — each band is 100vh, background image or gradient locks while foreground scrolls.
- **Animated stat counters** (0 → $1M+, 0 → 46%, 0 → 20%) on scroll-in.
- **Full-width horizontal rule dividers** with a small centered glyph (◆ / —).
- **Case studies as full-bleed alternating left/right image + text slabs**, not cards.
- **Uppercase letter-spaced nav** with a hamburger on desktop (very 2018).
- **Big circular portrait / avatar** somewhere in the About strip.
- **CTA band** = full-bleed emerald with centered gold outline button, `LET'S TALK →`.
- Subtle grain/noise overlay, faint fixed-position social icons on the left edge.

Palette stays: `#064e3b` bg, `#f5f0e0` type, `#c9a84c` gold, `#0d7a5f` mid-emerald accents.

## Approach

1. **Capture current homepage** via a headless screenshot of `localhost:8080` for the design-directions call to anchor against.
2. **Generate 3 rendered directions** — all 2018 parallax-agency, all Emerald Prestige, differing in:
   - **A. Cinematic** — huge hero portrait, heavy parallax, Playfair Display headlines, gold hairline frames, feels like a 2018 director's reel.
   - **B. Editorial Agency** — Montserrat all-caps, thin gold rules, numbered sections (`01 / WORK`), horizontal case-study slabs, feels like a 2018 branding studio.
   - **C. Startup Landing** — Raleway light, big stat band, three-column "services" row, testimonial slab, feels like a 2018 SaaS/consultant landing page.
3. **Present the 3 rendered previews** side-by-side via a prototype question. You pick one.
4. **Only after you pick**, I switch to build mode and implement the chosen direction across the homepage (hero, approach, featured work, skills, engagement, FAQ, CTA), keeping content JSON unchanged.

## What is NOT in this plan

- No changes to `/about`, `/contact`, or case study pages in this pass — homepage only, per your answer.
- No content rewrites — same copy from `content/home.json`.
- No palette change.
- No file edits during the preview step.

## Technical notes

- Preview generation uses the design-directions tool with a Playwright screenshot of the current homepage as visual anchor.
- Directions render as standalone HTML/CSS prototypes (Tailwind + inline styles), not committed to the repo.
- Implementation phase (after your pick) will touch only `src/routes/index.tsx` and possibly add a small parallax hook; `content/*.json`, routing, and other pages stay untouched.
- Parallax will use CSS `background-attachment: fixed` + light IntersectionObserver counters — no heavy library added.

Approve this and I'll generate the three previews.
