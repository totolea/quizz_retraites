export type Source = {
  label: string;
  href: string;
};

export type ExplanationBlock = {
  explainHTML: () => string;
  sources: Source[];
};

export type Question = {
  id: string;
  title: string;
  description: string;
  options: { id: string; label: string }[];
  isCorrect: (choiceId: string) => boolean;
  explainHTML: () => string;
  sources: Source[];
};
