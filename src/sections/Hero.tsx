import Image from "next/image";
import * as React from "react";

const HeroSection: React.FunctionComponent = () => {
    return (
        <section id="hero" className="h-[75vh] bg-violet-200 relative">
            <Image
                quality={100}
                src="/img/hero/hero-4.jpg"
                alt="hero"
                objectFit="cover"       
                fill
            />
            s{" "}
        </section>
    );
};

export default HeroSection;
