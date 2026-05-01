import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | JestSolution",
  description: "Privacy policy for JestSolution software services and WhatsApp automation bots.",
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to home
      </Link>

      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-foreground">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: May 1, 2026</p>

      <div className="prose prose-invert mt-10 max-w-none space-y-8 text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Who We Are</h2>
          <p className="mt-3 leading-relaxed">
            JestSolution is a software solutions studio that builds WhatsApp automation bots, SaaS products, CRM systems,
            and business software. We are operated by Jefferson Steven Muñoz Delgado, based in Bucaramanga, Colombia.
            You can contact us at{" "}
            <a href="mailto:jestdetechsolutions@gmail.com" className="text-primary underline underline-offset-4">
              jestdetechsolutions@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
          <p className="mt-3 leading-relaxed">
            When you use our contact form or interact with our WhatsApp bots, we may collect:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Your name and email address</li>
            <li>Your WhatsApp phone number</li>
            <li>Your company name and message content</li>
            <li>Messages and interactions sent through WhatsApp bots operated by our clients</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
          <p className="mt-3 leading-relaxed">We use the information collected to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Respond to your inquiries and provide the services you requested</li>
            <li>Operate and improve our WhatsApp automation services for our clients</li>
            <li>Process orders and send order-related notifications through WhatsApp bots</li>
            <li>Send service-related communications</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            We do not sell, rent, or share your personal data with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">4. WhatsApp and Meta Platform</h2>
          <p className="mt-3 leading-relaxed">
            Our WhatsApp bots are built on the Meta Cloud API (WhatsApp Business Platform). When you interact with a
            WhatsApp bot powered by JestSolution, your messages are transmitted through Meta&apos;s infrastructure.
            Meta&apos;s own privacy policy applies to those interactions. We access only the message content necessary to
            operate the bot workflow and do not store message history beyond what is required for operational purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Data Storage and Security</h2>
          <p className="mt-3 leading-relaxed">
            Contact form submissions are delivered via email and are not stored in a public database. Conversation data
            from WhatsApp bots is stored securely on our servers and is accessible only to the business operator
            (our client) and JestSolution for support purposes. We apply standard security measures including encrypted
            connections (HTTPS) and access controls.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Data Retention</h2>
          <p className="mt-3 leading-relaxed">
            We retain contact and conversation data only as long as necessary to provide the service. You may request
            deletion of your data at any time by contacting us at{" "}
            <a href="mailto:jestdetechsolutions@gmail.com" className="text-primary underline underline-offset-4">
              jestdetechsolutions@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">7. Your Rights</h2>
          <p className="mt-3 leading-relaxed">You have the right to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for communications at any time</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:jestdetechsolutions@gmail.com" className="text-primary underline underline-offset-4">
              jestdetechsolutions@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">8. Cookies</h2>
          <p className="mt-3 leading-relaxed">
            This website uses no advertising or tracking cookies. We use Vercel Analytics for anonymous, aggregate
            traffic analysis. No personally identifiable information is collected through analytics.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">9. Changes to This Policy</h2>
          <p className="mt-3 leading-relaxed">
            We may update this privacy policy from time to time. The date at the top of this page reflects the most
            recent revision. Continued use of our services after any changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">10. Contact</h2>
          <p className="mt-3 leading-relaxed">
            For any questions about this privacy policy or how we handle your data, contact us at:
          </p>
          <ul className="mt-3 list-none space-y-1 pl-0">
            <li>
              <span className="text-foreground">Email:</span>{" "}
              <a href="mailto:jestdetechsolutions@gmail.com" className="text-primary underline underline-offset-4">
                jestdetechsolutions@gmail.com
              </a>
            </li>
            <li>
              <span className="text-foreground">Website:</span>{" "}
              <a href="https://jestsolution.dev" className="text-primary underline underline-offset-4">
                jestsolution.dev
              </a>
            </li>
            <li>
              <span className="text-foreground">Location:</span> Bucaramanga, Santander, Colombia
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
