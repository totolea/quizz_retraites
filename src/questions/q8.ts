import { formatEuro } from "@/lib/format";
import {
  IPHONE_15_PRICE_EUR,
  iphoneTotalCostEUR,
  PENSIONS_PER_HOUR_EUR,
} from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ8: Question = {
  id: "q8",
  title: "Une heure de retraites : plus ou moins que 50 000 iPhone 15 ?",
  description:
    "Une seule heure de retraites coûte déjà très cher. Si tu compares au prix de 50 000 iPhone 15 neufs, tu dirais que :",
  options: [
    {
      id: "a",
      label: "Une heure de retraites coûte beaucoup moins qu'un tel stock d'iPhone.",
    },
    {
      id: "b",
      label: "Une heure de retraites coûte un peu plus, mais on reste du même ordre de grandeur.",
    },
    {
      id: "c",
      label: "Une heure de retraites paie l'équivalent de plusieurs centaines de milliers d'iPhone.",
    },
    {
      id: "d",
      label: "C'est quasiment pile le prix d'un stock de 50 000 iPhone 15 : on est sur le même ordre de grandeur.",
    },
  ],
  isCorrect: (choice) => choice === "d",
  explainHTML: () => `
    <p>
      50 000 iPhone 15 à environ ${formatEuro(IPHONE_15_PRICE_EUR)} pièce,
      cela représente un total d'environ ${formatEuro(iphoneTotalCostEUR)}.
    </p>
    <p>
      Une heure de retraites coûte aussi environ
      ${formatEuro(PENSIONS_PER_HOUR_EUR)}.
      On est donc presque exactement sur le même ordre de grandeur :
      une heure de retraites, c'est grosso modo un stock de 50 000 iPhone.
    </p>
  `,
  sources: [
    { label: "Apple — Prix publics iPhone", href: "https://www.apple.com/fr/iphone/" },
    {
      label: "INSEE — Dépenses de retraites par unité de temps",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ8;
