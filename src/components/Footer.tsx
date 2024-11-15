import * as React from "react";
import Link from "next/link";
import FooterButton from "./FooterButton";

const Footer: React.FunctionComponent = () => {
    return (
        <div className="flex gap-8 p-8 md:p-20 items-center text-white bg-violet-400">
            <Link
                className="uppercase px-4 text-thin text-3xl font-extralight hover:text-orange-200 transition ease-in-out delay-100"
                href="/"
            >
                garaji
            </Link>
            <div className="flex gap-4">
                <div className="flex flex-col h-auto gap-2">
                    <FooterButton label="services" haref="/services" />
                    <FooterButton label="products" haref="/products" />
                    <FooterButton label="about us" haref="/about" />
                    <FooterButton label="our teams" haref="/teams" />
                </div>
                <div className="flex flex-col h-auto gap-2">
                    <FooterButton
                        label="Whatsapp +6289--------"
                        haref="https://wa.me/628982257484"
                        target="_blank"
                    />
                    <FooterButton
                        label="Instagram @garaji.grade"
                        haref="https://www.instagram.com/garaji.grade/"
                        target="_blank"
                    />
                    <FooterButton
                        label="Tokopedia Garage Grade"
                        haref="https://www.tokopedia.com/garagegrade"
                        target="_blank"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
