import { formatEuro } from "@/lib/format";
import { PENSIONS_PER_HOUR_EUR, VELIB_BUDGET_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ13: Question = {
  id: "q13",
  theme: {
    shell: "from-cyan-950 via-sky-900 to-blue-900",
    card: "border-cyan-400/20 bg-slate-950/80",
    badge: "border-cyan-400/40 bg-cyan-500/10 text-cyan-200",
    option: "border-cyan-700/40 bg-slate-900/70 hover:bg-cyan-900/30",
    optionActive: "border-cyan-300 bg-cyan-500/20 ring-1 ring-cyan-300/40",
    button: "from-cyan-400 to-sky-300",
    icon: "🚲",
  },
  title: "2 h 30 de retraites égalent-elles le budget annuel de Vélib' ?",
  description:
    "Le Vélib’ est souvent présenté comme un service coûteux. Mais en termes de retraites, quelle est la bonne échelle ? Devine combien d’heures de retraites il faut pour atteindre ce budget.",
  challengeHint: "Service public local",
  options: [
    { id: "a", label: "Quelques minutes de retraites, à peine." },
    { id: "b", label: "Environ 2 h 30 de retraites pour atteindre ce budget." },
    { id: "c", label: "Plusieurs jours de retraites." },
    { id: "d", label: "Plusieurs mois de retraites, le budget Vélib' est minuscule en comparaison." },
  ],
  isCorrect: (choice) => choice === "b",
  explainHTML: () => `
    <p>
      Le service Vélib' coûte autour de
      ${formatEuro(VELIB_BUDGET_EUR)} par an.
    </p>
    <p>
      Une heure de retraites, c'est environ
      ${formatEuro(PENSIONS_PER_HOUR_EUR)}.
      Il faut donc un peu plus de deux heures pour atteindre
      les ${formatEuro(VELIB_BUDGET_EUR)},
      soit environ 2 h 30.
    </p>
    <p>
      Le budget annuel d'un grand service public local
      est donc « absorbé » en quelques heures par le système de retraites.
    </p>
  `,
  sources: [
    {
      label: "Vélib' / collectivités — Budget du service (ordre de grandeur)",
      href: "https://www.velib-metropole.fr",
    },
    {
      label: "INSEE — Dépenses de retraites par heure",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ13;
