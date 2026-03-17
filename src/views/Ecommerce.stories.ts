import type {
  Meta,
  StoryObj,
} from '@storybook/vue3'
import Ecommerce from './Ecommerce.vue'

const meta: Meta<typeof Ecommerce> = {
  component: Ecommerce,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof Ecommerce>

export const Default: Story = {}
