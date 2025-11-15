import { formatEuro } from "@/lib/format";
import { PENSIONS_PER_HOUR_EUR, VELIB_BUDGET_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ13: Question = {
  id: "q13",
  title: "2 h 30 de retraites = le budget annuel de Vélib' ?",
  description:
    "Le service Vélib' coûte de l'ordre de 100 M€ par an. Combien de temps de retraites faut-il pour atteindre ce montant ?",
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
      <strong>${formatEuro(VELIB_BUDGET_EUR)}</strong> par an.
    </p>
    <p>
      Une heure de retraites, c'est environ
      ${formatEuro(PENSIONS_PER_HOUR_EUR)}.
      Il faut donc un peu plus de deux heures pour atteindre
      les <strong>${formatEuro(VELIB_BUDGET_EUR)}</strong>,
      soit <strong>environ 2 h 30</strong>.
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
