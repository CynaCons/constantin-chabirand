import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site → served from /constantin-chabirand/.
// If a custom domain (e.g. constantinchabirand.com) is added later, change base to '/'.
export default defineConfig({
  base: '/constantin-chabirand/',
  plugins: [react(), tailwindcss()],
})
