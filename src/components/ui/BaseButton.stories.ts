import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import BaseButton from './BaseButton.vue'

const meta = {
    title: 'UI/BaseButton',
    component: BaseButton,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md']
        },
        variant: {
            control: 'select',
            options: ['primary', 'outline']
        },
        disabled: {
            control: 'boolean'
        }
    },
    args: {
        onClick: fn()
    }
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary'
    },
    render: (args) => ({
        components: {
            BaseButton
        },
        setup() {
            return {
                args
            }
        },
        template: '<BaseButton v-bind="args">Primary Button</BaseButton>'
    })
}

export const Outline: Story = {
    args: {
        variant: 'outline'
    },
    render: (args) => ({
        components: {
            BaseButton
        },
        setup() {
            return {
                args
            }
        },
        template: '<BaseButton v-bind="args">Outline Button</BaseButton>'
    })
}

export const Small: Story = {
    args: {
        size: 'sm'
    },
    render: (args) => ({
        components: {
            BaseButton
        },
        setup() {
            return {
                args
            }
        },
        template: '<BaseButton v-bind="args">Small Button</BaseButton>'
    })
}

export const Disabled: Story = {
    args: {
        disabled: true
    },
    render: (args) => ({
        components: {
            BaseButton
        },
        setup() {
            return {
                args
            }
        },
        template: '<BaseButton v-bind="args">Disabled Button</BaseButton>'
    })
}
