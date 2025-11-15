import { formatEuro } from "@/lib/format";
import { LAMBORGHINI_PRICE_EUR, PENSIONS_PER_MINUTE_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ10: Question = {
  id: "q10",
  title: "Une minute de retraites : combien de Lamborghini ?",
  description:
    "Une minute de retraites suffit-elle à acheter plusieurs supercars ? À l'échelle d'une Lamborghini autour de 260 000 €, tu dirais qu'une minute de retraites équivaut à :",
  options: [
    { id: "a", label: "À peine une demi-Lamborghini." },
    { id: "b", label: "Environ 1 Lamborghini, pas plus." },
    { id: "c", label: "Environ 3 Lamborghini : on est presque sur trois supercars à la minute." },
    { id: "d", label: "Une dizaine de Lamborghini, c'est carrément une concession qui part chaque minute." },
  ],
  isCorrect: (choice) => choice === "c",
  explainHTML: () => `
    <p>
      Une minute de retraites représente environ
      <strong>${formatEuro(PENSIONS_PER_MINUTE_EUR)}</strong>.
      À environ ${formatEuro(LAMBORGHINI_PRICE_EUR)} la Lamborghini,
      on peut en acheter près de <strong>3</strong> avec cette somme.
    </p>
    <p>
      Dire qu'une minute de retraites, c'est quasiment
      <strong>trois supercars</strong>, donne une bonne idée
      de la vitesse à laquelle les montants s'accumulent.
    </p>
  `,
  sources: [
    {
      label: "Lamborghini — Prix catalogue (ordre de grandeur)",
      href: "https://www.lamborghini.com",
    },
    {
      label: "INSEE — Dépenses de retraites par minute",
      href: "https://www.insee.fr",
    },
  ],
};

export default questionQ10;
