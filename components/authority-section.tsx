"use client"

import { useEffect, useRef, useState } from "react"

const differentiators = [
  {
    number: "01",
    title: "Pensamos el proceso antes de la pantalla.",
    body: "Antes de diseñar una sola interfaz, mapeamos tu flujo operacional completo. El software resulta en un sistema que las personas adoptan porque tiene sentido, no porque no tienen otra opción.",
  },
  {
    number: "02",
    title: "Entregamos. No solo prometemos.",
    body: "Alcance claro desde el día uno. Sin scope creep sorpresa, sin fechas que se mueven sin aviso, sin funciones a medias. Si acordamos algo, lo entregamos o te decimos antes por qué no.",
  },
  {
    number: "03",
    title: "Interlocutor único. Sin burocracia.",
    body: "Hablas directamente con quien construye el sistema. Sin capas de project managers que filtran la información. Eso significa decisiones más rápidas, menos malentendidos y un producto más cercano a lo que necesitas.",
  },
]

export function AuthoritySection() {
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
    <section id="about" ref={ref} className="section-shell py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

          {/* Left — Positioning */}
          <div
            className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <span className="section-eyebrow">Por qué JestSolution</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
              La diferencia entre un vendor de código y un partner de negocio.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Hay muchas opciones para construir software. Lo que separa un proyecto exitoso de uno que se abandona a medias no es la tecnología — es la claridad del proceso y la honestidad en la ejecución.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-primary/20 bg-primary/5 p-7">
              <p className="text-sm font-medium text-foreground">Nuestro enfoque</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Estudio especializado en construir sistemas digitales para empresas en crecimiento. Trabajamos con mentalidad de producto: cada decisión de diseño, datos y automatización está alineada con el proceso real del negocio.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">Disponibles para proyectos remotos en todo el mundo.</p>
            </div>
          </div>

          {/* Right — Differentiators */}
          <div
            className={`space-y-4 transition-all duration-700 delay-150 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            {differentiators.map((d, i) => (
              <div
                key={d.number}
                className="rounded-[1.75rem] border border-border/70 bg-card/70 p-7 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 text-sm font-semibold text-primary/60">{d.number}</span>
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-foreground">{d.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
