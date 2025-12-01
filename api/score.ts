import type { VercelRequest, VercelResponse } from "@vercel/node";

type Histogram = Record<string, number>;

type StoredStats = {
  totalSubmissions: number;
  totalScore: number;
  histogram: Histogram;
};

type ScorePayload = {
  score: number;
  totalQuestions: number;
};

const STATS_KEY = "quiz:stats:v1";
const HIST_KEY = `${STATS_KEY}:hist`;

const kvUrl = process.env.KV_REST_API_URL;
const kvToken = process.env.KV_REST_API_TOKEN;

const requireKvConfig = () => {
  if (!kvUrl || !kvToken) {
    throw new Error("Configuration Vercel KV manquante");
  }
};

const kvRequest = async <T>(path: string, method: "GET" | "POST") => {
  requireKvConfig();

  const res = await fetch(`${kvUrl}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${kvToken}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Requête KV échouée");
  }

  const data = (await res.json()) as { result?: T };
  return data.result ?? null;
};

const kvHGet = async <T>(key: string, field: string) =>
  kvRequest<T | null>(`/hget/${encodeURIComponent(key)}/${encodeURIComponent(field)}`, "GET");

const kvHGetAll = async (key: string) =>
  kvRequest<Record<string, unknown> | null>(`/hgetall/${encodeURIComponent(key)}`, "GET");

const kvHIncrBy = async (key: string, field: string, increment: number) =>
  kvRequest<number>(
    `/hincrby/${encodeURIComponent(key)}/${encodeURIComponent(field)}/${increment}`,
    "POST",
  );

const normalizeNumber = (value: unknown) => {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
};

const parseHistogram = (raw: Record<string, unknown> | null): Histogram => {
  if (!raw) return {};
  return Object.fromEntries(
    Object.entries(raw).map(([key, value]) => [key, normalizeNumber(value) ?? 0]),
  );
};

const readBody = async (req: VercelRequest): Promise<unknown> => {
  if (req.body) return req.body;

  const chunks: Uint8Array[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  if (chunks.length === 0) return null;

  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return null;
  }
};

const getStats = async (): Promise<StoredStats> => {
  const [totalSubmissionsRaw, totalScoreRaw, histogramRaw] = await Promise.all([
    kvHGet<number>(STATS_KEY, "totalSubmissions"),
    kvHGet<number>(STATS_KEY, "totalScore"),
    kvHGetAll(HIST_KEY),
  ]);

  return {
    totalSubmissions: normalizeNumber(totalSubmissionsRaw) ?? 0,
    totalScore: normalizeNumber(totalScoreRaw) ?? 0,
    histogram: parseHistogram(histogramRaw),
  };
};

const incrementStats = async (
  score: number,
  totalQuestions: number,
): Promise<StoredStats> => {
  await Promise.all([
    kvHIncrBy(STATS_KEY, "totalSubmissions", 1),
    kvHIncrBy(STATS_KEY, "totalScore", score),
    kvHIncrBy(HIST_KEY, `${score}/${totalQuestions}`, 1),
  ]);

  return getStats();
};

const computePercentile = (
  histogram: Histogram,
  score: number,
  totalQuestions: number,
  totalSubmissions: number,
): number => {
  if (totalSubmissions === 0 || totalQuestions === 0) return 0;

  const targetRatio = score / totalQuestions;
  let belowCount = 0;

  for (const [key, countValue] of Object.entries(histogram)) {
    const [scoreValue, totalValue] = key.split("/").map(Number);
    const entryCount = Number(countValue ?? 0);

    if (!Number.isFinite(scoreValue) || !Number.isFinite(totalValue) || totalValue === 0)
      continue;

    const ratio = scoreValue / totalValue;
    if (ratio < targetRatio || (ratio === targetRatio && scoreValue < score)) {
      belowCount += entryCount;
    }
  }

  return Math.max(0, Math.min(100, (belowCount / totalSubmissions) * 100));
};

const buildResponse = (
  stats: StoredStats,
  payload?: ScorePayload,
) => {
  const averageScore =
    stats.totalSubmissions === 0 ? 0 : stats.totalScore / stats.totalSubmissions;

  const percentile = payload
    ? computePercentile(
        stats.histogram,
        payload.score,
        payload.totalQuestions,
        stats.totalSubmissions,
      )
    : 0;

  return {
    averageScore,
    percentile,
    totalSubmissions: stats.totalSubmissions,
    distribution: stats.histogram,
  };
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    try {
      const stats = await getStats();
      return res.status(200).json(buildResponse(stats));
    } catch (error) {
      console.error("Erreur lors de la récupération des stats", error);
      return res
        .status(500)
        .json({ message: "Impossible de récupérer les statistiques" });
    }
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const body = await readBody(req);
  const score = normalizeNumber((body as ScorePayload | null)?.score);
  const totalQuestions = normalizeNumber(
    (body as ScorePayload | null)?.totalQuestions,
  );

  if (
    score === null ||
    totalQuestions === null ||
    score < 0 ||
    totalQuestions <= 0 ||
    score > totalQuestions
  ) {
    return res
      .status(400)
      .json({ message: "Score ou total de questions invalides" });
  }

  try {
    const stats = await incrementStats(score, totalQuestions);
    return res.status(200).json(buildResponse(stats, { score, totalQuestions }));
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du score", error);
    return res
      .status(500)
      .json({ message: "Impossible d'enregistrer le score" });
  }
}
