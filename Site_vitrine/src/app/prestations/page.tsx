import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Em } from "@/components/ui/Typography";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prestations & Tarifs | Edelys Coiffure",
  description:
    "La carte complète des prestations Edelys Coiffure : femmes, hommes, enfants et bar à soins Kérastase. Tarifs indicatifs, devis précis au salon.",
};

/* ============================================================
   LA CARTE — données tarifaires
   ============================================================ */

interface ServiceItem {
  name: string;
  price: string;
  note?: string;
}

interface Category {
  number: string;
  title: string;
  tagline: string;
  items: ServiceItem[];
}

const categories: Category[] = [
  {
    number: "01",
    title: "Espace Femmes",
    tagline: "Coupes, couleurs et attaches sur-mesure",
    items: [
      { name: "Shampooing — Brushing", price: "26 – 41 €" },
      { name: "Shampooing — Coupe — Séchage", price: "31 – 43 €" },
      { name: "Shampooing — Coupe — Brushing", price: "36 – 52 €" },
      {
        name: "Ciseaux chauffants haircut",
        price: "+10 €",
        note: "Scelle les pointes pour éviter les fourches.",
      },
      { name: "Couleur Majirel (L'Oréal)", price: "dès 62 €" },
      { name: "Couleur INOA (sans ammoniaque)", price: "dès 65 €" },
      { name: "Forfait Mèches + Brushing", price: "72 – 125 €" },
      { name: "Patine", price: "20 – 30 €", note: "Soin nuances légères." },
      { name: "Décoloration (racines 3 cm max)", price: "35 – 55 €" },
      { name: "Chignon élaboré", price: "35 – 60 €" },
      { name: "Forfait Mariage complet", price: "150 €" },
    ],
  },
  {
    number: "02",
    title: "Espace Hommes & Ados",
    tagline: "Le geste précis, l'allure nette",
    items: [
      { name: "Shampooing + Coupe + Coiffage", price: "23 €" },
      { name: "Coupe Homme (mi-longs / longs)", price: "29 €" },
      { name: "Coupe Adolescent (13 – 18 ans)", price: "21 €" },
      { name: "Shampooing + Coupe + Permanente", price: "75 €" },
      { name: "Couleur de Barbe", price: "Sur devis" },
    ],
  },
  {
    number: "03",
    title: "Espace Enfants",
    tagline: "Reçus comme des petits princes et princesses",
    items: [
      { name: "Bébés (moins de 3 ans)", price: "13 €" },
      { name: "Garçon (moins de 13 ans)", price: "18 €" },
      {
        name: "Fille (moins de 13 ans)",
        price: "27 €",
        note: "Coupe + séchage naturel.",
      },
    ],
  },
  {
    number: "04",
    title: "Bar à Soins Kérastase",
    tagline: "Rituels haute performance, composés au fauteuil",
    items: [
      {
        name: "Diagnostic Cuir Chevelu Kérastase",
        price: "Offert",
        note: "Analyse personnalisée de votre fibre.",
      },
      {
        name: "Soin Première",
        price: "60 – 70 €",
        note: "Recrée 96% de la force d'un cheveu sain.",
      },
      {
        name: "Soin Absolut Repair Molecular",
        price: "50 – 60 €",
        note: "Répare la structure moléculaire en profondeur.",
      },
      {
        name: "Soin Caviar Chronologiste",
        price: "90 €",
        note: "Le summum de la régénération capillaire.",
      },
      {
        name: "Cryothérapie Capillaire",
        price: "Sur devis",
        note: "Traitement révolutionnaire par le froid.",
      },
      {
        name: "Fusio-Dose / Soins profonds",
        price: "7 – 18 €",
        note: "Cocktail sur-mesure au fauteuil.",
      },
    ],
  },
];

/* ── Ligne de carte, façon menu de maison ── */
const MenuRow = ({ item }: { item: ServiceItem }) => (
  <li className="group py-4 border-b border-charcoal/[0.07] dark:border-grege/10 last:border-b-0">
    <div className="flex items-baseline gap-4">
      <span className="font-sans font-normal text-sm md:text-[15px] text-charcoal/85 dark:text-creme/85 transition-colors duration-300 group-hover:text-peche dark:group-hover:text-laiton">
        {item.name}
      </span>
      <span className="flex-1 border-b border-dotted border-charcoal/20 dark:border-grege/25 translate-y-[-3px]" />
      <span className="font-serif italic text-base md:text-lg text-charcoal/75 dark:text-grege/75 whitespace-nowrap">
        {item.price}
      </span>
    </div>
    {item.note && (
      <p className="font-sans font-light text-xs text-charcoal/40 dark:text-grege/40 mt-1.5 max-w-md">
        {item.note}
      </p>
    )}
  </li>
);

const PrestationsPage = () => {
  return (
    <main className="flex-1">
      <PageHeader
        number="03"
        eyebrow="Prestations & Tarifs"
        watermark="C"
        lines={[
          <span key="l1">La carte</span>,
          <span key="l2">
            des <Em>prestations.</Em>
          </span>,
        ]}
        lead={
          <p>
            Des soins sur-mesure pour chaque membre de la famille. Tarifs
            indicatifs, variables selon la longueur et la densité — un devis
            précis vous est toujours proposé avant la prestation.
          </p>
        }
      />

      {/* ── Les catégories, en chapitres ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-36">
        <div className="flex flex-col gap-20 md:gap-28 mt-8">
          {categories.map((category) => (
            <div
              key={category.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8"
            >
              {/* Rubrique */}
              <div className="lg:col-span-4">
                <Reveal>
                  <div className="lg:sticky lg:top-32">
                    <span className="font-serif italic text-base text-peche dark:text-laiton">
                      {category.number}
                    </span>
                    <h2 className="text-display-md text-charcoal dark:text-creme mt-3">
                      {category.title}
                    </h2>
                    <p className="font-sans font-light text-[13px] text-charcoal/50 dark:text-grege/50 mt-4 max-w-[260px] leading-relaxed">
                      {category.tagline}
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Carte */}
              <div className="lg:col-span-7 lg:col-start-6">
                <Reveal delay={0.15}>
                  <ul className="border-t border-charcoal/[0.07] dark:border-grege/10">
                    {category.items.map((item) => (
                      <MenuRow key={item.name} item={item} />
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          ))}
        </div>

        {/* ── Note & CTA ── */}
        <Reveal className="mt-24 md:mt-32 border-t border-charcoal/10 dark:border-grege/10 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="font-sans font-light text-xs text-charcoal/45 dark:text-grege/45 max-w-sm leading-relaxed">
            Les ciseaux chauffants et la cryothérapie capillaire se réservent
            uniquement par téléphone au {site.phone}.
          </p>
          <a
            href={site.planityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-3 self-start rounded-full bg-peche text-charcoal hover:text-creme dark:hover:text-charcoal [--btn-fill-color:var(--color-charcoal)] dark:[--btn-fill-color:var(--color-creme)] text-[10px] font-sans font-semibold uppercase tracking-[0.18em] px-9 py-4"
          >
            <span>Réserver sur Planity</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </section>
    </main>
  );
};

export default PrestationsPage;
