<template>
  <UPageCard
    variant="outline"
    class="mt-6 w-full"
  >
    <div
      v-if="$slots.social"
      class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5"
    >
      <slot name="social" />
    </div>
    <div
      v-if="$slots.social"
      class="relative py-3 sm:py-5"
    >
      <USeparator />
      <span
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-default px-3 text-sm text-muted dark:text-gray-400"
      >
        Or
      </span>
    </div>
    <UForm
      :state="state"
      class="space-y-5"
      @submit="(e) => $emit('submit', e)"
    >
      <slot />
    </UForm>
    <slot name="footer" />
  </UPageCard>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'

defineProps<{
  state: Record<string, unknown>
}>()

defineEmits<{
  submit: [event: FormSubmitEvent<unknown>]
}>()
</script>
