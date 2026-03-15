import type { Preview } from '@storybook/vue3-vite'
import { vueRouter } from 'storybook-vue3-router'
import '../src/assets/main.css'
import SidebarProvider from '../src/components/layout/SidebarProvider.vue'
import ThemeProvider from '../src/components/layout/ThemeProvider.vue'
import { storybookRoutes } from './storybook-routes'

const preview: Preview = {
  decorators: [
    vueRouter(storybookRoutes),
    (story) => ({
      components: { story, SidebarProvider, ThemeProvider },
      template: `
        <ThemeProvider>
          <SidebarProvider>
            <div class="min-h-screen bg-gray-50 p-4 md:p-6">
              <story />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      `,
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview
