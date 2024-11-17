"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsShare } from "react-icons/bs";
import MenuButton from "./MenuButton";

const NavPro = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleSideToggle = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
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
        <nav className="bg-red-400 flex  w-full items-center justify-between px-6 h-16  text-gray-700 border-b border-gray-200 z-10">
            <div className="flex items-center">
                <button
                    className="mr-2"
                    aria-label="Open Menu"
                    onClick={handleSideToggle}
                >
                    <GiHamburgerMenu className="text-3xl" />
                </button>
            </div>

            {/* KLIK BLANK SPACE UNTUK TUTUP SIDEBAR  */}
            {isOpen && (
                <div className="z-10 fixed inset-0 transition-opacity">
                    <div
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black opacity-50"
                        tabIndex={0}
                    ></div>
                </div>
            )}

            <aside
                className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col gap-8">
                    <MenuButton label="services" haref="/services" />
                    <MenuButton label="products" haref="/products" />
                    <MenuButton label="about us" haref="/about" />
                    <MenuButton label="our teams" haref="/teams" />
                </div>
            </aside>
        </nav>
    );
};

export default NavPro;
