import { useCart } from '../cartContext'

export default function CartPage() {
	const { items, updateQuantity, removeFromCart, clear, total } = useCart()

	return (
		<div className="container">
			<h1>Panier</h1>
			{items.length === 0 ? <p>Votre panier est vide.</p> : (
				<>
					<table style={{ width: '100%', borderCollapse: 'collapse' }}>
						<thead>
							<tr>
								<th style={{ textAlign: 'left' }}>Produit</th>
								<th>Prix</th>
								<th>Quantité</th>
								<th>Total</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{items.map(({ product, quantity }) => (
								<tr key={product.id} style={{ borderTop: '1px solid #eee' }}>
									<td style={{ padding: '8px 0' }}>{product.name}</td>
									<td style={{ textAlign: 'center' }}>{product.price.toFixed(2)} €</td>
									<td style={{ textAlign: 'center' }}>
										<input type="number" min={1} value={quantity} onChange={e => updateQuantity(product.id, Math.max(1, Number(e.target.value)))} style={{ width: 64 }} />
									</td>
									<td style={{ textAlign: 'center' }}>{(product.price * quantity).toFixed(2)} €</td>
									<td style={{ textAlign: 'center' }}>
										<button onClick={() => removeFromCart(product.id)}>Supprimer</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between' }}>
						<strong>Total: {total.toFixed(2)} €</strong>
						<div>
							<button onClick={clear} style={{ marginRight: 8 }}>Vider le panier</button>
							<button disabled>Passer la commande</button>
						</div>
					</div>
				</>
			)}
		</div>
	)
}