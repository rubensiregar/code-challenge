import * as React from "react";
import { Metadata } from "next";

interface IServicesLayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Services",
    description: "Our Services",
};

const ServicesLayout: React.FunctionComponent<IServicesLayout> = ({
    children,
}) => {
    return <div>{children}</div>;
};

export default ServicesLayout;
