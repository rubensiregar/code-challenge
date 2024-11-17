import * as React from "react";
import { Metadata } from "next";

interface IAboutLayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "About Us",
    description: "Here is our story",
};

const AboutLayout: React.FunctionComponent<IAboutLayout> = ({ children }) => {
    return <div>{children}</div>;
};

export default AboutLayout;
