<script setup lang="ts">
</script>

<template>
  <div class="absolute top-0 p-4 text-xl text-center flex flex-row items-center justify-center gap-2">
    <div class="flex-1 relative bg-accent text-accent-foreground p-3 font-semibold cursor-pointer select-none">
      <slot></slot>
      <div class="absolute -top-2 -left-2 w-1/5 h-2/5 border-t-3 border-l-3 border-muted-foreground"></div>
      <div class="absolute -bottom-2 -left-2 w-1/5 h-2/5 border-b-3 border-l-3 border-muted-foreground"></div>
      <div class="absolute -top-2 -right-2 w-1/5 h-2/5 border-t-3 border-r-3 border-muted-foreground"></div>
      <div class="absolute -bottom-2 -right-2 w-1/5 h-2/5 border-b-3 border-r-3 border-muted-foreground"></div>
    </div>
  </div>
</template>

<style scoped>
</style>
