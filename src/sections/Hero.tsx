import Image from "next/image";
import * as React from "react";

const HeroSection: React.FunctionComponent = () => {
    return (
        <section className="flex flex-col h-[100vh]">
            <div className="grow mt-20 p-20  flex flex-col gap-4 items-center">
                <h1 className="uppercase text-2xl md:text-3xl font-thin">
                    welcome to
                </h1>
                <h1 className="uppercase text-8xl md:text-9xl font-thin">
                    garaji
                </h1>
                <h1 className=" uppercase text-3xl md:text-4xl font-thin text-center">
                    we can cover your laziness for you
                </h1>
            </div>
            <div className="h-[60vh] bg-violet-200 relative">
                <Image
                    quality={20}
                    src="/img/hero/hero-4.jpg"
                    alt="hero"
                    objectFit="cover"
                    fill
                />
            </div>
        </section>
    );
};

export default HeroSection;
