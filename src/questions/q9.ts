import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, RETIREMENT_CONTRIBUTIONS_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ9: Question = {
  id: "q9",
  theme: {
    shell: "from-lime-950 via-green-900 to-emerald-900",
    card: "border-lime-400/20 bg-slate-950/80",
    badge: "border-lime-400/40 bg-lime-500/10 text-lime-200",
    option: "border-lime-700/40 bg-slate-900/70 hover:bg-lime-900/30",
    optionActive: "border-lime-300 bg-lime-500/20 ring-1 ring-lime-300/40",
    button: "from-lime-400 to-green-300",
    icon: "⚙️",
  },
  title: "Les cotisations couvrent-elles vraiment toutes les pensions ?",
  description:
    "Chaque année, les actifs payent des cotisations retraite, mais les pensions sont versées aux retraités. À ton avis, est-ce que ces cotisations suffisent à tout couvrir, ou faut-il compléter par d’autres ressources ?",
  challengeHint: "Financement du système",
  options: [
    {
      id: "a",
      label:
        "Les cotisations retraite couvrent plus que nécessaire : elles dépassent clairement le montant des pensions versées.",
    },
    {
      id: "b",
      label:
        "Les cotisations retraite couvrent quasiment tout : on est à l’équilibre, à quelques milliards près.",
    },
    {
      id: "c",
      label:
        "Les cotisations retraite ne suffisent pas tout à fait : il manque de l’ordre de 10 à 20 % pour payer toutes les pensions.",
    },
    {
      id: "d",
      label:
        "Les cotisations retraite ne suffisent pas du tout : elles ne couvrent même pas la moitié du montant des pensions.",
    },
  ],
  isCorrect: (choice) => choice === "c",
  explainHTML: () => `
    <p>
      Le coût annuel des retraites françaises est d’environ
      ${formatEuro(ANNUAL_PENSIONS_EUR)}.
      Le total des cotisations vieillesse encaissées (cotisations sociales dédiées aux retraites)
      est inférieur, autour de
      ${formatEuro(RETIREMENT_CONTRIBUTIONS_EUR)}.
    </p>

    <p>
      Autrement dit, les cotisations ne couvrent pas entièrement
      les pensions versées : il manque typiquement de l’ordre de
      10 à 20&nbsp;%, qui sont financés par d’autres recettes publiques
      (impôts, transferts, subventions d’équilibre…).
    </p>

    <p class="mt-2 text-sm opacity-80">
      Les chiffres précis varient selon les années et les conventions de calcul,
      mais l’idée à retenir reste la même :
      les retraites ne sont pas financées uniquement par les cotisations des actifs,
      il existe un complément structurel apporté par le reste des finances publiques.
    </p>
  `,
  sources: [
    {
      label: "INSEE — Comptes de la protection sociale",
      href: "https://www.insee.fr",
    },
    {
      label: "COR — Rapports sur les ressources des régimes de retraite",
      href: "https://www.cor-retraites.fr",
    },
  ],
};

export default questionQ9;
