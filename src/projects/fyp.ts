
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Final Year Project 1",
  description: "The Final Year Project is an undergraduate engineering research project carried out by an individual student that is related to the student’s field of study under the supervision of at least one academic member of staff. This project is carried out and completed over two semesters as a partial fulfillment for the undergraduate degree award.",
  short: "FYP",
  projects: [{
    title: 'A Contactless Health Monitoring System Using mmWave Radar and Infrared Imaging Sensors',
    desc: 'This project aims to develop an intelligent, non-intrusive IoT-based monitoring system for the elderly that ensures privacy-preserving, real-time health and safety monitoring within their rooms by leveraging a sophisticated sensor fusion approach. Instead of traditional video surveillance or wearable devices, the system utilizes a millimeter-wave radar and thermal imaging camera to measure critical vital signs without any physical contact; the radar detects subtle chest movements for continuous heart rate monitoring, while a novel technique synchronizes radar data with thermal imaging of the neck\'s pulse point to calculate pulse wave velocity for reliable blood pressure estimation. Simultaneously, the system employs these sensors supplemented by environmental sensing to detect posture changes, falls, and abnormal body temperature without capturing personally identifiable visuals. A Raspberry Pi serves as the processing unit, running machine learning algorithms for posture recognition, fall detection, fever monitoring, and vital sign analysis, with all data processed locally at the edge to minimize latency, protect privacy, and reduce false alarms from pets or background heat sources. Critical alerts for health or safety emergencies are transmitted to caregivers via mobile notifications through services like Firebase Cloud Messaging, with system evaluation focusing on accuracy, false-positive rates, sensor fusion effectiveness, and environmental adaptability. This integrated contactless methodology guarantees comfort, dignity, and privacy, making it an ideal solution for deployment in elderly care facilities and home environments.',
    pic: ['Chan Jia Jun']
  }, {
    title: 'Design and characterization of Antenna Based Physical Unclonable Functions for IoT Devices using off-the-shelf PCB antennas',
    desc: 'Physical Unclonable Functions (PUFs) are hardware primitives that exploit inherent manufacturing variations to generate unique and unclonable identifiers for secure device authentication. This project explores the feasibility of using off-the-shelf PCB antennas as a source of hardware uniqueness for security applications. Students will perform RF measurements of antenna parameters, including S11 (reflection), S12/S21 (transmission), under varying conditions to extract distinct response patterns. The collected data will be analyzed using machine learning techniques to evaluate uniqueness, reliability, and classification accuracy across devices. A proof-of-concept implementation will be developed to demonstrate how antenna-based PUFs can serve as a trust anchor for IoT device authentication.',
    pic: ['Cheryl Phun Tse Ying']
  }, {
    title: 'Wireless IoT Attendance Tracking System Using RFID/NFC and Cloud',
    desc: 'Manual attendance in educational institutions is often time-consuming, error-prone, and prone to manipulation. This project proposes a wireless IoT-based attendance tracking system using RFID/NFC tags and cloud connectivity to improve efficiency, accuracy, and transparency. Each student will have an RFID/NFC-enabled ID card, and IoT readers (e.g., ESP32 with RFID/NFC module) at classroom entrances will automatically record attendance. Data will be transmitted via Wi-Fi or MQTT to a cloud platform (e.g., Firebase, AWS IoT), where it is securely stored and accessible through a web or mobile dashboard. The system will include real-time data visualization, automated reporting, and participation analysis. Expected outcomes are a working prototype that reduces administrative workload, minimizes errors, and showcases the role of IoT in modernizing educational practices.',
    pic: ['Jason Tek Chun Sheng']
  }, {
    title: 'Gait control and IMU based balancing of a Quadruped Robot',
    desc: 'This FYP focuses on the design and implementation stable locomotion through gait control and real-time balancing on a quadruped robot. The system integrates an Inertial Measurement Unit (IMU) to provide orientation and acceleration data, for dynamic adjustments to maintain stability during walking. The project emphasizes control system design, sensor integration, and real-time feedback.',
    pic: ['Koh Ji Shin']
  }, {
    title: 'Machine Learning-based Swing-up and Balancing Control of Inverted Pendulum from Sensor Fusion',
    desc: 'This project aims to investigate and implement non-contact sensor (laser, magnetic or vision) fusion techniques for the measurement of inverted pendulum pose to facilitate its control. Swing-up and balancing of the inverted pendulum is achieved through machine learning-based control. A digital twin model is developed to visualize the inverted pendulum pose. <br><br>The expected outcomes include prototype development of sensor fusion hardware, optimal control scheme and working digital twin model.',
    pic: ['Law Ka Qing']
  }, {
    title: 'Wireless LoRaWAN Coverage Deployment and Measurement in Sunway City ',
    desc: 'This project aims to deploy and conduct measurement of wireless LoRaWAN coverage, which aim to cover most part of Sunway City. The candidate will acquire few important technical skills in wireless planning, deployment and measurement by using several IoT platforms. This project is part of the plan to power up IoT nodes around Sunway City under Future Cities Research Institute ',
    pic: ['Lee Cheng Zhe']
  }, {
    title: 'Smart Medicine Reminder and Dispenser',
    desc: 'This project proposes the development of a Smart Medicine Reminder and Dispenser to help elderly and chronically ill patients take the correct medication at the right time. The system combines a microcontroller-based dispenser with audio-visual alerts and wireless connectivity (Bluetooth/Wi-Fi) for mobile app synchronization. Caregivers can remotely monitor adherence, adjust schedules, and receive notifications of missed doses, while dosage history is stored in the cloud for analysis. The expected outcome is a functional prototype that improves medication adherence, reduces caregiver workload, and enhances patient safety through an IoT-enabled healthcare solution.',
    pic: ['Lim Zhan Jin']
  }, {
    title: 'Optical fiber sensing - Fibre optic based weight in motion system for vehicle monitoring',
    desc: 'This project aims to design and analyze various parameters for optical fiber sensing in partnership with MIMOS Bukit Jalil. Computer algorithm for analysis of vehicle monitoring using fibre optic sensor.',
    pic: ['Ooi Wei Junn']
  }, {
    title: 'Robotic Hand-Eye Coordination Mimicking Table Tennis Playing',
    desc: 'This project aims to investigate and implement robotic hand-eye coordination for table tennis playing. Through visual input, the system is able to track table tennis ball position and execute robot arm motion to play table tennis. The expected outcomes include comprehensive vision systems to categorize and track ball movement as well as robot motion planning and execution.',
    pic: ['Tang Wei Liang']
  }, {
    title: 'IoT-Based Platform for Monitoring and Analyzing the Growth of Vegetables Under Varying Environmental Conditions',
    desc: 'This project aims to design an IoT-based platform that monitors environmental parameters such as temperature, humidity, soil moisture, light intensity, and CO2 levels to study their impact on vegetable growth. The system tracks plant growth using sensors and image processing, offering real-time data visualization through a web or mobile app. It incorporates a machine learning model to predict growth trends and provides alerts when environmental conditions fall outside optimal ranges. This platform promotes efficient agriculture by enabling users to optimize growing conditions, enhancing yield and health of crops.',
    pic: ['Trinity Koh Ee Syen']
  }, {
    title: 'Decentralized Multi-Agent Reinforcement Learning with Peer-to-Peer Dynamics for Adaptive Traffic Control',
    desc: 'This project aims to explore how a decentralized MARL framework can improve efficiency, scalability, and robustness to solve engineering problems. We choose to implement and test the model on traffic signal control, a real-world scenario where multiple agents (traffic lights) must coordinate to optimize vehicle flow, reduce waiting times, and minimize congestion.',
    pic: ['Vincent Ooi Jian Kai']
  }, {
    title: 'An Artificial Intelligence-Based Model to Determine the Water Content of Transformer Insulation Paper',
    desc: 'The project aims to develop an AI-based algorithm to predict the water content of paper in power transformer based on the characteristics and parameters of transformer oil. This prediction is crucial for the maintenance of power transformer without requiring total shut down of power transformer. <br><br> It is a project in collaboration with Tenaga Nasional Berhad (TNB) and TNB Research with the opportunity to work with Technical Expert / Specialist from TNB.',
    pic: ['Yap Meng Lok']
  }]
}, {
  name: "Final Year Project 2",
  description: "The Final Year Project is an undergraduate engineering research project carried out by an individual student that is related to the student’s field of study under the supervision of at least one academic member of staff. This project is carried out and completed over two semesters as a partial fulfillment for the undergraduate degree award.",
  short: "FYP",
  projects: [{
    title: 'Design and Development of Dual Robotic Arm System for Automated Sorting and Storage on a Miniature Assembly Line ',
    desc: '',
    pic: ['Andres Ernesto']
  }, {
    title: 'Microcontroller-Based IoT System for Planting Media Monitoring with Artificial Intelligence-based Decision Making for Fertigation Planting System',
    desc: '',
    pic: ['Benjamin Tan Jie Ming']
  }, {
    title: 'Design of Optimal Lubricants through Computer-Aided Approach',
    desc: '',
    pic: ['Chong Xian Zhuang']
  }, {
    title: 'Control of new hybrid extractive-reactive distillation system',
    desc: '',
    pic: ['Choo Xuan Liang']
  }, {
    title: 'Green Extraction and Recovery of Polar Volatile Compounds from Salvia officinalis Leaves',
    desc: '',
    pic: ['Hooi Soong Ling']
  }, {
    title: 'Techno-economic feasibility of e-ammonia production in a photovoltaic-battery energy storage-hydrogen energy storage integrated microgrid',
    desc: '',
    pic: ['Kit Shang Lin']
  }, {
    title: 'Portable Air Quality Monitoring System based on Arduino and Gas Sensors for Indoor Environments',
    desc: '',
    pic: ['Lew Wei Ming']
  }, {
    title: 'Selective Enrichment and Thermodynamic Characterisation of Non-Polar Volatile Compounds from Salvia officinalis Leaves',
    desc: '',
    pic: ['Lim Zhan Hong']
  }, {
    title: 'Design and Development of an IoT-based Air Flow Meter for Long Term Breathing Studies of COPD Patients',
    desc: '',
    pic: ['Loy Kai Xin']
  }, {
    title: 'Chip-Level Identification of IoT SoCs via Onboard Antenna Characteristics Using IC Metrics',
    desc: '',
    pic: ['Muhammad Irfan Bin Mohamad Lutfi']
  }, {
    title: 'Design and development of self localisation strategy for a collaborative mobile robot system in an indoor environment',
    desc: '',
    pic: ['Mustafa Sayedgotb Mustafa Elrashied']
  }, {
    title: 'Optical fiber sensing',
    desc: '',
    pic: ['Nadiva Nuriftitah']
  }, {
    title: 'Optical fiber sensing',
    desc: '',
    pic: ['Ooi Ke Vin']
  }, {
    title: 'Optimised Chemical Treatment of Organic Waste as a Functional Additive for Green Concrete Enhancement',
    desc: '',
    pic: ['Saw Chee Hong']
  }, {
    title: 'Towards a flexible distillation design: A design validation from process control perspective via Aspen Plus Dynamics',
    desc: '',
    pic: ['Tan Chiao Pin']
  }, {
    title: 'Artificial Intelligence Applications in Air Quality Forecasting',
    desc: '',
    pic: ['Tan Xin Ming']
  }, {
    title: 'TinyML-Driven Wearable System for Motion Analysis and Injury Prevention in Racket Sports',
    desc: '',
    pic: ['Voon Yue Khang']
  }, {
    title: 'CO2 Capture and Sequestration: Principles and Simulation of a Supersonic Gas Conditioning System',
    desc: '',
    pic: ['Xavier Henry']
  }, {
    title: 'Application of Microbial Electrolysis Cells in Enhancing Biogas and Hydrogen Yield from Palm Oil Mill Effluent Treatment',
    desc: '',
    pic: ['Yong Kai Yu']
  }]
}] as Array<Course>);
