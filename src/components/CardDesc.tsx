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
            <div className="relative min-h-48 md:w-1/2">
                <Image
                    src={src}
                    alt={alt}
                    objectFit="cover"
                    fill
                    objectPosition="center"
                    className="rounded-md"
                />
            </div>
        );
    };
    const IniTipografi = () => {
        return (
            <div className="flex flex-col gap-4 md:w-1/2 items-center justify-center">
                <h1 className="uppercase text-4xl font-bold">{title}</h1>
                <p>{desc}</p>
            </div>
        );
    };

    if (orientation === "right" || !orientation) {
        return (
            <div className="flex flex-col md:flex-row md:h-80 gap-8 justify-center w-full bg-violet-100 p-12 rounded-lg">
                <IniGambar />
                <IniTipografi />
            </div>
        );
    } else {
        return (
            <div className="flex flex-col-reverse md:flex-row md:h-80 gap-8 justify-center w-full bg-violet-100 p-12 rounded-lg">
                <IniTipografi />
                <IniGambar />
            </div>
        );
    }
};

export default CardDesc;
