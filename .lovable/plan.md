## The 30-second hiring-manager test

Three different people land on the homepage: a **Senior PM hiring manager** (Zillow-baseline), a **Staff Analyst hiring manager** (Hims & Hers-baseline), and a **Senior Data Analyst / BI lead** (Crash Champions-baseline). Each of them is skimming dozens of portfolios. In ~30 seconds they need to answer four questions, in this order:

1. **"Is this person targeting MY role?"** — explicit role match, not a generic "PM + Analyst" blur.
2. **"Have they done MY job at scale, with stakes?"** — one quantified outcome tagged to their track.
3. **"Do they have MY stack?"** — the 3–5 tools they'd actually use on day one.
4. **"Where is the proof?"** — a recognizable logo or case-study tile they can click.

The current hero answers #1 weakly (the headline is poetic, the role line is a single muted sub-bullet), answers #2 generically (three metrics with no role anchor), buries #3 in a comma-separated subhead, and pushes #4 (logos and featured work) below the fold.

## What's working — keep it

- Availability pill, location line, orbital-ring backdrop, monogram ghost, and Emerald Prestige palette. Don't touch the visual system.
- The three outcome metrics (`$1M`, `$1M+`, `20%`) — the numbers themselves are right; only their framing needs work.
- The poetic H1 ("I find the signal in the noise") — keep as a tagline, demote one tier in the hierarchy.

## Recommended changes (hero only)

### 1. Lead with a role-anchored H1, demote the tagline

Replace the current H1 + subhead pair with a functional headline that names the three tracks explicitly, and move the poetic line into a smaller eyebrow above it.

```text
Eyebrow (small, primary):   I FIND THE SIGNAL IN THE NOISE
H1 (large, foreground):     Senior Product Manager,
                            Staff Analyst, and Senior BI roles —
                            run by one operator.
Subhead (medium, muted):    6+ yrs shipping analytics-first product
                            across B2B SaaS, IoT, and AI.
```

A hiring manager scanning for "Senior PM" or "Senior BI" now sees their title in the H1 itself.

### 2. Replace the generic 3-stat strip with a role-tagged proof grid

Today's three stats sit under a `border-t` and don't tell a recruiter *which* role each one proves. Re-tag them so each track gets one signature outcome above the fold:

```text
SENIOR PM           STAFF ANALYST       SENIOR BI
$1M ARR             46% faster intake   $1M+ ARR uplift
Seamless API 0→1    Arc workflow        Inseego Connect
                    analytics           Power BI funnel
```

Same three numbers — but each is now labeled with the track it proves. A BI lead instantly sees "$1M+ ARR uplift / Power BI funnel" and knows this person ships their kind of work.

### 3. Add a 3-row "stack by role" chip block under the CTAs

One subhead line listing every tool reads as a resume keyword dump. Three short rows, each tagged to a track, reads as deliberate fit. Example:

```text
PM stack          PRD · A/B testing · Funnel & cohort · Roadmap · OKRs
Analyst stack     SQL · Python · Snowflake · dbt · Amplitude
BI stack          Power BI · Microsoft Fabric · DAX · Looker · Tableau
```

Each row is small chips on one line. Pulls the most relevant 5 tools from each track in the existing toolkit — no new content, just earlier surfacing.

### 4. Pull the logo wordmark band into the hero

The "Where I've shipped product" band currently sits below the hero and below the fold on a 954-wide viewport. Move it inside the hero, immediately under the CTAs, as a single thin row (smaller logo height, ~32px). Hiring managers grant ~5 seconds of trust the moment they see Seamless.AI / Inseego / CaseWorthy. Don't make them scroll for it.

### 5. Tighten the CTA block

Current hero has 5 CTAs (Explore work, Send email, Download resume, LinkedIn, Or email me) — too many choices dilute action. Collapse to:

- **Primary:** `See the work →` (anchors to #work)
- **Secondary:** `Download resume (PDF)`
- **Tertiary, text-link row:** `Email · LinkedIn`

Drops "Or email me" (redundant with the email link) and the duplicate email CTA.

### 6. (Optional) Add a one-line "what I'd do in your first 30 days" promise

Right below the proof grid, a single italic line tailored to all three audiences:

> *Embed week one, ship the KPI tree and first dashboard by week four, and have a PRD-backed roadmap bet ready by day 30.*

This is the line a hiring manager forwards to their team. Skip if it feels overpromised — the rest of the changes stand on their own.

## What this changes structurally

```text
BEFORE (hero, top to bottom)        AFTER (hero, top to bottom)
─────────────────────────────       ─────────────────────────────
Availability pill                   Availability pill
H1 (poetic)                         Eyebrow (poetic tagline)
Subhead (stack list)                H1 (three role tracks named)
Location + role bullets             Subhead (years + domains)
Mission sentence                    Location + availability bullet
5 CTAs                              3 CTAs (primary/secondary/links)
3 generic stats                     3 role-tagged proof stats
                                    Logo wordmark band (moved up)
                                    Stack-by-role chip rows
```

Net: a PM, Analyst, or BI lead can answer all four "is this for me" questions without scrolling, on a 954-wide viewport.

## Out of scope for this change

- About page, Contact page, Work case studies, and FAQ stay as-is.
- No new copy beyond what's listed above — every word reuses existing memory content or current page copy.
- No new components, no new dependencies, no palette changes.
- The standalone "Where I've shipped product" section below the hero gets removed (it's now in the hero) — or kept as a redundant deeper band; will confirm before implementing.

## Technical section (for the implementer)

- All edits land in `src/routes/index.tsx`, hero section only (lines ~189–296), plus deleting/relocating the wordmark band (lines ~299–324).
- New stack-by-role chips reuse the same hairline-border chip pattern already used by `frameworks` (line ~423–432) — `border border-border px-3 py-1 text-xs`.
- Role-tagged proof grid is a small change to the existing `<dl>` (lines ~279–294): add an eyebrow row above each value with `text-[10px] font-bold uppercase tracking-[0.2em] text-primary`.
- Logo band relocation: move the `<ul>` from `section` at line 300 into the hero `<div className="relative z-10 ...">` block, drop the outer `bg-foreground` band styling, and render logos at `h-8 md:h-10` against the emerald hero background instead of the cream band. If contrast breaks, render them inside a single hairline-bordered strip (`border-y border-border py-6`).
- No changes to `head()`, route config, fonts, animations, or design tokens.
