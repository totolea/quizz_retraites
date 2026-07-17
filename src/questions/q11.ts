import { formatEuro } from "@/lib/format";
import { IDF_BUDGET_EUR, PENSIONS_PER_DAY_EUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ11: Question = {
  id: "q11",
  theme: {
    shell: "from-slate-950 via-emerald-950 to-green-900",
    card: "border-emerald-400/20 bg-slate-950/80",
    badge: "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
    option: "border-emerald-700/40 bg-slate-900/70 hover:bg-emerald-900/30",
    optionActive: "border-emerald-300 bg-emerald-500/20 ring-1 ring-emerald-300/40",
    button: "from-emerald-400 to-green-300",
    icon: "🗺️",
  },
  title: "Combien de jours de retraites égalent le budget de l’Île-de-France ?",
  description:
    "Un budget régional peut sembler immense, jusqu’à ce qu’on le compare au flux de dépenses annuel des retraites. En quelques jours, ou en plusieurs mois, quelle est l’échelle la plus plausible ?",
  challengeHint: "Comparaison de territoires",
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
