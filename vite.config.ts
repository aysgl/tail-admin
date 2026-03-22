import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5174,
  },
  plugins: [
    vue(),
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
          variants: {
            variant: {
              outline: {
                root: 'bg-default border border-muted border-[1px] ring-0',
              },
            },
          },
        },
        card: {
          variants: {
            variant: {
              outline: {
                root: 'bg-default border border-muted border-[1px] ring-0 divide-y divide-muted',
              },
            },
          },
        },
      },
    }),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          charts: [
            'ag-charts-vue3',
            'ag-charts-community',
          ],
          'ag-grid': [
            'ag-grid-vue3',
            'ag-grid-community',
          ],
          fullcalendar: [
            '@fullcalendar/core',
            '@fullcalendar/daygrid',
            '@fullcalendar/interaction',
            '@fullcalendar/timegrid',
            '@fullcalendar/vue3',
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(
        new URL('./src', import.meta.url),
      ),
      // Fallback for #build/ui.css if .nuxt-ui not yet generated (Nuxt UI plugin overrides when ready)
      '#build/ui.css': fileURLToPath(
        new URL(
          './node_modules/@nuxt/ui/.nuxt/ui.css',
          import.meta.url,
        ),
      ),
    },
  },
})
