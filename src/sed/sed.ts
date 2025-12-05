import { createApp } from 'vue'
import '@/style.css'
import App from '@/sed/Sed.vue'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(MotionPlugin).mount('#app')
