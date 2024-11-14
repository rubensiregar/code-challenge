import Image from "next/image";
import * as React from "react";

interface ICardServiceProps {
    title: string;
    price: string;
    eta: string;
    src: string;
    alt: string;
}

const CardService: React.FunctionComponent<ICardServiceProps> = ({
    title,
    price,
    eta,
    src,
    alt,
}) => {
    return (
        <div className="min-w-60 h-96  bg-violet-100 p-4 shadow-md rounded-md">
            <div className="relative w-full h-3/4 rounded-md">
                <Image
                    src={src}
                    fill
                    objectFit="cover"
                    alt={alt}
                    className="rounded-md"
                    objectPosition="top"
                />
            </div>
            <h1 className="font-medium ">{title}</h1>
            <h2>RP {price}</h2>
            <h2>Estimated Build Duration: {eta} days</h2>
        </div>
    );
};

export default CardService;
