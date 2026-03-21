<template>
  <div class="flex items-center gap-3">
    <UAvatar
      v-if="!isCompact"
      :src="params.data?.avatar"
      :alt="params.data?.name"
      size="sm"
      class="shrink-0" />
    <div class="min-w-0">
      <span
        class="block truncate font-medium text-sm text-highlighted">
        {{ params.data?.name }}
      </span>
      <span
        v-if="!isCompact"
        class="block truncate text-xs text-muted">
        {{ params.data?.role }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  params: {
    context?: {
      tableTheme?:
        | 'compact'
        | 'relaxed'
        | 'advance'
    }
    data?: {
      name: string
      role: string
      avatar: string
    }
  }
}>()

const isCompact = computed(
  () =>
    props.params.context?.tableTheme ===
    'compact',
)
</script>
