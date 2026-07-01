import { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Em } from "@/components/ui/Typography";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "L'Équipe | Edelys Coiffure",
  description:
    "Rencontrez le quatuor d'expertes Edelys Coiffure : Alisson, Coralie, Cynthia et Shanice — passionnées, complices et formées aux dernières techniques.",
};

const team = [
  {
    name: "Alisson",
    role: "Responsable du salon",
    description:
      "Saluée pour son accueil au top, son écoute attentive et son management bienveillant.",
    image: "/images/team/alisson.jpg",
    offset: "",
  },
  {
    name: "Coralie",
    role: "Experte capillaire",
    description:
      "Créative et passionnée par l'art de la transformation et du conseil.",
    image: "/images/team/coralie.jpg",
    offset: "md:mt-16",
  },
  {
    name: "Cynthia",
    role: "Spécialiste couleur",
    description:
      "Spécialiste des coupes et des techniques de coloration personnalisées.",
    image: "/images/team/cynthia.jpg",
    offset: "md:mt-8",
  },
  {
    name: "Shanice",
    role: "Experte soin & coupe",
    description:
      "Professionnelle attentionnée, experte des rituels de soin et des coupes modernes.",
    image: "/images/team/shanice.jpg",
    offset: "md:mt-24",
  },
];

const TeamPage = () => {
  return (
    <main className="flex-1">
      <PageHeader
        number="02"
        eyebrow="L'Équipe"
        watermark="4"
        lines={[
          <span key="l1">Le quatuor</span>,
          <Em key="l2">Edelys.</Em>,
        ]}
        lead={
          <p>
            Derrière l&apos;ambiance conviviale du salon se cache un quatuor de
            coiffeuses passionnées et complices — quatre regards, quatre
            spécialités, une même exigence.
          </p>
        }
      />

      {/* ── Photo de groupe ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <figure>
            <div className="img-zoom relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                src="/images/equipe.jpg"
                alt="L'équipe Edelys Coiffure au complet dans le salon"
                fill
                priority
                className="object-cover object-[50%_40%]"
                sizes="(max-width: 1400px) 100vw, 1400px"
              />
            </div>
            <figcaption className="font-sans text-[10px] tracking-[0.15em] uppercase text-charcoal/40 dark:text-grege/40 mt-4">
              Fig. 01 — L&apos;équipe au complet, dans le salon
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── Portraits ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {team.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.1} className={person.offset}>
              <article>
                <div className="img-reveal-color relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={person.image}
                    alt={`${person.name} — ${person.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex items-baseline gap-3 mt-6">
                  <span className="font-sans text-[10px] tracking-[0.2em] text-charcoal/35 dark:text-grege/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif font-light text-3xl text-charcoal dark:text-creme">
                    {person.name}
                  </h2>
                </div>
                <p className="text-eyebrow text-[8px] md:text-[9px] text-peche dark:text-laiton mt-2 ml-7">
                  {person.role}
                </p>
                <p className="font-sans font-light text-[13px] leading-[1.9] text-charcoal/60 dark:text-grege/60 mt-4 ml-7">
                  {person.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ── CTA ── */}
        <Reveal className="mt-20 md:mt-28 border-t border-charcoal/10 dark:border-grege/10 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="font-serif font-light text-2xl md:text-3xl text-charcoal dark:text-creme max-w-md">
            Choisissez votre experte, ou laissez-vous{" "}
            <Em>guider.</Em>
          </p>
          <a
            href={site.planityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-3 self-start rounded-full bg-peche text-charcoal hover:text-creme dark:hover:text-charcoal [--btn-fill-color:var(--color-charcoal)] dark:[--btn-fill-color:var(--color-creme)] text-[10px] font-sans font-semibold uppercase tracking-[0.18em] px-9 py-4"
          >
            <span>Prendre rendez-vous</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </section>
    </main>
  );
};

export default TeamPage;
