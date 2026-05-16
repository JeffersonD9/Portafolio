"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Servicios" },
  { href: "#projects", label: "Proyectos" },
  { href: "#process", label: "Proceso" },
  { href: "#contact", label: "Contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme !== "light" : true

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "")
    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    const offset = 96
    const sectionTop = section.getBoundingClientRect().top + window.scrollY - offset

    window.history.replaceState(null, "", href)
    window.scrollTo({ top: sectionTop, behavior: "smooth" })
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.history.replaceState(null, "", "/")
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={(event) => {
            event.preventDefault()
            scrollToTop()
          }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10 text-sm font-semibold text-primary shadow-[0_0_30px_rgba(99,102,241,0.16)] transition-transform duration-300 group-hover:scale-105">
            JS
          </span>
          <div className="leading-none">
            <span className="block text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-[1.45rem]">
              Jest<span className="text-primary">Solution</span>
            </span>
            <span className="hidden text-[0.7rem] uppercase tracking-[0.26em] text-muted-foreground sm:block">
              Software Studio
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(link.href)
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]"
            aria-label="Cambiar tema"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Button
            className="btn-glow rounded-full px-5"
            onClick={() => scrollToSection("#contact")}
          >
            Hablemos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-muted-foreground transition-all duration-300"
            aria-label="Cambiar tema"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-6 mb-4 rounded-3xl border border-border/70 bg-card/95 p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.65)] md:hidden animate-fade-in">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(link.href)
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button
            className="mt-5 w-full rounded-full btn-glow"
            onClick={() => scrollToSection("#contact")}
          >
            Hablemos
          </Button>
        </div>
      )}
    </header>
  )
}
