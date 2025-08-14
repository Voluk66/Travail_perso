import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from './api'

export type CartItem = { product: Product, quantity: number }

export type CartContextValue = {
	items: CartItem[]
	addToCart: (product: Product, quantity?: number) => void
	removeFromCart: (productId: number) => void
	updateQuantity: (productId: number, quantity: number) => void
	clear: () => void
	total: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([])

	const addToCart = (product: Product, quantity = 1) => {
		setItems(prev => {
			const existing = prev.find(i => i.product.id === product.id)
			if (existing) {
				return prev.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i)
			}
			return [...prev, { product, quantity }]
		})
	}

	const removeFromCart = (productId: number) => {
		setItems(prev => prev.filter(i => i.product.id !== productId))
	}

	const updateQuantity = (productId: number, quantity: number) => {
		setItems(prev => prev.map(i => i.product.id === productId ? { ...i, quantity } : i))
	}

	const clear = () => setItems([])

	const total = useMemo(() => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0), [items])

	const value: CartContextValue = { items, addToCart, removeFromCart, updateQuantity, clear, total }
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
	const ctx = useContext(CartContext)
	if (!ctx) throw new Error('useCart must be used within CartProvider')
	return ctx
}