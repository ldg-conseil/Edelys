
import { Heading, Text } from '@/components/ui/Typography';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Prestations & Tarifs | Edelys Coiffure',
    description: 'Découvrez notre carte complète de prestations pour femmes, hommes et enfants, ainsi que nos soins capillaires haute performance.',
};

const ServiceCategory = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-12">
        <Heading level={2} className="text-charcoal dark:text-creme border-b border-peche/10 dark:border-laiton/10 pb-4 mb-8">
            {title}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {children}
        </div>
    </div>
);

const ServiceItem = ({ name, price, description }: { name: string, price: string, description?: string }) => (
    <div>
        <div className="flex justify-between items-baseline">
            <Text className="font-medium text-charcoal dark:text-creme/90">{name}</Text>
            <Text className="text-peche dark:text-laiton font-semibold">{price}</Text>
        </div>
        {description && <Text variant="caption" className="text-charcoal/50 dark:text-grege/50 mt-1">{description}</Text>}
    </div>
);


const PricingPage = () => {
  return (
    <div className="bg-creme dark:bg-cinema-bg py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
                <Heading level={1} number="01" className="text-charcoal dark:text-creme">
                    Prestations & Tarifs
                </Heading>
            </div>

            <div className="mt-20">
                {/* FEMMES */}
                <ServiceCategory title="👩 Espace Femmes">
                    <ServiceItem name="Shampooing - Brushing" price="26-41 €" />
                    <ServiceItem name="Shampooing - Coupe - Séchage" price="31-43 €" />
                    <ServiceItem name="Shampooing - Coupe - Brushing" price="36-52 €" />
                    <ServiceItem name="Ciseaux chauffants haircut" price="10 €" description="Scelle les pointes pour éviter les fourches." />
                    <ServiceItem name="Couleur Majirel (L'Oréal)" price="dès 62 €" />
                    <ServiceItem name="Couleur INOA (Sans ammoniaque)" price="dès 65 €" />
                    <ServiceItem name="Forfait Mèches + Brushing" price="72-125 €" />
                    <ServiceItem name="Patine" price="20-30 €" description="Soin nuances légères." />
                    <ServiceItem name="Décoloration (racines 3 cm max)" price="35-55 €" />
                    <ServiceItem name="Chignon élaboré" price="35-60 €" />
                    <ServiceItem name="Forfait Mariage complet" price="150 €" />
                </ServiceCategory>

                {/* HOMMES & ADOS */}
                <ServiceCategory title="👨 Espace Hommes & Ados">
                    <ServiceItem name="Shampooing + Coupe + Coiffage" price="23 €" />
                    <ServiceItem name="Coupe Homme (Cheveux mi-longs / longs)" price="29 €" />
                    <ServiceItem name="Coupe Adolescent (13-18 ans)" price="21 €" />
                    <ServiceItem name="Shampooing + Coupe + Permanente" price="75 €" />
                    <ServiceItem name="Couleur de Barbe" price="Sur devis" />
                </ServiceCategory>
                
                {/* ENFANTS */}
                <ServiceCategory title="👶 Espace Enfants">
                    <ServiceItem name="Bébés (- de 3 ans)" price="13 €" />
                    <ServiceItem name="Garçon (- de 13 ans)" price="18 €" />
                    <ServiceItem name="Fille (- de 13 ans)" price="27 €" description="Coupe + séchage naturel." />
                </ServiceCategory>

                {/* BAR A SOINS */}
                <div>
                    <Heading level={2} className="text-center text-charcoal dark:text-creme border-b border-peche/10 dark:border-laiton/10 pb-4 mb-12">
                        🧪 Bar à Soins Haute Performance
                    </Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceItem name="Diagnostic Cuir Chevelu Kérastase" price="Offert" description="Analyse personnalisée de votre fibre." />
                        <ServiceItem name="Soin Première Kérastase" price="60-70 €" description="Recrée 96% de la force d'un cheveu sain." />
                        <ServiceItem name="Soin Absolut Repair Molecular" price="50-60 €" description="Répare la structure moléculaire en profondeur." />
                        <ServiceItem name="Soin Caviar Chronologiste" price="90 €" description="Le summum de la régénération capillaire." />
                        <ServiceItem name="Cryothérapie Capillaire" price="Sur devis" description="Traitement révolutionnaire par le froid." />
                        <ServiceItem name="Soin Fusio-Dose / Soins profonds" price="7-18 €" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingPage;
