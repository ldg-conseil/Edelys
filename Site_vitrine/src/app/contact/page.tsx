import { Metadata } from "next";
import { ArrowUpRight, Star } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Em } from "@/components/ui/Typography";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Infos Pratiques | Edelys Coiffure",
  description:
    "Coordonnées, horaires d'ouverture et réservation en ligne. Edelys Coiffure, 2 Rue Eugène Millet, 91590 La Ferté-Alais — 01 69 90 39 59.",
};

const testimonials = [
  {
    quote: "Parfait comme d'habitude. Une équipe charmante et à l'écoute.",
    author: "Avis Google",
  },
  {
    quote:
      "Toujours un bon accueil, ambiance chaleureuse et conviviale. Alisson et son équipe sont au top ! Je recommande l'analyse du cuir chevelu.",
    author: "Avis Google",
  },
];

const ContactPage = () => {
  return (
    <main className="flex-1">
      <PageHeader
        number="04"
        eyebrow="Contact & Infos pratiques"
        watermark="C"
        lines={[
          <span key="l1">Prenez</span>,
          <Em key="l2">rendez-vous.</Em>,
        ]}
        lead={
          <p>
            En ligne via Planity, par téléphone, ou en poussant simplement la
            porte du salon — nous vous accueillons du lundi après-midi au
            samedi.
          </p>
        }
      />

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 mt-8">
          {/* ── Informations éditoriales ── */}
          <div className="lg:col-span-6">
            <Reveal>
              <dl>
                <div className="grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-6 border-t border-charcoal/10 dark:border-grege/10 py-7">
                  <dt className="text-eyebrow text-[9px] text-charcoal/45 dark:text-grege/45 pt-1.5">
                    Adresse
                  </dt>
                  <dd>
                    <address className="not-italic font-serif font-light text-2xl md:text-3xl text-charcoal dark:text-creme leading-snug">
                      {site.address.street},
                      <br />
                      {site.address.zip} {site.address.city}
                    </address>
                    <p className="font-sans font-light text-xs text-charcoal/45 dark:text-grege/45 mt-3">
                      À deux pas de la gare RER D et du château de Villiers.
                    </p>
                  </dd>
                </div>

                <div className="grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-6 border-t border-charcoal/10 dark:border-grege/10 py-7">
                  <dt className="text-eyebrow text-[9px] text-charcoal/45 dark:text-grege/45 pt-1.5">
                    Téléphone
                  </dt>
                  <dd>
                    <a
                      href={site.phoneHref}
                      className="font-serif font-light text-2xl md:text-3xl text-charcoal dark:text-creme hover:text-peche dark:hover:text-laiton transition-colors duration-300"
                    >
                      {site.phone}
                    </a>
                    <p className="font-sans font-light text-xs text-charcoal/45 dark:text-grege/45 mt-3">
                      Indispensable pour réserver les ciseaux chauffants ou la
                      cryothérapie.
                    </p>
                  </dd>
                </div>

                <div className="grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-6 border-t border-b border-charcoal/10 dark:border-grege/10 py-7">
                  <dt className="text-eyebrow text-[9px] text-charcoal/45 dark:text-grege/45 pt-1.5">
                    Horaires
                  </dt>
                  <dd className="flex flex-col gap-3">
                    {site.hours.map((h) => (
                      <div key={h.days} className="flex flex-col">
                        <span className="font-sans text-sm text-charcoal/80 dark:text-creme/80">
                          {h.days}
                        </span>
                        <span className="font-sans font-light text-xs text-charcoal/45 dark:text-grege/45 mt-0.5">
                          {h.slots}
                        </span>
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* ── Panneau réservation ── */}
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.15}>
              <div className="bg-[var(--paper)] transition-colors duration-500 rounded-sm border border-charcoal/[0.06] dark:border-cinema-border p-10 md:p-12">
                <p className="text-eyebrow text-[9px] text-peche dark:text-laiton">
                  Réservation en ligne
                </p>
                <p className="font-serif font-light text-3xl md:text-4xl text-charcoal dark:text-creme leading-tight mt-6">
                  Votre créneau, en <Em>quelques secondes.</Em>
                </p>
                <p className="font-sans font-light text-[13px] leading-[1.9] text-charcoal/60 dark:text-grege/60 mt-6">
                  Choisissez votre prestation, votre experte et votre horaire
                  sur Planity. Confirmation immédiate, rappel automatique.
                </p>
                <a
                  href={site.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fill inline-flex items-center justify-center gap-3 w-full rounded-full bg-peche text-charcoal hover:text-creme dark:hover:text-charcoal [--btn-fill-color:var(--color-charcoal)] dark:[--btn-fill-color:var(--color-creme)] text-[10px] font-sans font-semibold uppercase tracking-[0.18em] px-9 py-5 mt-10"
                >
                  <span>Réserver sur Planity</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-block text-eyebrow text-[9px] text-charcoal/55 dark:text-grege/55 mt-8"
                >
                  Suivre le salon — {site.instagram.handle}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Témoignages ── */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <p className="text-eyebrow text-[9px] text-charcoal/45 dark:text-grege/45 mb-12">
              Ils nous font confiance — {site.rating.score}/5 sur{" "}
              {site.rating.count} avis
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <figure className="border-t border-charcoal/10 dark:border-grege/10 pt-8">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-laiton text-laiton" />
                    ))}
                  </div>
                  <blockquote className="font-serif font-light italic text-xl md:text-2xl leading-[1.4] text-charcoal/85 dark:text-grege/85">
                    « {t.quote} »
                  </blockquote>
                  <figcaption className="text-eyebrow text-[8px] text-charcoal/40 dark:text-grege/40 mt-5">
                    {t.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
