"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { CheckCircle, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState("")
  const [message, setMessage] = useState("")
  const sectionRef = useRef<HTMLElement>(null)
  const turnstileRef = useRef<TurnstileInstance>(null)

  useEffect(() => {
    const prefill = sessionStorage.getItem("contact_prefill")
    if (prefill) {
      setMessage(prefill)
      sessionStorage.removeItem("contact_prefill")
    }
  }, [])

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

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""), // honeypot
      token: turnstileToken,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        if (data.issues) {
          const firstField = Object.values(data.issues as Record<string, string[]>)[0]
          throw new Error(firstField?.[0] ?? data.error ?? "Error de validación.")
        }
        throw new Error(data.error ?? "Algo salió mal. Por favor intenta de nuevo.")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Algo salió mal. Por favor intenta de nuevo.")
      turnstileRef.current?.reset()
      setTurnstileToken("")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="section-shell py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <span className="section-eyebrow">Contacto</span>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
              Construyamos el software a medida que tu negocio necesita para operar sin fricciones.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Si necesitas un producto, plataforma, CRM o flujo de automatización que se sienta funcional y usable, podemos ayudarte a diseñarlo.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-border/70 bg-card/70 p-5">
                <p className="text-sm font-medium text-foreground">En qué podemos ayudarte</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Nuevas ideas de SaaS, sistemas internos de negocio, gestión de pedidos, flujos de ventas, automatización de procesos y plataformas web a medida.
                </p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/70 p-5">
                <p className="text-sm font-medium text-foreground">Qué esperar</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Alcance claro, pensamiento orientado al negocio y un enfoque de solución centrado en el impacto — sin charla técnica genérica.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline" className="rounded-full border-border/80 bg-card/65 px-5 hover:border-accent/40 hover:bg-card">
                <Link href="https://wa.me/573245220410" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          <div className={`rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-[0_30px_90px_-50px_rgba(99,102,241,0.45)] transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            {isSubmitted ? (
              <div role="status" aria-live="polite" className="flex min-h-[420px] flex-col items-center justify-center text-center animate-fade-in">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-foreground">Mensaje recibido</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Gracias por contactarte. Revisaremos tu mensaje y te responderemos con una propuesta que se ajuste al producto o problema de negocio que quieres resolver.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Honeypot — los bots llenan esto, los humanos no */}
                <input
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", opacity: 0, height: 0, width: 0, pointerEvents: "none" }}
                />
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Nombre</FieldLabel>
                    <Input id="name" name="name" placeholder="Tu nombre" required className="h-12 rounded-2xl border-border/80 bg-background/65" />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                    <Input id="email" name="email" type="email" placeholder="tu@empresa.com" required className="h-12 rounded-2xl border-border/80 bg-background/65" />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">Número de WhatsApp <span className="text-muted-foreground font-normal">(opcional)</span></FieldLabel>
                    <Input id="phone" name="phone" type="tel" placeholder="+57 300 000 0000" className="h-12 rounded-2xl border-border/80 bg-background/65" />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="company">Empresa o proyecto</FieldLabel>
                    <Input id="company" name="company" placeholder="Nombre de la empresa o idea de producto" className="h-12 rounded-2xl border-border/80 bg-background/65" />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="message">¿Qué problema intentas resolver?</FieldLabel>
                    <Textarea id="message" name="message" placeholder="Cuéntame sobre el flujo de trabajo, cuello de botella o producto que quieres construir." rows={6} required value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-2xl border-border/80 bg-background/65 resize-none" />
                  </Field>

                  <p aria-live="assertive" role="alert" className={`rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive ${error ? "block" : "hidden"}`}>
                    {error}
                  </p>

                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA"}
                    onSuccess={setTurnstileToken}
                    options={{ theme: "dark", size: "invisible", execution: "render" }}
                  />

                  <Button type="submit" disabled={isLoading || !turnstileToken} className="btn-glow h-12 w-full rounded-full text-sm font-semibold">
                    {isLoading ? "Enviando..." : <>
                      Iniciar la conversación
                      <Send className="h-4 w-4" />
                    </>}
                  </Button>
                </FieldGroup>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
