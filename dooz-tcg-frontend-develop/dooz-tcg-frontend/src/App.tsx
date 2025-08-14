import Layout from "./components/layout/Layout.tsx";
import HomePage from "./page/HomePage.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductDetail from "./page/ProductDetails.tsx";
import ProductsPage from "./page/ProductsPage.tsx";
import CartPage from "./page/CartPage.tsx";
import { CartProvider } from "./lib/cartContext.tsx";

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path={"/products"} element={<ProductsPage />} />
                        <Route path={"/products/:productId"} element={<ProductDetail />} />
                        <Route path={"/cart"} element={<CartPage />} />
                    </Routes>
                </Layout>
            </CartProvider>
        </BrowserRouter>

    )
}

export default App
