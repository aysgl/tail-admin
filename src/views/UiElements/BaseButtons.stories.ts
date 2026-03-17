import type {
  Meta,
  StoryObj,
} from '@storybook/vue3'
import BaseButtons from './BaseButtons.vue'

const meta: Meta<typeof BaseButtons> = {
  component: BaseButtons,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof BaseButtons>

export const Default: Story = {}
