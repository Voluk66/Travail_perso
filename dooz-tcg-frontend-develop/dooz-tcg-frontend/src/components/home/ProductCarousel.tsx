import ProductCard from "./ProductCard.tsx";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../ui/carousel.tsx";

const dummyProducts = [
    {
        id: "Naruto",
        name: "Display Kayou 5 Naruto",
        price: "34.99€",
        image: "/product_1.png",
        hot: true,
    },
    {
        id: "Lorcana",
        name: "Display Lorcana Floodborn",
        price: "34.99€",
        image: "/product_2.png",
        hot: true,
    },
    {
        id: "OnePiece",
        name: "Display One Piece OP-06",
        price: "39.99€",
        image: "/product_3.png",
        hot: false,
    }
]

const ProductCarousel: React.FC = () => {
    return (
        <Carousel className={"w-full max-w-4xl mx-auto"}>
            <CarouselContent>
                {dummyProducts.map((product, i) => (
                    <CarouselItem key={i} className={"flex justify-center"}>
                        <ProductCard key={product.id} {...product} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={"text-primary hover:bg-background"}/>
            <CarouselNext className={"text-primary hover:bg-background"}/>
        </Carousel>
    )
}

export default ProductCarousel;