
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Integrated Design Project 1",
  description: "The Integrated Design Project is an engineering project carried out by a group of students to integrate knowledge and skills that has been gained. Working in groups of 3 to 4, students will be responsible for identifying and solving complex engineering problems and to carry out the necessary complex engineering activities which includes conceptualizing, designing, planning, implementing, managing and evaluating an Electronic and Electrical engineering design project. This will incorporate teamwork and leadership skills, effective communication and the application of project management.",
  short: "IDP",
  code: "idp1",
  projects: [{
    title: 'Seismic Monitoring of Building due to Earthquakes using Distributed Acoustic Sensing',
    desc: '',
    pic: ['Group 1', 'Akesh Kumar', 'Lau Haw Huei', 'Liaw Yi Jun', 'Lim Yi He', 'Toh Kah Wai']
  }, {
    title: 'Seismic Detection of Bridge using Accelerometers and Vibration Sensors',
    desc: 'With natural disasters, like earthquakes occuring more frequently, the resilience of critical infrastructure is a growing concern. Traditional monitoring methods, such as visual inspections, are reactive, slow, and risky, highlighting the urgent need for better, real-time Structural Health Monitoring (SHM) systems. Our primary aim is to design and simulate a smart bridge system that correlates vibration frequencies with structural failure. The objectives included constructing a scaled box girder bridge model, developing a variable-frequency shake table to simulate earthquake motion, and integrating sensors (SW-420, ADXL345) to capture real-time vibration data. The methodology involved fabricating the physical prototype, integrating an ESP32 microcontroller-based sensor network, and conducting controlled seismic simulations. Preliminary results successfully demonstrated the system\'s ability to identify specific collapse thresholds by correlating vibration magnitude with structural instability. This proves the viability of a data-driven approach for enhancing bridge safety under seismic loads.',
    pic: ['Group 2', 'Lim Sheng Yung', 'Brian Lee Chow Shuin', 'Tham Zhi Wen', 'Yap Tia Jun']
  }, {
    title: 'Landslide Detection & Monitoring System',
    desc: '',
    pic: ['Group 3', 'Siew Cheng Hong', 'Lee WaltWen', 'Tan Tze Ern', 'Teh Yuen Shin']
  }, {
    title: 'Sinkhole Detection System: Real-Time Monitoring using Distributed Acoustic Sensing',
    desc: 'Often like a time bomb, sinkholes are unpredictable and causes abrupt collapses due to the lack of detection systems that proactively monitors the underground structure. With the focus being narrowed to sinkhole caused by pipe burst, our team aims to develop a sinkhole early detection system which can prevent any unecessary accidents. It is important to monitor sinkholes for early detection as the changes underground cannot be felt on the surface which increases the risk of potential lives lost when the road or surface collapses when there are people or vehicles passing by. The previous methods of monitoring sinkholes were by observing the cracks on the surface which we feel is too little too late as the cavity has already been starting to form by the time the cracks appear. Our methodology includes incorporating DAS buried by sand, which represents the soil underground. Two unconnected pipes are also used where one channels water into the sand and one channels water and sand out. The DAS system detects the spikes or changes in strain throughout the process from normal conditions to when the water is pumped in and when the crack starts to form. From this, a buzzer will be used to alert different categories of alerts for different stages.',
    pic: ['Group 4', 'Jude Victor Ralph Francois', 'Mustansir Abdeali Hamid', 'Su Lik Wen', 'Tan Jing Yang Bryan', 'Shawn Boo Yi Xian']
  }]
}, {
  name: "Integrated Design Project 2",
  description: "The Integrated Design Project is an engineering project carried out by a group of students to integrate knowledge and skills that has been gained. Working in groups of 3 to 4, students will be responsible for identifying and solving complex engineering problems and to carry out the necessary complex engineering activities which includes conceptualizing, designing, planning, implementing, managing and evaluating an Electronic and Electrical engineering design project. This will incorporate teamwork and leadership skills, effective communication and the application of project management.",
  short: "IDP",
  code: "idp2",
  projects: [{
    title: 'Automated Growth Monitoring with Machine Vision',
    desc: '',
    pic: ['Ong Re Hong', 'Wong Jing Sian', 'Lai Zhen Yan']
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
