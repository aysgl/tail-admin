<template>
  <button
    :class="[
      'font-medium gap-2 rounded-lg transition',
      sizeClasses[size],
      variantColorClasses,
      className,
      {
        'cursor-not-allowed opacity-50': disabled,
      },
    ]"
    :aria-label="
      $slots.default
        ? undefined
        : (ariaLabel ?? 'Button')
    "
    @click="onClick"
    :disabled="disabled"
  >
    <BaseButtonIcon
      v-if="startIcon"
      :icon="startIcon"
    />
    <span class="inline-block"
      ><slot></slot
    ></span>
    <BaseButtonIcon
      v-if="endIcon"
      :icon="endIcon"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButtonIcon from './BaseButtonIcon.vue'

type ButtonVariant =
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'secondary'
type ButtonColor =
  | 'brand'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'primary'

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: ButtonVariant
  color?: ButtonColor
  startIcon?: object
  endIcon?: object
  onClick?: () => void
  className?: string
  disabled?: boolean
  /** Optional. When set, used as the accessible name (e.g. for icon-only buttons). When unset, the button text is used. */
  ariaLabel?: string
}

const props = withDefaults(
  defineProps<ButtonProps>(),
  {
    size: 'md',
    variant: 'solid',
    color: 'brand',
    className: '',
    disabled: false,
    ariaLabel: undefined,
  },
)

const sizeClasses = computed(() => ({
  sm: 'px-3 py-2 text-sm',
  md: 'px-5 py-3 text-md',
  lg: 'px-6 py-4 text-lg',
}))

const secondaryClasses =
  'bg-gray-200 text-gray-800 border-2 border-gray-300 shadow-theme-xs hover:bg-gray-300 hover:border-gray-400 disabled:bg-gray-100 disabled:border-gray-200'

/**
 * Tailwind JIT sadece kaynak kodda tam görünen sınıf adlarını üretir.
 * Dinamik string birleştirme (örn: `bg-${c}-500`) çalışmaz - tüm sınıflar
 * açıkça yazılmalıdır.
 */
type MapVariant =
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'secondary'

type MapColor =
  | 'brand'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'

const variantColorMap: Record<
  MapVariant,
  Record<MapColor, string>
> = {
  secondary: {
    brand: secondaryClasses,
    success: secondaryClasses,
    error: secondaryClasses,
    warning: secondaryClasses,
    info: secondaryClasses,
  },
  solid: {
    brand:
      'bg-brand-500 text-white border-2 border-brand-500 shadow-theme-xs hover:bg-brand-600 hover:border-brand-600 disabled:bg-brand-300 disabled:border-brand-300',
    success:
      'bg-success-500 text-white border-2 border-success-500 shadow-theme-xs hover:bg-success-600 hover:border-success-600 disabled:bg-success-300 disabled:border-success-300',
    error:
      'bg-error-500 text-white border-2 border-error-500 shadow-theme-xs hover:bg-error-600 hover:border-error-600 disabled:bg-error-300 disabled:border-error-300',
    warning:
      'bg-warning-500 text-white border-2 border-warning-500 shadow-theme-xs hover:bg-warning-600 hover:border-warning-600 disabled:bg-warning-300 disabled:border-warning-300',
    info: 'bg-blue-light-500 text-white border-2 border-blue-light-500 shadow-theme-xs hover:bg-blue-light-600 hover:border-blue-light-600 disabled:bg-blue-light-300 disabled:border-blue-light-300',
  },
  outline: {
    brand:
      'bg-white text-brand-600 border-2 border-brand-600 hover:bg-gray-50',
    success:
      'bg-white text-success-600 border-2 border-success-600 hover:bg-gray-50',
    error:
      'bg-white text-error-600 border-2 border-error-600 hover:bg-gray-50',
    warning:
      'bg-white text-warning-600 border-2 border-warning-600 hover:bg-gray-50',
    info: 'bg-white text-blue-light-600 border-2 border-blue-light-600 hover:bg-gray-50',
  },
  ghost: {
    brand:
      'bg-brand-500/15 text-brand-500 border-2 border-brand-500/25 hover:bg-brand-500/25',
    success:
      'bg-success-500/15 text-success-500 border-2 border-success-500/25 hover:bg-success-500/25',
    error:
      'bg-error-500/15 text-error-500 border-2 border-error-500/25 hover:bg-error-500/25',
    warning:
      'bg-warning-500/15 text-warning-500 border-2 border-warning-500/25 hover:bg-warning-500/25',
    info: 'bg-blue-light-500/15 text-blue-light-500 border-2 border-blue-light-200 hover:bg-blue-light-500/25',
  },
  link: {
    brand:
      'bg-transparent underline text-brand-500 border-2 border-transparent hover:bg-brand-50 hover:border-brand-100',
    success:
      'bg-transparent underline text-success-500 border-2 border-transparent hover:bg-success-50 hover:border-success-100',
    error:
      'bg-transparent underline text-error-500 border-2 border-transparent hover:bg-error-50 hover:border-error-100',
    warning:
      'bg-transparent underline text-warning-500 border-2 border-transparent hover:bg-warning-50 hover:border-warning-100',
    info: 'bg-transparent underline text-blue-light-500 border-2 border-transparent hover:bg-blue-light-50 hover:border-blue-light-100',
  },
}

const variantColorClasses = computed(() => {
  const variant: MapVariant =
    props.variant === 'solid'
      ? 'solid'
      : props.variant
  const color: MapColor =
    props.color === 'primary'
      ? 'brand'
      : props.color
  return variantColorMap[variant][color]
})

const onClick = () => {
  if (!props.disabled && props.onClick) {
    props.onClick()
  }
}
</script>
