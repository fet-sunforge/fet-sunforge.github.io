import type { Rubric } from '@/types/rubrics';

export const rubrics: Rubric = {
  id: 'poster',
  title: 'Poster',
  description: 'Create a poster that effectively communicates your project.',
  levels: [
    { from: 8, to: 10 },
    { from: 6, to: 8 },
    { from: 2, to: 6 },
    { from: 0, to: 2 },
  ],
  criteria: [
    {
      id: 'poster-1',
      title: 'Clarity & Communication',
      description: 'How clearly the project is explained.',
      weight: 0.4,
      maxScore: 10,
      levels: [
        {
          id: "clarity-1",
          title: "Excellent",
          description: "Very clear and easy to understand; key messages stand out; smooth flow",
        },
        {
          id: "clarity-2",
          title: "Good",
          description: "Mostly clear; minor parts need improvement",
        },
        {
          id: "clarity-3",
          title: "Satisfactory",
          description: "Understandable but requires effort; some confusing sections",
        },
        {
          id: "clarity-4",
          title: "Poor",
          description: "Hard to follow; unclear explanation; key points missing",
        }
      ]
    },
    {
      id: 'poster-2',
      title: 'Visual Design & Presentation',
      description: 'Quality of layout, readability, and visual appeal',
      weight: 0.3,
      maxScore: 10,
      levels: [
        {
          id: "design-1",
          title: "Excellent",
          description: "Clean, professional, visually appealing; excellent readability",
        },
        {
          id: "design-2",
          title: "Good",
          description: "Clear and organised; minor design issues",
        },
        {
          id: "design-3",
          title: "Satisfactory",
          description: "Basic layout; some readability or alignment issues",
        },
        {
          id: "design-4",
          title: "Poor",
          description: "Cluttered, messy, or difficult to read",
        }
      ]
    },
    {
      id: 'poster-3',
      title: 'Overall Impact',
      description: 'How memorable, engaging, and convincing the poster is',
      weight: 0.3,
      maxScore: 10,
      levels: [
        {
          id: "impact-1",
          title: "Excellent",
          description: "Strong impact; engaging; clearly communicates value and significance",
        },
        {
          id: "impact-2",
          title: "Good",
          description: "Good impression; message comes across well",
        },
        {
          id: "impact-3",
          title: "Satisfactory",
          description: "Moderate impact; message is accetable but not memorable",
        },
        {
          id: "impact-4",
          title: "Poor",
          description: "Weak impact; fails to engage or persuade",
        }
      ]
    }
  ]
}
