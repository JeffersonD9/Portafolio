import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { SchemaOrg } from '@/components/schema-org'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jestsolution.dev'),
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  title: {
    default: 'JestSolution | Desarrollo de Software SaaS y Automatización para Negocios',
    template: '%s | JestSolution',
  },
  description:
    'Estudio de software especializado en SaaS, bots de WhatsApp, automatización de procesos y plataformas web para negocios en Latinoamérica.',
  keywords: [
    'desarrollo de software SaaS',
    'automatización de procesos',
    'bot de WhatsApp para ventas',
    'desarrollo de software a medida',
    'plataformas web para negocios',
    'software para negocios Colombia',
    'JestSolution',
    'CRM a medida',
    'gestión de pedidos',
  ],
  authors: [{ name: 'JestSolution' }],
  creator: 'JestSolution',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JestSolution | Software SaaS y Automatización para Negocios',
    description:
      'Construimos software que convierte procesos desordenados en sistemas listos para generar ingresos. SaaS, automatización y plataformas web.',
    url: 'https://www.jestsolution.dev',
    siteName: 'JestSolution',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JestSolution | Software SaaS y Automatización',
    description:
      'Estudio de software especializado en SaaS, automatización y plataformas web para negocios.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0F14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CO" suppressHydrationWarning>
      <head>
        <SchemaOrg />
        <meta name="facebook-domain-verification" content="wmh8m9980zh2k4p7zmuiulrxbnkmq9" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
