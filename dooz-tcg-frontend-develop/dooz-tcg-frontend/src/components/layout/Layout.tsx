import Header from "../header/Header.tsx";
import React from "react";
import Footer from "../footer/Footer.tsx";
import MobileFooter from "../footer/MobileFooter.tsx";

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={"min-h-screen bg-background text-foreground flex flex-col"}>
            <Header />
            <main className={"flex-1 w-full px-4 py-6"}>{children}</main>
            <div className={"hidden md:block"}>
                <Footer />
            </div>
            <div className={"block md:hidden"}>
                <MobileFooter />
            </div>
        </div>
    )
}

export default Layout