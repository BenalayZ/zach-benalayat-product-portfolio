## Make LinkedIn more prominent

The URL `https://www.linkedin.com/in/zach-benalayat/` is already linked from the footer and on the `/contact` page, but it's not discoverable from the hero or the bottom CTA — the two highest-traffic spots on the homepage.

### Changes

**1. Add a LinkedIn button to the homepage hero** (`src/routes/index.tsx`)
Add a "Connect on LinkedIn" pill-button to the existing button row, alongside "See my work", "Download resume", and "Get in touch". Use the `Linkedin` icon from lucide-react, styled as an outlined button matching "Download resume".

**2. Add a LinkedIn button to the bottom CTA section** (`src/routes/index.tsx`)
In the green "Here's your chance" CTA, add a "Connect on LinkedIn" button next to "Send an email" and "Download resume". Styled to match the existing outlined button there.

**3. Add a LinkedIn icon link to the header nav** (`src/routes/__root.tsx`)
Small icon-only LinkedIn link in the header, placed just before the green "Resume" button. Persistent across every page, takes minimal space.

### Out of scope
- No change to the contact page (LinkedIn card already prominent there).
- No change to footer (already present).
- No design token, layout, or copy changes elsewhere.

### Technical notes
- All links: `href="https://www.linkedin.com/in/zach-benalayat/"`, `target="_blank"`, `rel="noopener noreferrer"`.
- Reuse the `Linkedin` icon already imported on the contact page; import it in `index.tsx` and `__root.tsx`.
- Files touched: `src/routes/index.tsx`, `src/routes/__root.tsx`.