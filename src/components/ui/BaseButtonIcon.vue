<template>
  <span
    class="flex items-center pointer-events-none"
    aria-hidden="true"
    inert
  >
    <component :is="icon" />
  </span>
</template>

<script setup lang="ts">
defineProps<{
  icon: object
}>()
</script>
