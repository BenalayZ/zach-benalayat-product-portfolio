# Site content

Edit any `.json` file here on GitHub and the site updates on next build.

## Files

- **site.json** — site name, nav, footer, social links, resume filename
- **home.json** — homepage: hero, logos, approach, toolkit, skills, engagement models, FAQ, CTA, featured-project labels
- **about.json** — about page: bio, principles, process, experience, education, toolkit
- **contact.json** — contact page: header, channels, response note
- **projects.json** — array of case studies (each shown on `/work/<slug>`)

## Editing rules

- Keep the JSON valid. After editing in GitHub's web UI, the diff view will flag a syntax error before you commit.
- Markdown is **not** rendered in these fields — they are plain strings. Use `\n\n` inside a string to break paragraphs (already used in project `strategy`, `insights`, `tradeOff`).
- Do **not** rename keys. Renaming a key means the site no longer reads it. To remove a section's content, blank the string (`""`) or remove an array entry, but keep the key.
- Order matters in arrays (FAQs, experience, projects). Reorder by moving the whole `{...}` block.

## Adding a new project

1. Add a new object to the array in `projects.json`. Copy an existing one as a template.
2. The `image` field is a key (e.g. `"seamless-api"`), not a path. To use a new image, place the file in `src/assets/projects/` and add it to the `imageMap` in `src/data/projects.ts` keyed by the same string. (This one-line code change is the only `.tsx` touch needed.)
3. Set `"featured": true` to surface it in the top grid on the homepage.

## Adding a new FAQ / skill / engagement model

Append to the relevant array in `home.json`. No code change needed.

## Logos on the homepage band

Logo `key` values in `home.json` (`seamless`, `inseego`, `caseworthy`, `arc`, `butler`) are mapped to image files in `src/routes/index.tsx`. To add a new logo, drop the file in `src/assets/logos/` and add it to the `logoMap` in `index.tsx`.
