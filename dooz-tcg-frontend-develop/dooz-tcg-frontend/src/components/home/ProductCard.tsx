import {Button} from "../ui/button.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "../ui/card.tsx";
import {useNavigate} from "react-router-dom";
import { useCart } from "@/lib/cartContext";

type Props = {
    id: string,
    name: string
    price: string
    image: string
    hot?: boolean
}

export default function ProductCard({ id, name, price, image, hot}: Props) {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleClick = () => {
        navigate(`/products/${id}`);
    }

    const toNumericId = (val: string) => Array.from(val).reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
    const parsePrice = (val: string) => {
        const cleaned = val.replace(/[^\d.,]/g, '').replace(',', '.')
        const num = parseFloat(cleaned)
        return Number.isFinite(num) ? num : 0
    }

    const handleAddToCart = () => {
        addToCart({
            id: toNumericId(id),
            name,
            price: parsePrice(price),
            imageUrl: image,
        } as any, 1)
    }

    return (
        <Card className={"w-full max-w-sm relative flex flex-col items-center justify-between"}>
            {hot && (
                <span className={"absolute top-2 left-2 bg-primary text-foreground text-sm px-2 py-1 rounded z-10"}>
                    Hot
                </span>
            )}
            <CardContent className={"p-4 flex flex-col items-center"}>
                <img src={image}
                     alt={name}
                     className={"w-[200px] h-[200px]} object-contain mx-auto mb-4"} />
                <CardTitle className={"text-lg text-center"}>{name}</CardTitle>
                <CardDescription className={"text-xl font-bold text-center text-foreground"}>{price}</CardDescription>
            </CardContent>
            <CardFooter className={"w-full flex gap-2"}>
                <Button variant={"outline"} className={"w-1/2"} onClick={handleClick}>Voir</Button>
                <Button className={"w-1/2"} onClick={handleAddToCart}>Ajouter au panier</Button>
            </CardFooter>
        </Card>
    )
}