"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const faqs = [
  {
    question: "¿Cuánto cuesta un proyecto?",
    answer:
      "El costo depende del alcance, complejidad y tecnología involucrada. Los proyectos van desde sistemas de gestión simples hasta plataformas completas con múltiples módulos. Después de una llamada de diagnóstico gratuita, enviamos una propuesta con precio claro y desglosado — sin rangos vagos ni sorpresas al final.",
  },
  {
    question: "¿Cuánto tarda en estar listo?",
    answer:
      "Un MVP funcional generalmente toma entre 4 y 8 semanas. Sistemas más complejos entre 2 y 5 meses. Definimos un timeline realista desde el inicio y lo mantenemos. Si algo cambia, lo comunicamos antes, no después.",
  },
  {
    question: "¿Con qué tipos de empresas trabajan?",
    answer:
      "Trabajamos con startups que necesitan su primer sistema y con empresas medianas que quieren reemplazar procesos manuales por software escalable. El factor común es que el cliente quiere software que resuelva un problema de negocio real, no tecnología por el gusto de tenerla.",
  },
  {
    question: "¿Qué pasa después del lanzamiento?",
    answer:
      "Ofrecemos soporte post-lanzamiento, mantenimiento y mejoras iterativas. El software que construimos está documentado y es mantenible — si en algún momento tu equipo quiere hacerse cargo del desarrollo, lo entregamos en condiciones de hacerlo.",
  },
  {
    question: "¿Trabajan de forma remota?",
    answer:
      "Sí, 100% remoto. Hemos trabajado con clientes en Colombia, otros países de LATAM y fuera de la región. El proceso está diseñado para funcionar bien en cualquier zona horaria con comunicación asíncrona clara y demos regulares.",
  },
  {
    question: "¿Qué pasa si el proyecto cambia de alcance?",
    answer:
      "El alcance se define con precisión antes de comenzar. Si durante el proyecto aparecen nuevos requerimientos, los evaluamos, proponemos el ajuste correspondiente en tiempo y costo, y esperamos tu aprobación antes de ejecutar. Sin cambios unilaterales ni facturas sorpresa.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-foreground sm:text-base">{question}</span>
        <ChevronDown
          className={`mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
      </div>
    </div>
  )
}

export function FAQSection() {
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
    <section ref={ref} className="section-shell py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

          <div
            className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <span className="section-eyebrow">Preguntas frecuentes</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
              Lo que nos preguntan antes de empezar.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Si tienes alguna otra pregunta, escríbenos directamente. Preferimos una conversación honesta a un proceso de ventas largo.
            </p>
          </div>

          <div
            className={`rounded-[1.75rem] border border-border/70 bg-card/70 px-7 py-2 transition-all duration-700 delay-150 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
