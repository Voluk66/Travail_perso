import PreorderCard from "./PreorderCard.tsx"
import { preorders } from "../../data/preorders.ts"
export default function PreorderSection() {
    return (
        <section className={"py-16 px-4 md:px-16 bg-muted"}>
            <div className={"flex justify-between items-center mb-6"}>
                <h2 className={"text-3xl md:text-4xl font-bold text-primary"}>
                    Précommandez nos nouveautés
                </h2>
                <a href={"/precommandes"} className={"text-primary font-bold text-sm underline"}>Voir Tout</a>
            </div>
            <p className={"text-muted-foreground text-sm md:text-base mb-8"}>
                Régulièrement, notre boutique de <span className={"font-bold text-foreground"}>cartes à jouer et à collectionner</span> met à jour son stock. Par la même occasion, nous incluons les <span className="font-bold text-foreground">dernières nouveautés et extensions du moment</span>.
            </p>
            <div className={"grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"}>
                {preorders.map((item, index) => (
                    <PreorderCard key={index} {...item} />
                ))}
            </div>
        </section>
    )
}