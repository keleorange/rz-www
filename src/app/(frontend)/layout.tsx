import type { Metadata } from 'next'
import { Noto_Sans_SC, Playfair_Display } from 'next/font/google'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
// import { Footer } from '@/Footer/Component'
// import { Header } from '@/Header/Component'
import { HeaderStatic } from '@/components/HeaderStatic'
import { FooterStatic } from '@/components/FooterStatic'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'optional',
  variable: '--font-noto-sans-sc',
})
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  display: 'optional',
  variable: '--font-playfair-display',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        notoSansSC.variable,
        playfairDisplay.variable,
      )}
      lang="zh"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        {/* Material Symbols icon font - not available via next/font */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- icon font, no next/font equivalent */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <HeaderStatic />
          {children}
          <FooterStatic />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
