import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        fyp: path.resolve(__dirname, 'fyp.html'),
        idp: path.resolve(__dirname, 'idp.html'),
        sed: path.resolve(__dirname, 'sed.html'),
        pmed: path.resolve(__dirname, 'pmed.html'),
        dit: path.resolve(__dirname, 'dit.html')
      }
    }
  }
})
