"use client"

import { ArrowRight, GitMerge, Globe, Layers3, Rocket } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Layers3,
    eyebrow: "Sistemas & Plataformas",
    title: "Software a medida para tu operación",
    description:
      "CRMs, dashboards operacionales, portales de gestión, ERPs ligeros y sistemas administrativos construidos exactamente alrededor de cómo trabaja tu negocio.",
    trigger: "Para cuando tu equipo depende de hojas de cálculo, hilos de chat o herramientas desconectadas que frenan la ejecución.",
    useCases: ["CRM y gestión de clientes", "Dashboards operacionales", "Portales internos y ERPs", "Sistemas de gestión de pedidos"],
  },
  {
    icon: GitMerge,
    eyebrow: "Automatización & APIs",
    title: "Elimina el trabajo manual que no escala",
    description:
      "Flujos automáticos, integraciones entre sistemas, bots de atención, APIs y conectores que hacen que tu stack tecnológico funcione como uno solo.",
    trigger: "Para cuando tu equipo gasta horas en tareas repetitivas o en copiar datos entre herramientas que no se comunican.",
    useCases: ["Automatización de procesos", "Integración de sistemas", "Bots y flujos de notificación", "APIs y webhooks"],
  },
  {
    icon: Globe,
    eyebrow: "Web & Ecommerce",
    title: "Presencia digital que convierte",
    description:
      "Landing pages de alto rendimiento, tiendas online, marketplaces, portales de clientes y plataformas de comercio diseñadas para generar resultados medibles.",
    trigger: "Para cuando necesitas una plataforma web que explique tu oferta con claridad, capture demanda y soporte el crecimiento del negocio.",
    useCases: ["Landing pages de conversión", "Tiendas y ecommerce", "Plataformas de comercio", "Portales de clientes"],
  },
  {
    icon: Rocket,
    eyebrow: "MVPs & Productos SaaS",
    title: "De la idea al producto en producción",
    description:
      "Arquitectura, diseño y desarrollo de productos digitales desde cero. Llevamos tu idea a un MVP funcional, comercialmente creíble y listo para iterar.",
    trigger: "Para cuando tienes una idea de producto y necesitas convertirla en software real sin quemar meses en planificación infinita.",
    useCases: ["MVPs funcionales en 4-8 semanas", "Productos SaaS completos", "Plataformas de suscripción", "Software de nicho"],
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.08 },
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  const scrollToContact = (prefill?: string) => {
    if (prefill) sessionStorage.setItem("contact_prefill", prefill)
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" ref={sectionRef} className="section-shell py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`max-w-3xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="section-eyebrow">Lo que construimos</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Software que resuelve problemas de negocio reales.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            No vendemos tecnología. Construimos sistemas que hacen que tu operación funcione mejor — desde el proceso interno hasta la plataforma que ven tus clientes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`panel-hover group flex flex-col rounded-[1.75rem] border border-border/70 bg-card/75 p-7 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{service.eyebrow}</p>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.02em] text-foreground">{service.title}</h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

              <div className="mt-5 rounded-2xl border border-border/60 bg-background/40 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Cuándo tiene sentido</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.trigger}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.useCases.map((uc) => (
                  <span
                    key={uc}
                    className="rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {uc}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex-1 flex items-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full px-4 text-primary hover:bg-primary/8 hover:text-primary"
                  onClick={() => scrollToContact(`Hola, me interesa ${service.eyebrow}. Aquí mi caso de uso:`)}
                >
                  Hablar sobre mi proyecto
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
