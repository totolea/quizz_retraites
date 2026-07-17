import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, combinedFortunesEUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ7: Question = {
  id: "q7",
  theme: {
    shell: "from-zinc-950 via-stone-900 to-neutral-900",
    card: "border-white/20 bg-slate-950/80",
    badge: "border-zinc-400/40 bg-zinc-500/10 text-zinc-200",
    option: "border-zinc-700/40 bg-slate-900/70 hover:bg-zinc-800/50",
    optionActive: "border-zinc-300 bg-zinc-500/20 ring-1 ring-zinc-300/40",
    button: "from-zinc-400 to-stone-300",
    icon: "💎",
  },
  title: "Prendre aux milliardaires suffirait-il à régler le problème ?",
  description:
    "La fortune de quelques milliardaires attire l’attention. Mais si l’on récupérait tout cela, combien de temps cela suffirait-il à financer les retraites françaises ?",
  challengeHint: "Économie des fortunes",
  options: [
    { id: "a", label: "Quelques semaines, tout au plus." },
    { id: "b", label: "Quelques mois seulement, avant de revenir au problème initial." },
    { id: "c", label: "Plusieurs années (au moins 10 ans de retraites)." },
    { id: "d", label: "Pratiquement à vie : ce serait suffisant pour régler le problème définitivement." },
  ],
  isCorrect: (choice) => choice === "b",
  explainHTML: () => `
    <p>
      La fortune cumulée de Bernard Arnault et François Pinault est d’environ
      ${formatEuro(combinedFortunesEUR)}.
    </p>

    <p>
      Rapportée au coût annuel des retraites françaises
      (environ ${formatEuro(ANNUAL_PENSIONS_EUR)}),
      cette somme ne permettrait de financer que
      quelques mois de retraites, pas davantage.
    </p>


    <p class="mt-2 text-sm opacity-80">
      En d’autres termes : « prendre aux milliardaires » ne règle pas un
      déséquilibre annuel — cela ne fait que décaler temporairement le problème.
    </p>
  `,
  sources: [
    {
      label: "Classements fortunes (Forbes, Challenges...)",
      href: "https://www.forbes.com/billionaires/",
    },
    {
      label: "INSEE — Dépenses de retraites",
      href: "https://www.insee.fr",
    },
    {
      label: "Zucman, G. — Travaux sur la fiscalité et les très hauts patrimoines",
      href: "https://gabriel-zucman.eu",
    },
  ],
};

export default questionQ7;
