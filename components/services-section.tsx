"use client"

import { Code2, Database, Globe, Layers3, Workflow } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    problem: "When your team depends on spreadsheets, chat threads, or disconnected tools, execution becomes slow and error-prone.",
    result: "We design and build software around your exact workflow so the operation becomes faster, clearer, and easier to manage.",
  },
  {
    icon: Layers3,
    title: "SaaS Product Development",
    problem: "Product ideas often stall because turning them into a credible SaaS platform requires architecture, UX, and business logic working together.",
    result: "We help shape and build SaaS products that are launch-ready, commercially credible, and built around real customer use cases.",
  },
  {
    icon: Database,
    title: "CRM & Business Systems",
    problem: "Without a structured customer system, leads, follow-ups, and order context get lost between people and channels.",
    result: "We create CRM and internal business systems that centralize data, improve follow-up, and give teams better operational visibility.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    problem: "Manual repetitive work slows down delivery, increases mistakes, and keeps teams busy with low-value tasks.",
    result: "We automate key workflows so your business saves time, reduces human error, and scales without adding unnecessary friction.",
  },
  {
    icon: Globe,
    title: "Landing Pages & Web Platforms",
    problem: "A weak digital presence makes it harder to explain your offer, capture demand, and look like a serious company.",
    result: "We build landing pages and web platforms that communicate value clearly and support lead generation, commerce, or product adoption.",
  },
]

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="section-shell py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="section-eyebrow">Services</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Software services framed around business outcomes.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Each service is designed to answer the real question companies ask: what business problem does this solve, and what changes once it is working?
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`panel-hover rounded-[1.75rem] border border-border/70 bg-card/75 p-7 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-foreground">{service.title}</h3>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">Business problem</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.problem}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-primary">What this solves</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/88">{service.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
