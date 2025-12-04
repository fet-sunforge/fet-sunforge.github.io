<script setup lang="ts">
import { CalendarDays, Landmark, Clock } from 'lucide-vue-next';
import { Countdown } from 'vue3-flip-countdown';
import ThemeFab from '@/components/ThemeFab.vue';
</script>

<template>
  <div class="flex flex-col w-screen h-screen items-center text-2xl overflow-auto pt-10 pb-10">
    <div class="flex flex-col items-center gap-2" style="margin-top: auto; margin-bottom: auto;">
      <img src="./assets/logo.png" class="w-full max-w-xl" alt="Logo" />
      <div>Coming in</div>
      <Countdown deadlineISO="2025-12-23T09:00:00Z"
        mainColor="white"
        secondFlipColor="white"
        labelColor=""
        mainFlipBackgroundColor="var(--accent)"
        secondFlipBackgroundColor="var(--secondary)"
      />
      <div class="flex flex-col items-center gap-1 mb-5 mt-5">
        <div class="flex flex-row items-center gap-2">
          <CalendarDays />
          <div>23 December 2025</div>
        </div>
        <div class="flex flex-row items-center gap-2">
          <Clock />
          <div>9:00 AM</div>
        </div>
        <div class="flex flex-row items-center gap-2">
          <Landmark />
          <div>FET Lab Building</div>
        </div>
      </div>
      <p class="text-center">Faculty of Engineering and Technology<br>Sunway University</p>
    </div>
  </div>
  <ThemeFab />
</template>
