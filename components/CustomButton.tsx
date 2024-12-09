'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { Bounce, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useRouter } from 'next/navigation'

import { useCartStore } from '@/providers/cart-store'

const CustomButton = ({ id }: { id: number }) => {
  const { addItem } = useCartStore()
  const router = useRouter()

  return (
    <div>
      <Button
        color={'primary'}
        size={'sm'}
        onClick={() => {
          addItem(id)
            .then(() => {
              toast.success('Adaugare reusita!', {
                position: 'bottom-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
              })
            })
            .then(() => {
              router.push('/auth')
            })
        }}
      >
        Adauga in cos
      </Button>
      {/*<ToastContainer*/}
      {/*  closeOnClick*/}
      {/*  pauseOnFocusLoss*/}
      {/*  autoClose={1000}*/}
      {/*  hideProgressBar={false}*/}
      {/*  newestOnTop={false}*/}
      {/*  position="bottom-right"*/}
      {/*  rtl={false}*/}
      {/*  theme="dark"*/}
      {/*/>*/}
    </div>
  )
}

export default CustomButton
