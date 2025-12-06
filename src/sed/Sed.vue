<script setup lang="ts">
import GlobalSelectionMenu from "@/components/GlobalSelectionMenu.vue";
import ThemeFab from "@/components/ThemeFab.vue";
import ItemCard from "@/components/ItemCard.vue";
import ItemDialog from "@/components/ItemDialog.vue";
import CourseDescription from "@/components/CourseDescription.vue";
import type { Course } from "@/interfaces";
import { ref } from 'vue';
import { useDialogWithURL } from '@/composables/useDialogWithURL';

const courses = ref([{
  name: "Sustainable Engineering Design 1",
  description: "This course focuses on sustainable engineering design principles and practices.",
  projects: [{
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
  }]
}, {
  name: "Sustainable Engineering Design 2",
  description: "This course focuses on sustainable engineering design principles and practices.",
  projects: [{
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
  }]
}] as Array<Course>);

const {
  selectedCourse,
  selectedItem,
  dialogOpen,
  openDialog,
  closeDialog
} = useDialogWithURL({
  items: courses.value,
  sectionName: "s",
  itemName: "i",
})
</script>

<template>
  <div class="flex flex-col w-screen h-screen items-center overflow-auto pt-20 pb-10">
    <GlobalSelectionMenu></GlobalSelectionMenu>
    <div class="flex flex-col gap-3 max-w-6xl w-full max-h-full px-10 overflow-auto" style="margin-top: auto; margin-bottom: auto;">
      <template v-for="(course, cid) in courses" :key="course.name">
        <CourseDescription :course="course" />
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 grow flex-1">
          <ItemCard
            v-for="(project, pid) in course.projects"
            :key="pid"
            :item="project"
            @open="openDialog(cid, pid)"
          />
        </div>
      </template>
    </div>
    <ItemDialog
     v-if="selectedItem && selectedCourse"
     :course="selectedCourse"
     :item="selectedItem"
     :open="dialogOpen"
     @close="closeDialog"
   />
  </div>
  <ThemeFab />
</template>
