import type { Metadata } from 'next'
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientInit from '@/components/ClientInit'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const interTight = Inter_Tight({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Anastasia Bovt — Product Designer',
    template: '%s — Anastasia Bovt',
  },
  description:
    'Product designer working across telecom, sport, edu, dev tools, safety and health.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bovt.design',
    siteName: 'Anastasia Bovt',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${instrumentSerif.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body className="cursor-on" data-hero="spotlight" data-layout="grid">
        <Nav />
        {children}
        <Footer />
        <ClientInit />
      </body>
    </html>
  )
}
