import type {
  Meta,
  StoryObj,
} from '@storybook/vue3'
import BaseBadge from './BaseBadge.vue'

const meta: Meta<typeof BaseBadge> = {
  component: BaseBadge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    variant: {
      control: 'select',
      options: ['light', 'solid'],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'success',
        'error',
        'warning',
        'info',
        'light',
        'dark',
      ],
    },
  },
}

export default meta

type Story = StoryObj<typeof BaseBadge>

export const Default: Story = {
  args: {
    variant: 'light',
    color: 'primary',
    size: 'md',
  },
}

export const Solid: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
}

export const LightSuccess: Story = {
  args: { variant: 'light', color: 'success' },
}

export const SolidError: Story = {
  args: { variant: 'solid', color: 'error' },
}

export const Sizes: Story = {
  args: { variant: 'light', color: 'primary' },
  render: (args) => ({
    components: { BaseBadge },
    setup() {
      return { args }
    },
    template: `
      <div class="flex flex-wrap items-center gap-3">
        <BaseBadge v-bind="args" size="sm">Small</BaseBadge>
        <BaseBadge v-bind="args" size="md">Medium</BaseBadge>
      </div>
    `,
  }),
}
