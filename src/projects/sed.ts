
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Sustainable Engineering Design",
  description: "This course introduces a project-based learning framework using Conceiving, Designing, Implementing, and Operating (CDIO™) pedagogy with the principles of sustainable design.",
  short: "SED",
  projects: [{
    title: 'An Intelligent Lighting Control System for Classrooms',
    desc: 'This project is designed to solve the issue of energy waste caused by leaving lights on in unoccupied classrooms. The system uses multiple infrared (IR) sensors installed in each classroom to provide comprehensive coverage of detecting the presence of people. The sensors continously monitor human movement within the classroom area and if ther\'s no presence detected for a certain period of time, the microcontroller will trigger a relay switch to automatically switch off the classroom lighting. <br><br> This automated system able to reduce unnecessary energy consumption, promotes efficient energy usage, and supports sustainable practices in educational environments.',
    pic: ['Jordan Douglas Su E -Wern', 'Raja Muhammad Harith Bin Raja Shahrul Azian', 'Jordan Yong Tze Hsiang', 'Puteri Amelya Dania Binti Megat Arizal Izram', 'Nicholas Lee Yong Wei']
  }, {
    title: 'Automation for Sustainability: A Smart Waste Sorting Solution for Sunway City',
    desc: 'abstract',
    pic: ['Alif Meherin', 'Bibi Irrma Fatimah Takun', 'Oh Yu Qiao', 'Tay Li Yuen', 'Yeoh Wei Dong']
  }]
}] as Array<Course>);
