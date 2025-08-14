import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import { CartProvider, useCart } from './cartContext'
import './App.css'

function Header() {
	const { items } = useCart()
	const count = items.reduce((s, i) => s + i.quantity, 0)
	return (
		<header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
			<nav style={{ display: 'flex', gap: 16 }}>
				<Link to="/">Boutique</Link>
				<Link to="/cart">Panier ({count})</Link>
			</nav>
		</header>
	)
}

function AppShell() {
	return (
		<div style={{ maxWidth: 1100, margin: '0 auto', padding: 16 }}>
			<Header />
			<Routes>
				<Route path="/" element={<ProductsPage />} />
				<Route path="/cart" element={<CartPage />} />
			</Routes>
		</div>
	)
}

export default function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<AppShell />
			</BrowserRouter>
		</CartProvider>
	)
}
