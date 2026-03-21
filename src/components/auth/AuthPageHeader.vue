<template>
  <div>
    <ULink
      to="/"
      class="mb-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-highlighted"
      aria-label="Back to dashboard">
      <UIcon
        name="i-lucide-arrow-left"
        class="size-5" />
      Back to dashboard
    </ULink>
    <h1
      class="mt-6 text-2xl font-bold text-highlighted">
      {{ title }}
    </h1>
    <p class="mt-1 text-muted">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
