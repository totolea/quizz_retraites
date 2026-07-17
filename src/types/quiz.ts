export type QuestionSource = {
  label: string;
  href: string;
};

export type QuestionTheme = {
  shell: string;
  card: string;
  badge: string;
  option: string;
  optionActive: string;
  button: string;
  icon: string;
};

export type BaseQuestion = {
  id: string;
  title: string;
  description: string;
  challengeHint?: string;
  theme?: QuestionTheme;
  explainHTML: () => string;
  sources: QuestionSource[];
};

export type McqQuestion = BaseQuestion & {
  kind?: "mcq"; // par défaut
  options: { id: string; label: string }[];
  isCorrect: (choiceId: string) => boolean;
};

export type SliderQuestion = BaseQuestion & {
  kind: "slider";
  sliderMin: number;
  sliderMax: number;
  sliderStep: number;
  sliderUnit: string;
  sliderCorrectValue: number;
  sliderTolerancePercent: number; // ex : 20 = ±20 %
};

export type Question = McqQuestion | SliderQuestion;
