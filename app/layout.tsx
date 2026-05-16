import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { SchemaOrg } from '@/components/schema-org'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jestsolution.dev'),
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  title: {
    default: 'JestSolution — Desarrollo de Software a Medida para Empresas',
    template: '%s | JestSolution',
  },
  description:
    'Construimos sistemas digitales, CRMs, plataformas web y automatización para empresas en crecimiento. Desarrollo de software a medida, remoto · Latinoamérica y global.',
  keywords: [
    'desarrollo de software a medida',
    'empresa de desarrollo de software colombia',
    'software a medida para empresas',
    'CRM a medida',
    'automatización de procesos empresariales',
    'desarrollo de plataformas web colombia',
    'software empresarial colombia',
    'sistema de gestión a medida',
    'desarrollo full stack colombia',
    'mvp desarrollo software startup',
    'JestSolution',
    'partner tecnológico latinoamérica',
  ],
  authors: [{ name: 'JestSolution' }],
  creator: 'JestSolution',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JestSolution — Desarrollo de Software a Medida para Empresas',
    description:
      'Construimos el software que escala tu operación. Sistemas internos, CRMs, automatización y plataformas web diseñados alrededor de tu proceso de negocio.',
    url: 'https://www.jestsolution.dev',
    siteName: 'JestSolution',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JestSolution — Desarrollo de Software a Medida',
    description:
      'Construimos el software que escala tu operación. Sistemas, CRMs, automatización y plataformas web para empresas en crecimiento.',
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
    <html lang="es-CO" suppressHydrationWarning className={inter.variable}>
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
