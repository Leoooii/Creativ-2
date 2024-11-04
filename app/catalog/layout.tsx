import React from 'react'

import Header from '@/components/layout/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header section={'catalog'} />

      {children}
    </div>
  )
}

export default Layout
