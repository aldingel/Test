import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Figtree, Fraunces } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: {
    default:
      'Psychotherapie Aldinger | Verhaltenstherapie Berlin-Pankow',
    template: '%s | Psychotherapie Aldinger Berlin-Pankow',
  },
  description:
    'Privatpraxis für Psychologische Psychotherapie in Berlin-Pankow. M.Sc. Psych. Lisa-Maria Aldinger – Verhaltenstherapie, Schematherapie, DBT und EMDR in ruhiger, wertschätzender Atmosphäre.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f6f1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="de"
      className={`bg-background ${figtree.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
