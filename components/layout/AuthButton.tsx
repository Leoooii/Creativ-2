'use client'

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@nextui-org/react'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useAuthStore } from '@/providers/auth-store-provider'

export default function AuthButton() {
  const user = useAuthStore(state => state.user)
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)
  const isAdmin = useAuthStore(state => state.isAdmin)
  const notify = () => toast('Autentificare reusita')

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
          <Button
            color={'primary'}
            onClick={() => {
              login().then(() => {
                toast.success('Autentificare reusita!', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: 'dark',
                  transition: Bounce
                })
              })
              // notify()
            }}
          >
            Login
          </Button>
        )}
        <ToastContainer
          closeOnClick
          draggable
          pauseOnFocusLoss
          pauseOnHover
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          position="top-right"
          rtl={false}
          theme="dark"
        />
      </PopoverContent>
    </Popover>
  )
}
