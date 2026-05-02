"use client"

import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const proofPoints = [
  "Productos SaaS con flujos de trabajo estructurados",
  "Sistemas de negocio construidos para ventas, pedidos y ejecución",
  "Automatización que elimina cuellos de botella manuales",
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.20),_transparent_42%),radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.12),_transparent_22%),linear-gradient(180deg,transparent,rgba(17,24,39,0.4))]" />
      <div className="absolute left-1/2 top-36 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] hero-orb" />
      <div className="absolute left-[20%] top-[18rem] h-48 w-48 rounded-full bg-accent/10 blur-[110px] hero-orb-delayed" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:min-h-[calc(100vh-7rem)] lg:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className={`inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-2 text-xs text-muted-foreground shadow-[0_10px_40px_-25px_rgba(99,102,241,0.9)] transition-all duration-700 sm:text-sm ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(34,197,94,0.8)]" />
            JestSolution — Desarrollo de software SaaS, automatización y plataformas para negocios.
          </div>

          <h1 className={`mt-8 max-w-4xl text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.05em] text-foreground transition-all duration-700 delay-100 sm:text-5xl md:text-6xl lg:text-7xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            Construimos software a medida que <span className="title-glow">convierte procesos desordenados en sistemas listos para generar ingresos.</span>
          </h1>

          <p className={`mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-200 sm:text-lg ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <span className="font-medium text-foreground">JestSolution</span> es un estudio de desarrollo de software especializado en SaaS, bots de ventas para WhatsApp, automatización de procesos y plataformas web para negocios en Latinoamérica. Nos enfocamos en entregar sistemas que crean valor medible desde el primer día.
          </p>

          <div className={`mt-8 flex flex-col gap-3 sm:flex-row transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Button
              size="lg"
              className="btn-glow h-12 w-full rounded-full px-7 text-sm font-semibold sm:w-auto"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Productos
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-border/80 bg-card/65 px-7 text-sm font-semibold shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] hover:border-primary/40 hover:bg-card sm:w-auto"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contáctanos
              <PlayCircle className="h-4 w-4" />
            </Button>
          </div>

          <div className={`mt-12 grid gap-3 sm:grid-cols-3 transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            {proofPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/65 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>

        </div>

        <div className={`transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(17,24,39,0.95),rgba(11,15,20,0.92))] p-6 shadow-[0_25px_90px_-40px_rgba(99,102,241,0.55)] light:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(243,244,246,0.92))]">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/55 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Sistema Destacado</p>
                <h2 className="mt-1 text-xl font-semibold text-foreground">Ordento</h2>
              </div>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">En producción</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-border/60 bg-card/75 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Valor Principal</p>
                <p className="mt-3 text-lg font-medium text-foreground">Convierte conversaciones de pedidos desestructuradas en un flujo de ventas ordenado.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-card/75 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Qué resuelve</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Los equipos que venden por chat frecuentemente pierden contexto, duplican pedidos y retrasan la entrega.</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/75 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Por qué importa</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Un mejor control de las operaciones de ventas significa respuestas más rápidas, menos errores y mayor visibilidad.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">Nuestro enfoque</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Construimos productos alrededor del flujo del negocio primero, luego diseñamos la interfaz, los datos y la automatización en función de esa lógica.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
