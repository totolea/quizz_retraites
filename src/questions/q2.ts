import { formatEuro } from "@/lib/format";
import { ANNUAL_PENSIONS_EUR, combinedGmtGdpEUR } from "@/data/constants";
import type { Question } from "@/types/quiz";

const questionQ2: Question = {
  id: "q2",
  title: "Une ann\u00e9e de retraites : plus ou moins que trois pays r\u00e9unis ?",
  description:
    "L\u2019\u00e9chelle des retraites fran\u00e7aises est rarement intuitive. Si tu compares une ann\u00e9e de retraites au PIB cumul\u00e9 de la Gr\u00e8ce, du Maroc et de la Tunisie, tu dirais que :",
  options: [
    {
      id: "a",
      label:
        "Les retraites fran\u00e7aises sont tr\u00e8s largement en dessous de ces trois pays r\u00e9unis.",
    },
    {
      id: "b",
      label:
        "On est sur un ordre de grandeur comparable : une ann\u00e9e de retraites p\u00e8se \u00e0 peu pr\u00e8s autant que le PIB cumul\u00e9 de ces trois pays.",
    },
    {
      id: "c",
      label:
        "Les retraites fran\u00e7aises sont dix fois plus \u00e9lev\u00e9es que le PIB cumul\u00e9 de ces trois pays.",
    },
    {
      id: "d",
      label:
        "Les retraites fran\u00e7aises sont du m\u00eame ordre que le budget d\u2019un seul de ces pays, pas les trois.",
    },
  ],
  isCorrect: (choice) => choice === "b",
  explainHTML: () => `
    <p>
      En additionnant le PIB de la Gr\u00e8ce, du Maroc et de la Tunisie,
      on obtient environ ${formatEuro(combinedGmtGdpEUR)}.
      Une ann\u00e9e de retraites fran\u00e7aises tourne autour de
      ${formatEuro(ANNUAL_PENSIONS_EUR)}.
    </p>
    <p>
      On est donc sur des grandeurs comparables :
      financer les retraites fran\u00e7aises pendant un an revient \u00e0
      "mobiliser" l\u2019\u00e9quivalent de la richesse produite chaque ann\u00e9e par
      plusieurs pays r\u00e9unis.
    </p>
  `,
  sources: [
    {
      label: "Banque mondiale \u2014 PIB Gr\u00e8ce",
      href: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=GR",
    },
    {
      label: "Banque mondiale \u2014 PIB Maroc",
      href: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=MA",
    },
    {
      label: "Banque mondiale \u2014 PIB Tunisie",
      href: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=TN",
    },
  ],
};

export default questionQ2;
