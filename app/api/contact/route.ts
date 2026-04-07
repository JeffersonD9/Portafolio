import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { sendLeadNotification, sendConfirmationEmail } from "@/lib/mailer"

// ---------------------------------------------------------------------------
// Input schema — update field rules here if the form ever changes
// ---------------------------------------------------------------------------

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(30).optional().default(""),
  company: z.string().max(150).optional().default(""),
  message: z.string().min(1, "Message is required").max(5000),
  website: z.string().optional().default(""), // honeypot
  token: z.string().min(1, "Missing security token"),
})

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("[contact] Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars")
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    )
  }

  // Honeypot — bots fill hidden fields, humans don't
  if (parsed.data.website) {
    return NextResponse.json({ success: true }, { status: 200 })
  }

  // Verify Turnstile token with Cloudflare
  const turnstileRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: parsed.data.token,
      remoteip: req.headers.get("x-forwarded-for") ?? undefined,
    }),
  })
  const turnstileData = await turnstileRes.json() as { success: boolean }
  if (!turnstileData.success) {
    return NextResponse.json({ error: "Security check failed. Please try again." }, { status: 400 })
  }

  try {
    // Send both emails concurrently — lead notification to you, confirmation to the visitor
    await Promise.all([
      sendLeadNotification(parsed.data),
      sendConfirmationEmail(parsed.data),
    ])

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("[contact] Failed to send email:", err)
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    )
  }
}
