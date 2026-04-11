"use client"

import { BarChart3, Cog, Rocket, ShieldCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const principles = [
  {
    icon: Rocket,
    title: "Built to Launch",
    description: "We move ideas from concept to usable product quickly, with enough structure to keep momentum without sacrificing quality.",
  },
  {
    icon: Cog,
    title: "Operational Thinking",
    description: "Every screen, automation, and data flow is designed around the real process the business needs to execute.",
  },
  {
    icon: BarChart3,
    title: "Business Value First",
    description: "We focus on systems that improve sales, visibility, response times, and operational control instead of vanity features.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Delivery",
    description: "I'm a developer you can trust to build products that feel intentional, stable, and scalable — without the overhead of an agency.",
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
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
    <section id="about" ref={sectionRef} className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <span className="section-eyebrow">About Me</span>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
              I&apos;m a freelance software developer focused on shipping systems that solve real problems.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I work with a product mindset — not just as a code executor. My job is to turn operational friction into software
              that teams can actually use, adopt, and grow with.
            </p>
          </div>

          <div className={`rounded-[2rem] border border-border/70 bg-card/70 p-7 shadow-[0_25px_70px_-45px_rgba(99,102,241,0.55)] transition-all duration-700 delay-150 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Positioning</p>
            <p className="mt-4 text-xl font-medium leading-relaxed text-foreground">
              Freelance developer focused on SaaS products, business platforms, CRM workflows, and automation systems that create real operational value.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Jefferson Steven Muñoz Delgado — available for remote projects worldwide.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className={`panel-hover rounded-[1.75rem] border border-border/70 bg-card/72 p-7 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[0_0_25px_rgba(99,102,241,0.12)]">
                <principle.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


