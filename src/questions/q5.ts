import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, EDUCATION_TOTAL_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ5: Question = {
  id: "q5",
  title: "Retraites vs éducation : lequel coûte le plus ?",
  description:
    "Entre toutes les dépenses d'éducation (État, collectivités, ménages) et les retraites, lequel représente le plus gros montant annuel ?",
  options: [
    { id: "a", label: "L'éducation, et de très loin." },
    {
      id: "b",
      label: "Les deux sont à peu près au même niveau, à quelques milliards près.",
    },
    {
      id: "c",
      label: "Les retraites coûtent sensiblement plus cher que l'ensemble de l'éducation.",
    },
    {
      id: "d",
      label: "Aucun des deux : ce sont les subventions aux entreprises qui dominent.",
    },
  ],
  isCorrect: (choice) => choice === "c",
  explainHTML: () => `
    <p>
      En additionnant toutes les dépenses d'éducation (État, collectivités, ménages),
      on arrive autour de ${formatEuro(EDUCATION_TOTAL_EUR)}.
      Les retraites restent au-dessus, avec environ
      ${formatEuro(ANNUAL_PENSIONS_EUR)}.
    </p>
    <p>
      Même en incluant toute l'éducation, des écoles primaires aux universités,
      ce poste pèse moins lourd que les retraites.
    </p>
  `,
  sources: [
    {
      label: "Ministère de l'Éducation — Repères et références",
      href: "https://www.education.gouv.fr",
    },
    {
      label: "INSEE — Dépenses d'éducation",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ5;
