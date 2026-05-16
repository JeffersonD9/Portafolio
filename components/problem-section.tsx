"use client"

import { AlertTriangle, GitBranch, LayoutGrid } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Procesos manuales que no escalan",
    body: "Tu equipo gasta horas en tareas que un sistema bien diseñado puede ejecutar en segundos. A medida que creces, el problema se multiplica.",
  },
  {
    icon: LayoutGrid,
    title: "Datos dispersos entre herramientas",
    body: "La información vive en emails, hojas de cálculo y chats. Nadie tiene el cuadro completo. Las decisiones se toman a ciegas.",
  },
  {
    icon: GitBranch,
    title: "Herramientas que no se hablan entre sí",
    body: "Pagas por cinco servicios distintos y terminas creando trabajo manual para conectarlos. La integración nunca llega y el caos persiste.",
  },
]

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.12 },
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <section ref={ref} className="section-shell py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`max-w-3xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="section-eyebrow">El problema</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Las empresas en crecimiento llegan al mismo punto de quiebre.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            No es un problema de esfuerzo. Es un problema de sistema. Cuando los procesos se quedan atrás del crecimiento, la fricción se convierte en el techo de tu operación.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <article
              key={point.title}
              className={`rounded-[1.75rem] border border-border/70 bg-card/70 p-7 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/8 text-destructive/70">
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-foreground">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
            </article>
          ))}
        </div>

        <div
          className={`mt-10 rounded-[1.75rem] border border-primary/20 bg-primary/5 p-7 transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <p className="text-base font-medium text-foreground">
            Ahí es donde entramos.{" "}
            <span className="text-muted-foreground font-normal">
              Convertimos la fricción operacional en software que tu equipo puede usar, adoptar y hacer crecer — sin la burocracia de una agencia grande ni la incertidumbre de un freelancer.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
