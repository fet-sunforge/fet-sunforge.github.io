
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Final Year Project 1 (Electronic and Electrical Engineering)",
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
  name: "Final Year Project 2 (Electronic and Electrical Engineering)",
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
    title: 'Techno-economic feasibility of e-ammonia production in a photovoltaic-battery energy storage-hydrogen energy storage integrated microgrid',
    desc: '',
    pic: ['Kit Shang Lin']
  }, {
    title: 'Portable Air Quality Monitoring System based on Arduino and Gas Sensors for Indoor Environments',
    desc: '',
    pic: ['Lew Wei Ming']
  }, {
    title: 'Design and Development of an IoT-based Air Flow Meter for Long Term Breathing Studies of COPD Patients',
    desc: '',
    pic: ['Loy Kai Xin']
  }, {
    title: 'Chip-Level Identification of IoT SoCs via Onboard Antenna Characteristics Using IC Metrics',
    desc: 'This study investigates the utilization of Meander Line Antennas (MLAs) within Internet of Things (IoT) devices, specifically the ESP32, nRF52840 Dongle, and nRF24L01 as Physical Unclonable Functions (PUFs) for secure module identification. Leveraging their compact design and inherent manufacturing variability to generate unique Radio Frequency (RF) signatures, this research addresses the critical gap in lightweight IoT security solutions and the limited evaluation of MLA suitability. A complete hardware lifecycle was executed, ranging from FEKO simulations modeling current distribution to the fabrication and rigorous Vector Network Analyzer (VNA) characterization of 30 standardized test units. The methodology utilized Gramian Angular Field (GAF) encoding to transform one-dimensional (1-D) spectral data into robust spatial features. Machine learning validation confirmed that lightweight classical models, specifically Support Vector Machines (SVMs), Random Forest, and K-Nearest Neighbors (KNN) were sufficient to capture this entropy, eliminating the need for deep learning models such as Convolutional Neural Networks (CNNs). Key findings revealed that parameters are viable for identification and that the system remains scalable with input resolutions as low as 200 frequency points. Distinct from traditional chip-level silicon PUFs, this work establishes a "module-level" authentication framework capable of detecting tampering in fully assembled devices. This offers a cost-effective security solution aligned with United Nations Sustainable Development Goals (SDGs) 9 and 11. Furthermore, the proposed approach supplements conventional cryptographic methods, such as Elliptic-Curve Cryptography (ECC), which often introduce significant computational overhead that renders them impractical for low-power IoT environments.',
    pic: ['Muhammad Irfan Bin Mohamad Lutfi']
  }, {
    title: 'Design and development of self localisation strategy for a collaborative mobile robot system in an indoor environment',
    desc: '',
    pic: ['Mustafa Sayedgotb Mustafa Elrashied']
  }, {
    title: 'Optical fiber sensing',
    desc: 'This study investigates a multi-point tapered polymer optical fiber (POF) sensor for liquid leakage detection in practical environments such as buildings, tanks, and pipelines. Liquid leakage is linked to safety risks, maintenance cost, and resource wastage, so early detection is important. However, many conventional approaches face limitations: electrical contact sensors may corrode or fail in wet conditions, point sensors provide limited spatial coverage, and acoustic/thermal methods can be costly and sensitive to environmental noise. For optical methods, some systems still rely on expensive interrogation hardware, while untapered fibers often show low sensitivity to surrounding liquids. To address these limitations, tapering is applied to locally reduce the fiber diameter and increase optical leakage when liquid contacts the exposed region. The reduced waist and bend geometries disturb guided modes and enhance interaction between the evanescent field and the surrounding medium, producing a measurable drop in transmitted intensity. By introducing multiple taper points along a single POF, sensitivity and spatial coverage can be improved without requiring multiple discrete sensors. The aim is to design and evaluate a scalable tapered POF sensing approach for detecting localized liquid contact. The objectives are: (1) fabricate single- and multi-point tapers with varied waist diameters and bend geometries, (2) implement a droplet-based wetting test to represent realistic small leaks, and (3) extract and compare intensity-change features across liquids with different refractive indices. Tapers are produced using a manual heat-and-pull method on unjacketed and unclad sections. Transmission spectra are measured using a visible-range optical setup with an Ocean Optics HR4C spectrometer, and integrated intensity over a selected wavelength band is used to form time-series trends. Preliminary results show repeatable intensity drops during water contact, with larger changes observed for smaller taper waists and multiple taper points, indicating feasibility for low-cost leakage monitoring.',
    pic: ['Nadiva Nuriftitah']
  }, {
    title: 'Optical fiber sensing',
    desc: '',
    pic: ['Ooi Ke Vin']
  }, {
    title: 'TinyML-Driven Wearable System for Motion Analysis and Injury Prevention in Racket Sports',
    desc: '',
    pic: ['Voon Yue Khang']
  }]
}, {
  name: "Final Year Project 2 (Chemical Engineering)",
  description: "The Final Year Project is an undergraduate engineering research project carried out by an individual student that is related to the student’s field of study under the supervision of at least one academic member of staff. This project is carried out and completed over two semesters as a partial fulfillment for the undergraduate degree award.",
  short: "FYP",
  projects: [{
    title: 'Design of Optimal Lubricants through Computer-Aided Approach',
    desc: 'This Final Year Project (FYP) addresses the environmental drawbacks of conventional mineral oil-based lubricants, such as poor biodegradability ,high pour point and aquatic toxicity, by developing high-performance vegetable oil-based biolubricants with targeting low pour point. This project evaluates vegetable oils as base stocks, focusing on key properties like pour point, kappa index, viscosity index, and viscosity at 40°C . Using Rough Set Theory (RST) via ROSE2 software, predictive models for pour point are built from physicochemical datasets, then core reducts are analysing by ROSE 2 with Viscosity index and kappa index as core reducts. A Computer-Aided Molecular Design (CAMD) framework then optimizes molecular structures through group contribution methods based on the core reducts analysed by ROSE 2 and mixed-integer linear programming to meet target performance criteria of biolubricant oil.',
    pic: ['Chong Xian Zhuang']
  }, {
    title: 'Control of new hybrid extractive-reactive distillation system',
    desc: 'This study extends our previous work on the hybrid extractive–reactive distillation (ED–RD) system reported in Separation Purification Technology 335 (2024) 126220 by evaluating its dynamic controllability. Four control structures (CSs) were evaluated. The first two (CS1 and CS2), based on common heuristic schemes using double- and triple-point temperature controllers (TCs), successfully restored tetrahydrofuran (THF) purity but failed to recover ethanol (EtOH) purity due to difficulty in maintaining the ethylene oxide (EO)–to–water (H2O) ratio near unity. This highlights the need for tighter control of the EO/H2O ratio, suggesting that a standalone composition controller (CC) could further enhance control efficiency. To address this, a third configuration (CS3) introduced a composition analyser at an internal stream to directly regulate the EO flowrate. Unlike conventional CC applied to product streams, this alternative approach improved overall control performance, enabling both THF and EtOH purities to return to their nominal values. The last structure (CS4) applied a feedforward control approach that estimated composition from temperature signals, which is a method rarely reported in literature. The motivation of CS4 is to reduce the reliance on a CC. As expected, the performance of CS4 aligned with CS3. Overall, the results confirm that the ED–RD process not only achieves the substantial energy and cost benefits reported previously but also demonstrates robust controllability, surpassing conventional reactive–extractive distillation (RED) systems in both efficiency and operational stability under the disturbances considered in this study.',
    pic: ['Choo Xuan Liang']
  }, {
    title: 'Green Extraction and Recovery of Polar Volatile Compounds from Salvia officinalis Leaves',
    desc: '',
    pic: ['Hooi Soong Ling']
  }, {
    title: 'Selective Enrichment and Thermodynamic Characterisation of Non-Polar Volatile Compounds from Salvia officinalis Leaves',
    desc: 'The extraction of non-polar compounds such as α-humulene from Salvia officinalis traditionally relies on single-phase organic solvents, which are volatile, hazardous, and unable to selectively separate polar and non-polar constituents. While green solvents and deep eutectic solvents (DES) have been studied individually, limited work has examined two-phase systems that combine DES with a greener organic solvent to promote selective migration of non-polar volatiles. This study addressed this gap by developing a DES-green solvent biphasic extraction system to enrich non-polar compounds from S. officinalis. Biphasic screening was performed to determine which volatiles preferentially partitioned into the organic phase, where α-humulene consistently emerged as a dominant and selectively enriched sesquiterpene. Ultrasound-assisted extraction (UAE) and response surface methodology (RSM) were subsequently applied to evaluate extraction behaviour and identify conditions that maximise α-humulene recovery. Three choline chloride-based DESs (with glycerol, ethylene glycol, and citric acid) were selected to represent low, medium, and high polarity hydrogen-bond donor environments. Each DES was paired with 2-methyltetrahydrofuran (2-MeTHF) or cyclopentyl methyl ether (CPME), producing six biphasic systems and eighteen screening samples. After sonication and phase settling, DES-rich and organic-rich layers were separated and analysed. GC-MS analysis was conducted using a DB-5MS column with electron-ionisation at 70 eV, full-scan acquisition (m/z 40-400), and compound identification based on NIST library matching, retention indices, and diagnostic ions. Ten major volatiles were detected, including α-pinene, camphene, eucalyptol, camphor, caryophyllene, α-humulene, neophytadiene, and n-hexadecanoic acid. Three marker compounds-α-humulene, caryophyllene, and n-hexadecanoic acid-were selected based on >80% match scores. Among all systems, ChCl:EG with 2-MeTHF produced the highest enrichment (3.03% α-humulene, 1.01% caryophyllene, 9.85% n-hexadecanoic acid). UAE optimisation using a Box-Behnken design (14 runs + 2 centre points) assessed the effects of solid-to-solvent ratio (1:10-1:30), amplitude (40-100%), and time (10-30 min). The model predicted an optimum humulene yield of 3.52%, but triplicate validation produced 1.60%. Overall, the study demonstrates that DES-green solvent biphasic extraction can selectively recover non-polar volatiles from S. officinalis. Future work will include quantitative calibration-based analysis, solid-phase purification of co-eluting compounds, and evaluation of phase behaviour and solvent recyclability.',
    pic: ['Lim Zhan Hong']
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
    title: 'CO2 Capture and Sequestration: Principles and Simulation of a Supersonic Gas Conditioning System',
    desc: 'The monetisation of Malaysia’s high-carbon-dioxide (CO2) natural gas (NG) fields is critical for national energy security yet remains constrained by the associated footprint and weight limitations of conventional offshore separation technologies. In response, supersonic NG conditioning, which is a compact and expansion-based separation method, offers a chemical-free alternative, though significant research gaps remain regarding equipment scalability and transient-flow stability. To address these gaps, this study evaluates its feasibility for simultaneous removal of acid gases (CO2 and hydrogen sulphide (H2S)) using Aspen HYSYS for thermodynamic optimisation and Ansys FLUENT for computational fluid dynamics (CFD) analysis. The results demonstrate bulk pre-treatment capability, achieving a minimum removal efficiencies of 75% for CO2 and 85% for H2S, although it fails to meet pipeline specifications as a standalone solution due to vapour-liquid equilibrium (VLE) constraints. Transient CFD analysis reveals unsteady shock oscillations and pressure pulsations inside the unit, both of which reduce acid-gas separation efficiency relative to steady-state predictions and pose challenges for stable operation. Moreover, a half-scale model assessment confirms aerodynamic stability for FLNG applications but highlights a residence-time deficit that limits condensate droplet growth and subsequent acid-gas separation performance. Consequently, this technology is well-positioned as an energy-efficient bulk separator that utilizes intrinsic pressure energy to significantly lowers downstream processing load, thereby supporting the National Energy Transition Roadmap (NETR) and Carbon Capture and Sequestration (CCS) initiatives.',
    pic: ['Xavier Henry']
  }, {
    title: 'Application of Microbial Electrolysis Cells in Enhancing Biogas and Hydrogen Yield from Palm Oil Mill Effluent Treatment',
    desc: '',
    pic: ['Yong Kai Yu']
  }]
}] as Array<Course>);
