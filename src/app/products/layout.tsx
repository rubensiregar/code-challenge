import * as React from "react";
import { Metadata } from "next";

interface IProductsLayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Products",
    description: "Our Products",
};

const ProductsLayout: React.FunctionComponent<IProductsLayout> = ({
    children,
}) => {
    return <div>{children}</div>;
};

export default ProductsLayout;
