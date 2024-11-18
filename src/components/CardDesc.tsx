import Image from "next/image";
import * as React from "react";

interface ICardDescProps {
    title: string;
    desc: string;
    src: string;
    orientation?: string;
    alt: string;
}

const CardDesc: React.FunctionComponent<ICardDescProps> = ({
    title,
    desc,
    src,
    orientation,
    alt,
}) => {
    const IniGambar = () => {
        return (
            <div className="relative h-80 md:w-2/5 md:h-[600px] ">
                <Image
                    src={src}
                    alt={alt}
                    objectFit="cover"
                    fill
                    objectPosition="center"
                    className="rounded-md"
                    quality={20}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        );
    };
    const IniTipografi = () => {
        return (
            <div className="flex flex-col gap-4 md:w-1/2 items-center justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold uppercase">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl font-extralight">{desc}</p>
            </div>
        );
    };

    if (orientation === "right" || !orientation) {
        return (
            <div className="flex justify-evenly md:flex-row md:gap-12 gap-4 p-8 w-full bg-violet-100 md:p-12 rounded-lg shadow-2xl flex-col">
                <IniGambar />
                <IniTipografi />
            </div>
        );
    } else {
        return (
            <div className="flex justify-evenly md:flex-row md:gap-12 gap-4 p-8 w-full bg-violet-100 md:p-12 rounded-lg shadow-2xl flex-col-reverse">
                <IniTipografi />
                <IniGambar />
            </div>
        );
    }
};

export default CardDesc;
