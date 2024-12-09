import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import clsx from 'clsx'
import React from 'react'
import { ToastContainer } from 'react-toastify'

import { Providers } from './providers'

import Navbar from '@/components/layout/Navbar'
import { CounterStoreProvider } from '@/providers/counter-store-provider'
import { AuthStoreProvider } from '@/providers/auth-store-provider'
import Footer from '@/components/layout/Footer'
import { CartStoreProvider } from '@/providers/cart-store'
import 'react-toastify/dist/ReactToastify.css'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Creativ Tub',
  description: 'Site-ul oficial Creativ Tub',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          ' bg-background font-sans antialiased bg-gray-500 md:px-10 px-0'
          // fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <AuthStoreProvider>
            <CartStoreProvider>
              <div className="flex  flex-col  md:overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="w-full flex-none  bg-gray-800">
                  <Navbar />
                </div>
                <div className="w-full bg-gray-800">
                  <Header section="catalog" />
                </div>
                <div className="flex-grow   w-4/5 mx-auto ">
                  <CounterStoreProvider>
                    <Providers>{children}</Providers>
                    <ToastContainer />
                  </CounterStoreProvider>
                </div>
              </div>
              <Footer />
            </CartStoreProvider>
          </AuthStoreProvider>
        </Providers>
      </body>
    </html>
  )
}
