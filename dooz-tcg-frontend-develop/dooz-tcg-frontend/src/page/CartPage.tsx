import { useCart } from '@/lib/cartContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clear, total } = useCart()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Panier</h1>
      {items.length === 0 ? <p>Votre panier est vide.</p> : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="py-2">Produit</th>
                  <th className="py-2 text-center">Prix</th>
                  <th className="py-2 text-center">Quantité</th>
                  <th className="py-2 text-center">Total</th>
                  <th className="py-2"> </th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ product, quantity }) => (
                  <tr key={product.id} className="border-t">
                    <td className="py-2">{product.name}</td>
                    <td className="py-2 text-center">{product.price.toFixed(2)} €</td>
                    <td className="py-2 text-center">
                      <Input type="number" min={1} value={quantity} onChange={e => updateQuantity(product.id, Math.max(1, Number(e.target.value)))} className="w-20 text-center" />
                    </td>
                    <td className="py-2 text-center">{(product.price * quantity).toFixed(2)} €</td>
                    <td className="py-2 text-center">
                      <Button variant="ghost" onClick={() => removeFromCart(product.id)}>Supprimer</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <strong>Total: {total.toFixed(2)} €</strong>
            <div className="flex gap-2">
              <Button variant="outline" onClick={clear}>Vider le panier</Button>
              <Button disabled>Passer la commande</Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}