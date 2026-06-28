import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
    </main>
  );
}
