import { ArrowRight, Scissors } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center relative py-24 px-6 md:py-32">
        {/* Background Decorative Element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="w-[500px] h-[500px] bg-peche/5 dark:bg-peche/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-8 text-[10px] md:text-xs uppercase tracking-[0.3em] text-peche font-semibold">
            <span className="w-8 md:w-12 h-[1px] bg-peche"></span> 
            Étape 3 : Site Vitrine
            <span className="w-8 md:w-12 h-[1px] bg-peche"></span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-8 text-charcoal dark:text-creme">
            L'architecture <br />
            <span className="italic text-peche">du cheveu d'élite</span>
          </h1>

          <p className="font-sans text-sm md:text-base text-charcoal/70 dark:text-grege/70 leading-relaxed max-w-2xl font-light mb-12">
            Bienvenue sur le portail de développement d'Edelys Coiffure. 
            Le projet Next.js est correctement initialisé avec les design tokens de la charte graphique V1.1.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <button className="bg-charcoal dark:bg-creme text-creme dark:text-charcoal text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 rounded hover:bg-peche dark:hover:bg-peche dark:hover:text-charcoal transition-all duration-500 shadow-lg shadow-charcoal/10 dark:shadow-none flex items-center gap-3">
              <span>Réserver mon rituel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="text-charcoal/70 dark:text-grege/70 hover:text-peche dark:hover:text-peche text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-colors flex items-center gap-3">
              <Scissors className="w-4 h-4" />
              <span>Découvrir l'expertise</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
