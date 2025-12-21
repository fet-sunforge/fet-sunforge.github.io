import type { MultipleCoursesResponse } from '@/lib/adminclient';

// Helper function to group assessed marks by course and itemIndex
export interface GroupedSubmission {
  course: string;
  itemIndex: number;
  assessors: {
    assessorCode: string;
    marks: Record<string, number>;
    documentId: string;
    createdAt?: any;
    updatedAt?: any;
  }[];
}

export const groupAssessedMarksBySubmission = (
  response: MultipleCoursesResponse
): GroupedSubmission[] => {
  const grouped: Map<string, GroupedSubmission> = new Map();

  // Iterate through each course's results
  Object.entries(response.resultsByCourse).forEach(([course, data]) => {
    data.assessments.forEach((assessment) => {
      // Create a unique key for each submission (course + itemIndex)
      const key = `${course}-${assessment.itemIndex}`;

      if (!grouped.has(key)) {
        // Create new grouped submission
        grouped.set(key, {
          course: course,
          itemIndex: assessment.itemIndex,
          assessors: []
        });
      }

      // Add this assessor's marks to the submission
      grouped.get(key)!.assessors.push({
        assessorCode: assessment.assessor,
        marks: assessment.marks,
        documentId: assessment.documentId,
        createdAt: assessment.createdAt,
        updatedAt: assessment.updatedAt
      });
    });
  });

  // Convert Map to array and sort
  const result = Array.from(grouped.values());

  // Sort by course first, then by itemIndex
  result.sort((a, b) => {
    if (a.course !== b.course) {
      return a.course.localeCompare(b.course);
    }
    return a.itemIndex - b.itemIndex;
  });

  return result;
};
