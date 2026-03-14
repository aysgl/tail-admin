import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseBadge from './BaseBadge.vue'

const meta = {
    title: 'UI/BaseBadge',
    component: BaseBadge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['light', 'solid']
        },
        size: {
            control: 'select',
            options: ['sm', 'md']
        },
        color: {
            control: 'select',
            options: ['primary', 'success', 'error', 'warning', 'info', 'light', 'dark']
        }
    }
} satisfies Meta<typeof BaseBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        color: 'primary'
    },
    render: (args) => ({
        components: {
            BaseBadge
        },
        setup() {
            return {
                args
            }
        },
        template: '<BaseBadge v-bind="args">Primary</BaseBadge>'
    })
}

export const Success: Story = {
    args: {
        color: 'success'
    },
    render: (args) => ({
        components: {
            BaseBadge
        },
        setup() {
            return {
                args
            }
        },
        template: '<BaseBadge v-bind="args">Success</BaseBadge>'
    })
}

export const Error: Story = {
    args: {
        color: 'error'
    },
    render: (args) => ({
        components: {
            BaseBadge
        },
        setup() {
            return {
                args
            }
        },
        template: '<BaseBadge v-bind="args">Error</BaseBadge>'
    })
}

export const Solid: Story = {
    args: {
        variant: 'solid',
        color: 'primary'
    },
    render: (args) => ({
        components: {
            BaseBadge
        },
        setup() {
            return {
                args
            }
        },
        template: '<BaseBadge v-bind="args">Solid Badge</BaseBadge>'
    })
}

export const Small: Story = {
    args: {
        size: 'sm',
        color: 'primary'
    },
    render: (args) => ({
        components: {
            BaseBadge
        },
        setup() {
            return {
                args
            }
        },
        template: '<BaseBadge v-bind="args">Small</BaseBadge>'
    })
}
