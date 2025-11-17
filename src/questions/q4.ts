import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, DEFENSE_BUDGET_FR_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ4: Question = {
  id: "q4",
  title: "Les retraites coûtent-elles plus cher que le budget de la Défense ?",
  description:
    "On entend souvent parler du coût de l'armée française. Mais si on compare au coût des retraites, tu dirais que :",
  options: [
    {
      id: "a",
      label: "Le budget de la Défense reste largement supérieur aux retraites françaises.",
    },
    {
      id: "b",
      label: "Les retraites coûtent à peu près la même chose que la Défense, à quelques milliards près.",
    },
    {
      id: "c",
      label: "Les retraites représentent plusieurs fois le budget de la Défense française.",
    },
    {
      id: "d",
      label: "Les deux postes sont négligeables par rapport à la dette publique.",
    },
  ],
  isCorrect: (choice) => choice === "c",
  explainHTML: () => `
    <p>
      Le budget de la Défense française est de l'ordre de
      ${formatEuro(DEFENSE_BUDGET_FR_EUR)} par an.
      Les retraites, elles, représentent environ
      ${formatEuro(ANNUAL_PENSIONS_EUR)}.
    </p>
    <p>
      On parle donc d'un rapport de plusieurs fois :
      les retraites coûtent bien plus cher que la Défense.
    </p>
  `,
  sources: [
    {
      label: "Ministère des Armées — Budget",
      href: "https://www.defense.gouv.fr",
    },
    {
      label: "INSEE — Dépenses publiques par fonction",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ4;
