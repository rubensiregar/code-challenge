import * as React from "react";
import Marquee from "react-fast-marquee";

const testi = [
    {
        title: "Pengerjaan cepat",
        nama: "Marcelino Arbi",
        kota: "surabaya",
    },
    {
        title: "Hasil Sangat Memuaskan",
        nama: "Jonathan Edward",
        kota: "medan",
    },
    {
        title: "Pelayanan sangat baik, pengiriman cepat",
        nama: "Buana Putera",
        kota: "bojonegoro",
    },
    {
        title: "Seller ramah, pengerjaan sangat rapih",
        nama: "Hamukti Diaz",
        kota: "surabaya",
    },
];

const ListTesti: React.FunctionComponent = () => {
    return (
        <div>
            <Marquee className="p-12" autoFill={true} pauseOnHover={true}>
                <div className="flex gap-8 m-4">
                    {testi.map((t: any, i: number) => (
                        <div
                            className="rounded-xl min-w-80 p-8 bg-violet-100"
                            key={i}
                        >
                            <h1 className="text-xl font-bold italic">
                                <span>&quot;</span>
                                {t.title}
                                <span>&quot;</span>
                            </h1>
                            <p className="text-lg">
                                <span>- </span>
                                {t.nama}
                                <span>, </span>
                                <span className="uppercase">{t.kota}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default ListTesti;
