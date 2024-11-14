import CardService from "@/components/CardService";
import * as React from "react";
import { addons, services } from "./servicesList";
import { Breaker } from "@/components/Breaker";

const printServices = (items: {}[]) => {
    return items.map((item: any, index: number) => {
        return (
            <CardService
                key={index}
                title={item.title}
                price={item.price}
                eta={item.eta}
                src={item.src}
                alt={item.alt}
            />
        );
    });
};

const ServicesPage: React.FunctionComponent = () => {
    return (
        <div className="">
            <Breaker title="our services" />
            <section className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 md:px-20 xl:grid-cols-4">
                {printServices(services)}
            </section>
            <Breaker title="add-ons" />
            <section className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 md:px-20 xl:grid-cols-4">
                {printServices(addons)}
            </section>
        </div>
    );
};

export default ServicesPage;
