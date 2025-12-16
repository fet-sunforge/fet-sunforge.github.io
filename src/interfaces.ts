export interface Course {
  name: string;
  description: string;
  short: string;
  code: string;
  projects: Array<Project>;
}
export interface Project {
  title: string;
  desc: string;
  pic: string[];
}
