"use client"

import { useEffect, useRef, useState } from "react"

const metrics = [
  {
    value: 10,
    suffix: "+",
    label: "Proyectos entregados",
    description: "en producción real",
  },
  {
    value: 6,
    suffix: " sem",
    label: "Tiempo promedio al MVP",
    description: "de idea a producto funcional",
  },
  {
    value: 100,
    suffix: "%",
    label: "En producción",
    description: "cero proyectos abandonados",
  },
  {
    value: 4,
    suffix: "+",
    label: "Países atendidos",
    description: "remoto · LATAM y global",
  },
]

function useCountUp(target: number, duration = 1400, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])

  return count
}

function MetricCard({ value, suffix, label, description, active }: {
  value: number
  suffix: string
  label: string
  description: string
  active: boolean
}) {
  const count = useCountUp(value, 1200, active)

  return (
    <div className="flex flex-col items-center rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 text-center">
      <p className="text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
        {count}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-3 text-sm font-medium text-foreground">{label}</p>
      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </div>
  )
}

export function MetricsSection() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true)
      },
      { threshold: 0.2 },
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <section ref={ref} className="relative py-12 md:py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
