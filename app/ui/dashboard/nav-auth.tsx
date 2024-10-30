'use client'

import React from 'react'
import { useAuthStore } from '@app/providers/auth-store-provider'

const NavAuth = () => {
  const user = useAuthStore(state => state.user)
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)

  return (
    <div>
      {user ? (
        <div>
          <p>W{user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </div>
  )
}

export default NavAuth
