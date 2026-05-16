import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MetricsSection } from "@/components/metrics-section"
import { ProblemSection } from "@/components/problem-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechSection } from "@/components/tech-section"
import { AuthoritySection } from "@/components/authority-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TechSection />
      <AuthoritySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
