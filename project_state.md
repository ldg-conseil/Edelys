# PROJECT STATE: Edelys Coiffure - Digital Transformation
> **Dernière mise à jour :** 2026-07-01 | **Version :** V0.2.1 | **Statut Global :** Design System Intégré + Portraits Équipe + ESLint Clean

---

## 1. VISION & OBJECTIFS
* **Client :** Salon de coiffure "Edelys Coiffure" (Premium, Ambassadrice Kérastase).
* **Objectif global :** Créer un site vitrine moderne et mettre en place une stratégie de community management.

---

## 2. WORKFLOW & STRATÉGIE GIT
* **Collaboration :** Développement itératif "Homme-IA" (Vibe Coding) + Validation Client.
* **Branche active :** `feature/site-content`
* **Gestion des Branches :** 
  * La branche principale (`main`) représente la version de production.
  * Tous les développements se font sur des branches `feature/<description>`.
* **Cycle de vie :** Des *Releases* taguées à chaque grande étape.

---

## 3. ARCHITECTURE TECHNIQUE
* **Stack Web :** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide React, Framer Motion.
* **Hébergement & CI/CD :** Vercel (Déploiement automatique depuis GitHub).
* **Backend / BDD :** Supabase (prévu pour la V1).

---

## 4. DIRECTION ARTISTIQUE (Source of Truth)
> 📍 **Fichiers de référence :**
> - `Direction_Artistique/Edelys Coiffure - Identite (autonome).html` — 3 directions de design
> - `Direction_Artistique/charte_graphique_v0.md`

### 4.1 Palette chromatique
| Couleur | Hex | Usage |
|---------|-----|-------|
| Pêche Cuivrée (Rose Gold) | `#E8A382` | Accent principal |
| Noir Charcoal | `#1A1A1A` | Texte, fonds sombres |
| Crème | `#FAFAF7` | Fond clair |
| Grège | `#EAE5DF` | Neutre, texte secondaire |
| Or Laiton | `#D4AF37` | Accent métallique, mode sombre |

### 4.2 Typographies
* **Titres :** Cormorant Garamond (serif, light, italiques)
* **Texte :** Montserrat (sans-serif, light à medium)

### 4.3 Thèmes
* **☀️ Atelier Clinique (1b)** — clair, épuré, grille éditoriale, fond crème, texte charcoal, accents pêche
* **🌙 Clair-Obscur Éditorial (1a)** — sombre, cinématographique, fond `#0E0C0A`, accents or laiton/rose gold

### 4.4 Éléments éditoriaux
* Numérotation (01, 02, 03…) en préfixe des titres
* Ligne décorative `rule-accent` (or/pêche)
* Grain/texture adaptatif par thème
* Bordures fines, coins légèrement arrondis

---

## 5. HISTORIQUE & LOG STRATÉGIQUE
* **28/06/2026 :** Initialisation du repo et rédaction de la Charte Graphique V0.
* **29/06/2026 :** Initialisation du projet Next.js avec les design tokens. UI Kit + Page d'Accueil. Release **V0.1**.
* **29/06/2026 :** Création des pages annexes (À Propos, Équipe, Prestations, Contact) + header dropdown. Commit `feat(site): add about/team/services pages + header improvements`.
* **01/07/2026 :** Refonte design complète — intégration des directions 1a (Clair-Obscur) et 1b (Atelier Clinique). Nouveaux tokens CSS, composants éditoriaux, double thème fonctionnel, menu header optimisé. Release **V0.2**.
* **01/07/2026 (soir) :** Génération des 4 portraits d'équipe depuis la photo source (`scripts/crop-team.js` → `public/images/team/`). Corrections ESLint (0 erreur, 0 warning). Mise à jour des fichiers de contexte. Release **V0.2.1**.

---

## 6. ROADMAP & BACKLOG
- [x] Initialiser le projet Next.js et configurer Tailwind/Fonts
- [x] Lier le projet à Vercel pour le déploiement continu
- [x] Développer les composants réutilisables UI (Boutons, Navigation, Footer, Logo)
- [x] Construire la page d'accueil avec les animations Framer Motion
- [x] Construire les pages annexes (À Propos, Équipe, Prestations, Contact)
- [x] Intégrer la charte graphique (directions 1a & 1b, design tokens, thèmes clair/sombre)
- [x] Générer les portraits de l'équipe (script crop-team.js → public/images/team/)
- [x] ESLint : 0 erreur, 0 warning
- [ ] Ajouter les images réelles du salon (photos d'ambiance)
- [ ] Créer les pages Mentions légales et Politique de confidentialité
- [ ] Audit et Stratégie Réseaux Sociaux (Étape 4)
- [ ] Optimisations SEO et performances
- [ ] Intégration Supabase (V1)