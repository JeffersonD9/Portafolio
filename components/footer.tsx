import Link from "next/link"
import { Github, Instagram, Linkedin } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/JeffersonD9", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/jefferson-steven-mu%C3%B1oz-delgado-a096b1231?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/jeff_mdelgado?igsh=MWx6NGxhcm40YndhYw%3D%3D&utm_source=qr",
    icon: Instagram,
    label: "Instagram",
  },
]

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
]

export function Footer() {
  return (
    <footer className="section-shell border-t border-border/70 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.7fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10 text-sm font-semibold text-primary">
                JT
              </span>
              <div className="leading-none">
                <span className="block text-xl font-semibold tracking-[-0.03em] text-foreground">
                  Jest <span className="text-primary">Tech</span>
                </span>
                <span className="text-[0.68rem] uppercase tracking-[0.26em] text-muted-foreground">Software Solutions Studio</span>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              I build real systems that help businesses organize operations, launch products, and solve business problems with software that feels commercially real.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">Jefferson Steven Muñoz Delgado</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Navigation</h4>
            <nav className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Social</h4>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border/70 bg-card/75 p-3 text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>{new Date().getFullYear()} JestSolution. All rights reserved.</p>
          <p>Software solutions studio. Real products. Real impact.</p>
        </div>
      </div>
    </footer>
  )
}


