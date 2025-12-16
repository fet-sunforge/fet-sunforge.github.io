import { createApp } from 'vue'
import '@/style.css'
import App from '@/pages/dit/Dit.vue'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(MotionPlugin).mount('#app')
