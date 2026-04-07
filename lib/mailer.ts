import nodemailer from "nodemailer"

// ---------------------------------------------------------------------------
// Transport
// Uses Gmail SMTP with an App Password (not your account password).
// To generate an App Password: myaccount.google.com > Security > App Passwords
// ---------------------------------------------------------------------------

// nodemailer v8 dropped built-in service presets — Gmail SMTP configured explicitly.
// port 587 + STARTTLS is faster than 465 (direct TLS) for Gmail.
// pool:true reuses the TCP connection across sends instead of re-handshaking every time.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  pool: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 20_000,
})

export interface ContactPayload {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

// ---------------------------------------------------------------------------
// sendLeadNotification
// Sent to CONTACT_RECIPIENT — notifies you of a new inquiry with all lead data.
// replyTo is set to the visitor's email so you can reply directly.
// ---------------------------------------------------------------------------

export async function sendLeadNotification(payload: ContactPayload): Promise<void> {
  const recipient = process.env.CONTACT_RECIPIENT ?? process.env.GMAIL_USER

  await transporter.sendMail({
    from: `"Jest Tech Portfolio" <${process.env.GMAIL_USER}>`,
    to: recipient,
    replyTo: payload.email,
    subject: `New inquiry from ${payload.name}`,
    text: buildLeadText(payload),
    html: buildLeadHtml(payload),
  })
}

// ---------------------------------------------------------------------------
// sendConfirmationEmail
// Sent to the visitor — acknowledges their submission and sets expectations.
// ---------------------------------------------------------------------------

export async function sendConfirmationEmail(payload: ContactPayload): Promise<void> {
  await transporter.sendMail({
    from: `"Jest Tech" <${process.env.GMAIL_USER}>`,
    to: payload.email,
    subject: "We received your message — Jest Tech",
    text: buildConfirmationText(payload),
    html: buildConfirmationHtml(payload),
  })
}

// ---------------------------------------------------------------------------
// Lead notification templates (sent to you)
// ---------------------------------------------------------------------------

function buildLeadText({ name, email, phone, company, message }: ContactPayload): string {
  return [
    `New inquiry from ${name}`,
    "",
    `Name:    ${name}`,
    `Email:   ${email}`,
    `WhatsApp: ${phone || "Not provided"}`,
    `Company: ${company || "Not provided"}`,
    "",
    "Message:",
    message,
    "",
    `Reply to this email or open WhatsApp: https://wa.me/${phone.replace(/\D/g, "")}`,
  ].join("\n")
}

function buildLeadHtml({ name, email, phone, company, message }: ContactPayload): string {
  const safePhone = phone || ""
  const waLink = safePhone
    ? `https://wa.me/${safePhone.replace(/\D/g, "")}`
    : null

  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: "Segoe UI", Arial, sans-serif; background: #0b0f14; color: #e5e7eb; margin: 0; padding: 0; }
    .wrapper { max-width: 580px; margin: 40px auto; }
    .header { background: #111827; border-radius: 16px 16px 0 0; padding: 28px 32px; border-bottom: 1px solid #223044; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; color: #e5e7eb; }
    .header span { display: inline-block; margin-top: 6px; font-size: 13px; color: #9ca3af; }
    .body { background: #111827; padding: 28px 32px; border-radius: 0 0 16px 16px; }
    .field { margin-bottom: 18px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.16em; color: #9ca3af; margin-bottom: 6px; }
    .value { font-size: 14px; color: #e5e7eb; background: #0b0f14; border: 1px solid #223044; border-radius: 10px; padding: 12px 14px; white-space: pre-wrap; word-break: break-word; }
    .actions { margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap; }
    .btn { display: inline-block; padding: 10px 20px; border-radius: 999px; font-size: 13px; font-weight: 600; text-decoration: none; }
    .btn-email { background: #6366f1; color: #fff; }
    .btn-wa { background: #22c55e; color: #fff; }
    .footer { margin-top: 20px; font-size: 12px; color: #4b5563; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New lead — ${escapeHtml(name)}</h1>
      <span>Received via Jest Tech portfolio · Reply directly to respond</span>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${escapeHtml(name)}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value">${escapeHtml(email)}</div>
      </div>
      <div class="field">
        <div class="label">WhatsApp</div>
        <div class="value">${safePhone ? escapeHtml(safePhone) : "<span style='color:#6b7280'>Not provided</span>"}</div>
      </div>
      <div class="field">
        <div class="label">Company / Project</div>
        <div class="value">${escapeHtml(company || "Not provided")}</div>
      </div>
      <div class="field">
        <div class="label">What problem are they trying to solve?</div>
        <div class="value">${escapeHtml(message)}</div>
      </div>

      <div class="actions">
        <a href="mailto:${escapeHtml(email)}" class="btn btn-email">Reply by email</a>
        ${waLink ? `<a href="${waLink}" class="btn btn-wa">Open WhatsApp</a>` : ""}
      </div>

      <p class="footer">This email was generated automatically. Replying will go directly to ${escapeHtml(name)}.</p>
    </div>
  </div>
</body>
</html>
`
}

// ---------------------------------------------------------------------------
// Confirmation templates (sent to the visitor)
// ---------------------------------------------------------------------------

function buildConfirmationText({ name }: ContactPayload): string {
  return [
    `Hi ${name},`,
    "",
    "We received your message and will get back to you shortly.",
    "",
    "In the meantime, feel free to reach us on WhatsApp: https://wa.me/573245220410",
    "",
    "— Jest Tech",
  ].join("\n")
}

function buildConfirmationHtml({ name }: ContactPayload): string {
  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: "Segoe UI", Arial, sans-serif; background: #0b0f14; color: #e5e7eb; margin: 0; padding: 0; }
    .wrapper { max-width: 580px; margin: 40px auto; }
    .header { background: #111827; border-radius: 16px 16px 0 0; padding: 32px 36px; border-bottom: 1px solid #223044; text-align: center; }
    .icon { font-size: 36px; margin-bottom: 12px; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 600; color: #e5e7eb; }
    .header p { margin: 8px 0 0; font-size: 14px; color: #9ca3af; }
    .body { background: #111827; padding: 32px 36px; border-radius: 0 0 16px 16px; }
    .body p { font-size: 14px; line-height: 1.7; color: #d1d5db; margin: 0 0 16px; }
    .card { background: #0b0f14; border: 1px solid #223044; border-radius: 12px; padding: 18px 20px; margin: 24px 0; }
    .card p { margin: 0; font-size: 13px; color: #9ca3af; }
    .btn { display: inline-block; margin-top: 8px; padding: 10px 22px; border-radius: 999px; background: #22c55e; color: #fff; font-size: 13px; font-weight: 600; text-decoration: none; }
    .footer { margin-top: 28px; font-size: 12px; color: #4b5563; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="icon">✅</div>
      <h1>Message received, ${escapeHtml(name)}.</h1>
      <p>We'll review your inquiry and respond shortly.</p>
    </div>
    <div class="body">
      <p>
        Thanks for reaching out to <strong>Jest Tech</strong>. We've received your message
        and will get back to you with a focused response — no generic replies.
      </p>
      <p>
        If your need is urgent or you'd rather chat directly, you can reach us on WhatsApp right now.
      </p>
      <div class="card">
        <p>Prefer a faster conversation?</p>
        <a href="https://wa.me/573245220410" class="btn">Open WhatsApp</a>
      </div>
      <p style="color: #6b7280; font-size: 13px;">
        You're receiving this because you submitted the contact form at jesttech.com.
      </p>
    </div>
    <div class="footer">Jest Tech · Software Solutions Studio</div>
  </div>
</body>
</html>
`
}

// ---------------------------------------------------------------------------
// Shared utility
// ---------------------------------------------------------------------------

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
