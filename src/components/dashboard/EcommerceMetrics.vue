<template>
  <div
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6"
  >
    <UPageCard
      v-for="metric in metrics"
      :key="metric.label"
      variant="outline"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-muted"
      >
        <UIcon
          :name="metric.icon"
          class="size-6 text-default"
        />
      </div>
      <div
        class="mt-5 flex items-end justify-between"
      >
        <div>
          <span class="text-sm text-muted">{{
            metric.label
          }}</span>
          <h4
            class="mt-2 font-bold text-title-sm text-default"
          >
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
          "
        >
          {{ metric.percent }}%
        </UBadge>
      </div>
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
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
