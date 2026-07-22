# Vijayakumar R — Portfolio

A production-ready personal portfolio built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

**Live sections:** Hero · About · Skills · Experience & Education · Projects (with case-study pages) · Certifications · Achievements · Coding Profiles (live GitHub stats) · Resume · Contact

---

## Quick Start

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build       # production build → dist/
npm run preview     # preview the production build locally
npm run lint         # ESLint
npm run format       # Prettier — formats the whole project
```

Requires Node.js 18+.

---

## Updating Your Content — One File Does It All

Everything on the site — your bio, skills, projects, certifications, achievements, coding profile links, and contact info — comes from a single file:

```
src/data/portfolio.ts
```

Edit that file and the entire site updates. No component contains hardcoded personal content. A few things worth knowing:

- **Profile photo**: replace `public/profile.png` with your own (keep the filename, or update `personal.profileImage` in the data file).
- **Resume PDF**: replace `public/Vijayakumar_R_Resume.pdf` the same way, and update `personal.resumePath` / `personal.resumeLastUpdated`.
- **Project cover art**: `public/project-*.svg` are abstract placeholder illustrations (no real screenshots were available). Swap in real product screenshots/mockups when you have them — just point `project.image` at the new file.
- **Coding profiles** (`codingProfiles` in the data file): GitHub and LinkedIn are wired up with your real URLs. LeetCode, HackerRank, CodeChef, and GeeksforGeeks are scaffolded as "connect" cards — add the real URL and flip `available: true` once you have a profile to link.
- **LeetCode dashboard**: set `leetcodeUsername` in the data file to show a live, auto-updating LeetCode stats card. Leave it blank and the section shows a friendly placeholder instead.
- **GitHub stats**: pulled live at runtime from [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) using `personal.githubUsername` — no manual updates needed as your GitHub activity grows.
- **Testimonials**: the `testimonials` array is intentionally empty. The section hides itself until you add real quotes from real people — don't fabricate these, recruiters do check.
- **Contact form / EmailJS**: the form works out of the box via a `mailto:` fallback. To send messages without opening the visitor's email client, create a free account at [emailjs.com](https://www.emailjs.com/), then fill in `emailjsConfig.serviceId`, `templateId`, and `publicKey` in the data file.

### A few honesty notes from the build

A couple of things were deliberately left as placeholders rather than invented:
- Certification issue dates / credential IDs — add them in `certifications` once you have them (the UI only renders a date/verify-link when present, so it looks clean either way).
- Project tech stacks for both featured projects were inferred conservatively from your resume bullet points (e.g. "MERN Stack" for the journal platform, since that's your stated specialization). Double-check `projects[].techStack` in the data file matches exactly what you used before this goes live — interviewers will ask.
- Hero stats use verifiable numbers (years learning, projects shipped, certifications) rather than vanity metrics like GitHub stars, since there's no real number to show yet.

### Before You Deploy — a Few Things Live Outside `portfolio.ts`

SEO meta tags need real, static values in the HTML for crawlers and social-media link previews to read them — they can't be templated from the data file at runtime. Once you have a real domain, update it in:
- `index.html` — canonical URL, Open Graph URL/image, Twitter card URL/image, JSON-LD `url`
- `public/sitemap.xml` and `public/robots.txt`
- `seo.siteUrl` in `src/data/portfolio.ts` (kept in sync for consistency, even though it isn't injected into the static HTML)

A branded `public/og-image.png` (1200×630) is already generated for link previews — swap it for a real screenshot-based one whenever you like.

---

## Project Structure

```
src/
  assets/           profile photo, resume, category image folders
  components/
    layout/         Navbar, Footer, ThemeToggle, CommandPalette, etc.
    sections/       Hero, About, Skills, Projects, Contact, etc.
    ui/             Reveal, SectionHeading, DynamicIcon, StatCounter…
  context/          ThemeContext (dark/light mode with persistence)
  data/             portfolio.ts — single source of truth
  hooks/            useScrollSpy, useScrollProgress, useInView
  pages/            Home, ProjectDetailPage, NotFoundPage
  types/            shared TypeScript interfaces
  utils/            small helpers (cn, etc.)
```

---

## Features

- **Dark / light mode** with system-preference detection and persistence
- **Command palette** (⌘K / Ctrl+K) for quick navigation to any section or project
- **Project case studies** — each featured project opens a dedicated page (problem, solution, architecture, challenges, lessons learned, future scope)
- **Search & filter** on the projects grid
- **Scroll-reveal animations** via Framer Motion, respecting `prefers-reduced-motion`
- **Route-based code splitting** — project/404 pages are lazy-loaded
- **SEO**: meta tags, Open Graph, Twitter cards, Person JSON-LD schema, `sitemap.xml`, `robots.txt`
- **Accessibility**: semantic HTML, visible focus states, keyboard-navigable nav/command palette/forms, `aria-label`s throughout

---

## Deployment

### Vercel
Push to a GitHub repo and import it at [vercel.com/new](https://vercel.com/new) — `vercel.json` is already configured (build command, output directory, SPA rewrites). No extra setup needed.

### Netlify
Same idea — connect the repo at [app.netlify.com](https://app.netlify.com), or run `netlify deploy`. `netlify.toml` already has the build command, publish directory, and SPA redirect configured.

### GitHub Pages
1. In `vite.config.ts`, set `base: '/your-repo-name/'` (skip this if deploying to a `username.github.io` user/org page or a custom domain).
2. Push to `main` — the included workflow at `.github/workflows/deploy-gh-pages.yml` builds and deploys automatically via GitHub Actions.
3. In your repo settings, set **Pages → Source** to "GitHub Actions".

GitHub Pages can't do server-side rewrites, so this project ships a small `public/404.html` fallback that redirects deep links (e.g. `/projects/deepfake-detector`) back through `index.html` so React Router can pick them up — this is already wired up in `src/main.tsx`.

---

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router · React Hook Form · React Helmet Async · EmailJS · Lucide React

---

## License

This is your personal portfolio — customize freely. No license restrictions on your own content; third-party packages retain their own licenses.
