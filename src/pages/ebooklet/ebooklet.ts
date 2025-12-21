import { createApp } from 'vue'
import '@/style.css'
import App from '@/pages/ebooklet/Ebooklet.vue'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(MotionPlugin).mount('#app')
