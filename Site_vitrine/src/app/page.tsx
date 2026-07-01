import { HeroEditorial } from "@/components/sections/HeroEditorial";
import { SalonChapter } from "@/components/sections/SalonChapter";
import { ServicesChapter } from "@/components/sections/ServicesChapter";
import { KerastaseChapter } from "@/components/sections/KerastaseChapter";
import { GalleryChapter } from "@/components/sections/GalleryChapter";
import { TeamChapter } from "@/components/sections/TeamChapter";
import { TestimonialBand } from "@/components/sections/TestimonialBand";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <HeroEditorial />
      <Marquee
        items={[
          "Coupe",
          "Balayage",
          "Patine",
          "Soin Kérastase",
          "Couleur",
          "Chignon",
          "Brushing",
          "Cryothérapie",
        ]}
      />
      <SalonChapter />
      <ServicesChapter />
      <KerastaseChapter />
      <GalleryChapter />
      <TeamChapter />
      <TestimonialBand />
    </main>
  );
}
