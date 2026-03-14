import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'
// Bir efsaneyyy

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['primary', 'outline', 'ghost', 'link'] },
  },
}
export default meta

type Story = StoryObj<typeof BaseButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">Button</BaseButton>',
  }),
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">Button</BaseButton>',
  }),
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">Button</BaseButton>',
  }),
}

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'md',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">Button</BaseButton>',
  }),
}
