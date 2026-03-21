<template>
  <div
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
    <template v-if="loading">
      <UPageCard
        v-for="i in 2"
        :key="`skeleton-${i}`"
        variant="outline">
        <USkeleton
          class="h-12 w-12 rounded-xl bg-accented" />
        <div
          class="mt-5 flex items-end justify-between">
          <div class="flex-1">
            <USkeleton
              class="h-4 w-20 bg-accented" />
            <USkeleton
              class="mt-2 h-6 w-16 bg-accented" />
          </div>
          <USkeleton
            class="h-6 w-12 rounded-full bg-accented" />
        </div>
      </UPageCard>
    </template>
    <UPageCard
      v-else
      v-for="metric in metrics"
      :key="metric.label"
      variant="outline">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
        <UIcon
          :name="metric.icon"
          class="size-6 text-highlighted" />
      </div>
      <div
        class="mt-5 flex items-end justify-between">
        <div>
          <span class="text-sm text-muted">{{
            metric.label
          }}</span>
          <h4
            class="mt-2 font-bold text-2xl text-highlighted">
            {{ metric.value }}
          </h4>
        </div>
        <UBadge
          :color="
            metric.trend === 'up'
              ? 'success'
              : 'error'
          "
          variant="subtle"
          size="sm"
          :leading-icon="
            metric.trend === 'up'
              ? 'i-lucide-trending-up'
              : 'i-lucide-trending-down'
          ">
          {{ metric.percent }}%
        </UBadge>
      </div>
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    loading?: boolean
  }>(),
  { loading: false },
)

const metrics = [
  {
    label: 'Customers',
    value: '3,782',
    percent: '11.01',
    trend: 'up' as const,
    icon: 'i-lucide-users',
  },
  {
    label: 'Orders',
    value: '5,359',
    percent: '9.05',
    trend: 'down' as const,
    icon: 'i-lucide-package',
  },
]
</script>
