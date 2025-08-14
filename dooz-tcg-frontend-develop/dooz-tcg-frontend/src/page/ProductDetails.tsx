import { useParams} from "react-router-dom";
import {Card} from "../components/ui/card.tsx";
import {Button} from "../components/ui/button.tsx";
import {useEffect, useState} from "react";
import {Label} from "../components/ui/label.tsx";
import {Input} from "../components/ui/input.tsx";
import {Separator} from "../components/ui/separator.tsx";
import {Heart} from "lucide-react";

import type { Product } from "@/lib/api";
import { fetchProduct } from "@/lib/api";
import { useCart } from "@/lib/cartContext";

type LocalProduct = Product & { images?: string[] }

const ProductDetails = () => {
    const [product, setProduct] = useState< LocalProduct | null>(null);
    const [quantity, setQuantity] = useState(1);
    const { productId } = useParams();
    const { addToCart } = useCart();

    useEffect(() => {
        const fecthProduit = async () => {
            if (!productId) return;
            const data = await fetchProduct(Number(productId));
            setProduct(data);
        }
        fecthProduit();
    }, [productId]);

    if (!product) {
        return <p>Chargement du produit ...</p>
    }

    return (
        <div className={"container mx-auto px-4 py-8"}>
            {/* Breadcrumb */}
            <nav className={"text-sm text-muted-foreground mb-4"}>
                <span className={"hover:underline cursor-pointer"}>Accueil</span> &gt; {product.name}
            </nav>
            {/*Haut de page*/}
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
                {/*Visuel du produit*/}
                <div className={"space-y-4"}>
                    <Card className={"p-4 flex justify-center items-center"}>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className={"max-h-72 object-contain"} />
                    </Card>
                    <div className={"flex gap-2"}>
                        {product.images?.map((image, i) => (
                            <div key={i}>
                                <img src={image} className={"h-16 w-16 object-contain border"}/>
                            </div>
                        ))}
                    </div>
                </div>
                {/*Info produit*/}
                <div>
                    <h1 className={"text-2xl font-bold"}>{product.name}</h1>
                    <p className={"text-xl font-primary mt-2"}>${product.price}</p>
                    <p className={"text-sm mt-1 text-muted-foreground"}>
                        ${product.description}
                    </p>
                    <div className={"mt-6 space-y-4"}>
                        <div>
                            <Label htmlFor={"quantity"}>Quantité</Label>
                            <div className={"flex items-center gap-2 mt-1"}>
                                <Button variant={"outline"} size={"icon"} onClick={() => setQuantity(q => Math.max(1, q-1 ))}>-</Button>
                                <Input
                                    id={"quantity"}
                                    type={"number"}
                                    min={1}
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    className={"w-16 text-center"} />
                                <Button variant={"outline"} size={"icon"} onClick={() => setQuantity(q => q + 1)}>+</Button>
                            </div>
                        </div>
                        <div className={"flex flew-wrap gap-2"}>
                            <Button onClick={() => product && addToCart(product, quantity)}>Ajouter au panier</Button>
                            <Button variant={"secondary"}>
                                <Heart className={"mr-2 h-4 w-4"} />
                                Ajouter à la Whishlist
                            </Button>
                            <Button variant={"default"} className={"bg-black text-white"}> Acheter en 1-Click</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Plus de details*/}
            <Separator className={"my-10"} />
            <section>
                <h2 className={"text-xl font-bold mb-4"}>Plus de détails</h2>

                <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
                    <div>
                        <h3 className={"font-semibold mb-2"}>Détail du produit</h3>
                        <div className={"text-sm space-y-1"}>
                            <div className={"flex justify-between border p-2 rounded-md"}>
                                <span className={"text-muted-foreground"}>Extension</span>
                                <span>{product.description}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className={"font-semibold mb-2"}>Description du produit</h3>
                        <p className={"text-sm text-muted-foreground leading-relaxed"}>
                            {product.description}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetails;
