# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (Next.js)
pnpm build      # Production build (TypeScript errors are ignored — see next.config.mjs)
pnpm lint       # ESLint
pnpm start      # Run production build
```

No test suite is configured.

## Architecture

This is a **single-page marketing site** for Jest Tech, a software studio. The entire site renders from `app/page.tsx` as a single scrollable page composed of section components.

**Section flow** (top to bottom):
`Navbar` → `HeroSection` → `AboutSection` → `ProjectsSection` → `ServicesSection` → `ContactSection` → `Footer`

Each section is a standalone component in `components/` (e.g. `hero-section.tsx`, `projects-section.tsx`). Sections marked `"use client"` use `IntersectionObserver` for scroll-triggered fade-in animations via Tailwind opacity/translate transitions.

**Styling system:**
- Tailwind v4 with CSS variables defined in `app/globals.css`
- Dark-first design (`defaultTheme="dark"`, `enableSystem={false}`); light mode supported via `.light` class
- Primary color: indigo (`#6366f1`), accent: green (`#22c55e`)
- Custom utility classes defined in `globals.css`: `section-eyebrow`, `section-shell`, `panel-hover`, `btn-glow`, `title-glow`, `hero-orb`
- `cn()` helper in `lib/utils.ts` combines `clsx` + `tailwind-merge`

**UI components:** shadcn/ui (New York style) in `components/ui/`. Add new components via `pnpm dlx shadcn@latest add <component>`. Icons from `lucide-react`.

**Content is hardcoded** inside each section component (no CMS or data layer). To update copy, product info, or links, edit the relevant section file directly.

**Key data locations:**
- Products/projects: `components/projects-section.tsx` — `products` array
- Services: `components/services-section.tsx`
- Social links: `components/hero-section.tsx` — `socialLinks` array
- Site metadata/SEO: `app/layout.tsx`

**Vercel Analytics** is injected in `app/layout.tsx`, gated to `NODE_ENV === 'production'`.

## Docker

Multi-stage build (deps → builder → runner). The final image uses `output: standalone` from Next.js — only the compiled server bundle is included, no `node_modules`.

```bash
# Build
docker build -t portafolio .

# Run (secrets injected at runtime, never baked into the image)
docker run -p 3000:3000 \
  -e GMAIL_USER=you@gmail.com \
  -e GMAIL_APP_PASSWORD="xxxx xxxx xxxx xxxx" \
  -e CONTACT_RECIPIENT=you@gmail.com \
  portafolio

# Or with an env file
docker run -p 3000:3000 --env-file .env portafolio
```

On the VPS, expose port 3000 and put Nginx or Caddy in front as a reverse proxy.

## Email / Contact form

The contact form at `#contact` POSTs to `POST /api/contact` ([app/api/contact/route.ts](app/api/contact/route.ts)).

The email logic lives in two files:
- [lib/mailer.ts](lib/mailer.ts) — nodemailer transporter + `sendContactEmail()` + HTML template
- [app/api/contact/route.ts](app/api/contact/route.ts) — validates input with Zod, calls the mailer

**To change the recipient email or sender account**, edit only `.env.local` — no code changes needed.

Required environment variables (copy `.env.local.example` → `.env.local`):

```
GMAIL_USER=you@gmail.com          # Gmail account used to send FROM
GMAIL_APP_PASSWORD=xxxx xxxx ...  # 16-char Google App Password (not your login password)
CONTACT_RECIPIENT=you@gmail.com   # Who receives the form submissions (defaults to GMAIL_USER)
```

App Passwords: [myaccount.google.com](https://myaccount.google.com) → Security → 2-Step Verification → App Passwords.
