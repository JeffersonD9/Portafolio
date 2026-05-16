"use client"

import { ArrowRight, FileText, Layers, MessageSquare, Rocket } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    duration: "1–2 días",
    description:
      "Entendemos tu proceso antes de diseñar la solución. Una llamada de diagnóstico donde mapeamos el flujo operacional, los cuellos de botella y el resultado concreto que necesitas.",
    detail: "Sin formularios genéricos. Conversación directa con quien va a construir el sistema.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Propuesta y scope",
    duration: "2–3 días",
    description:
      "Propuesta técnica con alcance claro, entregables definidos, stack tecnológico y timeline realista. Sabes exactamente qué recibes y cuándo.",
    detail: "Sin sorpresas al final del proyecto. El precio y el alcance quedan acordados antes de empezar.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Desarrollo por sprints",
    duration: "Según complejidad",
    description:
      "Ciclos iterativos cortos con demos semanales. Ves el progreso en tiempo real y puedes ajustar antes de que sea costoso cambiar.",
    detail: "Comunicación directa y constante. Sabes en qué estamos trabajando cada semana.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento y soporte",
    duration: "Entrega continua",
    description:
      "Deployment en producción, documentación técnica y acompañamiento post-lanzamiento para que el sistema funcione exactamente como fue diseñado.",
    detail: "El proyecto no termina en el deploy. Nos aseguramos de que funcione en el mundo real.",
  },
]

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <section id="process" ref={ref} className="section-shell py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`max-w-3xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="section-eyebrow">Cómo trabajamos</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Sin sorpresas. Sin ambigüedad.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Un proceso claro desde el primer día. Sabes qué esperar, cuándo esperarlo y con quién hablar si algo cambia.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div
          className={`relative mt-14 hidden gap-0 lg:grid lg:grid-cols-4 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {/* Single continuous connector line behind all icons */}
          <div className="absolute left-[3.75rem] right-[3.75rem] top-[1.35rem] h-px bg-gradient-to-r from-primary/50 via-border/50 to-primary/50" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col">
              <div className="px-4">
                <div className="flex items-center gap-3">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-card text-primary shadow-[0_0_0_4px_var(--color-background)]">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-primary">{step.number}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-[-0.02em] text-foreground">{step.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{step.duration}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                <p className="mt-3 text-xs leading-relaxed text-primary/70">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="mt-10 space-y-4 lg:hidden">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`rounded-[1.75rem] border border-border/70 bg-card/70 p-6 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary">{step.number}</span>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                </div>
                <span className="ml-auto text-xs text-muted-foreground">{step.duration}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              <p className="mt-2 text-xs leading-relaxed text-primary/70">{step.detail}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 flex flex-col items-center gap-4 text-center transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <p className="text-muted-foreground text-sm">¿Listo para empezar?</p>
          <Button
            className="btn-glow rounded-full px-7"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Solicitar propuesta
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
