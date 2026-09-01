import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// La base debe coincidir con el nombre del repositorio en GitHub Pages.
// Cambia "software-engineer-profile" por el nombre real de tu repositorio.
export default defineConfig({
  plugins: [react()],
  base: '/software-engineer-profile/',
})
