<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { retrieveProjectDetails } from '@/lib/projectdetailsutils'
import type { Project } from '@/interfaces';

const props = defineProps<{
  coursecode: string;
  itemindex: number;
}>()

const projectDetails = ref<Project|null>(null)
onMounted(async () => {
  projectDetails.value = await retrieveProjectDetails(props.coursecode, props.itemindex)
})
</script>

<template>
<div v-if="projectDetails" class="flex flex-col">
  <div class="font-light">Title</div>
  <div class="text-lg">{{ projectDetails.title }}</div>
  <div class="font-light mt-2">Student(s)</div>
  <div class="text-lg">{{ projectDetails.pic.join(", ") }}</div>
</div>
</template>
