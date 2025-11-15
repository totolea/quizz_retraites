import { formatEuro } from "@/lib/format";
import { PS5_PRICE_EUR, ps5TotalCostEUR, PENSIONS_PER_HOUR_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ9: Question = {
  id: "q9",
  title: "Une heure de retraites : plus ou moins que 50 000 PlayStation 5 ?",
  description:
    "50 000 consoles neuves, ça représente une somme énorme. Si tu compares à une seule heure de retraites, tu dirais que :",
  options: [
    {
      id: "a",
      label: "Une heure de retraites ne couvre même pas la moitié de ce stock de PS5.",
    },
    {
      id: "b",
      label: "Une heure de retraites coûte à peu près autant que 50 000 PS5.",
    },
    {
      id: "c",
      label: "Une heure de retraites coûte clairement plus que 50 000 PS5, on dépasse ce stock.",
    },
    {
      id: "d",
      label: "Une heure de retraites correspond à quelques milliers de PS5 seulement.",
    },
  ],
  isCorrect: (choice) => choice === "c",
  explainHTML: () => `
    <p>
      50 000 PlayStation 5 à environ ${formatEuro(PS5_PRICE_EUR)} pièce,
      cela fait un total autour de <strong>${formatEuro(ps5TotalCostEUR)}</strong>.
    </p>
    <p>
      Une heure de retraites, c'est toujours environ
      <strong>${formatEuro(PENSIONS_PER_HOUR_EUR)}</strong>,
      donc <strong>plus cher</strong> qu'un stock de 50 000 PS5.
    </p>
    <p>
      Là encore, l'objectif est de montrer que ce qui paraît énorme
      à l'échelle de la consommation reste inférieur à une seule heure
      de fonctionnement du système de retraites.
    </p>
  `,
  sources: [
    {
      label: "Sony — Informations produit PS5",
      href: "https://www.playstation.com",
    },
    {
      label: "INSEE — Dépenses de retraites",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ9;
