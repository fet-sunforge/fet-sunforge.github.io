import type { Project, Course } from '@/interfaces'
import { courses as ditCourses } from '@/projects/dit'
import { courses as fypCourses } from '@/projects/fyp'
import { courses as idpCourses } from '@/projects/idp'
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

export async function retrieveCourseProjectDetails(courseCode: string, itemIndex: number): Promise<{ course: Course | null, project: Project | null }> {
  let projectDetails: Project|null = null;
  let courseDetails: Course|null = null;

  courses.forEach((course) => {
    if (course.code === courseCode) {
      courseDetails = course;
      projectDetails = course.projects[itemIndex] as Project;
    }
  });

  return { course: courseDetails, project: projectDetails };
}
