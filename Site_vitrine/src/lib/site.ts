/* ============================================================
   DONNÉES DU SALON — source unique pour tout le site
   ============================================================ */

export const site = {
  name: "Edelys Coiffure",
  tagline: "L'architecture du cheveu",
  city: "La Ferté-Alais",
  address: {
    street: "2 Rue Eugène Millet",
    zip: "91590",
    city: "La Ferté-Alais",
  },
  phone: "01 69 90 39 59",
  phoneHref: "tel:+33169903959",
  planityUrl: "https://www.planity.com/edelys-coiffure-91590-la-ferte-alais",
  instagram: {
    handle: "@edelyscoiffure91",
    url: "https://instagram.com/edelyscoiffure91",
  },
  rating: { score: "4,9", count: 643 },
  hours: [
    { days: "Lundi", slots: "14h00 – 19h00" },
    { days: "Mardi – Vendredi", slots: "9h30 – 12h00 · 13h30 – 19h00" },
    { days: "Samedi", slots: "9h00 – 12h00 · 13h00 – 17h00" },
    { days: "Dimanche", slots: "Fermé" },
  ],
} as const;

export const navigation = [
  { label: "Le Salon", href: "/a-propos" },
  { label: "Prestations", href: "/prestations" },
  { label: "L'Équipe", href: "/equipe" },
  { label: "Contact", href: "/contact" },
] as const;
