// src/lib/stats.ts
import type { ScoreStats } from "@/types/stats";

type SubmitScorePayload = {
  score: number;
  totalQuestions: number;
};

export async function submitScore(
  payload: SubmitScorePayload,
): Promise<ScoreStats> {
  const res = await fetch("/api/score", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`API /api/score error: ${res.status}`);
  }

  const data = (await res.json()) as ScoreStats;
  return data;
}
