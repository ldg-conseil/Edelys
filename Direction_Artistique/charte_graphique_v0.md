# CHARTE GRAPHIQUE & DIRECTION ARTISTIQUE — EDELYS COIFFURE
> **Statut :** Version 1.1 (Enrichie suite à l'analyse stratégique approfondie)
> **Ressource Interactive :** [Portail de Marque (HTML)](file:///d:/Edelys/Direction_Artistique/Ressources/brand_portal_ultimate_light_dark.html)

Ce document constitue la base visuelle et stratégique (Source of Truth) pour la conception du site vitrine et la stratégie digitale du salon **Edelys Coiffure**. 

---

## 1. STRATÉGIE DE MARQUE & POSITIONNEMENT

### A. Positionnement & Cœur de Cible
*   **Segment :** Moyen / Haut de gamme (Salon partenaire et ambassadeur **Kérastase**). Luxe discret (*Quiet Luxury*).
*   **Cible :** 70% Femmes, 30% Hommes. Une clientèle exigeante, en quête d'expertise, de précision clinique et d'un moment de déconnexion.
*   **Promesse & Valeurs :** Expertise scientifique, bien-être sensoriel, raffinement, chaleur et précision clinique.
*   **Co-branding (Kérastase) :** Stratégie d'intégration implicite de l'univers Kérastase pour renforcer la dimension d'expertise scientifique et de soins profonds.

### B. Tone of Voice (Ton de Marque)
*   **Style :** Élégant, déférent, précis.
*   **Vocabulaire :** Orienté sur le soin profond, la structure et "l'architecture du cheveu". Le langage doit refléter l'expertise clinique tout en invitant à la relaxation absolue.

---

## 2. DESIGN TOKENS & PALETTE CHROMATIQUE

L'analyse sémiotique de cette palette confirme un positionnement psychologique fort : rassurer (Crème/Grège), affirmer l'expertise (Charcoal), et apporter une chaleur luxueuse (Pêche Cuivrée/Or Laiton).

```json
{
  "colors": {
    "primary": {
      "hex": "#E8A382",
      "name": "Pêche Cuivrée / Rose Gold",
      "use": "Boutons principaux, surbrillance, détails du logo, icônes premium."
    },
    "dark": {
      "hex": "#1A1A1A",
      "name": "Noir Charcoal / Noir Laiton",
      "use": "Fonds principaux (exclusivité, atmosphère nocturne/cosy), textes sur fond clair."
    },
    "light": {
      "hex": "#FAFAF7",
      "name": "Crème de Lait / Off-White",
      "use": "Fonds de page principaux (pureté, clinique)."
    },
    "neutral": {
      "hex": "#EAE5DF",
      "name": "Beige Sable / Grège",
      "use": "Bordures, arrière-plans de cartes, séparateurs."
    },
    "accent": {
      "hex": "#D4AF37",
      "name": "Or Laiton",
      "use": "Touches subtiles (hover, détails iconographiques de luxe)."
    }
  },
  "fonts": {
    "headings": {
      "family": "Cormorant Garamond, serif",
      "style": "Sinueuse, raffinée, rappelant la calligraphie classique."
    },
    "body": {
      "family": "Montserrat, sans-serif",
      "style": "Géométrique, ultra-lisible, moderne, haut de gamme."
    }
  }
}
```

### Intégration UI : Micro-Interactions & Thèmes
*   **Switch Mode (Light/Dark) :** Le site gérera une alternance entre un thème clair (axé sur la pureté et l'aspect clinique du soin) et un thème sombre (axé sur l'exclusivité et l'ambiance nocturne cosy).
*   **Curseur Magnétique :** Implémentation d'un curseur personnalisé "Halo Doré".
*   **Transitions Fluides :** Utilisation d'un effet "Voile de Crème" pour les transitions entre pages ou états.
*   **Boutons :** Boutons de réservation avec retours visuels (feedback) haut de gamme.

---

## 3. IDENTITÉ VISUELLE & LOGO

*   **Logo :** Monogramme "EC" Rose Gold et calligraphie blanche sur fond noir.
*   **Zone d'exclusion :** Dynamique, basée sur la formule `0,75 × H` (H étant la hauteur de la lettre principale), détaillée dans le portail de marque interactif.

---

## 4. GUIDELINE PHOTOGRAPHIQUE & MOODBOARD

Le style photographique privilégiera la technique du **Clair-obscur** pour mettre en valeur les reflets, la brillance du cheveu et l'atmosphère cosy du salon.

| Scène clé (Moodboard) | Description de l'approche visuelle |
| :--- | :--- |
| **L'Expertise Clinique** | Textures de produits (Kérastase), gestes techniques précis, focus sur la matière du cheveu. |
| **Le Cocon Cosy** | Ambiances du salon en clair-obscur, miroirs rétro-éclairés, chaleur des bois et des pampas. |
| **Le Service Premium** | L'accueil, la tasse de café, l'attention au détail, sourires déférents. |
| **Les Portraits d'Équipe** | Éclairage clair-obscur, poses professionnelles et élégantes, cohérence chromatique. |

---

## 5. DÉCLINAISON SUPPORTS PHYSIQUES (PRINT)

Pour assurer la continuité de l'expérience client hors ligne, les supports imprimés respecteront les codes du luxe :
*   **Cartes de visite :** Papier Triplex (tranche colorée).
*   **Dépliants / Tarifs :** Utilisation de finitions par gaufrage pour un toucher texturé.
*   **Sacs Shopping :** Kraft de luxe (épais, mat, cordons qualitatifs) avec marquage minimaliste.

---

## 6. RECOMMANDATIONS TECHNIQUES WEB (SITE VITRINE)
*   **Technologie :** Framework moderne (Next.js / Tailwind CSS / JS Vanilla pour les animations spécifiques).
*   **Responsive :** Design "mobile-first" rigoureux.
*   **Ressource Interactive :** Utiliser le composant HTML généré ([brand_portal_ultimate_light_dark.html](file:///d:/Edelys/Direction_Artistique/Ressources/brand_portal_ultimate_light_dark.html)) comme référence UI pour copier/coller les styles Tailwind exacts lors du développement du site vitrine.
