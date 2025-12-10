import { createApp } from 'vue'
import '@/style.css'
import App from '@/idp/Idp.vue'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(MotionPlugin).mount('#app')
