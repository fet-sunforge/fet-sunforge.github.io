export interface Criterion {
  id: string;
  title: string;
  description: string;
  weight: number;
  maxScore: number;
  levels: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export interface Rubric {
  id: string;
  title: string;
  description: string;
  levels: Array<{ from: number, to: number }>;
  criteria: Array<Criterion>;
}
