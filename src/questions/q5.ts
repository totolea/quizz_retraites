import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, EDUCATION_TOTAL_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ5: Question = {
  id: "q5",
  theme: {
    shell: "from-amber-950 via-yellow-900 to-orange-900",
    card: "border-amber-400/20 bg-slate-950/80",
    badge: "border-amber-400/40 bg-amber-500/10 text-amber-200",
    option: "border-amber-700/40 bg-slate-900/70 hover:bg-amber-900/30",
    optionActive: "border-amber-300 bg-amber-500/20 ring-1 ring-amber-300/40",
    button: "from-amber-400 to-orange-300",
    icon: "🎓",
  },
  title: "Retraites ou éducation : quel poste pèse le plus lourd ?",
  description:
    "L'éducation mobilise des milliards, mais les retraites sont un autre mastodonte. Entre ces deux géants, lequel représente le plus gros montant annuel ?",
  challengeHint: "Grandes dépenses publiques",
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
