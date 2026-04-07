import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Placeholder testimonials */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-card border border-border border-dashed"
            >
              <Quote className="h-8 w-8 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground/50 italic mb-6 text-sm">
                {"\"Testimonial coming soon. This space is reserved for future client feedback.\""}
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground/50">Client Name</p>
                  <p className="text-xs text-muted-foreground/30">Company</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators placeholder */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by businesses across industries</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-30">
            {["Company A", "Company B", "Company C", "Company D"].map((company) => (
              <div key={company} className="px-6 py-3 rounded bg-secondary text-secondary-foreground text-sm">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
