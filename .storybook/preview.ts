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
      components: {
        story,
        SidebarProvider,
        ThemeProvider,
      },
      template: `
        <ThemeProvider>
          <SidebarProvider>
            <div class=" p-4 md:p-6">
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
  },
}

export default preview
