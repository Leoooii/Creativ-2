'use client'

import React from 'react'
import { UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import { useAuthStore } from '@/providers/auth-store-provider'

const NavAuth = () => {
  const user = useAuthStore(state => state.user)
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)

  return (
    <Link
      className={
        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 hover:cursor-pointer'
      }
      href={'/auth'}
    >
      <UserIcon className="h-6 w-6 text-red-500" />
      {user ? <h1>{user.displayName}</h1> : <h1>Contul meu</h1>}
    </Link>
  )
}

export default NavAuth
