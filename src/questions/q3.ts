import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, EU_BUDGET_2022_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ3: Question = {
  id: "q3",
  title: "Les retraites françaises valent-elles plus que le budget de l'Union européenne ?",
  description:
    "Les 27 pays de l'Union européenne financent ensemble un budget commun. La France, seule, finance son système de retraites. Si tu compares le coût annuel des retraites françaises au budget annuel de l'UE, tu dirais que :",
  options: [
    {
      id: "a",
      label:
        "Les retraites françaises sont nettement en dessous du budget annuel de l'UE : moins de la moitié.",
    },
    {
      id: "b",
      label:
        "Les retraites françaises sont globalement du même ordre de grandeur que le budget annuel de l'UE.",
    },
    {
      id: "c",
      label:
        "Les retraites françaises sont nettement au-dessus du budget annuel de l'UE, de l'ordre de deux fois ce montant.",
    },
    {
      id: "d",
      label:
        "Les retraites françaises sont très largement au-dessus : plus de trois fois le budget annuel de l'UE.",
    },
  ],
  isCorrect: (choice) => choice === "c",
  explainHTML: () => `
    <p>
      Le budget annuel de l'Union européenne est d'environ
      ${formatEuro(EU_BUDGET_2022_EUR)}.
      Le système de retraites français représente, lui, près de
      ${formatEuro(ANNUAL_PENSIONS_EUR)} par an.
    </p>
    <p>
      On voit donc que les retraites françaises sont
      nettement au-dessus du budget annuel de l'UE :
      on est plutôt sur un rapport proche de deux pour un que sur un léger écart.
    </p>
    <p class="mt-2 text-sm opacity-80">
      Les montants varient selon les années et les conventions de calcul,
      mais l'ordre de grandeur reste le même : une seule politique publique nationale
      pèse plus que le budget commun de l'ensemble des 27 pays.
    </p>
  `,
  sources: [
    {
      label: "Commission européenne — Budget de l'UE",
      href: "https://economy-finance.ec.europa.eu",
    },
    {
      label: "INSEE — Comptes de la protection sociale",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ3;
