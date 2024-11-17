import { Breaker } from "@/components/Breaker";
import CardContact from "@/components/CardContact";
import * as React from "react";

const ContactsPage: React.FunctionComponent = () => {
    return (
        <div className="min-h-[75svh]">
            <Breaker title="Contact Us" />
            <section className="flex flex-col gap-12 p-20 items-center">
                <CardContact
                    label="whatsapp"
                    haref="https://wa.me/628982257484"
                    target="blank"
                />
                <CardContact
                    label="instagram"
                    haref="https://www.instagram.com/garaji.grade/"
                    target="blank"
                />
                <CardContact
                    label="tokopedia"
                    haref="https://www.tokopedia.com/garagegrade"
                    target="blank"
                />
            </section>
        </div>
    );
};

export default ContactsPage;
