'use client'

import React, {
  createContext,
  ReactNode,
  useContext,
  useSyncExternalStore
} from 'react'
import { createStore, StoreApi } from 'zustand/vanilla' // Tipuri

// Tipuri
export type CartItem = {
  id: number
  count: number
}

export type CartState = {
  items: CartItem[]
  status: string
}

export type CartActions = {
  addItem: (id: number) => Promise<void>
  removeItem: (id: number) => void
  incrementItemCount: (id: number) => void
  decrementItemCount: (id: number) => void
}

export type CartStore = CartState & CartActions

// Starea inițială
export const defaultInitState: CartState = {
  items: [
    // { id: 3, count: 2 },
    // { id: 8, count: 2 }
  ],
  status: '0'
}

// Crearea store-ului
export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>(set => ({
    ...initState,

    addItem: async (id: number) =>
      set(state => {
        const itemIndex = state.items.findIndex(item => item.id === id)

        if (itemIndex !== -1) {
          const updatedItems = [...state.items]

          updatedItems[itemIndex].count += 1

          return { items: updatedItems }
        }

        return { items: [...state.items, { id, count: 1 }] }
      }),

    removeItem: (id: number) =>
      set(state => ({
        items: state.items.filter(item => item.id !== id)
      })),

    incrementItemCount: (id: number) =>
      set(state => {
        const updatedItems = state.items.map(item =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )

        console.log(updatedItems)

        return { items: updatedItems }
      }),

    decrementItemCount: (id: number) =>
      set(state => {
        const updatedItems = state.items.map(item =>
          item.id === id && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        )

        return { items: updatedItems }
      })
  }))
}

// Contextul Cart
const CartContext = createContext<StoreApi<CartStore> | undefined>(undefined)

// CartStoreProvider pentru a expune store-ul în aplicație
export const CartStoreProvider = ({ children }: { children: ReactNode }) => {
  const store = createCartStore()

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>
}

// Custom hook pentru a accesa store-ul
export const useCartStore = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartStore must be used within a CartStoreProvider')
  }

  // Subscribe pentru a reactualiza componenta la schimbarea stării
  const state = useSyncExternalStore(context.subscribe, context.getState)

  return { ...state, setState: context.setState }
}
