import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  title: 'JestSolution | Software Solutions Studio — WhatsApp Bots, SaaS & Automation',
  description:
    'JestSolution is a software solutions studio specializing in WhatsApp sales bots, SaaS products, CRM systems, and business automation. We build real software that solves real operational problems.',
  keywords: [
    'JestSolution',
    'Jest Solution',
    'WhatsApp Bot',
    'WhatsApp Sales Bot',
    'SaaS Development',
    'Custom Software Development',
    'CRM Systems',
    'Process Automation',
    'Business Automation',
    'Software Solutions Studio',
    'Colombia',
    'Jefferson Muñoz',
    'Order Management Software',
  ],
  authors: [{ name: 'JestSolution' }],
  creator: 'JestSolution',
  openGraph: {
    title: 'JestSolution | Software Solutions Studio',
    description: 'We build real software that solves real operational problems — WhatsApp bots, SaaS products, CRM systems, and business automation.',
    type: 'website',
    url: 'https://jestsolution.dev',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JestSolution | Software Solutions Studio',
    description: 'We build real software that solves real operational problems — WhatsApp bots, SaaS products, CRM systems, and business automation.',
    creator: '@jeff_mdelgado',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JestSolution',
  url: 'https://jestsolution.dev',
  description: 'Software solutions studio specializing in WhatsApp sales bots, SaaS products, CRM systems, and business automation.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'jestdetechsolutions@gmail.com',
    contactType: 'customer service',
  },
  founder: {
    '@type': 'Person',
    name: 'Jefferson Steven Muñoz Delgado',
  },
  sameAs: [
    'https://github.com/JeffersonD9',
    'https://www.linkedin.com/in/jefferson-steven-mu%C3%B1oz-delgado-a096b1231',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
