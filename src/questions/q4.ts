import { formatEuro } from "@/lib/format";
import {
  ANNUAL_PENSIONS_EUR,
  DEFENSE_BUDGET_FR_EUR,
  EU_DEFENSE_TOTAL_EUR,
} from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ4: Question = {
  id: "q4",
  theme: {
    shell: "from-slate-950 via-blue-950 to-sky-900",
    card: "border-sky-400/20 bg-slate-950/80",
    badge: "border-sky-400/40 bg-sky-500/10 text-sky-200",
    option: "border-sky-700/40 bg-slate-900/70 hover:bg-sky-900/40",
    optionActive: "border-sky-300 bg-sky-500/20 ring-1 ring-sky-300/40",
    button: "from-sky-400 to-cyan-300",
    icon: "🛡️",
  },
  title: "Les retraites coûtent-elles plus cher que la Défense ?",
  description:
    "Quand on parle de grands postes de dépenses, la Défense et les retraites arrivent vite dans la conversation. Place ces deux colosses l'un à côté de l'autre et choisis le bon ordre de grandeur :",
  challengeHint: "Comparaison de budgets",
  options: [
    {
      id: "a",
      label: "La Défense coûte nettement plus cher que les retraites.",
    },
    {
      id: "b",
      label: "Les deux montants sont proches, dans le même ordre de grandeur.",
    },
    {
      id: "c",
      label: "Les retraites coûtent plusieurs fois plus que le budget de la Défense.",
    },
    {
      id: "d",
      label: "Les retraites dépassent la Défense, mais seulement d'environ 20 à 30 %.",
    },
  ],
  isCorrect: (choice) => choice === "c",
  explainHTML: () => `
    <p>
      Le budget de la Défense française est d'environ
      ${formatEuro(DEFENSE_BUDGET_FR_EUR)}.
      Le coût annuel des retraites françaises est proche de
      ${formatEuro(ANNUAL_PENSIONS_EUR)}.
    </p>

    <p>
      Le rapport est donc clair : les retraites coûtent plusieurs fois plus
      que le budget militaire national. Ce n’est pas un écart marginal :
      on parle d’ordres de grandeur très différents.
    </p>

    <p class="mt-3">
      Pour donner un repère supplémentaire (sans changer la réponse) :
      si l’on additionne les budgets de Défense de tous les pays de l’Union européenne,
      on obtient environ ${formatEuro(EU_DEFENSE_TOTAL_EUR)}.
      Ce total reste en dessous du coût des retraites françaises,
      mais dans un ordre de grandeur proche.
    </p>
  `,
  sources: [
    { label: "Ministère des Armées — Budget", href: "https://www.defense.gouv.fr" },
    { label: "INSEE — Dépenses de retraites", href: "https://www.insee.fr" },
    {
      label: "Agence européenne de défense — Données de dépenses militaires",
      href: "https://eda.europa.eu",
    },
  ],
};

export default questionQ4;
