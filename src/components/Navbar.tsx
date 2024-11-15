import * as React from "react";
import MenuButton from "./MenuButton";

const Navbar: React.FunctionComponent = () => {
    return (
        <nav className="flex justify-between gap-8 py-6 px-20 items-center">
            <a
                className="uppercase px-4 text-thin text-3xl font-extralight hover:text-violet-400"
                href="/"
            >
                garaji
            </a>

            <div className="hidden gap-8 lg:flex">
                <MenuButton label="services" haref="/services" />
                <MenuButton label="products" haref="/products" />
                <MenuButton label="about us" haref="/about" />
                <MenuButton label="our teams" haref="/teams" />
            </div>
            <div className="hidden md:block">
                <MenuButton label="contacts" haref="/contacts" />
            </div>
            <div className="md:hidden">
                <MenuButton label="burger" haref="/" />
            </div>
        </nav>
    );
};

export default Navbar;
