'use client'

import React, { useEffect } from 'react'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useAuthStore } from '@/providers/auth-store-provider'
import { useCartStore } from '@/providers/cart-store'

const Auth = () => {
  const user = useAuthStore(state => state.user)
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)
  const isAdmin = useAuthStore(state => state.isAdmin)
  const { items, addItem, removeItem, incrementItemCount, decrementItemCount } =
    useCartStore()
  const router = useRouter()

  console.log(items)
  const adminText = isAdmin ? 'Admin' : ''

  useEffect(() => {
    // if (!user) {
    //   router.push('/')
    // }
  }, [])

  return (
    <div>
      {user ? (
        <div className="flex justify-between">
          <div className={'w-2/3 '}>
            <h1 className={' text-3xl'}>
              {adminText} {user.displayName}
            </h1>
            <h2>{user.email}</h2>
            <Button
              color={'danger'}
              size={'sm'}
              onClick={() => {
                logout().then(() => {
                  router.push('/')
                })
              }}
            >
              Logout
            </Button>
          </div>
          <div className={' flex justify-center'}>
            {user?.photoURL && (
              <>
                {/*<img*/}
                {/*  alt={'profile pic'}*/}
                {/*  className={'rounded-full  h-fit'}*/}
                {/*  src={user.photoURL}*/}
                {/*/>*/}
                <Image
                  alt={'profile pic'}
                  className={'rounded-full  h-fit'}
                  height={80}
                  src={user.photoURL}
                  width={80}
                />
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center content-center mx-2">
          <Button
            color={'primary'}
            size={'lg'}
            variant={'faded'}
            onClick={login}
          >
            Login with Google
          </Button>
        </div>
      )}
    </div>
  )
}

export default Auth
