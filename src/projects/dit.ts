
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Design and Innovative Thinking",
  description: "The course will provide an overview of the entire process of creative problem-solving, addressing problem definition, identification and removal of blocks to creative thought. It will also cover the selection, implementation and evaluation of solutions to a given set of problems.",
  short: "DIT",
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
