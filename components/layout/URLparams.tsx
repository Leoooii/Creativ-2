'use client'

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function Search() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  return (
    <div>
      <h1>{category || 'Toate'}</h1>
    </div>
  )
}

const UrLparams = () => {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Search />
    </Suspense>
  )
}

export default UrLparams
