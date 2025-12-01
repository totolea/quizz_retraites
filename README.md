# Quiz retraites

Projet Vite + React + TypeScript configuré avec Tailwind, framer-motion et les composants nécessaires pour exécuter `quiz_quest_ce_qui_coute_le_plus_cher_react.jsx`.

## Installation

```bash
npm install
npm run dev
```

Le serveur de dev Vite s'ouvre sur http://localhost:5173.

## Scripts utiles

- `npm run dev` : démarre le serveur de développement.
- `npm run build` : build de production.
- `npm run preview` : prévisualise le build.
- `npm run lint` : vérifie la configuration TypeScript.

Le composant principal est maintenant dans `src/App.tsx`.

## Enregistrement des scores

L'écran de fin enregistre désormais chaque score et affiche :

- le score moyen des participants ;
- le percentile approximatif du joueur (pourcentage de scores inférieurs) ;
- le nombre total de scores enregistrés.

L'API REST `POST /api/score` est une fonction serverless Vercel basée sur Vercel KV
(REST). Elle met à jour un histogramme (score/total) pour calculer le percentile et
répond avec les statistiques agrégées.

### Configuration Vercel

Crée une base Vercel KV et ajoute les variables d'environnement au projet :

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

En local, lance `vercel dev` pour exposer la fonction `/api/score` ; la commande Vite
seule ne suffira pas pour tester l'enregistrement des scores.

