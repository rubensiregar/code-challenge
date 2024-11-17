import CardService from "@/components/CardService";
import * as React from "react";
import { Breaker } from "@/components/Breaker";
import {
    TypeGarajiProductSkeleton,
    TypeProductAsset,
} from "@/types/product-type";
import contentfulClient from "@/lib/contentfulClient";

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
        console.log("SETELAH ERROR");
    }
};

const ServicesPage: React.FunctionComponent = async () => {
    const services = await getProducts();
    return (
        <div className="">
            <Breaker title="our services" />
            <section className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 md:px-20 xl:grid-cols-4">
                {services &&
                    services.items
                        ?.filter(
                            (produk) => produk.fields.alt === "Straight Build"
                        )
                        .map((produk, index) => (
                            <CardService
                                key={index}
                                idx={index}
                                title={produk.fields.title}
                                eta={produk.fields.grade}
                                price={produk.fields.price.toLocaleString()}
                                src={`https:${
                                    (produk.fields.image as TypeProductAsset)
                                        ?.fields.file.url
                                }`}
                                alt={produk.fields.alt}
                            />
                        ))}
            </section>
            <Breaker title="add-ons" />
            <section className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 md:px-20 xl:grid-cols-4">
                {services &&
                    services.items
                        ?.filter((produk) => produk.fields.alt === "Add-ons")
                        .map((produk, index) => (
                            <CardService
                                idx={index}
                                title={produk.fields.title}
                                eta={produk.fields.grade}
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

export default ServicesPage;
