import HeroSection from "@/sections/Hero";
import OverviewSection from "@/sections/Overview";
import TestimonialSection from "@/sections/Testimonials";

export default function Home() {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <OverviewSection />
            <TestimonialSection/>
        </div>
    );
}
