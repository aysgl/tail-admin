<template>
  <div
    class="flex w-full min-w-0 flex-row items-center justify-between gap-4 mb-0!"
  >
    <div class="min-w-0 flex-1">
      <h3
        class="text-lg font-semibold text-highlighted"
      >
        {{ title }}
      </h3>
      <p
        v-if="description"
        class="mt-1 text-sm text-muted"
      >
        {{ description }}
      </p>
    </div>
    <div
      v-if="hasActions"
      class="shrink-0 ml-auto flex items-center"
    >
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

defineProps<{
  title: string
  description?: string
}>()

const slots = useSlots()
const hasActions = computed(() => !!slots.actions)
</script>
