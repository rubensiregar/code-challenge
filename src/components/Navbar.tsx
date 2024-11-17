"use client";
import * as React from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";

const Navbar: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleSideToggle = () => {
        setIsOpen(!isOpen);
    };
    React.useEffect(() => {
        const handleEscKeyPress = (e: any) => {
            if (e.keyCode === 27 && isOpen) {
                setIsOpen(false);
            }
        };
        // ---------------------------------------------------------------------
        if (isOpen) {
            document.body.style.setProperty("overflow", "hidden");
        } else {
            document.body.style.removeProperty("overflow");
        }
        document.addEventListener("keydown", handleEscKeyPress);
        return () => {
            document.removeEventListener("keydown", handleEscKeyPress);
        };
    }, [isOpen]);
    return (
        <nav className="flex justify-center lg:justify-between gap-8 py-4 px-20 items-center">
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
            <div
                onClick={handleSideToggle}
                className="absolute right-2 lg:hidden text-lg font-thin py-2 px-4 min-w-32 text-center hover:text-violet-500 transition ease-in-out delay-100"
            >
                | | |
            </div>

            <aside
                className={`transform w-40 md:w-60 top-0 left-full center h-full p-8 fixed ease-in-out transition-all duration-200 z-20 bg-white ${
                    isOpen ? "-translate-x-full" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col gap-12">
                    <div onClick={handleSideToggle}>
                        <MenuButton label="services" haref="/services" />
                    </div>
                    <div onClick={handleSideToggle}>
                        <MenuButton label="products" haref="/products" />
                    </div>
                    <div onClick={handleSideToggle}>
                        <MenuButton label="about us" haref="/about" />
                    </div>
                    <div onClick={handleSideToggle}>
                        <MenuButton label="our teams" haref="/teams" />
                    </div>
                </div>
            </aside>

            {/* BLANK SPACE UNTUK TUTUP SIDEBAR  */}
            {isOpen && (
                <div className="z-10 fixed inset-0 transition-opacity">
                    <div
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black opacity-75"
                        tabIndex={0}
                    ></div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
