import { formatEuro } from "@/lib/format";
import { IDF_BUDGET_EUR, PENSIONS_PER_DAY_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ11: Question = {
  id: "q11",
  title: "En combien de jours de retraites atteint-on le budget de l'Île-de-France ?",
  description:
    "La Région Île-de-France dispose d’un budget annuel important pour les transports, les lycées, l’aménagement du territoire… Si l’on compare ce budget au coût des retraites françaises, combien de jours de retraites faut-il pour atteindre l’équivalent du budget annuel de la Région Île-de-France ?",
  options: [
    { id: "a", label: "Environ 1 journée de retraites." },
    { id: "b", label: "Entre 4 et 6 jours de retraites." },
    { id: "c", label: "Entre 1 et 2 mois de retraites." },
    { id: "d", label: "Plus d'un an de retraites, on en est très loin." },
  ],
  isCorrect: (choice) => choice === "b",
  explainHTML: () => `
    <p>
      Le budget annuel de la Région Île-de-France est d’environ
      ${formatEuro(IDF_BUDGET_EUR)}.
    </p>
    <p>
      Une journée de retraites françaises coûte autour de
      ${formatEuro(PENSIONS_PER_DAY_EUR)}.
      Si l’on divise le budget de l’Île-de-France par ce coût quotidien,
      on obtient un ordre de grandeur d’environ 5 jours.
    </p>
    <p class="mt-2 text-sm opacity-80">
      Autrement dit, quelques jours de fonctionnement du système de retraites
      suffisent à atteindre l’équivalent du budget annuel d’une des plus grandes
      régions d’Europe.
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
