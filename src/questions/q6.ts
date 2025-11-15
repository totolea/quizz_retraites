import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, appleRevenueEUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ6: Question = {
  id: "q6",
  title: "Une année de retraites coûte-t-elle plus que tout le chiffre d'affaires d'Apple ?",
  description:
    "Apple est l'une des plus grosses entreprises de la planète. Si tu compares ses ventes mondiales annuelles au coût des retraites françaises, tu dirais que :",
  options: [
    {
      id: "a",
      label: "Apple génère plusieurs fois plus que le coût des retraites.",
    },
    {
      id: "b",
      label: "Les retraites françaises sont dans le même ordre de grandeur que le chiffre d'affaires mondial d'Apple.",
    },
    {
      id: "c",
      label: "Le coût des retraites françaises représente seulement quelques pourcents du chiffre d'affaires d'Apple.",
    },
    {
      id: "d",
      label: "Le coût des retraites françaises est si élevé qu'il dépasse de très loin toutes les GAFAM réunies.",
    },
  ],
  isCorrect: (choice) => choice === "b",
  explainHTML: () => `
    <p>
      Apple réalise un chiffre d'affaires d'environ
      <strong>${formatEuro(appleRevenueEUR)}</strong> par an.
      Le coût des retraites françaises est autour de
      <strong>${formatEuro(ANNUAL_PENSIONS_EUR)}</strong>.
    </p>
    <p>
      Les deux montants sont donc de même ordre de grandeur,
      ce qui montre à quel point une seule politique publique nationale
      peut rivaliser avec les ventes mondiales d'un géant de la tech.
    </p>
  `,
  sources: [
    {
      label: "Apple — Rapport annuel 2022",
      href: "https://investor.apple.com",
    },
    {
      label: "INSEE — Comptes de la protection sociale",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ6;
