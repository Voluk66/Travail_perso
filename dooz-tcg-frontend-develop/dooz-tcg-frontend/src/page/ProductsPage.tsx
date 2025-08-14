import { useEffect, useMemo, useState } from 'react'
import { fetchProducts, type Product } from '@/lib/api'
import { useCart } from '@/lib/cartContext'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link, useSearchParams } from 'react-router-dom'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQuery = useMemo(() => searchParams.get('q') ?? '', [searchParams])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState(initialQuery)
  const { addToCart } = useCart()

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchProducts(query)
      .then(p => { if (!cancelled) setProducts(p) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [query])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const next = new URLSearchParams(searchParams)
    if (query) next.set('q', query); else next.delete('q')
    setSearchParams(next, { replace: true })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Produits</h1>
      <form onSubmit={onSubmit} className="flex gap-2 mb-6">
        <Input
          type="search"
          placeholder="Rechercher par nom ou franchise..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <Button type="submit" variant="secondary">Rechercher</Button>
      </form>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <Card key={product.id} className="p-3 flex flex-col">
              {product.imageUrl && (
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
              )}
              <div className="mt-2 flex-1">
                <h3 className="font-semibold line-clamp-2 min-h-[3rem]">{product.name}</h3>
                {product.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
                )}
                <p className="font-bold mt-2">{product.price.toFixed(2)} €</p>
              </div>
              <div className="mt-3 flex gap-2">
                <Button onClick={() => addToCart(product)} className="flex-1">Ajouter</Button>
                <Button variant="outline" asChild>
                  <Link to={`/products/${product.id}`}>Détails</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}