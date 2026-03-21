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
        colors: {
          primary: 'indigo',
          success: 'green',
        },
        pageCard: {
          slots: {
            header: 'mb-4 w-full self-stretch',
            wrapper:
              'flex flex-col flex-1 w-full items-stretch',
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
          'ui-libs': ['v-calendar', 'dropzone'],
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
