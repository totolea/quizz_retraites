import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, EU_BUDGET_2022_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ3: Question = {
  id: "q3",
  title: "Les retraites françaises dépassent-elles le budget annuel de l'Union européenne ?",
  description:
    "27 pays financent ensemble le budget de l'UE. La France, seule, finance son système de retraites. Comment se situent les deux montants ?",
  options: [
    {
      id: "a",
      label: "Le budget de l'UE est au moins deux fois supérieur aux retraites françaises.",
    },
    {
      id: "b",
      label: "Les retraites françaises sont légèrement en dessous du budget total de l'UE.",
    },
    {
      id: "c",
      label: "Les retraites françaises sont déjà plus élevées que le budget annuel de l'UE.",
    },
    {
      id: "d",
      label: "Les deux montants sont négligeables par rapport aux dépenses militaires mondiales.",
    },
  ],
  isCorrect: (choice) => choice === "c",
  explainHTML: () => `
    <p>
      Le budget annuel de l'Union européenne est d'environ
      <strong>${formatEuro(EU_BUDGET_2022_EUR)}</strong>,
      alors que le système de retraites français représente près de
      <strong>${formatEuro(ANNUAL_PENSIONS_EUR)}</strong>.
    </p>
    <p>
      Autrement dit, <strong>la France dépense plus pour ses retraites</strong>
      que l'ensemble des 27 pays membres ne mettent en commun pour le budget de l'UE.
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
