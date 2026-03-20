import type {
  Meta,
  StoryObj,
} from '@storybook/vue3'
import EcommerceView from './EcommerceView.vue'

const meta: Meta<typeof EcommerceView> = {
  component: EcommerceView,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof EcommerceView>

export const Default: Story = {}
