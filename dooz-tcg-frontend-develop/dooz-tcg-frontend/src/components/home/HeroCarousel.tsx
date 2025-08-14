import {Button} from "../ui/button.tsx";
import {ArrowRight} from "lucide-react";
import React from "react";
import ProductCarousel from "./ProductCarousel.tsx";

const HeroCarousel: React.FC = () => {
    return (
        <section className={"w-full px-6 py-12 lg:py-20 bg-muted text-foreground"}>
            <div className={"max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"}>
                <div className={"lg:w-1/2 space-y-6"}>
                    <h2 className={"text-4xl font-bold leading-tight"}>
                        Acheter, <span className={"text-primary"}>revendre</span> & <span className="text-primary">collectionner</span>
                    </h2>
                    <p className={"text-muted-foreground text-lg"}>
                        Bienvenu sur <strong>DOOZ</strong>, boutique de <strong>cartes et jeux de sociétés</strong> pour les passionnés !
                    </p>
                    <p className={"text-muted-foreground"}>
                        Retrouvez les dernières nouveautés, précommandez des <strong>items exclusifs</strong> ou revendez vos cartes <strong>au meilleur prix</strong>.
                    </p>
                    <Button variant={"default"} className={"mt-2"}>
                        Voir le catalogue <ArrowRight className={"ml-2 h-4 w-4"} />
                    </Button>
                </div>

                <div className={"lg:w-1/2 w-full"}>
                    <ProductCarousel />
                </div>
            </div>
        </section>
    )
}

export default HeroCarousel;