
import { ref } from 'vue';
import type { Course } from '@/interfaces';

export const courses = ref([{
  name: "Design and Innovative Thinking",
  description: "The course will provide an overview of the entire process of creative problem-solving, addressing problem definition, identification and removal of blocks to creative thought. It will also cover the selection, implementation and evaluation of solutions to a given set of problems.",
  short: "DIT",
  code: "dit",
  projects: [{
    title: 'An Improvemnet of Biodiesel Production: Solid Acid Catalysis',
    desc: 'Biodiesel production commonly relies on alkaline-catalysed transesterification due to its low cost and mild operating conditions. However, this method is highly sensitively to impurities and high free fatty acid content, leading to soap formation and complex purification steps. <br><br>How can we design a more robust catalytic approach to overcome these challenges while maintaining process efficiency?',
    pic: ['Aryan Kevin Patel, Nigel Ting Ern Juing, Muhammad Fayz Elfariz, Rama Wijaya Suguri, Foo Yan Jie, Yates Man Kin Theng']
  }, {
    title: 'Agricultural Waste Valorization',
    desc: 'Malaysia’s agricultural sector generates a substantial amount of biomass annually, mainly from palm oil mills, rice cultivation, and rubber industries. Improper disposal of biomass produced via open burning and landfilling releases many greenhouse gases into the atmosphere, causing severe air pollution, soil contamination, and health impacts. Agricultural waste valorization converts wastes into renewable bioethanol. This process reduces emissions, strengthens energy security, and promotes economic development.',
    pic: ['Han Chit Su San, Aarthii Jeyaganesh, Justin Drew Macabuhay, Saida Hassan, Koh Si Jia, Ong Chun Hao']
  }, {
    title: 'Sustainable TiO<sub>2</sub> Production Process Retrofit Solution for Increased Yield',
    desc: '60% excess fresh H₂SO₄ is needed for the process, and a lot of liquid acid waste is produced. The process yield itself is low, for the amount of products needed and waste produced. This objective of this project is to reduce wastage and usage of H₂SO₄ while improving TiO₂ yield.',
    pic: ['Caelan Kalanjiam Chelliah, Mohamed Samal Erath Parambil, Severinus Declan, Shakty Yogenthiran A/L Suraj, Tan See Qi, Tseu Zheng Feng']
  }, {
    title: 'A Fully Renewable Biodiesel: Enzymatic Synthesis of FAEE Using Bioethanol and Novozym-435',
    desc: 'Biodiesel, a key renewable alternative to diesel, is typically made from plant oils and methanol. This creates a sustainability paradox: while the oil is renewable, the methanol is almost entirely fossil-derived. Our project resolves this by creating a fully bio-based system, replacing fossil-methanol with bioethanol and using Novozym 435 lipase as the catalyst to produce Fatty Acid Ethyl Esters (FAEE) - a superior, 100% renewable biodiesel that embodies Green Chemistry and circular economy principles.',
    pic: ['Muhammad Haggag, Tasnuva Tahsin, Chuah Jun Hong, Chan Jie Min, Mary Nicole, Abderrahmane Djerraya']
  }, {
    title: 'Heat Integration in the Haber-Bosch Process',
    desc: 'This project applies Green principles by introducing heat integration as a low-risk retrofit to improve energy efficiency, reduce CO₂ emissions, and align ammonia production with SDGs 7, 12 and 13',
    pic: ['Lina binti Khairuddin, Kaung Khant Htet Naing, Maghaban Harinayaran Tripathy, Varneet Kaur Riyat, Eugene Soh You Jun, Manashika Pathmasiri']
  }, {
    title: 'Fat Hydrogenation via Green Hydrogen',
    desc: 'Fat hydrogenation - Conversion of unsaturated oils to saturated semisolid fats',
    pic: ['Shriema A/P Rubagan, Liew Gene Chi, Bwalya Mapalo, Hamza Mahfouz Shah Kamly, Gabriel Chong Zhi Chern, Hamid Ramadhan Taha']
  }, {
    title: 'Improving POME Treatment with Diet and Wetland Technology',
    desc: 'Malaysia generates ~50 million tonnes of high-strength POME each year. Without proper treatment, it pollutes waterways and emits greenhouse gases—highlighting the global challenges of nitrogen management and clean water access. <br><br>The objective of this project is to improve POME treatment efficiency by 30–40%, to boost methane yield by 73.3% to enhance biogas production, to achieve full regulatory compliance for COD, BOD, nutrients, and oil & grease, and to reduce hydraulic retention time by 50% (from 60–100 days down to ~30 days).',
    pic: ['Tanya Nadima Abdula Bravo, Choy Jin Xin, Muleba Dula Phiri, Tiffany Lum Xin Ci & Zaw Tayza']
  }, {
    title: 'Green Ammonia',
    desc: 'The main principle behind "Green ammonia" is the decarbonization of ammonia process plants with the use of electrolysis processes instead of relying on carbon-intensive and energy-demanding SMR processes for the acquisition of hydrogen feed.',
    pic: ['Nicole Gan Xiao Ying, How Zhi Kai, Haadiya Mudassar, Kong Zhi Yung, Rachel Chin Li Xuan, Low Yu Hao']
  }, {
    title: 'Food Waste To Fuel',
    desc: 'Food waste is a major contributor of greenhouse gas (GHG) emissions and conventionally managed through waste processing methods using as landfilling, fermenting, and composting. Anaerobic digestion represents a greener and more sustainable way to manage food waste. It is a biological process whereby microorganisms break down food waste in the absence of oxygen to produce biogas (mainly methane) and digeste (nitrogen-rich slurry.',
    pic: ['']
  }]
}] as Array<Course>);
