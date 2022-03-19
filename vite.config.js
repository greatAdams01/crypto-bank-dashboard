import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://vicsites.herokuapp.com',
        secure: false,      
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  plugins: [vue()],
})
