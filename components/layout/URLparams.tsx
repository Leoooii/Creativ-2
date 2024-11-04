'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const UrLparams = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const page = searchParams.get('page')

  return (
    <div>
      <h1>Category: {category || 'Toate'}</h1>
      <h1>Page: {page || '1'}</h1>
    </div>
  )
}

export default UrLparams
