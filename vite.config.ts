import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    ui({
      ui: {
        icons: {
          system: 'i-lucide-monitor',
          light: 'i-lucide-sun',
          dark: 'i-lucide-moon',
        },

        colors: {
          primary: 'brand',
          secondary: 'blue-light',
          success: 'success',
          info: 'blue-light',
          warning: 'warning',
          error: 'error',
          neutral: 'gray',
        },
        pageBody: {
          base: 'mt-8 pb-24 space-y-6',
        },
        pageGrid: {
          base: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6',
        },
        pageCard: {
          slots: {
            header: 'mb-4 w-full',
          },
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          'schedule-x': [
            '@schedule-x/vue',
            '@schedule-x/calendar',
            '@schedule-x/theme-default',
          ],
          charts: [
            'ag-charts-vue3',
            'ag-charts-community',
          ],
          'ag-grid': [
            'ag-grid-vue3',
            'ag-grid-community',
          ],
          'ui-libs': [
            'v-calendar',
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
