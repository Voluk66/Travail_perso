import { useEffect, useState } from 'react'
import { fetchProducts, type Product } from '../api'
import { useCart } from '../cartContext'

export default function ProductsPage() {
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState(true)
	const [query, setQuery] = useState('')
	const { addToCart } = useCart()

	useEffect(() => {
		let cancelled = false
		setLoading(true)
		fetchProducts(query).then(p => { if (!cancelled) setProducts(p) }).finally(() => { if (!cancelled) setLoading(false) })
		return () => { cancelled = true }
	}, [query])

	return (
		<div className="container">
			<h1>Produits TCG</h1>
			<input
				type="search"
				placeholder="Rechercher par nom ou franchise..."
				value={query}
				onChange={e => setQuery(e.target.value)}
				style={{ padding: '8px', width: '100%', marginBottom: 16 }}
			/>
			{loading ? <p>Chargement...</p> : (
				<div className="grid" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
					{products.map(product => (
						<div key={product.id} className="card" style={{ border: '1px solid #eee', borderRadius: 8, padding: 12 }}>
							{product.imageUrl && (
								<img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
							)}
							<h3 style={{ margin: '8px 0' }}>{product.name}</h3>
							<p style={{ color: '#555', minHeight: 40 }}>{product.description}</p>
							<p style={{ fontWeight: 700 }}>{product.price.toFixed(2)} €</p>
							<button onClick={() => addToCart(product)} style={{ padding: '8px 12px' }}>Ajouter au panier</button>
						</div>
					))}
				</div>
			)}
		</div>
	)
}