"use client"

import Link from "next/link"
import { ArrowRight, Building2, ExternalLink, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

function scrollToContact(prefillMessage?: string) {
  if (prefillMessage) {
    sessionStorage.setItem("contact_prefill", prefillMessage)
  }
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
}

const products = [
  {
    featured: true,
    title: "Ordento",
    subtitle: "SaaS de Gestión de Ventas y Pedidos",
    badge: "Producto Destacado",
    problem:
      "Los negocios en crecimiento frecuentemente manejan sus ventas por WhatsApp y chats dispersos, lo que genera pedidos perdidos, seguimientos manuales y cero visibilidad operacional.",
    solution:
      "Ordento convierte conversaciones en un flujo estructurado con seguimiento de clientes, estados de pedidos, visibilidad de seguimiento y un proceso de ventas más limpio.",
    value:
      "Ayuda a los equipos a responder más rápido, organizar mejor los pedidos y operar como un negocio con sistemas en lugar de conversaciones dispersas.",
    status: "SaaS en desarrollo con uso en producción",
    primaryLabel: "Solicitar acceso demo",
    prefillMessage: "Hola, quisiera solicitar acceso demo de Ordento. Aquí un poco sobre mi caso de uso:",
    secondaryLabel: undefined,
    secondaryHref: undefined,
    icon: Sparkles,
  },
  {
    featured: false,
    title: "Mercadillo Campesino",
    subtitle: "Plataforma digital para el comercio local",
    badge: "Plataforma de Comercio",
    problem:
      "Los productores locales y operadores de mercados necesitan un mejor canal digital para mostrar productos, organizar la demanda y apoyar el comercio comunitario.",
    solution:
      "Mercadillo Campesino provee una plataforma web que fortalece las operaciones del mercado y da al comercio local una presencia digital más accesible.",
    value:
      "El resultado es más visibilidad para los vendedores, mejor acceso de clientes y una plataforma con valor social y comercial claro.",
    status: "Impacto de negocio comprobado",
    primaryLabel: "Saber más",
    prefillMessage: "",
    secondaryHref: undefined,
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
    <section id="products" ref={sectionRef} className="section-shell relative py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="section-eyebrow">Productos</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Productos de software en producción con un caso de negocio claro detrás de cada uno.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Cada producto está enmarcado alrededor del problema que resuelve, el flujo que mejora y el valor que crea.
            El objetivo es simple: software que genera ingresos desde el primer día.
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
                <div className="p-6 md:p-8 lg:p-10">
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

                  <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Problema</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Solución</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Valor de Negocio</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.value}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button
                      className="btn-glow w-full rounded-full px-5 sm:w-auto"
                      onClick={() => scrollToContact(product.prefillMessage)}
                    >
                      {product.primaryLabel}
                      <ArrowRight className="h-4 w-4" />
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

                <div className="border-t border-border/70 bg-background/45 p-6 md:p-8 lg:border-l lg:border-t-0">
                  <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-accent" />
                      <p className="text-sm font-medium text-foreground">Posicionamiento</p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.status}</p>
                  </div>

                  <div className="mt-5 rounded-[1.5rem] border border-border/70 bg-card/80 p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Marco comercial</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Construido como un producto funcional que resuelve un problema de negocio concreto, no como un repositorio o escaparate tecnológico.
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
