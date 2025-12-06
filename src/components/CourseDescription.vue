<script setup lang="ts">
import type { Course } from "@/interfaces";

defineProps<{
  course: Course;
}>();
</script>

<template>
  <div class="bg-accent p-4 rounded-lg shadow-md">
    <h2 class="font-bold mb-2">{{ course.name }}</h2>
    <p class="text-accent-foreground">{{ course.description }}</p>
  </div>
</template>
