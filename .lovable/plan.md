## Goal

Strengthen the site's pitch for full-time PM/Analyst roles **and** fractional/contract engagements, with structured data and an FAQ that doubles for SEO and AI-search visibility.

## 1. Reposition for multiple engagement types

- **Home hero badge**: change "Open to new roles" → "Open to full-time, fractional, and contract work".
- **Home CTA section** (bottom): rewrite copy to explicitly invite full-time, fractional, and project engagements (replace generic "collaborations, advisory roles, and product leadership opportunities").
- **Contact page hero**: same rewrite so the offer matches.
- **Meta descriptions** on `/` and `/contact`: mention fractional/contract availability so it surfaces in search snippets.

## 2. Add FAQ section on the homepage

New section between Top Skills and More Work. 5 Q&As tuned for hiring managers and prospective clients, e.g.:

- What kinds of engagements are you open to?
- What types of products have you shipped?
- Do you lead analytics or product strategy?
- What's your typical process from idea to launch?
- How do I get in touch?

Each Q&A wired into a `FAQPage` JSON-LD block in the same route's `head()` so Google and AI surfaces can extract it.

## 3. Add Person JSON-LD schema

In `src/routes/__root.tsx`, add a sitewide `Person` schema (name, jobTitle, sameAs LinkedIn, alumniOf Dickinson + UT Austin, worksFor Seamless, knowsAbout: Product Management, Data Analysis, B2B SaaS, IoT, AI). This is the single most leveraged change for AI search visibility.

## 4. Add a company / school logo trust strip

New compact strip on the homepage (just under the hero metrics, before the positioning section): "Experience across" + small text logos for Seamless, Inseego, CaseWorthy, The Arc, Dickinson College, UT Austin.

- Implementation: text-mark style (typographic, in muted-foreground) rather than raster logos — fastest, no asset rights questions, on-brand with the minimal aesthetic. If you'd rather use actual logo images later, we swap in.

## 5. Small tightening passes

- **About page subtitle**: "Product Manager · Data Analyst" → "Product Analyst & Manager" (matches new home positioning).
- **About page intro paragraph**: lead with the dual-role framing, not just "rigorous approach to data analytics."
- **About meta description**: rebalance to mention analytics + PM equally.
- **Industries served**: add a one-line chip row on About under the intro (B2B SaaS · IoT/Telecom · AI Platforms · E-Commerce · Non-Profit) — uses existing content from the bio, just makes it scannable.

## Technical notes

- All copy edits land in `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/contact.tsx`.
- JSON-LD goes into `head().scripts` arrays — Person in `__root.tsx`, FAQPage on `/`.
- No new dependencies, no new routes, no asset work required.
- Sitemap unchanged (still `/`, `/about`, `/contact`).

## Out of scope (per your answers)

- Testimonials / recommendation quotes
- 'Now' / current focus block
- Standalone Services cards section
- Advisory framing

Approve and I'll ship it.