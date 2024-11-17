import { Breaker } from "@/components/Breaker";
import CardProduct from "@/components/CardProduct";
import CardService from "@/components/CardService";
import contentfulClient from "@/lib/contentfulClient";
import {
    TypeGarajiProductSkeleton,
    TypeProductAsset,
} from "@/types/product-type";
import Link from "next/link";
import * as React from "react";
import Marquee from "react-fast-marquee";

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

const ServiceAndProdeuctsSection: React.FunctionComponent = async () => {
    const products = await getProducts();

    return (
        <div>
            <Breaker title="our services" />
            <Marquee className="p-8" autoFill={true} pauseOnHover={true}>
                <Link href={"/services"} className="flex">
                    {products &&
                        products.items
                            ?.filter(
                                (produk) =>
                                    produk.fields.alt === "Straight Build"
                            )
                            .map((produk, index) => (
                                <div className="p-4">
                                    <CardService
                                        key={index}
                                        idx={index}
                                        title={produk.fields.title}
                                        eta={produk.fields.grade}
                                        // price={produk.fields.price.toLocaleString()}
                                        src={`https:${
                                            (
                                                produk.fields
                                                    .image as TypeProductAsset
                                            )?.fields.file.url
                                        }`}
                                        alt={produk.fields.alt}
                                    />
                                </div>
                            ))}
                </Link>
            </Marquee>

            <Breaker title="our products" />
            <Marquee className="p-8" autoFill={true} pauseOnHover={true}>
                <Link href={"/products"} className="flex">
                    {products &&
                        products.items
                            ?.filter(
                                (produk) =>
                                    produk.fields.alt === "Model Kit"
                            )
                            .map((produk, index) => (
                                <div className="p-4">
                                    <CardService
                                        key={index}
                                        idx={index}
                                        title={produk.fields.title}
                                        eta={produk.fields.grade}
                                        // price={produk.fields.price.toLocaleString()}
                                        src={`https:${
                                            (
                                                produk.fields
                                                    .image as TypeProductAsset
                                            )?.fields.file.url
                                        }`}
                                        alt={produk.fields.alt}
                                    />
                                </div>
                            ))}
                </Link>
            </Marquee>
        </div>
    );
};

export default ServiceAndProdeuctsSection;
