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
            <Link href={haref}>{label}</Link>
        </div>
    );
};

export default MenuButton;
