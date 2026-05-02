"use client"

import { Code2, Database, Globe, Layers3, MessageSquare, Workflow } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Code2,
    title: "Desarrollo de Software a Medida",
    problem: "Cuando tu equipo depende de hojas de cálculo, hilos de chat o herramientas desconectadas, la ejecución se vuelve lenta y propensa a errores.",
    result: "Diseñamos y construimos software alrededor de tu flujo exacto para que la gestión sea más rápida, clara y fácil de escalar.",
  },
  {
    icon: Layers3,
    title: "Desarrollo de Producto SaaS",
    problem: "Las ideas de producto a menudo se estancan porque convertirlas en una plataforma SaaS creíble requiere arquitectura, UX y lógica de negocio trabajando juntas.",
    result: "Damos forma y construimos productos SaaS que están listos para lanzar, son comercialmente creíbles y están construidos alrededor de casos de uso concretos.",
  },
  {
    icon: Database,
    title: "CRM y Sistemas de Negocio",
    problem: "Sin un sistema de clientes estructurado, los leads, seguimientos y el contexto de pedidos se pierden entre personas y canales.",
    result: "Construimos sistemas CRM e internos que centralizan datos, mejoran el seguimiento y dan a los equipos mejor visibilidad del negocio.",
  },
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    problem: "El trabajo manual repetitivo ralentiza la entrega, aumenta los errores y mantiene a los equipos ocupados con tareas de bajo valor.",
    result: "Automatizamos flujos clave para que tu negocio ahorre tiempo, reduzca errores humanos y escale sin agregar fricción innecesaria.",
  },
  {
    icon: Globe,
    title: "Landing Pages y Plataformas Web",
    problem: "Una presencia digital débil dificulta explicar tu oferta, capturar demanda y aparecer como un negocio serio.",
    result: "Construimos landing pages y plataformas web que comunican valor claramente y apoyan la generación de leads, el comercio o la adopción del producto.",
  },
  {
    icon: MessageSquare,
    title: "Bot de Ventas para WhatsApp",
    problem: "Los negocios que gestionan ventas manualmente por WhatsApp pierden pedidos, olvidan seguimientos y no pueden escalar sin agregar personas.",
    result: "Construimos bots de WhatsApp automatizados que manejan el flujo completo de ventas — catálogo, cotizaciones, captura de pedidos y notificaciones — sin intervención humana.",
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
    <section id="services" ref={sectionRef} className="section-shell py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="section-eyebrow">Servicios</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Desarrollo de software SaaS, automatización de procesos y plataformas web para negocios que quieren escalar.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Cada servicio está construido alrededor de la pregunta concreta que hacen los negocios: ¿qué problema resuelve esto y qué cambia una vez que está funcionando?
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
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">Problema del negocio</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.problem}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-primary">Qué resuelve esto</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/88">{service.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
