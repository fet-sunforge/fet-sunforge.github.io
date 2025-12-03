<script setup lang="ts">
// import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-vue-next';
</script>

<template>
  <div class="absolute top-0 w-full p-2 text-xl bg-slate-200 text-slate-500 text-center flex flex-row items-center justify-center gap-2">
    <Menu></Menu>
    <div class="flex-1 grow">
      <slot></slot>
    </div>
  </div>
</template>
