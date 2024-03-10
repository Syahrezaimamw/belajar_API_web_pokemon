import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/belajar_API_web_pokemon/",
  plugins: [react()],
})
