
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Project Management and Engineering Design",
  description: "This is a project-based course, which entails students working in groups of no more than 5 to design and build an engineering system which addresses an engineering challenge. Students will re-learn and use the CDIO™ framework to guide their design and build experiences throughout this course.",
  short: "PMED",
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
