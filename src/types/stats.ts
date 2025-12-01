export type ScoreSubmission = {
  score: number;
  totalQuestions: number;
};

export type ScoreStats = {
  averageScore: number;
  percentile: number;
  totalSubmissions: number;
  distribution: Record<string, number>;
};
