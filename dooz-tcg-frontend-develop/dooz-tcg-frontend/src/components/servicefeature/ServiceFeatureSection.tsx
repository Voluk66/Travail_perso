import ServiceFeatureCards from "./ServiceFeatureCards.tsx";
import {Headphones, Lock, ShoppingBag, Truck} from "lucide-react";

export default function ServiceFeatureSection() {
    return (
        <section className={"bg-background/50 py-12"}>
            <div className={"max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"}>
                <ServiceFeatureCards icon={ <Headphones className={"text-white w-6 h-6"}/> }
                                     title={"Service client"}
                                     description={"Notre équipe vous réponds sous 48h"}
                                     bgColor={"bg-yellow-500"} />
                <ServiceFeatureCards icon={ <Lock className={"text-white w-6 h-6"}/> }
                                     title={"Paiement sécurisé"}
                                     description={"Faites vos achats en toute sécurité"}
                                     bgColor={"bg-blue-500"} />
                <ServiceFeatureCards icon={ <Truck className={"text-white w-6 h-6"}/> }
                                     title={"Livraison Express"}
                                     description={"Recevez votre commande en moins de 3 jours"}
                                     bgColor={"bg-yellow-500"} />
                <ServiceFeatureCards icon={ <ShoppingBag className={"text-white w-6 h-6"}/> }
                                     title={"Click & Collect"}
                                     description={"Récupérez gratuitement votre commande en magasin"}
                                     bgColor={"bg-blue-500"} />
            </div>
        </section>
    )
}