# GitHub Copilot Instructions for Edelys

## About this repository
- This repo contains the Edelys website project.
- The main application lives in `Site_vitrine/`, which is a Next.js 16 app using React 19, TypeScript, Tailwind CSS v4, and next-themes.
- The repository also includes design and branding resources under `Direction_Artistique/`.
- Use `project_state.md` as the ongoing session context document.

## Primary AI responsibilities
- Help iterate the site content, layout, and branding while preserving the current design tone: elegant, modern, high-end salon.
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
- Use `npm run dev` inside `Site_vitrine/` to test changes locally.
- Use `npm run lint` inside `Site_vitrine/` to verify code quality.

## Change guidance
- Prefer editing content in `Site_vitrine/src/app/*` and `Site_vitrine/src/components/*` for pages and sections.
- For global styles, update `Site_vitrine/src/app/globals.css`.
- When adding new pages, match existing route naming conventions and path structure.
- Keep copy and branding aligned with the current salon tone.

## Git & branching
- Use feature branches for new work: `feature/<description>`.
- Keep `project_state.md` updated with decisions, open tasks, and progress summaries.

## Helpful repo notes
- Existing AI guidance: `Site_vitrine/AGENTS.md`, `Site_vitrine/CLAUDE.md`, and `project_state.md`.
- The root-level `.agents/AGENTS.md` contains repository-level branching rules.
- Use `Prompts/initialisation.txt` for initialization context if needed.

## Problem-solving rules
- If you are unsure about the correct UI or copy, leave a TODO comment and describe the desired behavior or content.
- When changing layout or styles, prefer safe incremental updates and clearly document assumptions in the PR or comments.
