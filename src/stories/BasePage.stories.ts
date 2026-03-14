import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, userEvent, within } from 'storybook/test'

import ThemeProvider from '../components/layout/ThemeProvider.vue'
import ThemeToggler from '../components/common/ThemeToggler.vue'

const meta = {
    title: 'Example/ThemeSwitch',
    component: ThemeToggler,
    render: () => ({
        components: {
            ThemeProvider,
            ThemeToggler
        },
        template: `
      <ThemeProvider>
        <div class="flex items-center gap-4 p-8">
          <ThemeToggler />
          <span data-testid="theme-indicator" class="text-sm text-gray-600 dark:text-gray-400">
            Tema değiştirmek için butona tıklayın
          </span>
        </div>
      </ThemeProvider>
    `
    }),
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ThemeToggler>

export default meta
type Story = StoryObj<typeof meta>

// Interaction testing: Tema değiştirme butonunun çalıştığını doğrular
export const ThemeSwitch: Story = {
    play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
        const canvas = within(canvasElement)
        const themeButton = canvas.getByRole('button')
        await expect(themeButton).toBeInTheDocument()

        const html = document.documentElement
        const wasDarkBefore = html.classList.contains('dark')

        // İlk tıklama: tema değişmeli
        await userEvent.click(themeButton)
        await expect(html.classList.contains('dark')).toBe(!wasDarkBefore)

        // İkinci tıklama: tema geri dönmeli
        await userEvent.click(themeButton)
        await expect(html.classList.contains('dark')).toBe(wasDarkBefore)
    }
}
