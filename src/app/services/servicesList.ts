export interface IService {
    title: string;
    price: string;
    eta: string;
    src: string;
    alt: string;
}

export const services: IService[] = [
    {
        title: "[MUSUME] Straight Build",
        price: "240.000",
        eta: "7",
        src: "/img/stand/stand-5.jpg",
        alt: "Straight Build",
    },
    {
        title: "[PG] Straight Build",
        price: "740,000",
        eta: "10-18",
        src: "/img/stand/stand-15.webp",
        alt: "Straight Build",
    },
    {
        title: "[MG] Straight Build",
        price: "260.000",
        eta: "6",
        src: "/img/stand/stand-3.webp",
        alt: "Straight Build",
    },
    {
        title: "[RG] Straight Build",
        price: "180.000",
        eta: "4",
        src: "/img/stand/stand-14.webp",
        alt: "Straight Build",
    },
    {
        title: "[HG] Straight Build",
        price: "120.000",
        eta: "4",
        src: "/img/stand/stand-9.webp",
        alt: "Straight Build",
    },
    {
        title: "[HMM] Straight Build",
        price: "360.000",
        eta: "14-21",
        src: "/img/stand/stand-4.jpg",
        alt: "Straight Build",
    },
];

export const addons: IService[] = [
    {
        title: "[ADD-ON] Decal",
        price: "60.000",
        eta: "2",
        src: "/img/detail/add-4.webp",
        alt: "Add-ons",
    },
    {
        title: "[ADD-ON] Top Coat ",
        price: "150.000",
        eta: "4",
        src: "/img/detail/add-3.jpg",
        alt: "Add-ons",
    },
    {
        title: "[ADD-ON] Top Coat XL ",
        price: "300.000",
        eta: "4",
        src: "/img/detail/add-1.jpg",
        alt: "Add-ons",
    },
    {
        title: "[ADD-ON] Panel Linning ",
        price: "40.000",
        eta: "2",
        src: "/img/detail/add-2.jpg",
        alt: "Add-ons",
    },
];
