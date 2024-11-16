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
                className="text-md md:text-lg font-thin py-2 text-center hover:text-orange-200 transition ease-in-out delay-100"
                target={target}
            >
                {label}
            </Link>
        </div>
    );
};

export default FooterButton;
