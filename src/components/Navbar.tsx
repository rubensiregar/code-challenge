import * as React from "react";
import MenuButton from "./MenuButton";

const Navbar: React.FunctionComponent = () => {
    return (
        <nav className="flex justify-between gap-8 py-6 px-20">
            <a
                className="uppercase px-4 text-thin text-3xl font-extralight hover:text-violet-400"
                href="/"
            >
                garaji
            </a>

            <div className="hidden gap-8 md:flex">
                <MenuButton label="services" haref="/services" />
                <MenuButton label="products" haref="/products" />
                <MenuButton label="about us" haref="/about" />
                <MenuButton label="our teams" haref="/teams" />
            </div>
                <MenuButton label="contacts" haref="/contacts" />
        </nav>
    );
};

export default Navbar;
