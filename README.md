# Jest Tech — Portfolio & Studio Site

Marketing site for **Jest Tech**, a software solutions studio. Single-page Next.js app with a server-side contact form that delivers email notifications via Gmail SMTP.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS v4 + CSS variables |
| UI Components | shadcn/ui (New York style) |
| Icons | lucide-react |
| Email | Nodemailer 8 · Gmail SMTP |
| Validation | Zod |
| Package manager | pnpm |
| Deployment | Docker (standalone build) |

---

## Local Development

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your credentials:

```env
GMAIL_USER=you@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
CONTACT_RECIPIENT=you@gmail.com
```

> **GMAIL_APP_PASSWORD** is a Google App Password, not your Gmail login password.
> Generate one at [myaccount.google.com](https://myaccount.google.com) → Security → 2-Step Verification → App Passwords.

### 3. Start the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contact Form

The form at `#contact` collects: name, email, WhatsApp, company, and message.

On submit, `POST /api/contact` fires two emails concurrently:

| Email | Recipient | Purpose |
|---|---|---|
| Lead notification | `CONTACT_RECIPIENT` | Full lead data + reply-by-email and open-WhatsApp buttons |
| Confirmation | Visitor's email | Acknowledges receipt, links to WhatsApp for faster conversation |

**To change the destination email** — edit `CONTACT_RECIPIENT` in `.env.local`. No code changes needed.

### Relevant files

```
app/api/contact/route.ts   — API route: validates input with Zod, calls the mailer
lib/mailer.ts              — Nodemailer transporter, sendLeadNotification(), sendConfirmationEmail(), HTML templates
.env.local.example         — Environment variable template
```

---

## Production Build

```bash
pnpm build
pnpm start
```

---

## Docker

The image uses a **3-stage build** (deps → builder → runner) with `output: standalone`, so the final image contains only the compiled server — no `node_modules`.

### Build the image

```bash
docker build -t portafolio .
```

### Run the container

```bash
docker run -p 3000:3000 --env-file .env portafolio
```

Or pass variables individually:

```bash
docker run -p 3000:3000 \
  -e GMAIL_USER=you@gmail.com \
  -e GMAIL_APP_PASSWORD="xxxx xxxx xxxx xxxx" \
  -e CONTACT_RECIPIENT=you@gmail.com \
  portafolio
```

> Secrets are **never baked into the image** — always injected at runtime.

---

## VPS Deployment

### Recommended setup

```
Internet → Nginx / Caddy (port 80/443, SSL) → Docker container (port 3000)
```

### Steps

1. Build and push the image to a registry (Docker Hub, GHCR, etc.), or copy it directly to the VPS with `docker save` / `docker load`.

2. On the VPS, create a `.env` file with your credentials (same three variables as above).

3. Run the container:

```bash
docker run -d \
  --name portafolio \
  --restart unless-stopped \
  -p 3000:3000 \
  --env-file /path/to/.env \
  portafolio
```

4. Point your reverse proxy to `localhost:3000` and configure SSL.

---

## Updating Content

All copy is hardcoded inside the section components — no CMS layer.

| What to change | File |
|---|---|
| Hero text, social links | `components/hero-section.tsx` |
| Products / projects | `components/projects-section.tsx` → `products` array |
| Services | `components/services-section.tsx` |
| About section | `components/about-section.tsx` |
| SEO metadata | `app/layout.tsx` |
| Email HTML templates | `lib/mailer.ts` → `buildLeadHtml()` / `buildConfirmationHtml()` |
| Theme colors | `app/globals.css` → `:root` CSS variables |

---

## Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add <component-name>
```

Components are installed into `components/ui/`.
