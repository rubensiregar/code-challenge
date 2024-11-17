import * as React from "react";
import { Metadata } from "next";

interface IContactsLayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Contacts",
    description: "Please contact us",
};

const ContactsLayout: React.FunctionComponent<IContactsLayout> = ({
    children,
}) => {
    return <div>{children}</div>;
};

export default ContactsLayout;
