import * as React from "react";
import { Metadata } from "next";

interface ITeamsLayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Team Members",
    description: "Hello there",
};

const TeamsLayout: React.FunctionComponent<ITeamsLayout> = ({ children }) => {
    return <div>{children}</div>;
};

export default TeamsLayout;
