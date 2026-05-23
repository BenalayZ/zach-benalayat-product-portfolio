## Goal
Make the logos section on the homepage visually appealing by showing the logos in full color instead of the current grey/grayscale treatment.

## Current State
- The logos band at `src/routes/index.tsx` uses `grayscale` and `opacity-80` with a hover-to-color effect.
- Background is the emerald canvas (`bg-foreground/[0.02]`), which is very dark.
- The user selected "Full color, no chips" — native colored logos directly on the emerald canvas.

## Plan
1. **Drop grayscale** — remove `grayscale` and `hover:grayscale-0` from the logo `<img>` elements.
2. **Adjust opacity** — bump from `opacity-80` to `opacity-90` (or remove entirely) so colors read clearly against the dark background without losing the subtle muted quality of the band.
3. **Remove hover color-swap** — since there is no grayscale to swap, drop the `transition-all` opacity bump on hover; instead keep a subtle `hover:opacity-100` for a clean, minimal lift.
4. **Rebuild** — run `bun run build` and confirm the band renders colored logos cleanly on the emerald canvas.