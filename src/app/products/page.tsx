import { Breaker } from "@/components/Breaker";
import CardProduct from "@/components/CardProduct";
import * as React from "react";
import { IProduct, kits, supplies } from "./productsList";

const printProducts = (items: IProduct[]) => {
    return items.map((item: any, index: number) => {
        return (
            <CardProduct
                key={index}
                title={item.title}
                grade={item.grade}
                price={item.price}
                src={item.src}
                alt={item.alt}
            />
        );
    });
};

const ProductsPage: React.FunctionComponent = () => {
    return (
        <div>
            <Breaker title="our model kits" />
            <section className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 md:px-20 xl:grid-cols-4">
                {printProducts(kits)}
            </section>
            <Breaker title="Available Supplies" />
            <section className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 md:px-20 xl:grid-cols-4">
                {printProducts(supplies)}
            </section>
        </div>
    );
};

export default ProductsPage;
