<template>
  <div>
    <p
      class="mb-2 text-xs leading-normal text-muted">
      {{ label }}
    </p>
    <p
      class="text-sm font-medium text-highlighted">
      {{ value }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>
