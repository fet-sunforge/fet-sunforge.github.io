
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Sustainable Engineering Design",
  description: "This course introduces a project-based learning framework using Conceiving, Designing, Implementing, and Operating (CDIO™) pedagogy with the principles of sustainable design.",
  short: "SED",
  projects: [{
    title: 'An Intelligent Lighting Control System for Classrooms',
    desc: 'abstract 1',
    pic: ['Jordan Douglas Su E -Wern', 'Raja Muhammad Harith Bin Raja Shahrul Azian', 'Jordan Yong Tze Hsiang', 'Puteri Amelya Dania Binti Megat Arizal Izram', 'Nicholas Lee Yong Wei']
  }, {
    title: 'Automation for Sustainability: A Smart Waste Sorting Solution for Sunway City',
    desc: 'abstract 2',
    pic: ['Alif Meherin', 'Bibi Irrma Fatimah Takun', 'Oh Yu Qiao', 'Tay Li Yuen', 'Yeoh Wei Dong']
  }]
}] as Array<Course>);
