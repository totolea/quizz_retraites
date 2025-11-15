import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, southAfricaGdpEUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ1: Question = {
  id: "q1",
  title: "Nos retraites annuelles valent-elles autant que le PIB d\u2019un grand pays ?",
  description:
    "Chaque ann\u00e9e, la France d\u00e9pense pour ses retraites des montants colossaux. Si tu compares \u00e0 un pays comme l\u2019Afrique du Sud, tu dirais que :",
  options: [
    {
      id: "a",
      label:
        "Les retraites fran\u00e7aises repr\u00e9sentent \u00e0 peine une petite fraction du PIB de l\u2019Afrique du Sud.",
    },
    {
      id: "b",
      label:
        "Les retraites fran\u00e7aises sont plut\u00f4t comparables au budget d\u2019une grande ville, pas \u00e0 un pays entier.",
    },
    {
      id: "c",
      label:
        "Les retraites fran\u00e7aises sont quasiment du m\u00eame ordre de grandeur que le PIB de l\u2019Afrique du Sud, autour de quelques centaines de milliards d\u2019euros.",
    },
    {
      id: "d",
      label:
        "Les retraites fran\u00e7aises valent largement plus que le PIB de l\u2019ensemble du continent africain.",
    },
  ],
  isCorrect: (choice) => choice === "c",
  explainHTML: () => `
    <p>
      Le syst\u00e8me de retraites fran\u00e7ais repr\u00e9sente environ
      <strong>${formatEuro(ANNUAL_PENSIONS_EUR)}</strong> par an.
      Le PIB de l\u2019Afrique du Sud tourne autour de
      <strong>${formatEuro(southAfricaGdpEUR)}</strong>.
    </p>
    <p>
      On est donc bien sur le m\u00eame ordre de grandeur :
      une seule politique publique (les retraites) dans un pays comme la France
      p\u00e8se presque autant qu\u2019un pays entier comme l\u2019Afrique du Sud.
    </p>
    <p class="mt-2 text-sm opacity-80">
      Les chiffres sont arrondis pour garder une vision en ordres de grandeur,
      mais l\u2019id\u00e9e centrale reste : on parle de centaines de milliards d\u2019euros.
    </p>
  `,
  sources: [
    { label: "INSEE \u2014 D\u00e9penses de retraites", href: "https://www.insee.fr" },
    {
      label: "Banque mondiale \u2014 PIB Afrique du Sud",
      href: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=ZA",
    },
  ],
};

export default questionQ1;
