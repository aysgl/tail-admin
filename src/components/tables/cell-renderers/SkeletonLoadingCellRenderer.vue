<template>
  <div
    class="skeleton-loading-cell flex items-center gap-3"
    :class="{
      'skeleton-user': type === 'user',
      'skeleton-text': type === 'text',
    }"
  >
    <!-- User type: avatar + lines -->
    <template v-if="type === 'user'">
      <div
        class="size-8 shrink-0 animate-pulse overflow-hidden rounded-full bg-accented"
      />
      <div
        class="flex min-w-0 flex-1 flex-col gap-2"
      >
        <div
          class="h-4 w-24 animate-pulse rounded bg-accented"
        />
        <div
          class="h-3 w-16 animate-pulse rounded bg-accented"
        />
      </div>
    </template>
    <!-- Team type: avatars -->
    <template v-else-if="type === 'team'">
      <div class="flex -space-x-2">
        <div
          v-for="i in 3"
          :key="i"
          class="size-8 animate-pulse rounded-full bg-accented"
        />
      </div>
    </template>
    <!-- Status type: pill -->
    <template v-else-if="type === 'status'">
      <div
        class="h-6 w-16 animate-pulse rounded-full bg-accented"
      />
    </template>
    <!-- Default text type -->
    <template v-else>
      <div
        class="h-4 w-full max-w-[80%] animate-pulse rounded bg-accented"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  params?: {
    colDef?: { field?: string }
    context?: unknown
  }
}>()

const type = computed(() => {
  const field = props.params?.colDef?.field ?? ''
  if (field === 'name') return 'user'
  if (field === 'team') return 'team'
  if (field === 'status') return 'status'
  return 'text'
})
</script>

<style scoped>
.skeleton-loading-cell {
  min-height: 24px;
}
</style>
