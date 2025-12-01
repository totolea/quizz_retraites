import type { ScoreStats, ScoreSubmission } from "@/types/stats";

const SCORE_ENDPOINT = "/api/score";

async function parseResponse(response: Response) {
  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return response.json();
  }
  return response.text();
}

export async function submitScore(
  payload: ScoreSubmission,
): Promise<ScoreStats> {
  const res = await fetch(SCORE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await parseResponse(res);

  if (!res.ok) {
    throw new Error(
      typeof data === "string"
        ? data
        : data?.message ?? "Impossible d'enregistrer le score",
    );
  }

  return data as ScoreStats;
}
