
import { Heading, Text } from '@/components/ui/Typography';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
    title: 'L\'Équipe | Edelys Coiffure',
    description: 'Rencontrez notre quatuor de coiffeuses passionnées : Alisson, Coralie, Cynthia, et Shanice.',
};

const team = [
  {
    name: 'Alisson',
    role: 'Responsable du salon',
    description: 'Saluée pour son accueil au top, son écoute attentive et son management bienveillant.',
    imageUrl: '/images/team/alisson.jpg', // Placeholder image
  },
  {
    name: 'Coralie',
    role: 'Experte capillaire',
    description: 'Créative et passionnée par l\'art de la transformation et du conseil.',
    imageUrl: '/images/team/coralie.jpg', // Placeholder image
  },
  {
    name: 'Cynthia',
    role: 'Spécialiste couleur',
    description: 'Spécialiste des coupes et des techniques de coloration personnalisées.',
    imageUrl: '/images/team/cynthia.jpg', // Placeholder image
  },
  {
    name: 'Shanice',
    role: 'Experte soin & coupe',
    description: 'Professionnelle attentionnée, experte des rituels de soin et des coupes modernes.',
    imageUrl: '/images/team/shanice.jpg', // Placeholder image
  },
]

const TeamPage = () => {
  return (
    <div className="bg-creme dark:bg-dark-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Text variant="overline" className="text-peche">Nos expertes</Text>
          <Heading level={1} className="mt-2 text-charcoal dark:text-creme">
            Rencontrez notre équipe
          </Heading>
          <Text variant="body" className="mt-6 text-lg leading-8 text-charcoal/80 dark:text-grege">
            Derrière l'ambiance conviviale d'Edelys Coiffure se cache un quatuor de coiffeuses passionnées et complices.
          </Text>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {team.map((person) => (
            <li key={person.name}>
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden">
                {/* NOTE: Add actual images to /public/images/team/ */}
                <div className="bg-grege w-full h-full flex items-center justify-center">
                    <Text variant="caption" className="text-charcoal/50">Image Bientôt Disponible</Text>
                </div>
              </div>
              <Heading level={3} className="mt-6 text-charcoal dark:text-creme">
                {person.name}
              </Heading>
              <Text variant="caption" className="text-peche">{person.role}</Text>
              <Text variant="body" className="mt-2 text-charcoal/80 dark:text-grege text-sm">
                {person.description}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamPage;
