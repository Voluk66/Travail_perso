import ProductCardHighlight from "./ProductCardHighlight.tsx";

const productRanges = [
    {
        title: "Produit Pokémon",
        image: "/pokemon-cards.webp",
    },
    {
        title: "Produit Lorcana",
        image: "/lorcana-cards.png",
    },
    {
        title: "Produit Magic",
        image: "/magic-cards.webp",
    },
    {
        title: "Produit One Piece",
        image: "/onepiece-cards.jpeg",
    },
]

export default function ProductRangeSection() {
    return (
        <section className={"py-16 bg-background text-center"}>
            <div className={"container mx-auto px-4"}>
                <h2 className={"text-4xl font-extrabold mb-4"}>
                    Nos gammes de produits
                </h2>
                <p className={"text-lg text-muted-foreground max-w-3xl mx-auto mb-8"}>
                    Decks, boosters, coffrets, cartes rares et accessoires JCC… Retrouvez tout ce qu’il vous faut sur DOOZTCG, la boutique en ligne dédiée aux joueurs et collectionneurs !
                    <br />
                    Que vous soyez un dresseur, un duelliste, un stratège de MTG ou passionné d’un autre jeu de cartes, vous êtes au bon endroit !
                </p>
                <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"}>
                    {productRanges.map((product, index) => (
                        <ProductCardHighlight  key={index} title={product.title} image={product.image} />
                    ))}
                </div>
                <div className={"flex flex-wrap justify-center items-center gap-8 md:gap-12"}>
                    <img src={"/logo-pokemon.png"} alt={"Pokémon"} className={"h-24 object-contain"} />
                    <img src={"/logo-lorcana.jpg"} alt={"Lorcana"} className={"h-24 object-contain"} />
                    <img src={"/logo-yugioh.jpg"} alt={"Yu-Gi-Oh!"} className={"h-24 object-contain"} />
                    <img src={"/logo-magic.jpg"} alt={"Magic"} className={"h-24 object-contain"} />
                    <img src={"/logo-onepiece.png"} alt={"One Piece"} className={"h-24 object-contain"} />
                </div>
            </div>
        </section>
    )
}