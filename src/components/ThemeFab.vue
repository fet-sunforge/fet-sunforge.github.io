<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const theme = ref<'light' | 'dark'>('dark')

// Load saved theme on mount
onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    theme.value = 'light'
    document.documentElement.classList.remove('dark')
  } else {
    theme.value = 'dark'
    document.documentElement.classList.add('dark')
  }
})

// Toggle light/dark mode
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'

  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  localStorage.setItem('theme', theme.value)
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-lg
           bg-primary text-primary-foreground hover:bg-primary/90
           transition-all duration-300"
    aria-label="Toggle theme"
  >
    <Sun v-if="theme === 'light'" class="w-5 h-5" />
    <Moon v-else class="w-5 h-5" />
  </button>
</template>

<style scoped>
/* Optional floating button animation */
button {
  animation: fab-pop 0.25s ease-out;
}

@keyframes fab-pop {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
