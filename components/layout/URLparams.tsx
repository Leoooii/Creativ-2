'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const UrLparams = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const page = searchParams.get('page')

  return (
    <div>
      <h1>{category || 'Toate'}</h1>
    </div>
  )
}

export default UrLparams
