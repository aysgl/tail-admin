import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          fullcalendar: [
            '@fullcalendar/core',
            '@fullcalendar/vue3',
            '@fullcalendar/daygrid',
            '@fullcalendar/timegrid',
            '@fullcalendar/list',
            '@fullcalendar/interaction',
          ],
          charts: [
            'apexcharts',
            'vue3-apexcharts',
          ],
          'ui-libs': [
            'flatpickr',
            'vue-flatpickr-component',
            'swiper',
            'dropzone',
            'jsvectormap',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(
        new URL('./src', import.meta.url),
      ),
    },
  },
})
