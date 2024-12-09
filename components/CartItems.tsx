'use client'

import { Button, Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import { useCartStore } from '@/providers/cart-store'
import CartItem from '@/components/CartItem'
import { addRequest, deleteRequest, fetchRequests } from '@/lib/data'
import { useAuthStore } from '@/providers/auth-store-provider'
import AdminAnswer from '@/components/forms/adminAnswer'

// type Request = {
//   id: number
//   items: { id: string; count: number }[]
//   message: string
//   email: string
//   status: string
//   answer?: string
// }

const CartItems = () => {
  const { items } = useCartStore()
  const user = useAuthStore((state) => state.user)
  const isAdmin = useAuthStore((state) => state.isAdmin)
  const [requests, setRequests] = useState<
    | {
        id: number
        items: { id: number; count: number }[]
        message: string
        email: string
        status: string
        answer?: string
      }[]
    | null
  >(null)
  const [requestMessage, setRequestMessage] = useState('')

  const fetchData = async () => {
    let data: {
      id: number
      items: { id: number; count: number }[]
      message: string
      email: string
      status: string
      answer?: string
    }[]

    try {
      if (isAdmin) {
        data = await fetchRequests(user!.email!, 'all')

        setRequests(data)
      } else if (user?.email) {
        data = await fetchRequests(user.email)

        setRequests(data)
      }
    } catch (error) {
      console.error('Failed to fetch requests:', error)
    }
  }

  const handleSubmit = async () => {
    const { message, data } = await addRequest(
      // [{ id: 7, count: 10 }]
      items,
      requestMessage,
      user?.email || '',
      'trimis'
    )

    alert(message)
    await fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [user])

  return (
    <div className={'p-3 flex flex-col gap-1 mt-5'}>
      {items.map((item) => (
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
            onChange={(e) => setRequestMessage(e.target.value)}
          />

          <Button
            className={'mt-5'}
            color={'primary'}
            isDisabled={!user}
            onClick={handleSubmit}
          >
            Trimite cererea de oferta
          </Button>
          {!user && (
            <h1>
              Va rugam sa intrati in cont pentru a trimite o cerere de oferta
            </h1>
          )}
        </div>
      ) : (
        <h1>
          Va rugam sa adaugati materialele dorite in cosul de cumparaturi pentru
          a putea trimite o cerere de oferta
        </h1>
      )}
      <div className={'mt-2 '}>
        {requests && (
          <h1 className={'text-center m-3 font-extrabold text-2xl'}>
            Istoric cereri
          </h1>
        )}
        {requests &&
          Array.isArray(requests) &&
          requests.map(
            (request: {
              id: number
              items: { id: number; count: number }[]
              message: string
              email: string
              status: string
              answer?: string
            }) => (
              <div
                key={request.id}
                className={
                  'bg-gray-800 mb-3 p-2 flex flex-col gap-2 text-white rounded-md'
                }
              >
                <div className={'flex justify-between'}>
                  <h1>{request.message}</h1>
                  <h2>{request.email}</h2>
                </div>
                {request.items.map((item) => {
                  return (
                    <CartItem key={item.id} isEditable={false} item={item} />
                  )
                })}
                <h1>{request.answer}</h1>
                {isAdmin && !request.answer && (
                  <AdminAnswer fetchData={fetchData} id={request.id} />
                )}
                <Button
                  color={'danger'}
                  variant={'ghost'}
                  onClick={() => {
                    deleteRequest(request.id).then(() => {
                      fetchData()
                    })
                  }}
                >
                  Sterge
                </Button>
              </div>
            )
          )}
      </div>
    </div>
  )
}

export default CartItems
