import CardDesc from "@/components/CardDesc";
import Link from "next/link";
import * as React from "react";

const OverviewSection: React.FunctionComponent = () => {
    return (
        <section className="p-8 md:p-16 flex flex-col items-center gap-8">
            <CardDesc
                title="garaji adalah"
                desc="Bermula dari keinginan untuk mengasah kemampuan dalam merakit model kit plastik, sampai menjadi ahli dalam mengeksekusi model kit yang rumit dan memiliki bahan dasar yang tidak masuk akal. Kami akan selalu siap untuk menerima permintaan di luar nalar dari pelanggan dan memberikan hasil yang tidak akan terduga memuaskan"
                src="/img/stand/stand-15.webp"
                alt="hero"
            />
            <Link
                className="hover:bg-violet-400 hover:text-white h-[60px] w-3/4 shadow-xl rounded-xl bg-violet-200 flex justify-center items-center transition ease-in-out delay-100"
                href={"/about"}
            >
                <p className="text-xl font-thin">more about us</p>
            </Link>
        </section>
    );
};

export default OverviewSection;
