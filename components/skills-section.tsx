import { Monitor, Server, Cloud, Zap, Box } from "lucide-react"

const skillCategories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design"]
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"]
  },
  {
    icon: Cloud,
    title: "DevOps",
    skills: ["Docker", "Vercel", "AWS", "CI/CD", "Server Management"]
  },
  {
    icon: Zap,
    title: "Automations",
    skills: ["Workflow Automation", "API Integrations", "Scripts", "Data Pipelines"]
  },
  {
    icon: Box,
    title: "Product Development",
    skills: ["SaaS Architecture", "MVP Development", "System Design", "Scalability"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Capabilities</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
