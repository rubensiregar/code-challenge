import CardDesc from "@/components/CardDesc";
import Image from "next/image";
import * as React from "react";

interface IOverviewSectionProps {}

const OverviewSection: React.FunctionComponent<IOverviewSectionProps> = (
    props
) => {
    return (
        <section className="p-8 md:p-20 space-y-12">
            <CardDesc
                title="garaji adalah"
                desc="Bermula dengan Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            corporis voluptatum velit ipsam ex voluptate, quas voluptas
            recusandae distinctio veniam illum nulla tempore numquam deleniti
            vero enim adipisci nisi repellendus?"
                src="/img/stand/stand-15.webp"
                alt="hero"
            />

            <CardDesc
                orientation="a"
                title="quality"
                desc="Our pleasure is to Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            corporis voluptatum velit ipsam ex voluptate, quas voluptas
            recusandae distinctio veniam illum"
                src="/img/detail/detail-5.webp"
                alt="quality detail"
            />
            <CardDesc
                title="Efficiency"
                desc="We deliver the most Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            corporis voluptatum velit ipsam ex voluptate, quas voluptas
            recusandae distinctio veniam illum"
                src="/img/detail/detail-6.webp"
                alt="effiency detail"
            />
        </section>
    );
};

export default OverviewSection;
