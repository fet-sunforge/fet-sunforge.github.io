<script setup lang="ts">
// import { Menu } from 'lucide-vue-next';
import { ref, onMounted, computed } from 'vue';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About SUNForge Fest', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const currentPath = ref('/')

onMounted(() => {
  currentPath.value = window.location.pathname
})

// find active page object
const activePage = computed(() => {
  return pages.find(page => page.path === currentPath.value)
})

// just name
const activePageName = computed(() => activePage.value?.name ?? '')
</script>

<template>
  <div class="absolute top-0 p-4 text-xl text-center flex flex-row items-center justify-center gap-2">
    <!-- <Menu></Menu> -->
    <div class="flex-1 relative bg-accent text-accent-foreground p-3 font-semibold cursor-pointer select-none">
      {{ activePageName }}
      <div class="absolute -top-2 -left-2 w-1/5 h-2/5 border-t-3 border-l-3 border-primary-foreground"></div>
      <div class="absolute -bottom-2 -left-2 w-1/5 h-2/5 border-b-3 border-l-3 border-primary-foreground"></div>
      <div class="absolute -top-2 -right-2 w-1/5 h-2/5 border-t-3 border-r-3 border-primary-foreground"></div>
      <div class="absolute -bottom-2 -right-2 w-1/5 h-2/5 border-b-3 border-r-3 border-primary-foreground"></div>
    </div>
  </div>
</template>

<style scoped>
</style>
