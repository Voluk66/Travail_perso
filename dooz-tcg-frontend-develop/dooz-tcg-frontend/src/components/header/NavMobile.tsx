import {Sheet, SheetContent, SheetTrigger} from "../ui/sheet.tsx";
import {Button} from "../ui/button.tsx";
import {Menu} from "lucide-react";
import NavBar from "./NavBar.tsx";
import AccountActions from "./AccountActions.tsx";
import React from "react";

const NavMobile: React.FC = () => {
    return (
        <div className={"lg:hidden"}>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={"ghost"} size={"icon"}>
                        <Menu className={"w-5 h-5"} />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side={"left"}
                    className={"w-72 px-6 py-6 flex flex-col justify-between overflow-y-auto max-h-screen"}>
                    <div className={"flex flex-col gap-6 items-center"}>
                        <NavBar vertical />
                    </div>
                    <div className={"flex flex-col gap-2 "}>
                        <AccountActions />
                    </div>

                </SheetContent>
            </Sheet>
        </div>
    )
}

export default NavMobile