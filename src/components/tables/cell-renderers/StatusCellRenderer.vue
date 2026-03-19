<template>
  <span
    :class="[
      'rounded-full px-2 py-0.5 text-theme-xs font-medium',
      statusClasses,
    ]"
  >
    {{ params.value }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  params: {
    value: string
  }
}>()

const statusClasses = computed(() => {
  const status = props.params.value
  if (status === 'Active') {
    return 'bg-success-50 text-success-700 dark:bg-success-500/15 dark:text-success-500'
  }
  if (status === 'Pending') {
    return 'bg-warning-50 text-warning-700 dark:bg-warning-500/15 dark:text-warning-400'
  }
  if (status === 'Cancel') {
    return 'bg-error-50 text-error-700 dark:bg-error-500/15 dark:text-error-500'
  }
  return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
})
</script>
