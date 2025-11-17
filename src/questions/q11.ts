import { formatEuro } from "@/lib/format";
import { IDF_BUDGET_EUR, PENSIONS_PER_DAY_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ11: Question = {
  id: "q11",
  title: "Quelques jours de retraites = le budget annuel de l'Île-de-France ?",
  description:
    "Le système de retraites brasse-t-il autant en quelques jours qu'une grande région en une année entière ? Pour atteindre le budget annuel de la Région Île-de-France, il faut environ :",
  options: [
    { id: "a", label: "Une journée de retraites, à peine." },
    { id: "b", label: "Entre 4 et 6 jours de retraites." },
    { id: "c", label: "Entre 1 et 2 mois de retraites." },
    { id: "d", label: "Plus d'un an de retraites, on en est très loin." },
  ],
  isCorrect: (choice) => choice === "b",
  explainHTML: () => `
    <p>
      Le budget annuel de la Région Île-de-France est d'environ
      ${formatEuro(IDF_BUDGET_EUR)}.
    </p>
    <p>
      Une journée de retraites françaises coûte autour de
      ${formatEuro(PENSIONS_PER_DAY_EUR)}.
      Il faut donc quelques jours (environ 5)
      pour atteindre l'équivalent du budget annuel de l'Île-de-France.
    </p>
  `,
  sources: [
    {
      label: "Région Île-de-France — Budget",
      href: "https://www.iledefrance.fr",
    },
    {
      label: "INSEE — Dépenses de retraites",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ11;
