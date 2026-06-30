# Edelys Repository AI Agent Guide

## Purpose
This file helps AI agents understand which tasks are in-scope for this repository and where the main application lives.

## Project scope
- `Site_vitrine/` is the primary application directory.
- `Direction_Artistique/` contains design and branding resources.
- `Prompts/` contains task initialization prompts and collaboration instructions.
- `project_state.md` is the active state tracking document.

## Recommendations for AI
- Use the existing Next.js app structure and route conventions in `Site_vitrine/src/app/`.
- Preserve the current visual and branding tone: premium salon, elegant, modern.
- Prefer updates in existing pages and components before adding new architectural complexity.

## Existing guidance
- Root branch policy: use `feature/<description>` branches for development.
- Root file `project_state.md` documents decisions, next steps, and session summaries.
- See `Site_vitrine/AGENTS.md` and `Site_vitrine/CLAUDE.md` for additional app-level context.

## Avoid
- Do not edit generated files in `Site_vitrine/.next/`.
- Do not modify large external assets in `Direction_Artistique/Ressources/` unless explicitly asked.

## Useful commands
- `cd Site_vitrine && npm run dev`
- `cd Site_vitrine && npm run build`
- `cd Site_vitrine && npm run lint`
