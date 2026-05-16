"use client"

import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

function scrollToContact(prefill?: string) {
  if (prefill) sessionStorage.setItem("contact_prefill", prefill)
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
}

const projects = [
  {
    icon: Sparkles,
    tag: "Gestión de ventas y pedidos",
    status: "En producción",
    statusColor: "text-green-400 border-green-400/30 bg-green-400/8",
    title: "Ordento",
    reto: "Los equipos que gestionan ventas por chat pierden contexto, duplican pedidos y no tienen visibilidad de su operación. El negocio crece pero la gestión no escala.",
    solucion: "Sistema de gestión de ventas y pedidos con seguimiento de clientes, estados de órdenes, historial y dashboard operacional en tiempo real.",
    resultado: "Operación estructurada, respuestas más rápidas, cero pedidos perdidos y visibilidad completa del flujo de ventas sin agregar más personal.",
    tech: ["Next.js", "PostgreSQL", "Node.js", "TypeScript"],
    cta: "Solicitar demo",
    ctaPrefill: "Hola, me interesa ver una demo de Ordento. Aquí mi caso de uso:",
    featured: true,
  },
  {
    icon: ShoppingBag,
    tag: "Comercio local y plataforma digital",
    status: "Activo",
    statusColor: "text-indigo-400 border-indigo-400/30 bg-indigo-400/8",
    title: "Mercadillo Campesino",
    reto: "Productores locales y operadores de mercados sin canal digital estructurado. La demanda no se puede capturar, los productos no tienen visibilidad y el comercio comunitario queda desorganizado.",
    solucion: "Plataforma web de comercio local con catálogo de productos, gestión de vendedores, sistema de pedidos y presencia digital accesible para el mercado.",
    resultado: "Mayor visibilidad para los vendedores, mejor acceso de clientes y una plataforma con impacto comercial y social medible en la comunidad.",
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    cta: "Solicitar algo similar",
    ctaPrefill: "Hola, me interesa construir algo similar a Mercadillo Campesino. Mi caso de uso:",
    featured: false,
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="section-shell relative py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`max-w-3xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="section-eyebrow">Proyectos</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Software en producción con un caso de negocio claro.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            No repositorios ni demos. Sistemas reales resolviendo problemas reales — construidos con la misma metodología que aplicamos en cada proyecto.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`panel-hover overflow-hidden rounded-[2rem] border bg-card/75 transition-all duration-700 ${project.featured ? "border-primary/35 shadow-[0_30px_100px_-50px_rgba(99,102,241,0.5)]" : "border-border/70"} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
                <div className="p-7 md:p-9">
                  {/* Header */}
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <project.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">{project.title}</h3>
                        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${project.statusColor}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{project.tag}</p>
                    </div>
                  </div>

                  {/* Reto / Solución / Resultado */}
                  <div className="mt-7 grid gap-5 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Reto</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.reto}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Solución</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.solucion}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-primary">Resultado</p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/85">{project.resultado}</p>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <Button
                      className={project.featured ? "btn-glow rounded-full px-6" : "rounded-full border border-border/80 bg-card/65 px-6 hover:border-primary/40 hover:bg-card"}
                      variant={project.featured ? "default" : "outline"}
                      onClick={() => scrollToContact(project.ctaPrefill)}
                    >
                      {project.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Side panel — only on large screens for featured */}
                {project.featured && (
                  <div className="hidden border-l border-border/70 bg-background/35 p-7 lg:flex lg:w-56 lg:flex-col lg:justify-center">
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-border/60 bg-card/80 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tipo</p>
                        <p className="mt-2 text-sm font-medium text-foreground">SaaS propio</p>
                        <p className="mt-1 text-xs text-muted-foreground">Construido y operado por JestSolution</p>
                      </div>
                      <div className="rounded-2xl border border-border/60 bg-card/80 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Metodología</p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          El mismo proceso de discovery, diseño y desarrollo que aplicamos en proyectos de clientes.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
