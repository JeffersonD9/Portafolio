"use client"

import Link from "next/link"
import { ArrowRight, Building2, ExternalLink, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const products = [
  {
    featured: true,
    title: "Ordento",
    subtitle: "Sales & Order Management SaaS",
    badge: "Featured Product",
    problem:
      "Growing businesses often run sales through WhatsApp and scattered chats, which creates missed orders, manual follow-up, and zero operational visibility.",
    solution:
      "Ordento turns conversations into a structured workflow with customer tracking, order states, follow-up visibility, and a cleaner sales process.",
    value:
      "It helps teams respond faster, organize orders better, and operate like a business with systems instead of scattered conversations.",
    status: "SaaS in development with real-world usage",
    primaryLabel: "Request Demo Access",
    primaryHref: "#contact",
    secondaryLabel: "View Preview",
    secondaryHref: "http://76.13.99.14/login?next=%2F",
    icon: Sparkles,
  },
  {
    featured: false,
    title: "Mercadillo Campesino",
    subtitle: "Digital platform for local commerce",
    badge: "Commerce Platform",
    problem:
      "Local producers and marketplace operators need a better digital channel to showcase products, organize demand, and support community commerce.",
    solution:
      "Mercadillo Campesino provides a web platform that strengthens marketplace operations and gives local commerce a more accessible digital presence.",
    value:
      "The result is more visibility for vendors, stronger customer access, and a platform with clear social and business value.",
    status: "Business impact driven",
    primaryLabel: "Learn More",
    primaryHref: "#contact",
    icon: ShoppingBag,
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.12 },
    )

    const current = sectionRef.current

    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [])

  return (
    <section id="products" ref={sectionRef} className="section-shell relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="section-eyebrow">Products</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Real software products with a clear business case behind them.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We present products around the business problem they solve, the workflow they improve, and the value they create.
            The goal is simple: software that feels commercially real.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {products.map((product, index) => (
            <article
              key={product.title}
              className={`panel-hover overflow-hidden rounded-[2rem] border bg-card/75 transition-all duration-700 ${product.featured ? "border-primary/35 shadow-[0_30px_100px_-50px_rgba(99,102,241,0.65)]" : "border-border/70"} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <product.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">{product.title}</h3>
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{product.badge}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{product.subtitle}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Problem</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Solution</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Business Value</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.value}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="btn-glow rounded-full px-5">
                      <Link href={product.primaryHref}>
                        {product.primaryLabel}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>

                    {product.secondaryHref && (
                      <Button asChild variant="outline" className="rounded-full border-border/80 bg-background/30 px-5 hover:border-primary/40 hover:bg-card">
                        <Link href={product.secondaryHref} target="_blank" rel="noopener noreferrer">
                          {product.secondaryLabel}
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="border-t border-border/70 bg-background/45 p-8 lg:border-l lg:border-t-0">
                  <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-accent" />
                      <p className="text-sm font-medium text-foreground">Positioning</p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.status}</p>
                  </div>

                  <div className="mt-5 rounded-[1.5rem] border border-border/70 bg-card/80 p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Commercial framing</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      We present this as a real product solving an operational issue, not as a repository or technology showcase.
                    </p>
                  </div>

                  <div className="mt-5 rounded-[1.5rem] border border-border/70 bg-card/80 p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Important</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Preview access is linked directly, but login credentials are intentionally not shown anywhere on the site.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
