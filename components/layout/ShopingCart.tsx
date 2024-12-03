'use client'

import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

import { useAuthStore } from '@/providers/auth-store-provider'
import { useCartStore } from '@/providers/cart-store'

const ShopingCart = () => {
  const user = useAuthStore(state => state.user)
  const { items } = useCartStore()

  return (
    <>
      {/*{user && (*/}
      <div className="relative">
        <Link href={'/auth'}>
          <ShoppingCartIcon color={'white'} height={40} width={40} />
        </Link>

        <div
          className={
            'bg-red-800 rounded-full absolute top-8 left-8 px-2 text-white'
          }
        >
          {items.length}
        </div>
      </div>
      {/*)}*/}
    </>
  )
}

export default ShopingCart
