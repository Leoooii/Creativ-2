import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import clsx from 'clsx'
import React from 'react'

import { Providers } from './providers'

import SideNav from '@/components/layout/sidenav'
import { CounterStoreProvider } from '@/providers/counter-store-provider'
import { AuthStoreProvider } from '@/providers/auth-store-provider'

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
          'min-h-screen bg-background font-sans antialiased'
          // fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <AuthStoreProvider>
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
              <div className="w-full flex-none md:w-72">
                <SideNav />
              </div>
              <div className="flex-grow  md:overflow-y-auto ">
                <CounterStoreProvider>
                  <Providers>{children}</Providers>
                </CounterStoreProvider>
              </div>
            </div>
          </AuthStoreProvider>
        </Providers>
      </body>
    </html>
  )
}
