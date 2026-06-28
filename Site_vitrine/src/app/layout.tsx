import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Edelys Coiffure | L'architecture du cheveu d'élite",
  description: "Salon de coiffure haut de gamme et ambassadeur Kérastase. Offrez-vous un moment de déconnexion absolue et une expertise sur-mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${cormorant.variable} ${montserrat.variable} scroll-smooth antialiased`}
    >
      <body className="bg-grain font-sans min-h-screen flex flex-col selection:bg-peche selection:text-charcoal transition-colors duration-500 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
