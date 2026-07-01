import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CursorHalo } from "@/components/ui/CursorHalo";
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
  title: "Edelys Coiffure — L'architecture du cheveu | La Ferté-Alais",
  description:
    "Salon de coiffure haut de gamme et Carecoach officiel Kérastase à La Ferté-Alais. Coupe, couleur, balayage et rituels de soin sur-mesure, pour toute la famille.",
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
      className={`${cormorant.variable} ${montserrat.variable} antialiased`}
    >
      <body className="bg-grain font-sans min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CursorHalo />
          <Header />
          <div className="flex-grow flex flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
