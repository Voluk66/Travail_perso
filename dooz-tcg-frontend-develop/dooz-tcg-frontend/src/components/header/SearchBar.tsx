import React from "react";
import {Search} from "lucide-react";

const SearchBar: React.FC = () => {
    return (
        <div className={"relative w-full max-w-lg"}>
            <input
                type={"search"}
                placeholder={"Rechercher un produit, une carte ..."}
                className={"w-full pl-4 pr-12 py-2 rounded-full border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"}
            />
            <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition"
                onClick={() => {
                    // logique à faire plus tard
                    console.log("Rechercher cliqué")
                }}
            >
                <Search className="w-5 h-5" />
            </button>
        </div>
    )
}

export default SearchBar;