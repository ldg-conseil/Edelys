# Edelys Repository AI Agent Guide

## Purpose
This file helps AI agents understand which tasks are in-scope for this repository and where the main application lives.

## Project scope
- `Site_vitrine/` is the primary application directory (Next.js 16, React 19, Tailwind v4).
- `Direction_Artistique/` contains design and branding resources (charte graphique, identité visuelle).
- `Prompts/` contains task initialization prompts and collaboration instructions.
- `project_state.md` is the active state tracking document (source of truth for progress).

## Design System (V0.2)
- **Light theme:** Atelier Clinique — clair, épuré, grille éditoriale
- **Dark theme:** Clair-Obscur Éditorial — sombre, cinématographique, rose gold
- **Palette:** Pêche (#E8A382), Charcoal (#1A1A1A), Crème (#FAFAF7), Grège (#EAE5DF), Or Laiton (#D4AF37)
- **Fonts:** Cormorant Garamond (titres) + Montserrat (texte)

## Recommendations for AI
- Use the existing Next.js app structure and route conventions in `Site_vitrine/src/app/`.
- Preserve the current visual and branding tone: premium salon, elegant, modern.
- Prefer updates in existing pages and components before adding new architectural complexity.
- Dark mode requires `@variant dark (&:where(.dark, .dark *));` in globals.css (Tailwind v4 class strategy).

## Existing guidance
- Root branch policy: use `feature/<description>` branches for development.
- Root file `project_state.md` documents decisions, next steps, and session summaries.
- See `Site_vitrine/AGENTS.md` for Next.js-specific guidance.

## Avoid
- Do not edit generated files in `Site_vitrine/.next/`.
- Do not modify large external assets in `Direction_Artistique/Ressources/` unless explicitly asked.

## Useful commands
- `cd Site_vitrine && npm run dev`  → http://localhost:3000
- `cd Site_vitrine && npm run build`
- `cd Site_vitrine && npm run lint`
