'use client'

import React from 'react'
import { UserIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'

import { useAuthStore } from '@/providers/auth-store-provider'

const NavAuth = () => {
  const user = useAuthStore(state => state.user)
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)

  return (
    <div className={'flex gap-2'}>
      <UserIcon className="h-6 w-6 text-blue-500" />
      {user ? (
        <div className={'flex gap-2'}>
          <h1>{user.displayName}</h1>
          <Button size={'sm'} onClick={logout}>
            Logout
          </Button>
        </div>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </div>
  )
}

export default NavAuth
