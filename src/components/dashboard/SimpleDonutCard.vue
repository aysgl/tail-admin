<template>
  <UPageCard
    title="Category Breakdown"
    description="Distribution by report category"
    variant="outline">
    <div class="relative h-[340px]">
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg">
        <ChartSkeletonOverlay
          variant="donut"
          class="h-full w-full" />
      </div>
      <div
        class="h-full"
        :class="{ 'opacity-0': loading }">
        <AgCharts :options="chartOptions" />
      </div>
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import { AgCharts } from 'ag-charts-vue3'
import { computed } from 'vue'
import { useChartTheme } from '@/composables/useChartTheme'

const {
  chartTheme,
  chartColors,
  chartBackground,
} = useChartTheme()

withDefaults(
  defineProps<{
    loading?: boolean
  }>(),
  { loading: false },
)

const data = [
  { category: 'Revenue', amount: 45000 },
  { category: 'Sales', amount: 32000 },
  { category: 'Marketing', amount: 18000 },
  { category: 'Ops', amount: 12000 },
]

const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chartTheme.value,
    background: { fill: chartBackground },
    data,
    series: [
      {
        type: 'donut',
        calloutLabelKey: 'category',
        angleKey: 'amount',
        innerRadiusRatio: 0.6,
        fills:
          chartColors.value.chartPaletteMuted,
        strokes:
          chartColors.value.chartPaletteMuted,
      },
    ],
    legend: {
      enabled: false,
    },
  }),
)
</script>
