import Link from "next/link";
import * as React from "react";

interface ICardContactProps {
    label: string;
    haref: string;
    target?: string;
}

const CardContact: React.FunctionComponent<ICardContactProps> = ({
    label,
    haref,
    target,
}) => {
    return (
        <div className="shadow-md ring-1 ring-violet-200 w-[360px] rounded-3xl flex justify-evenly p-4 hover:text-white hover:bg-violet-400 transition ease-in-out delay-100">
            <Link
                href={haref}
                className="text-2xl font-extralight "
                target={target}
            >
                {label}
            </Link>
        </div>
    );
};

export default CardContact;
