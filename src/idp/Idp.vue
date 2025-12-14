<script setup lang="ts">
import GlobalSelectionMenu from "@/components/GlobalSelectionMenu.vue";
import ThemeFab from "@/components/ThemeFab.vue";
import ItemCard from "@/components/ItemCard.vue";
import ItemDialog from "@/components/ItemDialog.vue";
import CourseDescription from "@/components/CourseDescription.vue";
import { useDialogWithURL } from '@/composables/useDialogWithURL';

import { courses } from '@/projects/idp.ts';

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
            :group="true"
            @open="openDialog(cid, pid)"
          />
        </div>
      </template>
    </div>
    <ItemDialog
     v-if="selectedItem && selectedCourse"
     :course="selectedCourse"
     :item="selectedItem"
     :group="true"
     :open="dialogOpen"
     @close="closeDialog"
   />
  </div>
  <ThemeFab />
</template>
