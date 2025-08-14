import {FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaYoutube} from "react-icons/fa6"
import React from "react";

const Footer: React.FC = () => {
    const socialLinks = [
        { icon: FaFacebookF, label: "/nom-client", url: "https://facebook.com" },
        { icon: FaInstagram, label: "@nom-client", url: "https://instagram.com" },
        { icon: FaXTwitter, label: "@nom-client", url: "https://x.com" },
        { icon: FaYoutube, label: "@nom-client", url: "https://youtube.com" },
        { icon: FaTiktok, label: "@nom-client", url: "https://tiktok.com" }
    ]

    return (
        <footer className={"w-full bg-muted text-foreground py-10"}>
            <div className={"grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4 sm:pr-8"}>
                <div className={"hidden md:block"}></div>
                <div className={"grid grid-cols-4 gap-8 px-6"}>
                    <div className={"space-y-2"}>
                        <p className={"text-primary uppercase text-lg font-extrabold tracking-wide mb-4"}>DoozTCG</p>
                        <ul className={"space-y-1"}>
                            <li><a href={"#"} className={"hover:underline"}>Qui Sommes-nous</a></li>
                            <li><a href={"#"} className={"hover:underline"}>Nos Évenements</a></li>
                            <li><a href={"#"} className={"hover:underline"}>Boutique Pokémon</a></li>
                            <li><a href={"#"} className={"hover:underline"}>Boutique Lorcane</a></li>
                            <li><a href={"#"} className={"hover:underline"}>Boutique Magic</a></li>
                            <li><a href={"#"} className={"hover:underline"}>Boutique Jeux de Société</a></li>
                            <li><a href={"#"} className={"hover:underline"}>Nous Rejoindre</a></li>
                            <li><a href={"#"} className={"hover:underline"}>News</a></li>
                            <li><a href={"#"} className={"hover:underline"}>Guides</a></li>
                        </ul>
                    </div>

                    <div className={"space-y-2"}>
                        <h1 className={"text-primary uppercase text-lg font-extrabold tracking-wide mb-4"}>Compte</h1>
                        <ul className={"space-y-1"}>
                            <li><a href={"#"} className={"hover:underline"}>Se Connecter</a></li>
                            <li><a href={"#"} className={"hover:underline"}>S'inscrire</a></li>
                        </ul>
                    </div>

                    <div className={"space-y-2"}>
                        <h1 className={"text-primary uppercase text-lg font-extrabold tracking-wide mb-4"}>Info Pratique</h1>
                        <ul className={"space-y-1"}>
                            <li><a href={"#"} className={"hover:underline"}>Livraison</a></li>
                            <li><a href={"#"} className={"hover:underline"}>Paiement sécurisé</a></li>
                            <li><a href={"#"} className={"hover:underline"}>CGV</a></li>
                            <li><a href={"#"} className={"hover:underline"}>Mentions légales</a></li>
                            <li><a href={"#"} className={"hover:underline"}>Politique de Confidentialité</a></li>
                        </ul>
                    </div>

                    <div className={"space-y-2"}>
                        {socialLinks.map(({ icon: Icon, label, url }) => (
                            <div key={label} className={"flex items-center gap-2"}>
                                <Icon className={"w-4 h-4 text-muted-foreground"} />
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={"hover:text-primary"}
                                >
                                    {label}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={"mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground"}>
                © 2025 DOOZTCG - Tous droits réservés.
            </div>
        </footer>
    )
}

export default Footer