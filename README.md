# Zach Benalayat — Portfolio

Personal portfolio site for Zach Benalayat, Product Manager & Data Analyst.

- **Live site:** [zachbenalayat.com](https://zachbenalayat.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) (v1) — full-stack React with SSR/SSG |
| Build Tool | Vite 7 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 + custom oklch design tokens |
| Components | Radix UI primitives + shadcn/ui patterns |
| Fonts | Sora (headings) + Manrope (body) via Google Fonts |
| Query State | TanStack Query |
| Validation | Zod |
| Icons | Lucide React |
| Charts | Recharts |
| Deployment | Cloudflare Workers (via `@cloudflare/vite-plugin`) |

---

## Project Structure

```
src/
├── routes/               # File-based routes (TanStack Router)
│   ├── __root.tsx        # Root layout (header, footer, shell)
│   ├── index.tsx         # Homepage (hero, toolkit, featured work, skills, FAQ)
│   ├── about.tsx         # About / experience page
│   ├── contact.tsx       # Contact form + info
│   ├── work.$slug.tsx    # Individual project case study
│   └── sitemap[.]xml.ts  # Dynamic sitemap.xml
├── components/           # Reusable UI components
│   ├── ProjectCard.tsx
│   ├── SkillCard.tsx
│   └── ui/               # shadcn-style primitives (button, card, etc.)
├── data/
│   └── projects.ts       # Project metadata & case study content
├── hooks/                # Custom React hooks
├── lib/                  # Utilities & server functions
├── integrations/         # Third-party integrations
│   └── supabase/         # Supabase clients & auth middleware
├── styles.css            # Tailwind entry + oklch color tokens
└── router.tsx            # Router bootstrap
```

---

## Design System

- **Theme:** Emerald Prestige — deep emerald canvas with cream type and gold accents
- **Color tokens:** `primary` (gold), `background` (deep emerald), `foreground` (cream), `muted-foreground` (subtle cream)
- **Dark mode only:** Both `:root` and `.dark` use the same palette; `color-scheme: dark` on `<html>`
- **Key visual elements:** Orbital ring hero animations, hairline section dividers, mono-prefixed eyebrow labels

---

## Routes

| Route | Content |
|-------|---------|
| `/` | Hero, toolkit, featured projects, skills, "by the numbers", FAQ |
| `/about` | Full experience timeline, education, all projects |
| `/contact` | Contact form, email, LinkedIn, resume download |
| `/work/:slug` | Individual case study page |
| `/sitemap.xml` | SEO sitemap |

---

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production
bun run build

# Lint
bun run lint

# Format
bun run format
```

---

## Key Features

- **SEO-ready:** JSON-LD structured data (Person, FAQPage), Open Graph, Twitter Cards, canonical URLs
- **Performance:** SSR/SSG via TanStack Start, preconnected Google Fonts
- **Resume download:** PDF available site-wide via `/Zach_J_Benalayat.pdf`
- **Analytics-first content:** Portfolio showcases $2M+ ARR influenced by analytics work
- **Responsive:** Mobile-first with orbital animations scaling to viewport

---

## Author

**Zach Benalayat** — Product Manager & Data Analyst  
[LinkedIn](https://www.linkedin.com/in/zach-benalayat/) · zacharia.benalayat@gmail.com
