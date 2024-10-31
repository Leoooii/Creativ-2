'use client'

import React from 'react'
import { Button } from '@nextui-org/react'

import { useAuthStore } from '@/providers/auth-store-provider'

const Auth = () => {
  const user = useAuthStore(state => state.user)
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)
  const isAdmin = useAuthStore(state => state.isAdmin)

  const adminText = isAdmin ? 'Admin' : ''

  return (
    <div>
      {user ? (
        <div className="flex">
          <div className={'w-2/3 p-3'}>
            <h1 className={' text-6xl'}>
              Bine ati venit,{adminText} {user.displayName}
            </h1>
            <Button color={'danger'} size={'sm'} onClick={logout}>
              Logout
            </Button>
          </div>
          <div className={'w-1/3 p-3 flex justify-center'}>
            {user?.photoURL && (
              <img
                alt={'profile pic'}
                className={'rounded-full border-white border-2 '}
                src={user.photoURL}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center content-center mx-2">
          <Button size={'lg'} variant={'faded'} onClick={login}>
            Login with Google
          </Button>
        </div>
      )}
    </div>
  )
}

export default Auth
