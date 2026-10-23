import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Use repository subpath only when running in GitHub Actions without Vercel; otherwise use root '/'
const base = process.env.GITHUB_ACTIONS && !process.env.VERCEL ? '/fida_wellness/' : '/';

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
  ],
})
