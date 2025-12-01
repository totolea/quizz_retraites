import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, combinedFortunesEUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ7: Question = {
  id: "q7",
  title: "Tout prendre aux milliardaires : on finance combien de retraites ?",
  description:
    "Si l’on saisissait l’intégralité de la fortune cumulée de Bernard Arnault et François Pinault, combien de temps cela permettrait-il de financer les retraites françaises ?",
  options: [
    { id: "a", label: "Quelques semaines, tout au plus." },
    { id: "b", label: "Quelques mois seulement, avant de revenir au problème initial." },
    { id: "c", label: "Plusieurs années (au moins 10 ans de retraites)." },
    { id: "d", label: "Pratiquement à vie : ce serait suffisant pour régler le problème définitivement." },
  ],
  isCorrect: (choice) => choice === "b",
  explainHTML: () => `
    <p>
      La fortune cumulée de Bernard Arnault et François Pinault est d’environ
      ${formatEuro(combinedFortunesEUR)}.
    </p>

    <p>
      Rapportée au coût annuel des retraites françaises
      (environ ${formatEuro(ANNUAL_PENSIONS_EUR)}),
      cette somme ne permettrait de financer que
      quelques mois de retraites, pas davantage.
    </p>


    <p class="mt-2 text-sm opacity-80">
      En d’autres termes : « prendre aux milliardaires » ne règle pas un
      déséquilibre annuel — cela ne fait que décaler temporairement le problème.
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
    {
      label: "Zucman, G. — Travaux sur la fiscalité et les très hauts patrimoines",
      href: "https://gabriel-zucman.eu",
    },
  ],
};

export default questionQ7;
