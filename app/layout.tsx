import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hair Max | Premium ekstenzije za kosu',
  description:
    'Hair Max je luksuzni studio za ekstenzije kose i premium salon. 100% prirodna kosa, sertifikovani stilisti i nezaboravno vrhunsko iskustvo.',
  generator: 'v0.app',
  keywords: [
    'ekstenzije za kosu',
    'luksuzni salon',
    'premium kosa',
    'prirodne ekstenzije',
    'frizerski studio',
  ],
  icons: {
    icon: '/og-image.png',
    apple: '/og-image.png',
  },
  openGraph: {
    title: 'Hair Max | Premium ekstenzije za kosu',
    description:
      'Luksuzne ekstenzije za kosu i premium salon. 100% prirodna kosa od sertifikovanih stilista.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'Hair Max',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 1024,
        alt: 'Hair Max — premium kvalitet kose',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Max | Premium ekstenzije za kosu',
    description:
      'Luksuzne ekstenzije za kosu i premium salon. 100% prirodna kosa od sertifikovanih stilista.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr" className={`dark ${playfair.variable} ${inter.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
