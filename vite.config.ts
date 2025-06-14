// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // This is the correct setting for your lramir14.github.io User Page
  plugins: [react()],
})