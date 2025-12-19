import type { Rubric } from '@/types/rubrics';
import type { GroupedSubmission } from './helpers';

export const calculateAssessorMarks = (rubric: Rubric, assessedMarks: Record<string, number>): number => {
  return rubric.criteria.reduce((acc, criterion) => {
    const mark = assessedMarks[criterion.id];
    return mark !== undefined ? acc + mark/criterion.maxScore * criterion.weight : acc;
  }, 0) * 100;
};

export const calculateTotalMarks = (rubric: Rubric, submission: GroupedSubmission): { assessors: number[], total: number } => {
  let result: { assessors: number[], total: number } = { assessors: [], total: 0 };
  submission.assessors.forEach(assessor => {
    const marks = calculateAssessorMarks(rubric, assessor.marks);
    result.assessors.push(marks);
    result.total += marks;
  });
  result.total /= result.assessors.length;
  return result;
};
