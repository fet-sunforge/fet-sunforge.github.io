<script setup lang="ts">
import GlobalSelectionMenu from "@/components/GlobalSelectionMenu.vue";
import ThemeFab from "@/components/ThemeFab.vue";
import ItemGrid from "@/components/ItemGrid.vue";
const course = {
  name: "Sustainable Engineering Design",
  description: "This course focuses on sustainable engineering design principles and practices."
}
const projects = [{
  title: 'project 1',
  desc: 'abstract 1',
  pic: ['person1', 'person2']
}, {
  title: 'project 2',
  desc: 'abstract 2',
  pic: ['person3']
}, {
  title: 'project 3',
  desc: 'abstract 3',
  pic: ['person5', 'person6', 'person7', 'person8']
}];
</script>

<template>
  <div class="flex flex-col w-screen h-screen items-center overflow-auto pt-20 pb-10">
    <GlobalSelectionMenu></GlobalSelectionMenu>
    <div class="flex flex-col gap-3 max-w-6xl w-full max-h-full px-10 overflow-auto" style="margin-top: auto; margin-bottom: auto;">
      <ItemGrid :desc="course.description" :items="projects" />
    </div>
  </div>
  <ThemeFab />
</template>
