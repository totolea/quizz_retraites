import { formatEuro } from "@/lib/format";
import { MCDO_FRANCE_CA_EUR, PENSIONS_PER_DAY_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ12: Question = {
  id: "q12",
  title: "Quelques jours de retraites = le CA annuel de McDonald's France ?",
  description:
    "Les retraites françaises et le chiffre d'affaires de McDonald's France : même ordre de grandeur... ou pas du tout ? Pour atteindre un an de CA de McDo France, il faut environ :",
  options: [
    { id: "a", label: "Quelques heures de retraites seulement." },
    { id: "b", label: "2 à 3 jours de retraites." },
    { id: "c", label: "Un mois complet de retraites." },
    { id: "d", label: "Plusieurs années de retraites, c'est incomparable." },
  ],
  isCorrect: (choice) => choice === "b",
  explainHTML: () => `
    <p>
      McDonald's France réalise un chiffre d'affaires annuel
      d'environ ${formatEuro(MCDO_FRANCE_CA_EUR)}.
    </p>
    <p>
      Avec un coût de retraites de ${formatEuro(PENSIONS_PER_DAY_EUR)} par jour,
      il faut 2 à 3 jours de retraites pour atteindre cette somme.
    </p>
    <p>
      Autrement dit, quelques jours de fonctionnement
      du système de retraites suffisent à dépasser
      le CA annuel d'une des plus grosses chaînes de restauration du pays.
    </p>
  `,
  sources: [
    {
      label: "Rapports annuels McDonald's France (ordre de grandeur)",
      href: "https://corporate.mcdonalds.fr",
    },
    {
      label: "INSEE — Dépenses de retraites par jour",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ12;
