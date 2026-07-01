import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Em } from "@/components/ui/Typography";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Le Salon | Edelys Coiffure",
  description:
    "Découvrez la philosophie d'Edelys Coiffure : un salon familial et haut de gamme au cœur de La Ferté-Alais, où chaque prestation commence par l'écoute.",
};

const values = [
  {
    title: "L'écoute",
    text: "Chaque rendez-vous commence par un échange : vos goûts, votre routine, la nature de vos cheveux. Le style se construit à deux.",
  },
  {
    title: "La précision",
    text: "Formées aux dernières techniques — patine, ombré hair, ciseaux chauffants — nous travaillons la matière avec une exigence clinique.",
  },
  {
    title: "Le bien-être",
    text: "Un cadre chaleureux, un café servi au fauteuil, des rituels de soin sensoriels : le temps s'arrête, vos cheveux respirent.",
  },
];

const AboutPage = () => {
  return (
    <main className="flex-1">
      <PageHeader
        number="01"
        eyebrow={`Le Salon — ${site.city}`}
        watermark="E"
        lines={[
          <span key="l1">Plus qu&apos;un salon,</span>,
          <Em key="l2">une signature.</Em>,
        ]}
        lead={
          <p>
            Au cœur de {site.city}, entre la gare et le château de Villiers,
            Edelys Coiffure cultive une certaine idée de la coiffure : précise
            comme un geste d&apos;atelier, chaleureuse comme une maison de
            famille.
          </p>
        }
      />

      {/* ── Façade pleine largeur ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <figure>
            <div className="img-zoom relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm">
              <Image
                src="/images/salon-facade.jpg"
                alt="La façade du salon Edelys Coiffure, 2 Rue Eugène Millet à La Ferté-Alais"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1400px) 100vw, 1400px"
              />
            </div>
            <figcaption className="font-sans text-[10px] tracking-[0.15em] uppercase text-charcoal/40 dark:text-grege/40 mt-4">
              Fig. 01 — {site.address.street}, {site.address.zip} {site.city}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── La philosophie ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-eyebrow text-[9px] text-peche dark:text-laiton">
                La philosophie
              </p>
              <h2 className="text-display-md text-charcoal dark:text-creme mt-6">
                Un moment d&apos;échange, avant tout.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.15}>
              <blockquote className="font-serif font-light italic text-2xl md:text-4xl leading-[1.3] text-charcoal/85 dark:text-grege/85 border-l border-peche dark:border-laiton pl-8">
                « La coiffure ne se limite pas à une coupe ou à une couleur :
                c&apos;est un véritable moment d&apos;échange. »
              </blockquote>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="font-sans font-light text-sm md:text-[15px] leading-[1.9] text-charcoal/65 dark:text-grege/65 mt-10 space-y-6 max-w-xl">
                <p>
                  Que vous veniez pour une patine — ce soin pigmenté léger qui
                  ravive l&apos;éclat et neutralise les reflets indésirables —
                  ou pour un ombré hair subtil, dégradé lumineux allant de
                  racines naturelles vers des pointes éclaircies, nous mettons
                  tout notre savoir-faire en œuvre.
                </p>
                <p>
                  Notre équipe est formée aux dernières tendances techniques et
                  saura vous guider si vous hésitez sur le choix de votre
                  style. Votre coiffure doit s&apos;accorder parfaitement à vos
                  goûts, à votre routine quotidienne et à la nature de vos
                  cheveux.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Les valeurs ── */}
      <section className="bg-[var(--paper)] transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.12}>
                <div className="border-t border-charcoal/15 dark:border-grege/15 pt-8">
                  <span className="font-serif italic text-base text-peche dark:text-laiton">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif font-light text-3xl md:text-4xl text-charcoal dark:text-creme mt-4">
                    {value.title}
                  </h3>
                  <p className="font-sans font-light text-[13px] leading-[1.9] text-charcoal/60 dark:text-grege/60 mt-5">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Un salon familial ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-eyebrow text-[9px] text-peche dark:text-laiton">
                L&apos;esprit de famille
              </p>
              <h2 className="text-display-md text-charcoal dark:text-creme mt-6">
                Toutes les générations, sous un même toit.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-6">
            <Reveal delay={0.15}>
              <div className="font-sans font-light text-sm md:text-[15px] leading-[1.9] text-charcoal/65 dark:text-grege/65 space-y-6 max-w-xl">
                <p>
                  Situé au {site.address.street}, notre espace est entouré de
                  nombreux commerces de proximité, facilitant vos haltes
                  bien-être en centre-ville.
                </p>
                <p>
                  Nous accordons une importance toute particulière aux
                  familles : ici, les enfants et les bébés sont reçus comme des
                  petits princes et princesses, avec des attentions dédiées et
                  des tarifs tout doux.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25} className="mt-10">
              <Link
                href="/equipe"
                className="link-underline text-eyebrow text-[9px] text-charcoal/60 dark:text-grege/60"
              >
                Rencontrer l&apos;équipe
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
