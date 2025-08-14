import {Button} from "../ui/button.tsx";
import {ShoppingCart, User} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const AccountActions: React.FC = () => {
    return (
        <>
            <Button variant={"ghost"} className={"flex items-center gap-2 text-sm px-4 py-2 hover:text-primary"}>
                <User className={"w-4 h-4"} />
                <span>Compte</span>
            </Button>
            <Button variant={"ghost"} asChild className={"flex items-center gap-2 text-sm px-4 py-2 hover:text-primary"}>
                <Link to={"/cart"}>
                    <ShoppingCart className={"w-4 h-4"} />
                    <span>Panier</span>
                </Link>
            </Button>
        </>
    )
}

export default AccountActions