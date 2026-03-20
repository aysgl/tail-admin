<template>
  <UBadge
    :color="statusColor"
    variant="subtle"
    size="sm"
  >
    {{ params.value }}
  </UBadge>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  params: {
    value: string
  }
}>()

const statusColor = computed(() => {
  const status = props.params.value
  if (status === 'Active') return 'success'
  if (status === 'Pending') return 'warning'
  if (status === 'Cancel') return 'error'
  return 'primary'
})
</script>
