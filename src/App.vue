<script setup lang="js">
import { CalendarDays, Landmark, Clock } from 'lucide-vue-next';
import { Countdown } from 'vue3-flip-countdown';
</script>

<template>
  <div class="flex flex-col w-screen h-screen bg-slate-700 items-center text-2xl text-white overflow-auto pt-10 pb-10">
    <div class="flex flex-col items-center gap-2" style="margin-top: auto; margin-bottom: auto;">
      <img src="./assets/logo.png" class="w-full max-w-xl" alt="Logo" />
      <div>Coming in</div>
      <Countdown deadlineISO="2025-12-23T09:00:00Z" mainColor="white" secondFlipColor="white" labelColor="white"/>
      <div class="flex flex-col items-center gap-1 mb-5 mt-5">
        <div class="flex flex-row items-center gap-2">
          <CalendarDays color="white" />
          <div>23 December 2025</div>
        </div>
        <div class="flex flex-row items-center gap-2">
          <Clock color="white" />
          <div>9:00 AM</div>
        </div>
        <div class="flex flex-row items-center gap-2">
          <Landmark color="white" />
          <div>FET Lab Building</div>
        </div>
      </div>
      <p class="text-white text-center">Faculty of Engineering and Technology<br>Sunway University</p>
    </div>
  </div>
</template>
