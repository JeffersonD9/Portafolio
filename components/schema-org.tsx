export function SchemaOrg() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.jestsolution.dev/#organization',
    name: 'JestSolution',
    url: 'https://www.jestsolution.dev',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.jestsolution.dev/icon.svg',
    },
    description:
      'Estudio de software especializado en desarrollo SaaS, automatización de procesos, bots de WhatsApp y plataformas web para negocios en Latinoamérica.',
    foundingLocation: {
      '@type': 'Place',
      name: 'Bucaramanga, Santander, Colombia',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bucaramanga',
      addressRegion: 'Santander',
      addressCountry: 'CO',
    },
    areaServed: ['CO', 'LATAM'],
    sameAs: [
      'https://github.com/JeffersonD9',
      'https://www.linkedin.com/in/jefferson-steven-mu%C3%B1oz-delgado-a096b1231',
      'https://www.instagram.com/jeff_mdelgado',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+57-324-522-0410',
        contactType: 'customer service',
        availableLanguage: 'Spanish',
        areaServed: 'CO',
      },
      {
        '@type': 'ContactPoint',
        email: 'jestdetechsolutions@gmail.com',
        contactType: 'sales',
        availableLanguage: 'Spanish',
      },
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.jestsolution.dev/#website',
    name: 'JestSolution',
    url: 'https://www.jestsolution.dev',
    inLanguage: 'es-CO',
    publisher: {
      '@id': 'https://www.jestsolution.dev/#organization',
    },
  }

  const ordento = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Ordento',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://www.jestsolution.dev',
    description:
      'Plataforma SaaS de gestión de pedidos vía WhatsApp para restaurantes y negocios de alimentos. Automatiza pedidos, pagos y notificaciones.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'COP',
    },
    creator: {
      '@id': 'https://www.jestsolution.dev/#organization',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ordento) }}
      />
    </>
  )
}
