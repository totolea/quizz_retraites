import { formatEuro } from "@/lib/format";
import {
  ANNUAL_PENSIONS_EUR,
  SOCIAL_SPENDING_TOTAL_EUR,
} from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ10: Question = {
  id: "q10",
  kind: "slider",

  title: "Selon toi, quelle part des dépenses sociales va aux retraites ?",
  description:
    "Les dépenses de protection sociale regroupent les retraites, la santé, la famille, le chômage, etc. Parmi l’ensemble de ces dépenses, quelle part est consacrée aux retraites, selon toi ? Donne une estimation en pourcentage.",

  // Slider en pourcentage (0–100 %)
  sliderMin: 0,
  sliderMax: 100,
  sliderStep: 1,
  sliderUnit: "%",
  // ordre de grandeur : un peu plus de la moitié
  sliderCorrectValue: 50,
  sliderTolerancePercent: 10, // on accepte ~40–60 %

  explainHTML: () => `
    <p>
      L’ensemble des dépenses de protection sociale en France
      (retraites, santé, famille, chômage, minima sociaux, etc.)
      représente environ
      ${formatEuro(SOCIAL_SPENDING_TOTAL_EUR)} par an.
    </p>

    <p>
      Les retraites, à elles seules, pèsent autour de
      ${formatEuro(ANNUAL_PENSIONS_EUR)}.
      Autrement dit, elles représentent
      un peu plus de la moitié de toutes les dépenses sociales :
      on est autour de 50&nbsp;%.
    </p>

    <p class="mt-2 text-sm opacity-80">
      L’idée à retenir : dans la grande catégorie « protection sociale »,
      les retraites constituent de loin le premier poste de dépense.
    </p>
  `,
  sources: [
    {
      label: "INSEE — Comptes de la protection sociale",
      href: "https://www.insee.fr",
    },
    {
      label: "DREES — Les dépenses de protection sociale",
      href: "https://drees.solidarites-sante.gouv.fr",
    },
  ],
};

export default questionQ10;
