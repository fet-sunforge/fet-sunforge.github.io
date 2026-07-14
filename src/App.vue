<script setup lang="ts">
import { CalendarDays, Landmark, Clock } from 'lucide-vue-next';
import { Countdown } from 'vue3-flip-countdown';
import ThemeFab from '@/components/ThemeFab.vue';
import { Separator } from '@/components/ui/separator';
import Schedule from '@/components/Schedule.vue';
import { Badge } from '@/components/ui/badge';

const subjectlist = [{
  name: 'Final Year Projects',
  url: '/fyp',
  class: 'fyp'
}, {
  name: 'Integrated Design Projects',
  url: '/idp',
  class: 'idp'
}, {
  name: 'Design Projects',
  url: '/dp',
  class: 'dp'
}, {
  name: 'Sustainable Engineering Design',
  url: '/sed',
  class: 'sed'
}, {
  name: 'Project Management and Engineering Design',
  url: '/pmed',
  class: 'pmed'
}, {
  name: 'Robotic Projects',
  url: '/rp',
  class: 'rp'
}, {
  name: 'CAD Modelling & 3D Printing',
  url: '/cad',
  class: 'cad'
}]

const awardlist = [{
  name: "Wait to be surprised",
  class: "wait-to-be-surprised"
//   name: 'Best EE Final Year Project',
//   class: 'best-ee-fyp'
// }, {
//   name: 'Best Chemical Final Year Project',
//   class: 'best-chemical-fyp'
// }, {
//   name: 'Best Poster',
//   class: 'best-poster'
// }, {
//   name: 'Best Integrated Design Project',
//   class: 'best-idp'
}]
</script>

<template>
  <div class="flex flex-col w-screen h-screen items-center text-2xl overflow-auto pt-10 pb-10 gap-10">
    <!-- <div class="flex flex-col md:flex-row gap-4 justify-center items-center h-screen pt-10 pb-10"> -->
      <div class="flex flex-col items-center gap-2" style="margin-top: auto; margin-bottom: auto;">
        <a href="/about"><img src="./assets/logo.png" class="w-full max-w-xl" alt="Logo" /></a>
        <div>Coming in</div>
        <Countdown deadlineISO="2025-12-23T09:00:00Z"
          mainColor="white"
          secondFlipColor="white"
          labelColor=""
          mainFlipBackgroundColor="var(--accent)"
          secondFlipBackgroundColor="var(--secondary)"
        />
        <!-- <Separator class="mt-5 mb-3"/>
        <div class="flex flex-row flex-wrap gap-2">
          <a href="/about"><Badge class="text-base px-3 py-1.5">About SUNForge Fest</Badge></a>
          <a href="/committee"><Badge class="text-base px-3 py-1.5">Organising Committee</Badge></a>
          <a href="/ebooklet"><Badge class="text-base px-3 py-1.5">E-Booklet</Badge></a>
        </div> -->

        <Separator class="mt-5"/>
        <div class="flex flex-col items-center gap-1">
          <div class="flex flex-row items-center gap-2">
            <CalendarDays />
            <div>6 August 2026</div>
          </div>
          <div class="flex flex-row items-center gap-2">
            <Clock />
            <div>9:30 AM to 6:00 PM</div>
          </div>
          <div class="flex flex-row items-center gap-2">
            <Landmark />
            <div>FET Building, Annexe Building, Observation Deck</div>
          </div>
        </div>
        <Separator class="mb-5"/>
        <Schedule
          start="0900" end="1600"
          location="FET Lab Building"
          name="Engineering Project Showcase"
        >
          <div class="flex flex-col">
            <span>Project exhibition and assessment for</span>
            <div class="flex flex-row flex-wrap max-w-lg gap-2">
              <a v-for="subject in subjectlist" :href="subject.url">
                <Badge class="text-lg text-gray-800 px-3 py-1.5 select-none" :class="subject.class">{{ subject.name }}</Badge>
              </a>
            </div>
          </div>
        </Schedule>
        <Schedule
          start="1600" end="1700"
          location="Thinker Space"
          name="Closing Ceremony & Special Awards"
        >
          <div class="flex flex-col">
            <span>Special awards include</span>
            <div class="flex flex-row flex-wrap max-w-lg gap-2">
              <template v-for="award in awardlist">
                <Badge class="text-lg text-gray-800 px-3 py-1.5 select-none" :class="award.class">{{ award.name }}</Badge>
              </template>
            </div>
          </div>
        </Schedule>
        <!-- <p class="text-center">Faculty of Engineering and Technology<br>Sunway University</p> -->
      </div>
      <!-- <a href="/about"><img src="@/assets/2.png" class="max-h-dvh aspect-auto"></img></a> -->
    <!-- </div> -->
  </div>
  <ThemeFab />
</template>

<style scoped>
.fyp {
  background-color: var(--color-orange-200);
}
.fyp:hover {
  background-color: var(--color-orange-300);
}
.idp {
  background-color: var(--color-emerald-200);
}
.idp:hover {
  background-color: var(--color-emerald-300);
}
.sed {
  background-color: var(--color-blue-200);
}
.sed:hover {
  background-color: var(--color-blue-300);
}
.pmed {
  background-color: var(--color-purple-200);
}
.pmed:hover {
  background-color: var(--color-purple-300);
}
.dit {
  background-color: var(--color-rose-200);
}
.dit:hover {
  background-color: var(--color-rose-300);
}
.rp {
  background-color: var(--color-violet-200);
}
.rp:hover {
  background-color: var(--color-violet-300);
}
.cad {
  background-color: var(--color-teal-200);
}
.cad:hover {
  background-color: var(--color-teal-300);
}
.wait-to-be-surprised {
  background-color: var(--color-amber-200);
}
.wait-to-be-surprised:hover {
  background-color: var(--color-amber-300);
}
.best-ee-fyp {
  background-color: var(--color-green-200);
}
.best-ee-fyp:hover {
  background-color: var(--color-green-300);
}
.best-chemical-fyp {
  background-color: var(--color-yellow-200);
}
.best-chemical-fyp:hover {
  background-color: var(--color-yellow-300);
}
.best-poster {
  background-color: var(--color-pink-200);
}
.best-poster:hover {
  background-color: var(--color-pink-300);
}
.best-idp {
  background-color: var(--color-indigo-200);
}
.best-idp:hover {
  background-color: var(--color-indigo-300);
}
</style>
