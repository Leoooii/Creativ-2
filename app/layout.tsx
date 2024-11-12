import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import clsx from 'clsx'
import React from 'react'

import { Providers } from './providers'

import Navbar from '@/components/layout/Navbar'
import { CounterStoreProvider } from '@/providers/counter-store-provider'
import { AuthStoreProvider } from '@/providers/auth-store-provider'
import OptionsHeader from '@/components/layout/OptionsHeader'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Creativ Tub',
  description: 'Site-ul oficial Creativ Tub',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          ' bg-background font-sans antialiased'
          // fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <AuthStoreProvider>
            <div className="flex  flex-col  md:overflow-hidden ">
              <div className="w-full flex-none  bg-gray-800">
                <Navbar />
              </div>
              <div className="w-3/4 mx-auto bg-blue-700">
                <OptionsHeader />
              </div>
              <div className="flex-grow   w-3/4 mx-auto ">
                <CounterStoreProvider>
                  <Providers>{children}</Providers>
                </CounterStoreProvider>
              </div>
            </div>
            <Footer />
          </AuthStoreProvider>
        </Providers>
      </body>
    </html>
  )
}
