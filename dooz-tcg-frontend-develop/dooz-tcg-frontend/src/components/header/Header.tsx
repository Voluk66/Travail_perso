import NavBar from "./NavBar.tsx";
import SheetBar from "./NavMobile.tsx";
import SearchBar from "./SearchBar.tsx";
import AccountActions from "./AccountActions.tsx";
import React from "react";

const Header: React.FC = () => {
    return (
        <header className={"flex items-center justify-between px-6 py-4 w-full border-b"}>
            <div className={"flex items-center gap-4 shrink-0"}>
                <a href={"/"} className={"flex items-center gap-2"}>
                    <img src={"/logo-dooz.png"} alt={"Logo DOOZ"} className={"h-8 w-auto"} />
                    <span className={"font-bold text-xl text-primary hidden sm:inline"}>DOOZTCG</span>
                </a>
                <div className={"hidden lg:block"}>
                    <NavBar />
                </div>
                <div className={"lg:hidden"}>
                    <SheetBar />
                </div>
            </div>

            <div className={"flex-1 px-4 max-w-full lg:max-w-xl"}>
                <SearchBar />
            </div>

            <div className={"hidden lg:flex items-center gap-4"}>
                <AccountActions />
            </div>
        </header>
    )
}
export default Header;