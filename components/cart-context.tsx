'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '@/lib/site-data'

export type CartItem = Product & { quantity: number }

type CartContextValue = {
  items: CartItem[]
  isOpen: boolean
  count: number
  total: number
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((item) => item.id !== id)
        : prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    )
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )
  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isOpen,
      count,
      total,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
    }),
    [
      items,
      isOpen,
      count,
      total,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
