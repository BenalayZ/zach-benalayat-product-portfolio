# Zach Benalayat — Portfolio

Personal portfolio site for Zach Benalayat, Product Manager & Data Analyst.

- **Live site:** https://benalayz.github.io/zach-benalayat-product-portfolio/

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Router](https://tanstack.com/router) (SPA, file-based routing) |
| Build Tool | Vite 7 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 + custom oklch design tokens |
| Components | Radix UI primitives + shadcn/ui patterns |
| Fonts | Sora (headings) + Manrope (body) via Google Fonts |
| Query State | TanStack Query |
| Validation | Zod |
| Icons | Lucide React |
| Charts | Recharts |
| Hosting | GitHub Pages (static) |

---

## Project Structure

```
src/
├── routes/             # File-based routes (TanStack Router)
│   ├── __root.tsx      # Root layout (header, footer, shell)
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About / experience
│   ├── contact.tsx     # Contact info
│   └── work.$slug.tsx  # Individual case study
├── components/         # Reusable UI components
├── data/               # Project metadata
├── hooks/              # Custom React hooks
├── lib/                # Utilities
├── styles.css          # Tailwind entry + oklch color tokens
├── router.tsx          # Router bootstrap (basepath-aware)
└── main.tsx            # SPA mount point
```

---

## Design System

- **Theme:** Emerald Prestige — deep emerald canvas with cream type and gold accents
- **Dark mode only:** Both `:root` and `.dark` use the same palette
- **Key visual elements:** Orbital ring hero animations, hairline section dividers, mono-prefixed eyebrow labels

---

## Routes

| Route | Content |
|-------|---------|
| `/` | Hero, toolkit, featured projects, skills, FAQ |
| `/about` | Full experience timeline, education, all projects |
| `/contact` | Contact info, resume download |
| `/work/:slug` | Individual case study page |

---

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production (outputs to dist/)
bun run build

# Preview the production build locally
bun run preview

# Lint
bun run lint

# Format
bun run format
```

---

## Deployment (GitHub Pages)

The site is configured for a **project site** at
`https://benalayz.github.io/zach-benalayat-product-portfolio/`.

### One-time setup

1. Push the repo to GitHub: `benalayz/zach-benalayat-product-portfolio`.
2. In repo Settings → Pages, set **Source = Deploy from a branch** and
   **Branch = `gh-pages` / root**.

### Deploy

```bash
bun run deploy
```

This builds the site and pushes `dist/` to the `gh-pages` branch via the
`gh-pages` package. GitHub Pages then serves the new build within a minute.

### How it works

- `vite.config.ts` sets `base: "/zach-benalayat-product-portfolio/"` so all
  asset URLs are prefixed correctly.
- `src/router.tsx` reads `import.meta.env.BASE_URL` and passes it as the
  router's `basepath`, so `<Link to="/about">` resolves to
  `/zach-benalayat-product-portfolio/about`.
- `public/404.html` is a copy of `index.html` — GitHub Pages serves it for
  any unknown path, the SPA boots, and TanStack Router renders the correct
  route. This is what makes deep links and page refreshes work.
- `public/.nojekyll` disables Jekyll processing on Pages.

### Switching to a custom domain later

If you point a custom domain at the repo:

1. Change `base` in `vite.config.ts` to `"/"`.
2. Add a `public/CNAME` file containing the domain.
3. Re-run `bun run deploy`.

---

## Author

**Zach Benalayat** — Product Manager & Data Analyst
[LinkedIn](https://www.linkedin.com/in/zach-benalayat/) · zacharia.benalayat@gmail.com
