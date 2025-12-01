import { formatEuro } from "@/lib/format";
import {
  IPHONE_15_PRICE_EUR,
  iphoneTotalCostEUR,
  PENSIONS_PER_HOUR_EUR,
} from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ8: Question = {
  id: "q8",
  // ✅ On précise que cette question est de type "slider"
  kind: "slider",

  title: "À ton avis, combien coûte une heure de retraites françaises ?",
  description:
    "Donne ton estimation du coût d’une heure de retraites en France (en euros). Ensuite, on la comparera au prix d’un stock de 50 000 iPhone 15 pour visualiser l’ordre de grandeur.",

  // ✅ Configuration du slider (en euros)
  sliderMin: 0,
  sliderMax: 120_000_000, // 120 M€ max
  sliderStep: 1_000_000,  // pas de 1 M€
  sliderUnit: "€",
  sliderCorrectValue: PENSIONS_PER_HOUR_EUR,
  sliderTolerancePercent: 20, // bonne réponse si à ±20 % de la vraie valeur

  explainHTML: () => `
    <p>
      Une heure de retraites françaises coûte environ
      ${formatEuro(PENSIONS_PER_HOUR_EUR)}.
    </p>

    <p>
      Pour donner un repère plus concret : 50 000 iPhone 15, à environ
      ${formatEuro(IPHONE_15_PRICE_EUR)} pièce, représentent un total
      d’environ ${formatEuro(iphoneTotalCostEUR)}.
      On est donc sur le même ordre de grandeur :
      une seule heure de retraites équivaut à peu près au prix d’un stock
      de 50 000 iPhone 15.
    </p>

    <p class="mt-2 text-sm opacity-80">
      Le but n’est pas de comparer des iPhone et des pensions,
      mais de donner un repère visuel sur l’ampleur des montants engagés
      chaque heure dans le système de retraites.
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
