'use client'

import { Button, Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import { useCartStore } from '@/providers/cart-store'
import CartItem from '@/components/CartItem'
import { addRequest, fetchRequests } from '@/lib/data'
import { useAuthStore } from '@/providers/auth-store-provider'

type Request = {
  id: string
  items: { id: string; count: number }[]
  message: string
  email: string
  status: string
}

const CartItems = () => {
  const { items } = useCartStore()
  const user = useAuthStore(state => state.user)
  const [requests, setRequests] = useState<Request[] | null>(null)
  const [requestMessage, setRequestMessage] = useState('')

  const fetchData = async () => {
    try {
      if (user?.email) {
        let data: Request[] = await fetchRequests(user.email)

        setRequests(data)
      }
    } catch (error) {
      console.error('Failed to fetch requests:', error)
    }
  }

  const handleSubmit = async e => {
    const { message, data } = await addRequest(
      // [{ id: 7, count: 10 }]
      items,
      requestMessage,
      user?.email,
      'trimis'
    )

    alert(message)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [user])

  return (
    <div className={'p-3 flex flex-col gap-1 mt-5'}>
      {items.map(item => (
        <CartItem key={item.id} isEditable={true} item={item} />
      ))}
      {items.length > 0 ? (
        <div>
          <Input
            className={'my-2'}
            color={'primary'}
            placeholder={'Introduceti un mesaj'}
            type={'text'}
            value={requestMessage}
            onChange={e => setRequestMessage(e.target.value)}
          />

          <Button color={'primary'} onClick={handleSubmit}>
            Trimite cererea de oferta
          </Button>
        </div>
      ) : (
        <h1>
          Va rugam sa adaugati materialele dorite in cosul de cumparaturi pentru
          a putea trimite o cerere de oferta
        </h1>
      )}
      <div className={'mt-2'}>
        <h1 className={'text-center m-3 font-extrabold text-2xl'}>
          Istoric cereri
        </h1>
        {requests &&
          Array.isArray(requests) &&
          requests.map((request: Request) => (
            <div
              key={request.id}
              className={
                'bg-gray-800 mb-3 p-2 flex flex-col gap-2 text-white rounded-md'
              }
            >
              {request.message},{request.email}
              {request.items.map(item => {
                return <CartItem key={item.id} item={item} />
              })}
            </div>
          ))}
      </div>
    </div>
  )
}

export default CartItems
