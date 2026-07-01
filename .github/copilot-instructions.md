# GitHub Copilot Instructions for Edelys

## About this repository
- This repo contains the Edelys website project.
- The main application lives in `Site_vitrine/`, which is a Next.js 16 app using React 19, TypeScript, Tailwind CSS v4, and next-themes.
- The repository also includes design and branding resources under `Direction_Artistique/`.
- Use `project_state.md` as the ongoing session context document.

## Design System (V0.2.1 — 01/07/2026)
- **Two themes:** Atelier Clinique (light, editorial) & Clair-Obscur Éditorial (dark, cinematic, rose gold)
- **Tailwind v4 dark mode:** uses class strategy via `@variant dark (&:where(.dark, .dark *));` in globals.css
- **Palette tokens:** `peche`, `charcoal`, `creme`, `grege`, `laiton`, `cinema-bg`, `cinema-card`, `cinema-border`
- **Editorial utilities:** `editorial-grid`, `editorial-card`, `rule-accent`, `editorial-number`
- **Team portraits:** generated via `scripts/crop-team.js` → `public/images/team/`
- **ESLint:** clean (0 errors, 0 warnings), `scripts/**` excluded from lint

## Primary AI responsibilities
- Help iterate the site content, layout, and branding while preserving the current two-theme design system.
- Prefer small, well-scoped changes over broad rewrites.
- Keep Next.js app routes and file structure consistent with the existing `app/` directory.
- Do not modify generated build artifacts or `.next/` files.

## Files and folders to avoid modifying
- `Site_vitrine/.next/`
- `Site_vitrine/node_modules/`
- `Site_vitrine/package-lock.json` unless updating dependencies intentionally.
- `Direction_Artistique/Ressources/*` image and HTML asset files.

## Development workflow
- The application entrypoint is `Site_vitrine/src/app/page.tsx` and layout is in `Site_vitrine/src/app/layout.tsx`.
- Use `npm run dev` inside `Site_vitrine/` to test changes locally (port 3000).
- Use `npm run lint` inside `Site_vitrine/` to verify code quality.
- If `.next` cache gets corrupted, delete it and restart: `rm -rf .next && npm run dev`.

## Change guidance
- Prefer editing content in `Site_vitrine/src/app/*` and `Site_vitrine/src/components/*` for pages and sections.
- For global styles, update `Site_vitrine/src/app/globals.css`.
- When adding new pages, match existing route naming conventions and path structure.
- Keep copy and branding aligned with the current salon tone.

## Git & branching
- Use feature branches for new work: `feature/<description>`.
- Current active branch: `feature/site-content`.
- Keep `project_state.md` updated with decisions, open tasks, and progress summaries.

## Helpful repo notes
- Design identity document: `Direction_Artistique/Edelys Coiffure - Identite (autonome).html`.
- Existing AI guidance: `Site_vitrine/AGENTS.md`, `CLAUDE.md`, and `project_state.md`.
- The root-level `.agents/AGENTS.md` contains repository-level branching rules.

## Problem-solving rules
- If you are unsure about the correct UI or copy, leave a TODO comment and describe the desired behavior or content.
- When changing layout or styles, prefer safe incremental updates and clearly document assumptions in the PR or comments.
