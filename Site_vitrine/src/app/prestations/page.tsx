import { Metadata } from 'next';
import PrestationsContent from '@/components/sections/PrestationsContent';

export const metadata: Metadata = {
    title: 'Prestations & Tarifs | Edelys Coiffure',
    description: 'Découvrez notre carte complète de prestations pour femmes, hommes et enfants, ainsi que nos soins capillaires haute performance.',
};

export default function PrestationsPage() {
  return <PrestationsContent />;
}
