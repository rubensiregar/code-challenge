import CardService from "@/components/CardService";
import * as React from "react";
import { services } from "./ServicesList";

const printServices = () => {
    return services.map((item: any, index: number) => {
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

const ServicesPage: React.FunctionComponent = (props) => {
    return (
        <div>
            <div className="h-20 text-4xl text-center">ini servis</div>
            {/*  */}
            <div className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 md:p-20 xl:grid-cols-4">
                {printServices()}
            </div>
        </div>
    );
};

export default ServicesPage;
