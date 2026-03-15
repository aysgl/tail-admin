import type { Meta, StoryObj } from '@storybook/vue3'
import MonthlyTarget from './MonthlyTarget.vue'

const meta: Meta<typeof MonthlyTarget> = {
  component: MonthlyTarget,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Radial chart progress value (%)',
    },
  },
}
export default meta

type Story = StoryObj<typeof MonthlyTarget>

export const Default: Story = {
  args: {
    value: 75.55,
  },
}

export const LowProgress: Story = {
  args: {
    value: 25,
  },
}

export const HighProgress: Story = {
  args: {
    value: 95,
  },
}
