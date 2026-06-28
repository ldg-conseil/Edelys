import { ArrowRight, Scissors, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="flex-1 max-w-5xl mx-auto w-full py-24 px-6 md:py-32">
      <div className="mb-16 pb-8 border-b border-charcoal/10 dark:border-creme/10">
        <Text variant="overline" className="mb-4 inline-block">Design System (V1)</Text>
        <Heading level={1} className="mb-4">UI Kit : <span className="italic text-peche">Les Fondations</span></Heading>
        <Text variant="subtitle">
          Voici un aperçu des composants de base réutilisables qui constitueront l'interface du site Edelys.
        </Text>
      </div>

      <div className="space-y-20">
        {/* TYPOGRAPHY SECTION */}
        <section>
          <div className="mb-8">
            <Heading level={3} className="text-peche mb-2">Typographie</Heading>
            <Text variant="caption">Hiérarchie des titres et des textes</Text>
          </div>
          
          <div className="space-y-8 bg-white/50 dark:bg-dark-card/50 p-8 rounded-xl border border-charcoal/5 dark:border-white/5 backdrop-blur-sm">
            <div>
              <Text variant="caption" className="mb-2">Heading 1 (Cormorant)</Text>
              <Heading level={1}>L'architecture du cheveu</Heading>
            </div>
            <div>
              <Text variant="caption" className="mb-2">Heading 2 (Cormorant)</Text>
              <Heading level={2}>Nos rituels sur-mesure</Heading>
            </div>
            <div>
              <Text variant="caption" className="mb-2">Heading 3 (Cormorant)</Text>
              <Heading level={3}>L'expertise Kérastase</Heading>
            </div>
            <div>
              <Text variant="caption" className="mb-2">Subtitle (Montserrat)</Text>
              <Text variant="subtitle">Un moment de déconnexion absolue dans un cadre confidentiel.</Text>
            </div>
            <div>
              <Text variant="caption" className="mb-2">Body (Montserrat)</Text>
              <Text variant="body">
                Plongez dans l'univers Edelys Coiffure, où chaque coup de ciseaux est pensé pour sublimer
                la matière. Nous utilisons des protocoles exclusifs pour révéler l'éclat de vos cheveux.
              </Text>
            </div>
          </div>
        </section>

        {/* BUTTONS SECTION */}
        <section>
          <div className="mb-8">
            <Heading level={3} className="text-peche mb-2">Boutons</Heading>
            <Text variant="caption">Interactions et Call-to-Actions pleins</Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary */}
            <div className="flex flex-col gap-6 p-8 bg-white/50 dark:bg-dark-card/50 rounded-xl border border-charcoal/5 dark:border-white/5">
              <Text variant="overline" className="text-center">Primary</Text>
              <Button variant="primary" size="md">Réserver</Button>
              <Button variant="primary" size="md" icon={Calendar}>Prendre RDV</Button>
              <Button variant="primary" size="lg" icon={ArrowRight} fullWidth>Découvrir</Button>
            </div>

            {/* Secondary */}
            <div className="flex flex-col gap-6 p-8 bg-white/50 dark:bg-dark-card/50 rounded-xl border border-charcoal/5 dark:border-white/5">
              <Text variant="overline" className="text-center">Secondary (Peche)</Text>
              <Button variant="secondary" size="md">La Carte</Button>
              <Button variant="secondary" size="md" icon={Scissors}>Prestations</Button>
              <Button variant="secondary" size="lg" icon={Sparkles} fullWidth>L'Expertise</Button>
            </div>

            {/* Outline */}
            <div className="flex flex-col gap-6 p-8 bg-white/50 dark:bg-dark-card/50 rounded-xl border border-charcoal/5 dark:border-white/5">
              <Text variant="overline" className="text-center">Outline</Text>
              <Button variant="outline" size="md">Contact</Button>
              <Button variant="outline" size="md" icon={ArrowRight}>Nous trouver</Button>
              <Button variant="outline" size="lg" fullWidth>Le Salon</Button>
            </div>
          </div>
        </section>

        {/* LOGO SECTION */}
        <section>
          <div className="mb-8">
            <Heading level={3} className="text-peche mb-2">Logos & Identité</Heading>
            <Text variant="caption">Intégration du logo sous plusieurs formats</Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Header Version */}
            <div className="flex flex-col gap-6 p-8 bg-white/50 dark:bg-dark-card/50 rounded-xl border border-charcoal/5 dark:border-white/5 items-center justify-center">
              <Text variant="overline" className="text-center w-full">Version Header (Petit + Rond)</Text>
              <div className="bg-charcoal dark:bg-[#111] p-6 rounded-lg w-full flex justify-center">
                <Logo variant="round" size="sm" withLink={false} />
              </div>
            </div>

            {/* Square Version */}
            <div className="flex flex-col gap-6 p-8 bg-white/50 dark:bg-dark-card/50 rounded-xl border border-charcoal/5 dark:border-white/5 items-center justify-center">
              <Text variant="overline" className="text-center w-full">Version Carrée (Large)</Text>
              <div className="bg-charcoal dark:bg-[#111] p-6 rounded-lg w-full flex justify-center">
                <Logo variant="square" size="lg" withLink={false} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
