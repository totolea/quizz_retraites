import { formatEuro } from "@/lib/format";
import { MCDO_FRANCE_CA_EUR, PENSIONS_PER_DAY_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ12: Question = {
  id: "q12",
  theme: {
    shell: "from-orange-950 via-amber-900 to-yellow-900",
    card: "border-orange-400/20 bg-slate-950/80",
    badge: "border-orange-400/40 bg-orange-500/10 text-orange-200",
    option: "border-orange-700/40 bg-slate-900/70 hover:bg-orange-900/30",
    optionActive: "border-orange-300 bg-orange-500/20 ring-1 ring-orange-300/40",
    button: "from-orange-400 to-amber-300",
    icon: "🍔",
  },
  title: "Quelques jours de retraites égalent-ils le CA annuel de McDonald's France ?",
  description:
    "Les grandes entreprises ont des chiffres d’affaires énormes, mais le système de retraites fonctionne à une autre échelle. Combien de temps de retraites faut-il pour atteindre le CA annuel de McDonald’s France ?",
  challengeHint: "Échelle d’entreprise",
  options: [
    { id: "a", label: "Quelques heures de retraites seulement." },
    { id: "b", label: "2 à 3 jours de retraites." },
    { id: "c", label: "Un mois complet de retraites." },
    { id: "d", label: "Plusieurs années de retraites, c'est incomparable." },
  ],
  isCorrect: (choice) => choice === "b",
  explainHTML: () => `
    <p>
      McDonald's France réalise un chiffre d'affaires annuel
      d'environ ${formatEuro(MCDO_FRANCE_CA_EUR)}.
    </p>
    <p>
      Avec un coût de retraites de ${formatEuro(PENSIONS_PER_DAY_EUR)} par jour,
      il faut 2 à 3 jours de retraites pour atteindre cette somme.
    </p>
    <p>
      Autrement dit, quelques jours de fonctionnement
      du système de retraites suffisent à dépasser
      le CA annuel d'une des plus grosses chaînes de restauration du pays.
    </p>
  `,
  sources: [
    {
      label: "Rapports annuels McDonald's France (ordre de grandeur)",
      href: "https://corporate.mcdonalds.fr",
    },
    {
      label: "INSEE — Dépenses de retraites par jour",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ12;
