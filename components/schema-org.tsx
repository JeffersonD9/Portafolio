export function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JestSolution',
    url: 'https://www.jestsolution.dev',
    description:
      'Estudio de software especializado en desarrollo SaaS, automatización de procesos, bots de WhatsApp y plataformas web para negocios en Latinoamérica.',
    foundingLocation: {
      '@type': 'Place',
      name: 'Colombia',
    },
    areaServed: 'Latinoamérica',
    serviceType: [
      'Desarrollo de Software SaaS',
      'Automatización de Procesos',
      'Bots de WhatsApp',
      'Plataformas Web',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'jestdetechsolutions@gmail.com',
      contactType: 'sales',
      availableLanguage: 'Spanish',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
