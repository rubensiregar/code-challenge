import * as React from "react";
import MenuButton from "./MenuButton";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    return (
        <nav className="flex gap-8 py-6 px-20 bg-white justify-center">
            <a
                className="uppercase px-4 text-thin text-3xl font-extralight hover:text-violet-400"
                href="/"
            >
                garaji
            </a>

            <div className="hidden gap-8 md:flex">
                <MenuButton label="products" haref="/products" />
                <MenuButton label="services" haref="/services" />
                <MenuButton label="about us" haref="/about" />
                <MenuButton label="our teams" haref="/teams" />
            </div>
        </nav>
    );
};

export default Navbar;
