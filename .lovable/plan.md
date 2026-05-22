## Goal
Make `Zach_J_Benalayat.pdf` available as a one-click download from the site.

## Steps

1. **Add the file**
   - Copy `user-uploads://Zach_J_Benalayat.pdf` → `public/Zach_J_Benalayat.pdf` so it's served at `/Zach_J_Benalayat.pdf` (no bundler import needed, real PDF download).

2. **Add a reusable "Download Resume" link**
   - Use a plain `<a href="/Zach_J_Benalayat.pdf" download>` with a `Download` lucide icon.
   - Styled to match existing pill buttons.

3. **Place CTAs**
   - **Hero (`src/routes/index.tsx`)**: Replace the current "Get in touch" secondary button with **Download Resume** (primary feels better since amyoughton's hero also leads with resume). Keep "See my work" as the green primary; make Download Resume the outlined secondary alongside it. Add a third "Get in touch" link if room allows, or move it down.
   - **Header nav (`src/routes/__root.tsx`)**: Add a small "Resume ↓" link in the nav, right of Contact, matching the reference site's persistent download CTA.
   - **Final CTA section**: Add a third button "Download resume" next to Send email / View contact options.
   - **About page**: Add a Download Resume button below the intro paragraphs.

4. **No SEO/meta changes** — direct PDF link, no routing.

## Out of scope
- No resume preview/viewer in-page (just download).
- No analytics tracking on the download click.
- Filename stays `Zach_J_Benalayat.pdf`.
