import Image from "next/image";
import * as React from "react";

interface ICardProductProps {
    title: string;
    price: string;
    grade: string;
    src: string;
    alt: string;
    idx: number;
}

const CardProduct: React.FunctionComponent<ICardProductProps> = ({
    title,
    price,
    grade,
    src,
    alt,
    idx,
}) => {
    return (
        <div
            key={idx}
            className="flex flex-col  gap-4 min-w-60 max-w-1/4 h-[420px]  bg-violet-100 p-4 shadow-md rounded-md"
        >
            <div className="relative w-full h-3/4 rounded-md">
                <Image
                    src={src}
                    fill
                    objectFit="cover"
                    alt={alt}
                    className="rounded-md"
                    objectPosition="top"
                    quality={10}
                />
            </div>
            {/*  */}
            <div className="flex flex-col">
                <h1 className="text-2xl font-thin ">{title}</h1>
                <h2 className="text-xl">RP {price}</h2>
                <h2 className="text-sm font-medium text-gray-800">
                    [<span className="text-orange-800"> {grade}</span>]
                </h2>
            </div>
        </div>
    );
};

export default CardProduct;
