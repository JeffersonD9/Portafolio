"use client"

import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const proofPoints = [
  "Tu operación corre más rápido desde el primer sprint",
  "Cero dependencia de hojas de cálculo o procesos manuales",
  "Software listo para crecer, sin refactorizar a los 6 meses",
]

const kpis = [
  { label: "Proyectos activos", value: "12", unit: "", delta: "+3 este mes" },
  { label: "Tiempo promedio entrega", value: "5.2", unit: "sem", delta: "MVP a producción" },
  { label: "Retención clientes", value: "96", unit: "%", delta: "continúan con nosotros" },
]

const activityItems = [
  { name: "CRM Empresarial", status: "En producción", textColor: "text-green-400", dotColor: "bg-green-400" },
  { name: "Plataforma E-commerce", status: "En pruebas", textColor: "text-indigo-400", dotColor: "bg-indigo-400" },
  { name: "API de Integraciones", status: "En desarrollo", textColor: "text-amber-400", dotColor: "bg-amber-400" },
  { name: "Dashboard Operacional", status: "Completado", textColor: "text-green-400", dotColor: "bg-green-400" },
]

const chartPoints = [42, 58, 51, 73, 68, 85, 79, 94, 88, 100, 95, 112]

function MiniChart() {
  const max = Math.max(...chartPoints)
  const min = Math.min(...chartPoints)
  const range = max - min || 1
  const h = 52
  const w = 200

  const pts = chartPoints.map((v, i) => {
    const x = (i / (chartPoints.length - 1)) * w
    const y = h - ((v - min) / range) * h
    return `${x},${y}`
  })

  const area = `0,${h} ${pts.join(" ")} ${w},${h}`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(99,102,241)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="rgb(99,102,241)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#chartFill)" />
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke="rgb(99,102,241)"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_42%),radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.08),_transparent_22%),linear-gradient(180deg,transparent,rgba(17,24,39,0.4))]" />
      <div className="absolute left-1/2 top-36 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] hero-orb" />
      <div className="absolute left-[20%] top-[18rem] h-48 w-48 rounded-full bg-accent/10 blur-[110px] hero-orb-delayed" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:min-h-[calc(100vh-7rem)] lg:gap-14 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT — Copy */}
        <div>
          <div
            className={`inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-2 text-xs text-muted-foreground shadow-[0_10px_40px_-25px_rgba(99,102,241,0.9)] transition-all duration-700 sm:text-sm ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent shadow-[0_0_16px_rgba(34,197,94,0.8)]" />
            Estudio de desarrollo de software · Remoto · Latinoamérica
          </div>

          <h1
            className={`mt-8 max-w-2xl text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.05em] text-foreground transition-all duration-700 delay-100 sm:text-5xl md:text-6xl lg:text-7xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Construimos el software que{" "}
            <span className="title-glow">escala tu operación.</span>
          </h1>

          <p
            className={`mt-6 max-w-xl text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-200 sm:text-lg ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Sistemas internos, CRMs, plataformas web y automatización — diseñados alrededor del proceso de tu negocio. Listos para producción desde el primer sprint.
          </p>

          <div
            className={`mt-8 flex flex-col gap-3 sm:flex-row transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            <Button
              size="lg"
              className="btn-glow h-12 w-full rounded-full px-7 text-sm font-semibold sm:w-auto"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar propuesta
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-border/80 bg-card/65 px-7 text-sm font-semibold shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] hover:border-primary/40 hover:bg-card sm:w-auto"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver proyectos
            </Button>
          </div>

          <div
            className={`mt-10 grid gap-3 sm:grid-cols-3 transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            {proofPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/65 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Dashboard Preview */}
        <div
          className={`transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(17,24,39,0.97),rgba(11,15,20,0.94))] p-5 shadow-[0_25px_90px_-40px_rgba(99,102,241,0.55)] light:bg-[linear-gradient(180deg,rgba(248,250,252,0.98),rgba(243,244,246,0.95))]">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Panel de Control · Demo</p>
                <p className="mt-0.5 text-base font-semibold text-foreground">Sistema de Operaciones</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Live
              </span>
            </div>

            {/* KPIs */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-2xl border border-border/60 bg-card/75 p-4">
                  <p className="text-xs text-muted-foreground">{kpi.label}</p>
                  <p className="mt-2 text-xl font-semibold text-foreground">
                    {kpi.value}
                    <span className="text-sm font-normal text-muted-foreground">{kpi.unit}</span>
                  </p>
                  <p className="mt-1 text-[10px] text-muted-foreground">{kpi.delta}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="mt-4 rounded-2xl border border-border/60 bg-card/75 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Proyectos entregados — últimas 12 semanas</p>
                <div className="flex items-center gap-1 text-xs text-accent">
                  <TrendingUp className="h-3 w-3" />
                  +34%
                </div>
              </div>
              <MiniChart />
            </div>

            {/* Activity */}
            <div className="mt-4 rounded-2xl border border-border/60 bg-card/75 p-4">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Proyectos recientes</p>
              <div className="space-y-2.5">
                {activityItems.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full opacity-75 ${item.dotColor}`} />
                      <p className="text-sm text-foreground">{item.name}</p>
                    </div>
                    <span className={`text-xs font-medium ${item.textColor}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
