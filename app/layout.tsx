import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jest Tech | Software Solutions Studio',
  description:
    'Jest Tech builds SaaS products, business systems, CRM workflows, and automation software that solve real operational problems.',
  keywords: [
    'Jest Tech',
    'Software Solutions Studio',
    'SaaS Development',
    'Custom Software Development',
    'CRM Systems',
    'Process Automation',
    'Landing Pages',
  ],
  authors: [{ name: 'Jest Tech' }],
  openGraph: {
    title: 'Jest Tech | Software Solutions Studio',
    description: 'We build real systems that are already solving real business problems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jest Tech | Software Solutions Studio',
    description: 'We build real systems that are already solving real business problems.',
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
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
