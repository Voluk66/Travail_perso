import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "../ui/navigation-menu"
import { cn } from "../../lib/utils"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

type NavBarProps = {
    vertical?: boolean
    className?: string
}

const NavBar: React.FC<NavBarProps> = ({ vertical = false, className }) => {
    const [catalogueOpen, setCatalogueOpen] = useState(false)
    const [precoOpen, setPrecoOpen] = useState(false)

    return (
        <NavigationMenu className={cn("w-full", className)}>
            <NavigationMenuList className={cn(vertical ? "flex-col gap-2" : "flex-row gap-4")}>

                {/* ACCUEIL */}
                <NavigationMenuItem>
                    <NavigationMenuLink className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
                        Accueil
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* CATALOGUE */}
                <NavigationMenuItem>
                    {vertical ? (
                        <>
                            <button
                                onClick={() => setCatalogueOpen(!catalogueOpen)}
                                className="w-full text-left px-4 py-2 flex justify-between items-center text-sm text-foreground hover:text-primary"
                            >
                                Catalogue
                                <ChevronDown
                                    className={cn("w-4 h-4 transition-transform", {
                                        "rotate-180": catalogueOpen,
                                    })}
                                />
                            </button>

                            {catalogueOpen && (
                                <div className="mt-2 flex flex-col gap-6">
                                    {/* Pokémon */}
                                    <div>
                                        <h3 className="text-sm font-bold text-primary uppercase">Pokémon</h3>
                                        <ul className="flex flex-col gap-1 text-sm mt-1">
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Nouveauté</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Display & Boosters</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Coffret</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Cartes Gradées</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Pokémon Japonais</NavigationMenuLink></li>
                                        </ul>
                                    </div>

                                    {/* Magic */}
                                    <div>
                                        <h3 className="text-sm font-bold text-primary uppercase">Magic</h3>
                                        <ul className="flex flex-col gap-1 text-sm mt-1">
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Nouveauté</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Deck</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Display & Boosters</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Coffret</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Playmats Magic</NavigationMenuLink></li>
                                        </ul>
                                    </div>

                                    {/* Lorcana */}
                                    <div>
                                        <h3 className="text-sm font-bold text-primary uppercase">Lorcana</h3>
                                        <ul className="flex flex-col gap-1 text-sm mt-1">
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Nouveauté</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Produit Lorcana</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Decks</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Accessoires</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Cartes Gradées</NavigationMenuLink></li>
                                        </ul>
                                    </div>

                                    {/* Autre TCG */}
                                    <div>
                                        <h3 className="text-sm font-bold text-primary uppercase">Autre TCG</h3>
                                        <ul className="flex flex-col gap-1 text-sm mt-1">
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Altered</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Flesh And Blood</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">One Piece</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Star Wars Unlimited</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Cartes de sport</NavigationMenuLink></li>
                                        </ul>
                                    </div>

                                    {/* Accessoires */}
                                    <div>
                                        <h3 className="text-sm font-bold text-primary uppercase">Accessoires</h3>
                                        <ul className="flex flex-col gap-1 text-sm mt-1">
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Tapis de jeux</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Classeurs</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Pochettes</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Decks box</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Boite de rangement</NavigationMenuLink></li>
                                        </ul>
                                    </div>

                                    {/* Jeux de société */}
                                    <div>
                                        <h3 className="text-sm font-bold text-primary uppercase">Jeux de société</h3>
                                        <ul className="flex flex-col gap-1 text-sm mt-1">
                                            <li><NavigationMenuLink className="w-full pl-0 text-left px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Les promotions</NavigationMenuLink></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <NavigationMenuTrigger className="px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                                Catalogue
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="p-6 bg-background shadow-xl min-w-[1100px] max-w-[95vw] overflow-x-auto">
                                <div className="grid grid-cols-6 gap-6">

                                    {/* Pokémon */}
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-3 uppercase">Pokémon</h3>
                                        <ul className="flex flex-col gap-1 text-lg">
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Nouveauté</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Display & Boosters</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Coffret</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Cartes Gradées</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Pokémon Japonais</NavigationMenuLink></li>
                                        </ul>
                                    </div>

                                    {/* Magic */}
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-3 uppercase">Magic</h3>
                                        <ul className="flex flex-col gap-1 text-lg">
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Nouveauté</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Deck</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Display & Boosters</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Coffret</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Playmats</NavigationMenuLink></li>
                                        </ul>
                                    </div>

                                    {/* Lorcana */}
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-3 uppercase">Lorcana</h3>
                                        <ul className="flex flex-col gap-1 text-lg">
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Nouveauté</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Produits</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Decks</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Accessoires</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Cartes Gradées</NavigationMenuLink></li>
                                        </ul>
                                    </div>

                                    {/* Autre TCG */}
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-3 uppercase">Autre TCG</h3>
                                        <ul className="flex flex-col gap-1 text-lg">
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Altered</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Flesh And Blood</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">One Piece</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Star Wars Unlimited</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Cartes de sport</NavigationMenuLink></li>
                                        </ul>
                                    </div>

                                    {/* Accessoires */}
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-3 uppercase">Accessoires</h3>
                                        <ul className="flex flex-col gap-1 text-lg">
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Tapis de jeux</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Classeurs</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Pochettes</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Deck box</NavigationMenuLink></li>
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Boîte de rangement</NavigationMenuLink></li>
                                        </ul>
                                    </div>

                                    {/* Jeux de société */}
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-3 uppercase">Jeux de société</h3>
                                        <ul className="flex flex-col gap-1 text-lg">
                                            <li><NavigationMenuLink className="text-foreground hover:text-primary transition">Les promotions</NavigationMenuLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </NavigationMenuContent>

                        </>
                    )}
                </NavigationMenuItem>

                {/* PRECOMMANDES */}
                <NavigationMenuItem>
                    {vertical ? (
                        <>
                            <button
                                onClick={() => setPrecoOpen(!precoOpen)}
                                className="w-full text-left px-4 py-2 flex justify-between items-center text-sm text-foreground hover:text-primary"
                            >
                                Précommandes
                                <ChevronDown
                                    className={cn("w-4 h-4 transition-transform", {
                                        "rotate-180": precoOpen,
                                    })}
                                />
                            </button>
                            {precoOpen && (
                                <div className="ml-4 mt-2 flex flex-col gap-2">
                                    <NavigationMenuLink className="text-sm hover:text-primary">Préco Pokémon</NavigationMenuLink>
                                    <NavigationMenuLink className="text-sm hover:text-primary">Préco Magic</NavigationMenuLink>
                                    <NavigationMenuLink className="text-sm hover:text-primary">Préco Lorcana</NavigationMenuLink>
                                    <NavigationMenuLink className="text-sm hover:text-primary">Préco Flesh And Blood</NavigationMenuLink>
                                    <NavigationMenuLink className="text-sm hover:text-primary">Préco One Piece</NavigationMenuLink>
                                    <NavigationMenuLink className="text-sm hover:text-primary">Préco Star Wars</NavigationMenuLink>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <NavigationMenuTrigger className="px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                                Précommandes
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="p-6 bg-background shadow-xl min-w-[1100px] max-w-[100vw] overflow-x-auto">
                                <ul className="flex flex-row gap-4 whitespace-nowrap">
                                    <li>
                                        <NavigationMenuLink className="px-3 py-2 rounded hover:text-primary">
                                            Précommande Pokémon
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className="px-3 py-2 rounded hover:text-primary">
                                            Précommande Magic
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className="px-3 py-2 rounded hover:text-primary">
                                            Précommande Lorcana
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className="px-3 py-2 rounded hover:text-primary">
                                            Précommande Flesh And Blood
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className="px-3 py-2 rounded hover:text-primary">
                                            Précommande One Piece
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className="px-3 py-2 rounded hover:text-primary">
                                            Précommande Star Wars
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>

                        </>
                    )}
                </NavigationMenuItem>

                {/* ÉVÉNEMENTS */}
                <NavigationMenuItem>
                    <NavigationMenuLink className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
                        Événements
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* REVENDRE */}
                <NavigationMenuItem>
                    <NavigationMenuLink className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
                        Revendre
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavBar
