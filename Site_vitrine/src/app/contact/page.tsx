
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Metadata } from 'next';
import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact & Infos Pratiques | Edelys Coiffure',
    description: 'Retrouvez nos coordonnées, horaires d\'ouverture et prenez rendez-vous. Votre salon de coiffure à La Ferté-Alais.',
};

const ContactPage = () => {
    const testimonials = [
        {
            quote: "Parfait comme d'habitude. Une équipe charmante et à l'écoute.",
            author: "Client satisfait",
        },
        {
            quote: "Toujours un bon accueil, ambiance chaleureuse et conviviale. Alisson et son équipe sont au top ! Je recommande l'analyse du cuir chevelu.",
            author: "Client satisfait",
        }
    ];

    return (
        <div className="bg-creme dark:bg-dark-bg">
            <div className="relative isolate px-6 pt-24 sm:pt-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <Text variant="overline" className="text-peche">Contact</Text>
                    <Heading level={1} className="mt-2 text-charcoal dark:text-creme">
                        Prendre rendez-vous
                    </Heading>
                    <Text variant="body" className="mt-6 text-lg leading-8 text-charcoal/80 dark:text-grege">
                        Contactez-nous pour toute question ou pour réserver une prestation spécifique.
                    </Text>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Infos */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <Heading level={3} className="flex items-center gap-3 text-charcoal dark:text-creme">
                                <MapPin className="w-6 h-6 text-peche"/> Adresse
                            </Heading>
                            <Text className="mt-2 ml-9">2 Rue Eugène Millet, 91590 La Ferté-Alais</Text>
                        </div>
                        <div>
                            <Heading level={3} className="flex items-center gap-3 text-charcoal dark:text-creme">
                                <Phone className="w-6 h-6 text-peche"/> Téléphone
                            </Heading>
                            <Text className="mt-2 ml-9">01 69 90 39 59</Text>
                            <Text variant="caption" className="mt-1 ml-9 text-charcoal/60 dark:text-grege/80">
                                Indispensable pour réserver les ciseaux chauffants ou la cryothérapie.
                            </Text>
                        </div>
                        <div>
                            <Heading level={3} className="flex items-center gap-3 text-charcoal dark:text-creme">
                                <Clock className="w-6 h-6 text-peche"/> Horaires
                            </Heading>
                            <ul className="mt-2 ml-9 space-y-1">
                                <li>Lundi : 14h00 – 19h00</li>
                                <li>Mardi à Vendredi : 09h30 – 12h00 & 13h30 – 19h00</li>
                                <li>Samedi : 09h00 – 12h00 & 13h00 – 17h00</li>
                                <li>Dimanche : Fermé</li>
                            </ul>
                        </div>
                    </div>
                    {/* Témoignages */}
                    <div className="lg:col-span-2 bg-white/50 dark:bg-[#111]/50 p-10 rounded-2xl border border-charcoal/5 dark:border-white/5 shadow-sm">
                        <Heading level={2} className="text-center mb-10 text-charcoal dark:text-creme">Ce que disent nos clients</Heading>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <figure key={index} className="flex flex-col">
                                    <div className="flex gap-1 text-or mb-2">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current"/>)}
                                    </div>
                                    <blockquote className="text-charcoal/80 dark:text-grege flex-grow">
                                        <p>"{testimonial.quote}"</p>
                                    </blockquote>
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
