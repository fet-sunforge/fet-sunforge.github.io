
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Integrated Design Project 1",
  description: "The Integrated Design Project is an engineering project carried out by a group of students to integrate knowledge and skills that has been gained. Working in groups of 3 to 4, students will be responsible for identifying and solving complex engineering problems and to carry out the necessary complex engineering activities which includes conceptualizing, designing, planning, implementing, managing and evaluating an Electronic and Electrical engineering design project. This will incorporate teamwork and leadership skills, effective communication and the application of project management.",
  short: "IDP",
  projects: [{
    title: 'project 1',
    desc: 'abstract 1',
    pic: ['person1', 'person2']
  }, {
    title: 'project 2',
    desc: 'abstract 2',
    pic: ['person3']
  }, {
    title: 'project 3',
    desc: 'abstract 3',
    pic: ['person5', 'person6', 'person7', 'person8']
  }]
}, {
  name: "Integrated Design Project 2",
  description: "The Integrated Design Project is an engineering project carried out by a group of students to integrate knowledge and skills that has been gained. Working in groups of 3 to 4, students will be responsible for identifying and solving complex engineering problems and to carry out the necessary complex engineering activities which includes conceptualizing, designing, planning, implementing, managing and evaluating an Electronic and Electrical engineering design project. This will incorporate teamwork and leadership skills, effective communication and the application of project management.",
  short: "IDP",
  projects: [{
    title: 'project 1',
    desc: 'abstract 1',
    pic: ['person1', 'person2']
  }, {
    title: 'project 2',
    desc: 'abstract 2',
    pic: ['person3']
  }, {
    title: 'project 3',
    desc: 'abstract 3',
    pic: ['person5', 'person6', 'person7', 'person8']
  }]
}] as Array<Course>);
