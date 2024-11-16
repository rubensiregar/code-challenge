import * as React from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";

const Navbar: React.FunctionComponent = () => {
    return (
        <nav className="flex justify-center lg:justify-between gap-8 py-6 px-20 items-center">
            <Link
                className="uppercase px-4 text-thin text-3xl font-extralight hover:text-violet-400 transition ease-in-out delay-100"
                href="/"
            >
                garaji
            </Link>

            <div className="hidden gap-8 lg:flex">
                <MenuButton label="services" haref="/services" />
                <MenuButton label="products" haref="/products" />
                <MenuButton label="about us" haref="/about" />
                <MenuButton label="our teams" haref="/teams" />
            </div>
            <div className="hidden lg:block">
                <MenuButton label="contacts" haref="/contacts" />
            </div>
            <div className="absolute right-4 lg:hidden">
                <MenuButton label="| | |" haref="/" />
            </div>
        </nav>
    );
};

export default Navbar;
