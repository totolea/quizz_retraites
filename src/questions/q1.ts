import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, STATE_BUDGET_FRANCE_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ1: Question = {
  id: "q1",
  title: "Les retraites françaises pèsent-elles plus que le budget de l'État ?",
  description:
    "On parle souvent du « budget de l'État » comme d'un montant gigantesque. Si tu compares ce budget annuel au coût des retraites françaises, tu dirais que :",
  options: [
    {
      id: "a",
      label:
        "Les retraites représentent un poste important, mais restent nettement en dessous du budget de l'État.",
    },
    {
      id: "b",
      label:
        "Les retraites sont dans le même ordre de grandeur que le budget de l'État : on est à peu près au même niveau.",
    },
    {
      id: "c",
      label:
        "Les retraites dépassent clairement le budget de l'État : c'est l'un des tout premiers postes de dépenses publiques.",
    },
    {
      id: "d",
      label:
        "Les retraites représentent environ la moitié du budget total de l'État.",
    },
  ],
  isCorrect: (choice) => choice === "c",
  explainHTML: () => `
    <p>
      Une année de retraites françaises représente environ
      ${formatEuro(ANNUAL_PENSIONS_EUR)}.
      Le budget de l'État, lui, tourne autour de
      ${formatEuro(STATE_BUDGET_FRANCE_EUR)}.
    </p>
    <p>
      Autrement dit, les retraites coûtent plus cher que le budget de l'État,
      et de façon nette : c'est l'un des tout premiers postes de dépenses publiques en France.
    </p>
    <p class="mt-2 text-sm opacity-80">
      Les montants exacts varient selon les années et les périmètres comptables,
      mais l'ordre de grandeur reste le même : les retraites dépassent le budget de l'État.
    </p>
  `,
  sources: [
    {
      label: "INSEE — Dépenses de retraites",
      href: "https://www.insee.fr",
    },
    {
      label: "Ministère de l'Économie — Budget de l'État",
      href: "https://www.economie.gouv.fr",
    },
  ],
};

export default questionQ1;
