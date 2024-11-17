import * as React from "react";
import Link from "next/link";
import FooterButton from "./FooterButton";
import { FaWhatsapp } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { LuShoppingBasket } from "react-icons/lu";

const Footer: React.FunctionComponent = () => {
    return (
        <div className="flex flex-col gap-8 px-12 pt-8 pb-20 md:p-20 md:flex-row items-center text-white bg-violet-900">
            <Link
                className="uppercase px-4 text-thin text-3xl font-extralight hover:text-orange-200 transition ease-in-out delay-100"
                href="/"
            >
                garaji
            </Link>
            <div className="flex flex-row w-full justify-evenly md:flex-row ">
                <div className="flex flex-col gap-6 md:items-start">
                    <FooterButton label="services" haref="/services" />
                    <FooterButton label="products" haref="/products" />
                    <FooterButton label="about us" haref="/about" />
                    <FooterButton label="our teams" haref="/teams" />
                </div>
                <div className="flex flex-col gap-6 md:items-start">
                    <div className="flex gap-2 items-center">
                        <FaWhatsapp className="size-6" />
                        <FooterButton
                            label="Whatsapp"
                            haref="https://wa.me/628982257484"
                            target="_blank"
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <CiInstagram className="size-6" />
                        <FooterButton
                            label="@garaji.grade"
                            haref="https://www.instagram.com/garaji.grade/"
                            target="_blank"
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <LuShoppingBasket className="size-6" />
                        <FooterButton
                            label="Garage Grade"
                            haref="https://www.tokopedia.com/garagegrade"
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
