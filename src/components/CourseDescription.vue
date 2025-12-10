<script setup lang="ts">
import type { Course } from "@/interfaces";
import TextIcon from "@/components/TextIcon.vue";

defineProps<{
  course: Course;
}>();
</script>

<template>
  <div class="bg-accent p-4 rounded-lg shadow-md">
    <div class="flex flex-row items-center gap-4">
      <TextIcon v-if="course.short" :text="course.short" :size="40" class="rounded border-2 border-accent-foreground"></TextIcon>
      <h2 class="font-bold mb-2">{{ course.name }}</h2>
    </div>
    <p class="text-accent-foreground">{{ course.description }}</p>
  </div>
</template>
