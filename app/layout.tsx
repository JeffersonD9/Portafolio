import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jefferson Muñoz | Freelance Software Developer — SaaS, CRM & Automation',
  description:
    'Jefferson Muñoz is a freelance software developer specializing in SaaS products, CRM systems, business automation, and custom web platforms. I build real software that solves real operational problems.',
  keywords: [
    'Jefferson Muñoz',
    'Freelance Software Developer',
    'SaaS Development',
    'Custom Software Development',
    'CRM Systems',
    'Process Automation',
    'Landing Pages',
    'Next.js Developer',
    'React Developer',
    'Freelance Developer Colombia',
    'Jest Tech',
    'Business Automation',
    'Order Management Software',
  ],
  authors: [{ name: 'Jefferson Muñoz' }],
  creator: 'Jefferson Muñoz',
  openGraph: {
    title: 'Jefferson Muñoz | Freelance Software Developer',
    description: 'I build real software that solves real operational problems — SaaS products, CRM systems, business automation, and custom platforms.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jefferson Muñoz | Freelance Software Developer',
    description: 'I build real software that solves real operational problems — SaaS products, CRM systems, business automation, and custom platforms.',
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
  '@type': 'Person',
  name: 'Jefferson Steven Muñoz Delgado',
  jobTitle: 'Freelance Software Developer',
  description: 'Freelance software developer specializing in SaaS products, CRM systems, business automation, and custom web platforms.',
  knowsAbout: [
    'SaaS Development',
    'CRM Systems',
    'Process Automation',
    'Custom Software Development',
    'Next.js',
    'React',
    'TypeScript',
  ],
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
