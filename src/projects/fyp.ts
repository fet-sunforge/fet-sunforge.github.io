
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Final Year Project 1",
  description: "The Final Year Project is an undergraduate engineering research project carried out by an individual student that is related to the student’s field of study under the supervision of at least one academic member of staff. This project is carried out and completed over two semesters as a partial fulfillment for the undergraduate degree award.",
  short: "FYP",
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
  name: "Final Year Project 2",
  description: "The Final Year Project is an undergraduate engineering research project carried out by an individual student that is related to the student’s field of study under the supervision of at least one academic member of staff. This project is carried out and completed over two semesters as a partial fulfillment for the undergraduate degree award.",
  short: "FYP",
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
