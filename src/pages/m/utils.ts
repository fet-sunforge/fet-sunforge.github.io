import type { Project } from '@/interfaces'
import { courses as ditCourses } from '@/projects/dit.ts'
import { courses as fypCourses } from '@/projects/fyp.ts'
import { courses as idpCourses } from '@/projects/idp.ts'
import { courses as pmedCourses } from '@/projects/pmed'
import { courses as sedCourses } from '@/projects/sed'

const courses = [...ditCourses.value, ...fypCourses.value, ...idpCourses.value, ...pmedCourses.value, ...sedCourses.value];

export async function retrieveProjectDetails(courseCode: string, itemIndex: number): Promise<Project|null> {
  let projectDetails: Project|null = null;

  courses.forEach((course) => {
    if (course.code === courseCode) {
      projectDetails = course.projects[itemIndex] as Project;
    }
  });

  return projectDetails || null;
}
