
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Integrated Design Project 1",
  description: "The Integrated Design Project is an engineering project carried out by a group of students to integrate knowledge and skills that has been gained. Working in groups of 3 to 4, students will be responsible for identifying and solving complex engineering problems and to carry out the necessary complex engineering activities which includes conceptualizing, designing, planning, implementing, managing and evaluating an Electronic and Electrical engineering design project. This will incorporate teamwork and leadership skills, effective communication and the application of project management.",
  short: "IDP",
  projects: [{
    title: 'Distributed Acoustic Sensing of Seismic Events in Buildings due to Earthquake',
    desc: '',
    pic: ['Group 1']
  }, {
    title: 'Seismic Detection of Bridge due to Earthquake using Vibration Sensor and Accelerometer',
    desc: '',
    pic: ['Group 2']
  }, {
    title: 'Integrated Sensing of Landslide',
    desc: '',
    pic: ['Group 3']
  }, {
    title: 'Sinkhole Detection using Distributed Acoustic Sensing',
    desc: '',
    pic: ['Group 4']
  }]
}, {
  name: "Integrated Design Project 2",
  description: "The Integrated Design Project is an engineering project carried out by a group of students to integrate knowledge and skills that has been gained. Working in groups of 3 to 4, students will be responsible for identifying and solving complex engineering problems and to carry out the necessary complex engineering activities which includes conceptualizing, designing, planning, implementing, managing and evaluating an Electronic and Electrical engineering design project. This will incorporate teamwork and leadership skills, effective communication and the application of project management.",
  short: "IDP",
  projects: [{
    title: 'project 1',
    desc: '',
    pic: ['Group 1']
  }, {
    title: 'project 2',
    desc: '',
    pic: ['Group 2']
  }, {
    title: 'project 3',
    desc: '',
    pic: ['Group 3']
  }]
}] as Array<Course>);
