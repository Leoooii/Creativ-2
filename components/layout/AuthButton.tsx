'use client'

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@nextui-org/react'

import { useAuthStore } from '@/providers/auth-store-provider'

export default function AuthButton() {
  const user = useAuthStore(state => state.user)
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)
  const isAdmin = useAuthStore(state => state.isAdmin)

  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger className={'px-1 py-2'}>
        <Button>{user ? user.displayName : 'User'}</Button>
      </PopoverTrigger>
      <PopoverContent>
        {user ? (
          <Button color={'danger'} onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button color={'primary'} onClick={login}>
            Login
          </Button>
        )}
      </PopoverContent>
    </Popover>
  )
}
