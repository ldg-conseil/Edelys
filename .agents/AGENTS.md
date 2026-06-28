# Règles du Projet Edelys Coiffure

## Gestion du Cycle de Vie et Git (Branching Strategy)
- **Branches de développement :** Pour tout nouveau développement, ajout de fonctionnalité ou modification significative, utiliser une branche nommée `feature/<nom-de-la-fonctionnalite>` (ex: `feature/ui-kit`, `feature/homepage`).
- **Releases :** De temps en temps, lors de la finalisation de grandes étapes du projet, nous devons effectuer une **release** (ex: `V0.1`). Cela implique de fusionner la branche de fonctionnalité dans la branche principale (`main` ou `master`) et de créer un tag Git correspondant à la version.
- **Contexte :** Toujours maintenir à jour le fichier `project_state.md` (ou l'équivalent) lors d'une release pour refléter la nouvelle version et les fonctionnalités livrées.
