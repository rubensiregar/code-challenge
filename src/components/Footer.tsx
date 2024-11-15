import * as React from "react";
import Link from "next/link";
import FooterButton from "./FooterButton";

const Footer: React.FunctionComponent = () => {
    return (
        <div className="flex flex-col gap-8 p-4 md:p-20 md:flex-row items-center text-white bg-violet-900">
            <Link
                className="uppercase px-4 text-thin text-3xl font-extralight hover:text-orange-200 transition ease-in-out delay-100"
                href="/"
            >
                garaji
            </Link>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col items-center h-auto gap-2 md:items-start">
                    <FooterButton label="services" haref="/services" />
                    <FooterButton label="products" haref="/products" />
                    <FooterButton label="about us" haref="/about" />
                    <FooterButton label="our teams" haref="/teams" />
                </div>
                <div className="flex flex-col items-center h-auto gap-2 md:items-start">
                    <FooterButton
                        label="WA +6289--------"
                        haref="https://wa.me/628982257484"
                        target="_blank"
                    />
                    <FooterButton
                        label="IG @garaji.grade"
                        haref="https://www.instagram.com/garaji.grade/"
                        target="_blank"
                    />
                    <FooterButton
                        label="TP Garage Grade"
                        haref="https://www.tokopedia.com/garagegrade"
                        target="_blank"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
