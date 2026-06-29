
import { Heading, Text } from '@/components/ui/Typography';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'À Propos | Edelys Coiffure',
    description: 'Découvrez la philosophie et l\'histoire de notre salon de coiffure familial situé au cœur de La Ferté-Alais.',
};

const AboutPage = () => {
  return (
    <div className="bg-creme dark:bg-dark-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Text variant="overline" className="text-peche">Notre Histoire</Text>
          <Heading level={1} className="mt-2 text-charcoal dark:text-creme">
            Plus qu'un salon, une signature.
          </Heading>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
                <Heading level={2} className="text-charcoal dark:text-creme">Notre Philosophie</Heading>
                <div className="mt-6 space-y-7 text-base text-charcoal/80 dark:text-grege">
                    <Text>
                        Chez Edelys Coiffure, nous pensons que la coiffure ne se limite pas à une coupe ou à une couleur : c'est un véritable moment d'échange. Que vous veniez pour une patine (un soin pigmenté léger qui ravive l'éclat et neutralise les reflets indésirables) ou pour un ombré hair subtil (un dégradé lumineux allant de racines naturelles vers des pointes éclaircies), nous mettons tout notre savoir-faire en œuvre.
                    </Text>
                    <Text>
                        Notre équipe est formée aux dernières tendances techniques et saura vous guider si vous hésitez sur le choix de votre style. Nous veillons à ce que votre coiffure s’accorde parfaitement à vos goûts, à votre routine quotidienne et à la nature de vos cheveux.
                    </Text>
                </div>
            </div>
            <div>
                <Heading level={2} className="text-charcoal dark:text-creme">Un salon familial au cœur de la commune</Heading>
                <div className="mt-6 space-y-7 text-base text-charcoal/80 dark:text-grege">
                    <Text>
                        Situé au 2 Rue Eugène Millet, notre espace est entouré de nombreux commerces de proximité, facilitant vos haltes bien-être en centre-ville. 
                    </Text>
                    <Text>
                        Nous accordons une importance toute particulière aux familles : ici, les enfants et les bébés sont reçus comme des petits princes et princesses, avec des attentions dédiées et des tarifs tout doux.
                    </Text>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
