<template>
  <div class="flex items-center gap-3">
    <div
      v-if="!isCompact"
      class="size-8 shrink-0 overflow-hidden rounded-full"
    >
      <img
        :src="params.data?.avatar"
        :alt="params.data?.name"
        class="size-full object-cover"
      />
    </div>
    <div class="min-w-0">
      <span
        class="block truncate font-medium text-gray-800 text-theme-sm dark:text-white/90"
      >
        {{ params.data?.name }}
      </span>
      <span
        v-if="!isCompact"
        class="block truncate text-gray-600 text-theme-xs dark:text-gray-400"
      >
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
