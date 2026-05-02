"use client"

import { BarChart3, Cog, Rocket, ShieldCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const principles = [
  {
    icon: Rocket,
    title: "Construido para Lanzar",
    description: "Llevamos ideas del concepto a un producto usable rápidamente, con la estructura suficiente para mantener el impulso sin sacrificar calidad.",
  },
  {
    icon: Cog,
    title: "Pensamiento de Producto",
    description: "Cada pantalla, automatización y flujo de datos está diseñado alrededor del proceso concreto que el negocio necesita ejecutar.",
  },
  {
    icon: BarChart3,
    title: "Valor de Negocio Primero",
    description: "Nos enfocamos en sistemas que mejoran ventas, visibilidad, tiempos de respuesta y gestión interna, no en funciones superficiales.",
  },
  {
    icon: ShieldCheck,
    title: "Entrega Confiable",
    description: "Somos un estudio en quien puedes confiar para construir productos que se sienten intencionales, estables y escalables — con atención dedicada, sin la carga de una agencia grande.",
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
    <section id="about" ref={sectionRef} className="section-shell py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <span className="section-eyebrow">Sobre JestSolution</span>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
              Estudio especializado en desarrollo de software a medida para negocios que necesitan sistemas funcionales.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Trabajamos con mentalidad de producto — no solo como ejecutores de código. Nuestro trabajo es convertir la
              fricción de los procesos internos en software que los equipos puedan usar, adoptar y hacer crecer.
            </p>
          </div>

          <div className={`rounded-[2rem] border border-border/70 bg-card/70 p-7 shadow-[0_25px_70px_-45px_rgba(99,102,241,0.55)] transition-all duration-700 delay-150 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Posicionamiento</p>
            <p className="mt-4 text-xl font-medium leading-relaxed text-foreground">
              Estudio especializado en desarrollo de software SaaS, plataformas de negocio, flujos CRM y sistemas de automatización que generan valor medible para negocios en Latinoamérica.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Disponibles para proyectos remotos en todo el mundo.</p>
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
