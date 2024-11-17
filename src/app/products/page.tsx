import { Breaker } from "@/components/Breaker";
import CardProduct from "@/components/CardProduct";
import * as React from "react";
import contentfulClient from "@/lib/contentfulClient";
import {
    TypeGarajiProductSkeleton,
    TypeProductAsset,
} from "@/types/product-type";

const getProducts = async () => {
    console.log("SEBELUM COBA");
    try {
        const res =
            await contentfulClient.getEntries<TypeGarajiProductSkeleton>({
                content_type: "garajiProduct",
            });
        console.log("DATA DARI MANA HAYO\n", res.items);
        return res;
    } catch (error) {
        console.log("SETELAH ERROR\n", error);
    }
};

const ProductsPage: React.FunctionComponent = async () => {
    const products = await getProducts();
    return (
        <div>
            <Breaker title="our model kits" />
            <section className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 md:px-20 xl:grid-cols-4">
                {products &&
                    products.items
                        ?.filter((produk) => produk.fields.alt === "Model Kit")
                        .map((produk, index) => (
                            <CardProduct
                                key={index}
                                idx={index}
                                title={produk.fields.title}
                                grade={produk.fields.grade}
                                price={produk.fields.price.toLocaleString()}
                                src={`https:${
                                    (produk.fields.image as TypeProductAsset)
                                        ?.fields.file.url
                                }`}
                                alt={produk.fields.alt}
                            />
                        ))}
            </section>
            <Breaker title="Available Supplies" />
            <section className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 md:px-20 xl:grid-cols-4">
                {products &&
                    products.items
                        ?.filter((produk) => produk.fields.alt === "Tool")
                        .map((produk, index) => (
                            <CardProduct
                                key={index}
                                idx={index}
                                title={produk.fields.title}
                                grade={produk.fields.grade}
                                price={produk.fields.price.toLocaleString()}
                                src={`https:${
                                    (produk.fields.image as TypeProductAsset)
                                        ?.fields.file.url
                                }`}
                                alt={produk.fields.alt}
                            />
                        ))}
            </section>
        </div>
    );
};

export default ProductsPage;
