import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // No necesitas 'base' para Cloudflare Pages
  server: {
    host: '127.0.0.1'
  }
})