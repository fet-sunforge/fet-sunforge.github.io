<script setup lang="ts">
// import { Menu } from 'lucide-vue-next';
</script>

<template>
  <div class="absolute top-0 w-full max-w-5xl p-2 text-xl text-center flex flex-row items-center justify-center gap-2">
    <!-- <Menu></Menu> -->
    <div class="flex-1 grow relative bg-primary text-primary-foreground">
      <slot></slot>
      <div class="absolute -top-1 -left-1 w-1/4 h-1/3 border-t border-l border-primary-foreground"></div>
      <div class="absolute -bottom-1 -left-1 w-1/4 h-1/3 border-b border-l border-primary-foreground"></div>
    </div>
  </div>
</template>

<style scoped>
</style>
