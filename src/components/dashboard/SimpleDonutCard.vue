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
import { chart } from '@/constants/chartColors'

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
    theme: chart.theme,
    background: chart.background,
    data,
    series: [
      {
        type: 'donut',
        calloutLabelKey: 'category',
        angleKey: 'amount',
        innerRadiusRatio: 0.6,
        fills: [
          chart.colors.primary,
          chart.withOpacity(
            chart.colors.primary,
            0.4,
          ),
          chart.withOpacity(
            chart.colors.primary,
            0.3,
          ),
          chart.withOpacity(
            chart.colors.primary,
            0.2,
          ),
        ],
        strokes: [
          chart.colors.primary,
          chart.withOpacity(
            chart.colors.primary,
            0.4,
          ),
          chart.withOpacity(
            chart.colors.primary,
            0.3,
          ),
          chart.withOpacity(
            chart.colors.primary,
            0.2,
          ),
        ],
      },
    ],
    legend: {
      enabled: false,
    },
  }),
)
</script>
