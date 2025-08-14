import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "../ui/accordion.tsx";
import {FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaYoutube} from "react-icons/fa6";

const MobileFooter: React.FC = () => {
    return (
        <footer className={"block md:hidden bg-muted text-muted-foreground py-8 px-4 border-t border-border"}>
            <div className={"max-w-md mx-auto text-sm"}>
                <Accordion type={"multiple"} className={"w-full space-y-2"}>
                    <AccordionItem value={"dooz"}>
                        <AccordionTrigger>DOOZ</AccordionTrigger>
                        <AccordionContent>
                            <ul className={"space-y-1"}>
                                <li><a href={"#"}>Qui somme-nous</a></li>
                                <li><a href={"#"}>Nos Événements</a></li>
                                <li><a href={"#"}>News</a></li>
                                <li><a href={"#"}>Guides</a></li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value={"catalogue"}>
                        <AccordionTrigger>Compte</AccordionTrigger>
                        <AccordionContent>
                            <ul className={"space-y-1"}>
                                <li><a href={"#"}>Se connecter</a></li>
                                <li><a href={"#"}>S'inscrire</a></li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value={"infos"}>
                        <AccordionTrigger>Infos Pratiques</AccordionTrigger>
                        <AccordionContent>
                            <ul className={"space-y-1"}>
                                <li><a href={"#"}>Livraison</a></li>
                                <li><a href={"#"}>Paiement sécurisé</a></li>
                                <li><a href={"#"}>CGV</a></li>
                                <li><a href={"#"}>Mentions légales</a></li>
                                <li><a href={"#"}>Politique de confidentialité</a></li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className={"flex justify-center items-center gap-4 mt-8 text-xl text-muted-foreground"}>
                    <a href={"https://facebook.com"} className={"hover:text-primary"}><FaFacebookF /></a>
                    <a href={"https://instagram.com"} className={"hover:text-primary"}><FaInstagram /></a>
                    <a href={"https://x.com"} className={"hover:text-primary"}><FaXTwitter /></a>
                    <a href={"https://youtube.com"} className={"hover:text-primary"}><FaYoutube /></a>
                    <a href={"https://tiktok.com"} className={"hover:text-primary"}><FaTiktok /></a>
                </div>
                <div className={"mt-8 text-center text-xs text-muted-foreground"}>
                    © 2025 DOOZTCG - Tous droits réservés.
                </div>
            </div>
        </footer>
    )
}

export default MobileFooter