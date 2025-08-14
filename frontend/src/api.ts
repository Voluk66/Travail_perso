export type Product = {
	id: number
	name: string
	price: number
	description?: string
	franchise?: string
	imageUrl?: string
	stock?: number
	category?: string
	rarity?: string
}

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080"

export async function fetchProducts(q?: string): Promise<Product[]> {
	const params = q ? `?q=${encodeURIComponent(q)}` : ""
	const res = await fetch(`${API_BASE}/api/products${params}`)
	if (!res.ok) throw new Error("Failed to fetch products")
	return res.json()
}

export async function fetchProduct(id: number): Promise<Product> {
	const res = await fetch(`${API_BASE}/api/products/${id}`)
	if (!res.ok) throw new Error("Failed to fetch product")
	return res.json()
}