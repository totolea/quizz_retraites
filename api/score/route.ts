// src/app/api/score/route.ts
import { NextResponse } from "next/server";

type RawScore = {
  score: number;
  totalQuestions: number;
};

// Stockage en mémoire côté serveur (OK pour démo / petite app)
const scores: RawScore[] = [];

export async function POST(request: Request) {
  const body = await request.json();

  const score = Number(body?.score);
  const totalQuestions = Number(body?.totalQuestions);

  if (
    !Number.isFinite(score) ||
    !Number.isFinite(totalQuestions) ||
    totalQuestions <= 0
  ) {
    return NextResponse.json(
      { error: "Invalid payload" },
      { status: 400 },
    );
  }

  scores.push({ score, totalQuestions });

  // moyenne
  const totalSubmissions = scores.length;
  const sum = scores.reduce((acc, s) => acc + s.score, 0);
  const averageScore = sum / totalSubmissions;

  // percentile (pourcentage de joueurs en dessous ou à égalité avec ce score)
  const belowOrEqual = scores.filter((s) => s.score <= score).length;
  const percentile = (belowOrEqual / totalSubmissions) * 100;

  const stats = {
    averageScore,
    totalSubmissions,
    percentile,
  };

  return NextResponse.json(stats);
}
