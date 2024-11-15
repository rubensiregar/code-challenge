import Image from "next/image";
import * as React from "react";

const HeroSection: React.FunctionComponent = () => {
    return (
        <section id="hero" className="h-svh bg-violet-200 relative">
            <Image src="/img/hero.webp" alt="hero" objectFit="cover" fill />
s        </section>
    );
};

export default HeroSection;
