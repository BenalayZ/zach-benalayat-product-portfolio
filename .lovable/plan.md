## Plan

Mark the Latin Hyper-Texts project as featured so it appears in the homepage "Selected Work" grid alongside the other highlighted projects.

### Change
- `src/data/projects.ts` — add `featured: true` to the Latin Hyper-Texts entry (around line 115).

That's it — the homepage already filters `projects.filter(p => p.featured)` into the featured grid, so no layout changes are needed.