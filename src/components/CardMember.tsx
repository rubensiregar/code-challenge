import Image from "next/image";
import * as React from "react";

interface ICardMemberProps {
    src: string;
    name: string;
    city: string;
    cell: string;
    i: number;
}

const CardMember: React.FunctionComponent<ICardMemberProps> = ({
    src,
    name,
    city,
    cell,
    i,
}) => {
    return (
        <div
            className="h-fit text-center gap-4 min-w-[90%] p-8 rounded-2xl shadow-lg flex flex-col items-center bg-violet-100"
            key={i}
        >
            <div className="relative size-40 rounded-full">
                <Image
                    src={src}
                    alt="random"
                    fill
                    objectFit="cover"
                    className="rounded-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="flex flex-col items-center gap-1">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-xl">{city}</p>
                <p className="text-md font-medium">{cell}</p>
            </div>
        </div>
    );
};

export default CardMember;
