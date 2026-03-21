<template>
  <div
    class="skeleton-loading-overlay w-full overflow-hidden rounded-lg px-4 pt-6 pb-4">
    <!-- Header -->
    <div
      class="skeleton-grid skeleton-header mb-4 gap-x-4 gap-y-0 border-b border-muted pb-3"
      :class="variant">
      <USkeleton
        v-for="i in cols"
        :key="i"
        class="h-4 min-w-0 bg-accented" />
    </div>
    <!-- Rows -->
    <div
      class="flex flex-col divide-y divide-muted">
      <div
        v-for="row in 3"
        :key="row"
        class="skeleton-grid skeleton-row gap-x-4 gap-y-0 py-4 first:pt-0 last:pb-0"
        :class="variant">
        <template v-if="variant === 'tables'">
          <!-- User: avatar + 2 lines -->
          <div
            class="flex min-w-0 items-center gap-2">
            <USkeleton
              class="size-8 shrink-0 rounded-full bg-accented" />
            <div
              class="flex min-w-0 flex-1 flex-col gap-1.5">
              <USkeleton
                class="h-3.5 w-20 min-w-0 bg-accented" />
              <USkeleton
                class="h-2.5 w-14 min-w-0 bg-accented" />
            </div>
          </div>
          <!-- Project -->
          <USkeleton
            class="h-4 min-w-0 bg-accented" />
          <!-- Team: 3 avatars -->
          <div class="flex min-w-0 -space-x-2">
            <USkeleton
              v-for="j in 3"
              :key="j"
              class="size-6 shrink-0 rounded-full bg-accented" />
          </div>
          <!-- Status pill -->
          <USkeleton
            class="h-5 w-14 min-w-0 rounded-full bg-accented" />
          <!-- Date -->
          <USkeleton
            class="h-4 min-w-0 bg-accented" />
          <!-- Budget -->
          <USkeleton
            class="h-4 min-w-0 bg-accented" />
        </template>
        <template v-else>
          <!-- Orders: Product (img+text), Category, Price, Status -->
          <div
            class="flex min-w-0 items-center gap-2">
            <USkeleton
              class="size-10 shrink-0 bg-accented" />
            <div
              class="flex min-w-0 flex-1 flex-col gap-1.5">
              <USkeleton
                class="h-3.5 w-24 min-w-0 bg-accented" />
              <USkeleton
                class="h-2.5 w-16 min-w-0 bg-accented" />
            </div>
          </div>
          <USkeleton
            class="h-4 min-w-0 bg-accented" />
          <USkeleton
            class="h-4 min-w-0 bg-accented" />
          <USkeleton
            class="h-5 w-14 min-w-0 rounded-full bg-accented" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'tables' | 'orders'
  }>(),
  { variant: 'tables' },
)

const cols = computed(() =>
  props.variant === 'orders' ? 4 : 6,
)
</script>

<style scoped>
.skeleton-loading-overlay {
  animation: fadeIn 0.2s ease-out;
}

.skeleton-grid {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 1fr 1fr 1fr;
}

.skeleton-header.orders,
.skeleton-row.orders {
  grid-template-columns: 2fr 1fr 1fr 1fr;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
