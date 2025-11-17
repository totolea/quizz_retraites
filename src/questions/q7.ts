import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, combinedFortunesEUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ7: Question = {
  id: "q7",
  title: "Tout prendre aux milliardaires : on finance combien de retraites ?",
  description:
    "Si l'on saisissait toute la fortune d'Arnault et de Pinault, on pourrait financer les retraites françaises pendant :",
  options: [
    { id: "a", label: "Quelques semaines, tout au plus." },
    { id: "b", label: "Quelques mois seulement, avant de revenir au problème initial." },
    { id: "c", label: "Plusieurs années (au moins 10 ans de retraites)." },
    { id: "d", label: "Pratiquement à vie, le problème serait réglé définitivement." },
  ],
  isCorrect: (choice) => choice === "b",
  explainHTML: () => `
    <p>
      La fortune cumulée de Bernard Arnault et François Pinault
      est approximativement de ${formatEuro(combinedFortunesEUR)}.
    </p>
    <p>
      Rapportée à un coût annuel de retraites autour de
      ${formatEuro(ANNUAL_PENSIONS_EUR)},
      cette somme permettrait de financer les retraites pendant
      quelques mois, pas des années.
    </p>
    <p>
      Même en "prenant tout" aux plus grandes fortunes,
      on ne règle pas structurellement un système qui coûte
      plusieurs centaines de milliards chaque année.
    </p>
  `,
  sources: [
    {
      label: "Classements fortunes (Forbes, Challenges...)",
      href: "https://www.forbes.com/billionaires/",
    },
    {
      label: "INSEE — Dépenses de retraites",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ7;
