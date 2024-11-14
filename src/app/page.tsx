import HeroSection from "@/sections/Hero";
import OverviewSection from "@/sections/Overview";

export default function Home() {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <OverviewSection />
        </div>
    );
}
