import Link from "next/link";
import * as React from "react";

interface IFooterButtonProps {
    label: string;
    haref: string;
    target?: string;
}

const FooterButton: React.FunctionComponent<IFooterButtonProps> = ({
    label,
    haref,
    target,
}) => {
    return (
        <div>
            <Link
                href={haref}
                className="text-lg text-thin py-2 px-4 min-w-32 text-center hover:text-orange-200 transition ease-in-out delay-100"
                target={target}
            >
                {label}
            </Link>
        </div>
    );
};

export default FooterButton;
