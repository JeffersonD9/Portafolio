"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Github, Instagram, Linkedin, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

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

const proofPoints = [
  "SaaS products with real operational workflows",
  "Business systems built around sales, orders, and execution",
  "Automation that removes manual bottlenecks",
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.20),_transparent_42%),radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.12),_transparent_22%),linear-gradient(180deg,transparent,rgba(17,24,39,0.4))]" />
      <div className="absolute left-1/2 top-36 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] hero-orb" />
      <div className="absolute left-[20%] top-[18rem] h-48 w-48 rounded-full bg-accent/10 blur-[110px] hero-orb-delayed" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-[0_10px_40px_-25px_rgba(99,102,241,0.9)] transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(34,197,94,0.8)]" />
            Product-minded software studio for companies that need working systems.
          </div>

          <h1 className={`mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-foreground transition-all duration-700 delay-100 sm:text-6xl lg:text-7xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            We build software that <span className="title-glow">turns messy operations into revenue-ready systems.</span>
          </h1>

          <p className={`mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 sm:text-xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <span className="font-medium text-foreground">Jest Tech</span> helps businesses launch SaaS products, internal platforms,
            CRMs, and automations that solve real operational problems. This is not a personal portfolio. It is a studio focused on
            shipping systems that already create measurable value.
          </p>

          <div className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Button asChild size="lg" className="btn-glow h-12 rounded-full px-7 text-sm font-semibold">
              <Link href="#products">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-border/80 bg-card/65 px-7 text-sm font-semibold shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] hover:border-primary/40 hover:bg-card">
              <Link href="http://76.13.99.14/login?next=%2F" target="_blank" rel="noopener noreferrer">
                View Ordento Preview
                <PlayCircle className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className={`mt-12 grid gap-3 sm:grid-cols-3 transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            {proofPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/65 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>

          <div className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary">
                <social.icon className="h-4 w-4" />
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(17,24,39,0.95),rgba(11,15,20,0.92))] p-6 shadow-[0_25px_90px_-40px_rgba(99,102,241,0.55)] light:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(243,244,246,0.92))]">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/55 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Featured System</p>
                <h2 className="mt-1 text-xl font-semibold text-foreground">Ordento</h2>
              </div>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Real-world usage</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-border/60 bg-card/75 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Core Value</p>
                <p className="mt-3 text-lg font-medium text-foreground">Converts unstructured order conversations into a clean sales workflow.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-card/75 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">What it solves</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Teams using chat to sell often lose context, duplicate orders, and slow down fulfillment.</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/75 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Why it matters</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Better control over sales operations means faster response times, fewer mistakes, and clearer visibility.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">Studio approach</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">We build products around the business workflow first, then shape the interface, data, and automation around that reality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
