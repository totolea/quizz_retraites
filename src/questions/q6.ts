import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, appleRevenueEUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ6: Question = {
  id: "q6",
  title: "Retraites françaises vs Apple : qui « pèse »  le plus ?",
  description:
    "Apple réalise chaque année l’un des plus gros chiffres d’affaires de la planète. Si tu compares ses ventes mondiales au coût annuel des retraites françaises, tu dirais que :",
  options: [
    {
      id: "a",
      label:
        "Le chiffre d’affaires d’Apple est nettement supérieur : Apple pèse environ deux à trois fois plus que les retraites françaises.",
    },
    {
      id: "b",
      label:
        "Les deux montants sont très proches : les retraites et le chiffre d’affaires mondial d’Apple sont dans le même ordre de grandeur.",
    },
    {
      id: "c",
      label:
        "Les retraites françaises dépassent nettement Apple : environ une fois et demie à deux fois le chiffre d’affaires du groupe.",
    },
    {
      id: "d",
      label:
        "Apple reste très loin devant : ses ventes mondiales représentent plus de cinq fois le coût des retraites françaises.",
    },
  ],
  isCorrect: (choice) => choice === "b",
  explainHTML: () => `
    <p>
      Apple réalise un chiffre d’affaires mondial d’environ
      ${formatEuro(appleRevenueEUR)}.
      Le système de retraites français coûte autour de
      ${formatEuro(ANNUAL_PENSIONS_EUR)} par an.
    </p>

    <p>
      On est donc dans le même ordre de grandeur.
      Ce n’est ni Apple qui écrase les retraites, ni l’inverse :
      deux entités totalement différentes (une entreprise privée mondiale
      vs un système social national) affichent pourtant des volumes financiers comparables.
    </p>

    <p class="mt-2 text-sm opacity-80">
      C’est une illustration frappante d’un ordre de grandeur :
      une politique publique française peut rivaliser avec les ventes mondiales
      d’une des entreprises les plus puissantes au monde.
    </p>
  `,
  sources: [
    { label: "Apple — Rapport annuel 2022", href: "https://investor.apple.com" },
    { label: "INSEE — Comptes de la protection sociale", href: "https://www.insee.fr" },
  ],
};

export default questionQ6;
