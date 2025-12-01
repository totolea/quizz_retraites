import type { Question } from "@/types/quiz";

const questionQ6: Question = {
  id: "q6",
  title: "Qui épargne le plus : les retraités ou les jeunes actifs ?",
  description:
    "On imagine souvent que les jeunes actifs ont davantage besoin d’épargner que les retraités. Pourtant, si l’on regarde la réalité des taux d’épargne par âge, qui met de côté la plus grande part de son revenu ?",

  options: [
    {
      id: "a",
      label:
        "Les jeunes actifs (25–34 ans) épargnent beaucoup plus que les retraités.",
    },
    {
      id: "b",
      label:
        "Les deux épargnent à peu près la même part de leur revenu.",
    },
    {
      id: "c",
      label:
        "Les retraités ont un taux d’épargne plus élevé que les jeunes actifs.",
    },
    {
      id: "d",
      label:
        "Aucun des deux n’épargne vraiment : les deux taux sont proches de zéro.",
    },
  ],

  isCorrect: (choice) => choice === "c",

  explainHTML: () => `
    <p>
      Selon les données de l’INSEE et de la Banque de France, le taux d’épargne
      des retraités est supérieur à celui des jeunes actifs.
    </p>

    <p>
      En moyenne :
      <ul class="mt-2 list-disc ml-6">
        <li>25–34 ans : taux d’épargne autour de 8–10 %</li>
        <li>Retraités : taux d’épargne autour de 15–16 %</li>
      </ul>
    </p>

    <p class="mt-2">
      Autrement dit, les retraités – malgré l’idée reçue selon laquelle ils “peuvent
      moins épargner” – mettent en moyenne de côté une part plus importante
      de leur revenu que les jeunes actifs.
    </p>

    <p class="mt-2 text-sm opacity-80">
      Le taux d’épargne dépend bien sûr du patrimoine, du niveau de vie et
      du cycle de vie économique, mais l’écart observé est robuste :
      les retraités épargnent davantage en proportion.
    </p>
  `,

  sources: [
    {
      label: "INSEE — Niveaux de vie et épargne par âge",
      href: "https://www.insee.fr",
    },
    {
      label: "Banque de France — Analyse des taux d’épargne",
      href: "https://www.banque-france.fr",
    },
    {
      label: "DREES — Revenus et patrimoine des retraités",
      href: "https://drees.solidarites-sante.gouv.fr",
    },
  ],
};

export default questionQ6;
