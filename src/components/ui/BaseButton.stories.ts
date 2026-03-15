import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: {
      control: 'select',
      options: ['solid', 'secondary', 'outline', 'ghost', 'link'],
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning', 'info'],
    },
  },
}
export default meta

type Story = StoryObj<typeof BaseButton>

const renderButton = (args: object) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: '<BaseButton v-bind="args">Button</BaseButton>',
})

export const Primary: Story = { args: { variant: 'fill', color: 'brand' }, render: renderButton }
export const Outline: Story = {
  args: { variant: 'outline', color: 'brand' },
  render: renderButton,
}
export const Ghost: Story = { args: { variant: 'ghost', color: 'brand' }, render: renderButton }
export const Secondary: Story = {
  args: { variant: 'secondary', color: 'brand' },
  render: renderButton,
}
export const Link: Story = { args: { variant: 'link', color: 'brand' }, render: renderButton }
