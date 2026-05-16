"use client"

import { useEffect, useRef, useState } from "react"

const techStack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Vercel", "AWS", "Docker", "GitHub Actions", "Linux VPS"],
  },
  {
    category: "Integraciones",
    items: ["Stripe", "n8n", "Twilio", "WhatsApp API", "Webhooks"],
  },
]

export function TechSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 },
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <section ref={ref} className="section-shell py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`max-w-2xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="section-eyebrow">Stack tecnológico</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Tecnología moderna. Mantenible a largo plazo.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Construimos con las mismas herramientas que usan las empresas de software más exigentes del mundo. Sin frameworks obscuros ni deuda técnica escondida.
          </p>
        </div>

        <div
          className={`mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-[1.5rem] border border-border/70 bg-card/70 p-5"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{group.category}</p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          className={`mt-8 text-xs text-muted-foreground transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          El stack se adapta al proyecto. Siempre elegimos la herramienta correcta para el problema, no la más de moda.
        </p>
      </div>
    </section>
  )
}
