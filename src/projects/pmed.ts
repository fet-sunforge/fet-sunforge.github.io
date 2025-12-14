
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Project Management and Engineering Design",
  description: "This is a project-based course, which entails students working in groups of no more than 5 to design and build an engineering system which addresses an engineering challenge. Students will re-learn and use the CDIO™ framework to guide their design and build experiences throughout this course.",
  short: "PMED",
  projects: [{
    title: 'Electric Cart for Senior Citizens',
    desc: 'As people age, mobility often becomes increasingly limited due to muscle weakness, joint pain, or balance issues. Senior citizens may find it challenging to walk long distances, carry items such as groceries, or move around safely in their daily lives. While mobility aids such as walking sticks, wheelchairs, and mobility scooters exist, many are either too expensive, lack flexibility, or are not tailored to meet the specific comfort and independence needs of the elderly. There is a growing need for affordable, user-friendly, and safe electric mobility solutions that empower seniors to maintain an active lifestyle. <br><br>Problem Statement: How might we design and build a lightweight, stable, and user-friendly electric cart that allows senior citizens to travel short distances comfortably, carry small loads, and move safely both indoors and outdoors, thereby improving their mobility, independence, and overall quality of life?',
    pic: ['Team Daevik']
  }, {
    title: 'Assistive Device for Ankylosing Spondylitis (AS)',
    desc: 'Ankylosing Spondylitis is a chronic inflammatory disease that causes stiffness in the spine and joints, significantly reducing mobility. Patients often struggle with bending, lifting, and carrying objects due to pain and limited flexibility. While there are treatments for symptom management, there is a lack of everyday assistive solutions to improve independence. <br><br>Problem Statement: How might we design and build an assistive device or tool that enables individuals with Ankylosing Spondylitis to safely bend, pick up, and carry heavy or bulky items, reducing strain while enhancing quality of life?',
    pic: ['Team Guo Shen']
  }, {
    title: 'Electric Cart for Senior Citizens',
    desc: 'As people age, mobility often becomes increasingly limited due to muscle weakness, joint pain, or balance issues. Senior citizens may find it challenging to walk long distances, carry items such as groceries, or move around safely in their daily lives. While mobility aids such as walking sticks, wheelchairs, and mobility scooters exist, many are either too expensive, lack flexibility, or are not tailored to meet the specific comfort and independence needs of the elderly. There is a growing need for affordable, user-friendly, and safe electric mobility solutions that empower seniors to maintain an active lifestyle. <br><br>Problem Statement: How might we design and build a lightweight, stable, and user-friendly electric cart that allows senior citizens to travel short distances comfortably, carry small loads, and move safely both indoors and outdoors, thereby improving their mobility, independence, and overall quality of life?',
    pic: ['Team Hong Zhe']
  }, {
    title: 'Electric Cart for Senior Citizens',
    desc: 'As people age, mobility often becomes increasingly limited due to muscle weakness, joint pain, or balance issues. Senior citizens may find it challenging to walk long distances, carry items such as groceries, or move around safely in their daily lives. While mobility aids such as walking sticks, wheelchairs, and mobility scooters exist, many are either too expensive, lack flexibility, or are not tailored to meet the specific comfort and independence needs of the elderly. There is a growing need for affordable, user-friendly, and safe electric mobility solutions that empower seniors to maintain an active lifestyle. <br><br>Problem Statement: How might we design and build a lightweight, stable, and user-friendly electric cart that allows senior citizens to travel short distances comfortably, carry small loads, and move safely both indoors and outdoors, thereby improving their mobility, independence, and overall quality of life?',
    pic: ['Team Suet Yan']
  }, {
    title: 'Electric Cart for Senior Citizens',
    desc: 'As people age, mobility often becomes increasingly limited due to muscle weakness, joint pain, or balance issues. Senior citizens may find it challenging to walk long distances, carry items such as groceries, or move around safely in their daily lives. While mobility aids such as walking sticks, wheelchairs, and mobility scooters exist, many are either too expensive, lack flexibility, or are not tailored to meet the specific comfort and independence needs of the elderly. There is a growing need for affordable, user-friendly, and safe electric mobility solutions that empower seniors to maintain an active lifestyle. <br><br>Problem Statement: How might we design and build a lightweight, stable, and user-friendly electric cart that allows senior citizens to travel short distances comfortably, carry small loads, and move safely both indoors and outdoors, thereby improving their mobility, independence, and overall quality of life?',
    pic: ['Team Vinoshan']
  }, {
    title: 'Electric Cart for Senior Citizens',
    desc: 'As people age, mobility often becomes increasingly limited due to muscle weakness, joint pain, or balance issues. Senior citizens may find it challenging to walk long distances, carry items such as groceries, or move around safely in their daily lives. While mobility aids such as walking sticks, wheelchairs, and mobility scooters exist, many are either too expensive, lack flexibility, or are not tailored to meet the specific comfort and independence needs of the elderly. There is a growing need for affordable, user-friendly, and safe electric mobility solutions that empower seniors to maintain an active lifestyle. <br><br>Problem Statement: How might we design and build a lightweight, stable, and user-friendly electric cart that allows senior citizens to travel short distances comfortably, carry small loads, and move safely both indoors and outdoors, thereby improving their mobility, independence, and overall quality of life?',
    pic: ['Team Wei Cong']
  }, {
    title: 'Electric Cart for Senior Citizens',
    desc: 'As people age, mobility often becomes increasingly limited due to muscle weakness, joint pain, or balance issues. Senior citizens may find it challenging to walk long distances, carry items such as groceries, or move around safely in their daily lives. While mobility aids such as walking sticks, wheelchairs, and mobility scooters exist, many are either too expensive, lack flexibility, or are not tailored to meet the specific comfort and independence needs of the elderly. There is a growing need for affordable, user-friendly, and safe electric mobility solutions that empower seniors to maintain an active lifestyle. <br><br>Problem Statement: How might we design and build a lightweight, stable, and user-friendly electric cart that allows senior citizens to travel short distances comfortably, carry small loads, and move safely both indoors and outdoors, thereby improving their mobility, independence, and overall quality of life?',
    pic: ['Team Zhi Kai']
  }]
}] as Array<Course>);
