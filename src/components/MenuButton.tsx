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
        <a
            className="text-lg text-thin py-2 px-6 rounded-xl min-w-32 text-center hover:text-violet-500 transition ease-in-out delay-100"
            href={haref}
        >
            {label}
        </a>
    );
};

export default MenuButton;
