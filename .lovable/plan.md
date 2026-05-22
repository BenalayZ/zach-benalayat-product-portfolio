Apply the "Gold accent prestige" direction across the site by re-tokening the existing design system. Structure stays the same — only colors change.

### New palette (Emerald Prestige, dark-first)

- `--background` → deep emerald `#064e3b`
- `--foreground` → cream `#f5f0e0`
- `--primary` → gold `#c9a84c` (CTAs, accents, eyebrow labels, highlight on name in hero)
- `--primary-foreground` → deep emerald `#064e3b` (text on gold buttons)
- `--secondary` / orbital rings / ghost monogram → mid emerald `#0d7a5f`
- `--muted` / borders → cream at 10–20% over emerald
- `--card` → slightly lighter emerald (`#0a5e47`-ish) for hairline grid cells

### Where it changes

Just `src/styles.css` — both `:root` and `.dark` blocks (site is dark-first; both already mirror each other). The whole site reads from semantic tokens, so re-tokening propagates to:
- Hero headline accent (name highlight becomes gold)
- "Explore work" button (gold on emerald)
- Toolkit grid eyebrows, primary tool names
- FAQ, project cards, CTA section
- About page

### What stays untouched

- All component JSX, layouts, spacing, typography (Sora + Manrope already correct)
- Orbital ring animation, ghost monogram structure
- Section structure, routes, content

### Memory update

Replace the "Noir & Emerald" Core memory line with the new Emerald Prestige palette so future work stays consistent. Update `mem://design/color-tokens` with the new oklch values.

### Files touched

- `src/styles.css` — token values only
- `mem://index.md` — Core line
- `mem://design/color-tokens` — full palette doc