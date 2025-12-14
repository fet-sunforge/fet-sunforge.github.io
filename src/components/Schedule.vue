<script setup lang="ts">
defineProps<{
  start: string;
  end: string;
  location: string;
  name: string;
}>();

import { Separator } from '@/components/ui/separator';
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 p-5">
    <div class="flex flex-col items-center font-light">
      <span class="text-5xl">{{ start }}</span>
      <span class="text-xl">to {{ end }}</span>
    </div>
    <Separator class="hidden md:block" orientation="vertical" />
    <div>
      <div class="font-bold">{{ name }}</div>
      <div class="text-lg font-light">{{ location }}</div>
      <div class="text-lg mt-2"><slot></slot></div>
    </div>
  </div>
</template>
