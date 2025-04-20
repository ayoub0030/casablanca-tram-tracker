import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false, // Disable the HMR error overlay
    },
  },
  css: {
    postcss: './postcss.config.js', // Explicitly set the PostCSS config path
  },
})
