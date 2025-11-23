import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, CircleX, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Mini-quiz React : "Qu’est-ce qui coûte le plus cher ?"
 * - Deux options : fortune de Bernard Arnault vs 4 mois de retraites en France
 * - Animation succès/erreur
 * - Affiche un bloc "sources" avant de passer à la question suivante
 * - Structure extensible pour ajouter d’autres questions plus tard
 *
 * Technologies : React + Tailwind + framer-motion + shadcn/ui + lucide-react
 *
 * ⚠️ Hypothèses chiffrées (14 nov. 2025) et sources cliquables affichées dans l’UI :
 * - Dépenses annuelles de retraites ≈ 380 Md€ (année 2023, Cour des comptes)
 *   Source (page de synthèse) : https://www.ccomptes.fr/fr/publications/situation-financiere-et-perspectives-du-systeme-de-retraites
 *   PDF (20 fév. 2025) : https://www.ccomptes.fr/sites/default/files/2025-02/20250220-Situation-financiere-et-perspectives-du-systeme-de%20retraites_0.pdf
 * - Fortune de Bernard Arnault (temps réel) ≈ 191,4 Md$ (Forbes, 14 nov. 2025) → conversion approximative en euros dans le code.
 *   Source : https://www.forbes.com/profile/bernard-arnault/
 *
 * 💡 Si vous voulez verrouiller des montants spécifiques (ou actualiser automatiquement),
 * exposez ces valeurs via un endpoint ou mettez à jour les constantes ci-dessous.
 */

// === PARAMÈTRES CHIFFRÉS (faciles à mettre à jour) ===
const ANNUAL_PENSIONS_EUR = 380e9; // 380 Md€ (2023, Cour des comptes)
const MONTHS = 4; // période à comparer (4 mois)

// Valeur temps réel (USD) observée le 14/11/2025 sur Forbes Real-Time
const ARNAULT_NET_WORTH_USD = 191.4e9; // 191,4 Md$

// Taux de change approximatif pour comparer en euros (à ajuster au besoin)
// Ici on prend 1 $ ≈ 0.93 € (arrondi conservateur)
const USD_TO_EUR = 0.93;

export const EU_DEFENSE_TOTAL_EUR = 240_000_000_000; 
// ordre de grandeur : ~240 Md€ pour l'ensemble UE selon l'AED

// === DÉRIVÉS ===
const fourMonthsPensionsEUR = (ANNUAL_PENSIONS_EUR / 12) * MONTHS; // ≈ 126.7 Md€
const arnaultNetWorthEUR = ARNAULT_NET_WORTH_USD * USD_TO_EUR; // ≈ 178 Md€ avec 0.93

// Construction de la question
const QUESTIONS = [
  {
    id: "q1",
    title: "Qu’est-ce qui coûte le plus cher ?",
    description: "Comparez deux ordres de grandeur (valeurs indicatives au 14/11/2025).",
    options: [
      { id: "arnault", label: "La fortune de Bernard Arnault" },
      { id: "retraites", label: "4 mois de retraites (France)" },
    ],
    // Logique de vérité (calculée dynamiquement)
    isCorrect: (choiceId: string) => {
      const choiceIsArnault = choiceId === "arnault";
      const arnaultIsBigger = arnaultNetWorthEUR > fourMonthsPensionsEUR;
      return choiceIsArnault === arnaultIsBigger;
    },
    // Texte d’explication dynamique
    explainHTML: () => {
      const fmt = (n: number) =>
        new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
          maximumFractionDigits: 0,
        }).format(n);

      return `
        <p class="mb-2">Au <strong>14 novembre 2025</strong> :</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>4 mois de retraites ≈ <strong>${fmt(fourMonthsPensionsEUR)}</strong> (sur la base de <em>${fmt(ANNUAL_PENSIONS_EUR)}</em> par an en 2023).</li>
          <li>Fortune de Bernard Arnault ≈ <strong>${fmt(arnaultNetWorthEUR)}</strong> (conversion 
            de <em>${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(ARNAULT_NET_WORTH_USD)}</em> à un taux 
            indicatif de ${USD_TO_EUR} € / $).</li>
        </ul>
        <p class="mt-3 text-sm opacity-80">Les montants fluctuent et la comparaison dépend du taux de change.
        Cette app illustre un <em>ordre de grandeur</em>, pas une valeur contractuelle.</p>
      `;
    },
    sources: [
      {
        label: "Cour des comptes (page de publication, 20/02/2025)",
        href: "https://www.ccomptes.fr/fr/publications/situation-financiere-et-perspectives-du-systeme-de-retraites",
      },
      {
        label: "Cour des comptes (PDF)",
        href: "https://www.ccomptes.fr/sites/default/files/2025-02/20250220-Situation-financiere-et-perspectives-du-systeme-de%20retraites_0.pdf",
      },
      {
        label: "Forbes – Bernard Arnault (temps réel)",
        href: "https://www.forbes.com/profile/bernard-arnault/",
      },
    ],
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

  const current = QUESTIONS[index];
  const isEnd = index >= QUESTIONS.length;

  const handlePick = (id: string) => {
    if (status !== "idle") return;
    setPicked(id);
    const ok = current.isCorrect(id);
    setStatus(ok ? "correct" : "wrong");
  };

  const handleNext = () => {
    if (index < QUESTIONS.length - 1) {
      setIndex((i) => i + 1);
      setPicked(null);
      setStatus("idle");
    } else {
      // Rejouer (boucle) ou afficher un écran de fin
      setIndex(0);
      setPicked(null);
      setStatus("idle");
    }
  };

  if (isEnd) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">{current.title}</CardTitle>
          <CardDescription>{current.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            {current.options.map((opt) => (
              <motion.div
                key={opt.id}
                whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
              >
                <Button
                  variant="secondary"
                  className="w-full h-16 text-base rounded-2xl"
                  onClick={() => handlePick(opt.id)}
                  disabled={status !== "idle"}
                >
                  {opt.label}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Zone feedback */}
          <div className="mt-6 min-h-[84px]">
            <AnimatePresence mode="wait">
              {status === "correct" && (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-300/40"
                >
                  <CheckCircle className="mt-0.5" />
                  <div>
                    <p className="font-medium">Bien joué !</p>
                    <p className="text-sm opacity-90">Votre réponse correspond à l’ordre de grandeur affiché.</p>
                  </div>
                </motion.div>
              )}

              {status === "wrong" && (
                <motion.div
                  key="ko"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-50/60 dark:bg-red-900/20 border border-red-300/40"
                >
                  <CircleX className="mt-0.5" />
                  <div>
                    <p className="font-medium">Raté !</p>
                    <p className="text-sm opacity-90">Regardez les sources et l’explication ci‑dessous ; les valeurs évoluent avec le temps et les marchés.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Explication + sources (après un clic) */}
          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 space-y-4"
            >
              <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: current.explainHTML() }} />

              <div className="rounded-xl border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Info size={18} />
                  <p className="font-medium">Sources</p>
                </div>
                <ul className="list-disc pl-6 space-y-1">
                  {current.sources.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noreferrer" className="underline">{s.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleNext} className="rounded-xl">
                  Question suivante
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>

      {/* Confetti minimaliste façon "burst" */}
      <AnimatePresence>
        {status === "correct" && (
          <motion.div
            key="burst"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="pointer-events-none fixed inset-0 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-40 h-40 rounded-full bg-emerald-400/20 blur-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
