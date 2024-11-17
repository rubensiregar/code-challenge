import HeroSection from "@/sections/Hero";
import OverviewSection from "@/sections/Overview";
import ServiceAndProdeuctsSection from "@/sections/ServicesAndProducts";
import TestimonialSection from "@/sections/Testimonials";

export default function Home() {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <OverviewSection />
            <ServiceAndProdeuctsSection />
            <TestimonialSection />
        </div>
    );
}
