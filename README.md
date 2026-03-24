# Portfolio

Personal portfolio site for **Dominika Fergisz** — frontend developer and designer. Built with Next.js as a static-friendly marketing and work showcase.

## Tech stack

- **Next.js** 16 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** 4

## Features

- **Home** — Hero, about, experience, education, achievements, skills, projects, contact CTA
- **Projects** — Grouped into code (GitHub), Figma designs, and Canva graphics (lightbox for static artwork)
- **Skills** and **About** pages
- **Responsive** layout with light/dark styling via CSS variables
- Fonts: **Plus Jakarta Sans** and **JetBrains Mono** (Google Fonts)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | ESLint                   |

## Customization

| What to change        | Where |
| --------------------- | ----- |
| Name, email, socials  | `src/components/hero-constants.ts` |
| Hero portrait         | `public/photo.png` |
| Career, education, skills, project cards | `src/components/home/sections/homeData.ts` |
| Projects page copy    | `src/app/projects/page.tsx` |
| Site metadata         | `src/app/layout.tsx` |

Add or replace images under `public/` and point to them from `homeData` or page data.

## Deploy

The app is a standard Next.js project and deploys cleanly on [Vercel](https://vercel.com) (or any Node host). Connect the Git repository, use the default Next.js preset, and set no extra env vars unless you add features that need them.

## License

Private / all rights reserved unless you choose to add an open license.
