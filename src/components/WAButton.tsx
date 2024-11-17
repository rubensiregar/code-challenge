import * as React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const WAButton: React.FunctionComponent = () => {
    return (
        <div className="rounded-full fixed p-3 right-4 bottom-4 md:right-8 md:bottom-8 z-10 bg-green-300 ring-2 ring-green-800 ">
            <Link href="https://wa.me/628982257484" target="blank">
                <FaWhatsapp className="size-6 md:size-8" />
            </Link>
        </div>
    );
};

export default WAButton;
