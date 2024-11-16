import Link from "next/link";
import * as React from "react";

interface IMenuButtonProps {
    label: string;
    haref: string;
}

const MenuButton: React.FunctionComponent<IMenuButtonProps> = ({
    label,
    haref,
}) => {
    return (
        <div>
            <Link
                href={haref}
                className="text-lg font-thin py-2 px-4 min-w-32 text-center hover:text-violet-500 transition ease-in-out delay-100"
            >
                {label}
            </Link>
        </div>
    );
};

export default MenuButton;
