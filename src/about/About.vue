<script setup lang="ts">
import GlobalMenu from "@/components/GlobalMenu.vue";
</script>

<template>
  <div class="flex flex-col w-screen h-screen bg-slate-700 items-center text-2xl text-white overflow-auto pt-10 pb-10">
    <GlobalMenu>About SUNForge Fest</GlobalMenu>
    <div class="flex flex-col items-center gap-3 max-w-6xl w-full px-10" style="margin-top: auto; margin-bottom: auto;">
      <img src="@/assets/logo.png" class="w-full max-w-xl" alt="Logo" />
      <div class="text-center">SUNForge is Sunway Unviersity's engineering project showcase, demonstrating our students' innovation and creativity in approaching complexx engineering problems.</div>
      <div class="text-center">In semester 2025 December, we expect over 100 students from various engineering disciplines to present around 50 projects across multiple courses, including Project Management, Sustainable Engineering Design, Integrated Design Projects, and Final Year Projects. </div>
    </div>
  </div>
</template>
