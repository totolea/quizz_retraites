import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle, CircleX, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { questions } from "@/questions";
import type { Question } from "@/types/quiz";

const QUESTIONS: Question[] = questions;
const TOTAL_QUESTIONS = QUESTIONS.length;

export default function App() {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [isEnd, setIsEnd] = useState(false);
  const [score, setScore] = useState(0);

  const current = useMemo(() => QUESTIONS[index], [index]);
  const questionNumber = index + 1;

  const handlePick = (choiceId: string) => {
    if (status !== "idle") return;
    const ok = current.isCorrect(choiceId);
    setStatus(ok ? "correct" : "wrong");
    if (ok) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    const nextIndex = index + 1;
    if (nextIndex >= QUESTIONS.length) {
      setIsEnd(true);
      return;
    }

    setIndex(nextIndex);
    setStatus("idle");
  };

  if (!current && !isEnd) return null;

  if (isEnd) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900 flex items-center justify-center px-4 py-10 text-slate-50">
        <Card className="w-full max-w-xl rounded-3xl border border-white/20 bg-slate-950/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.85)]">
          <CardContent className="pt-8 pb-10 text-center space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight">
              Merci d&apos;avoir joué&nbsp;!
            </h1>
            <p className="text-xl font-semibold">
              Score : {score}/{TOTAL_QUESTIONS}
            </p>
            <p className="text-sm text-slate-100">
              {Math.round((score / TOTAL_QUESTIONS) * 100)} % de réponses
              correctes.
            </p>
            <p className="text-sm text-slate-100 max-w-md mx-auto">
              Tu as parcouru toutes les comparaisons. Tu pourras revenir ajouter
              de nouvelles questions ou affiner les ordres de grandeur.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900 text-slate-50 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_top,_#ffffff33,_transparent_55%)]" />

      <header className="absolute top-4 left-0 right-0 flex justify-center">
        <p className="text-xs sm:text-sm text-slate-100">
          Ordres de grandeur des retraites françaises
        </p>
      </header>

      <Card className="relative w-full max-w-4xl rounded-3xl border border-white/20 bg-slate-950/80 backdrop-blur-xl shadow-[0_22px_70px_rgba(15,23,42,0.9)] text-slate-50">
        <div className="pointer-events-none absolute -top-32 -right-20 h-64 w-64 rounded-full bg-violet-500/25 blur-3xl" />

        <CardHeader className="relative space-y-3 pb-4">
          <div className="flex items-center justify-between text-xs sm:text-sm text-slate-100">
            <span className="font-medium">
              Question {questionNumber}/{TOTAL_QUESTIONS}
            </span>
            <span>
              Score :{" "}
              <span className="font-semibold">
                {score}/{TOTAL_QUESTIONS}
              </span>
            </span>
          </div>

          <CardTitle className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-white">
            {current.title}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-slate-100 max-w-3xl">
            {current.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative pb-7">
          {/* OPTIONS : toutes mêmes hauteurs */}
          <div className="grid gap-3 sm:grid-cols-2 items-stretch">
            {current.options.map((opt) => (
              <motion.div
                key={opt.id}
                className="h-full"
                whileHover={
                  status === "idle" ? { y: -2, scale: 1.01 } : undefined
                }
                whileTap={status === "idle" ? { scale: 0.98 } : undefined}
              >
                <Button
                  variant="secondary"
                  className="h-full w-full min-h-[5rem] 
                  rounded-2xl 
                  bg-slate-800/60 hover:bg-slate-700/60 
                  border border-slate-600 
                  text-white 
                  shadow-sm 
                  text-left whitespace-normal leading-snug px-4 py-3"
                  onClick={() => handlePick(opt.id)}
                  disabled={status !== "idle"}
                >
                  {opt.label}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* feedback */}
          <div className="mt-6 min-h-[84px]">
            <AnimatePresence mode="wait">
              {status === "correct" && (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/60 text-slate-50"
                >
                  <CheckCircle className="mt-0.5 text-emerald-300" />
                  <div>
                    <p className="font-medium">Bien joué&nbsp;!</p>
                    <p className="text-sm">
                      Ta réponse est cohérente avec les ordres de grandeur
                      utilisés.
                    </p>
                  </div>
                </motion.div>
              )}

              {status === "wrong" && (
                <motion.div
                  key="ko"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-rose-500/15 border border-rose-400/60 text-slate-50"
                >
                  <CircleX className="mt-0.5 text-rose-300" />
                  <div>
                    <p className="font-medium">Raté.</p>
                    <p className="text-sm">
                      Regarde les explications et les sources&nbsp;: les chiffres
                      sont arrondis, mais les ordres de grandeur sont parlants.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 space-y-5"
            >
              <div
                className="prose prose-sm dark:prose-invert max-w-none text-slate-50"
                dangerouslySetInnerHTML={{ __html: current.explainHTML() }}
              />

              <div className="rounded-2xl border border-slate-500/70 bg-slate-900/80 p-4 text-slate-50">
                <div className="flex items-center gap-2 mb-2">
                  <Info size={18} className="text-sky-300" />
                  <p className="font-medium">Sources</p>
                </div>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  {current.sources.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 hover:text-sky-300"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={handleNext}
                  className="rounded-2xl px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium shadow-md gap-2"
                >
                  Question suivante
                  <ArrowRight className="ml-1" size={16} />
                </Button>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>

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
              className="w-40 h-40 rounded-full bg-emerald-400/25 blur-3xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
