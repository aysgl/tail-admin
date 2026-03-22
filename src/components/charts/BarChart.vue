<template>
  <div class="relative min-h-[280px]">
    <div
      v-if="loading"
      class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg">
      <ChartSkeletonOverlay
        variant="bar"
        class="h-full w-full" />
    </div>
    <AgCharts
      v-show="!loading"
      :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import { AgCharts } from 'ag-charts-vue3'
import { computed } from 'vue'
import { chart } from '@/constants/chartColors'

withDefaults(
  defineProps<{ loading?: boolean }>(),
  { loading: false },
)

const chartData = [
  { month: 'Jan', sales: 168 },
  { month: 'Feb', sales: 385 },
  { month: 'Mar', sales: 201 },
  { month: 'Apr', sales: 298 },
  { month: 'May', sales: 187 },
  { month: 'Jun', sales: 195 },
  { month: 'Jul', sales: 291 },
  { month: 'Aug', sales: 110 },
  { month: 'Sep', sales: 215 },
  { month: 'Oct', sales: 390 },
  { month: 'Nov', sales: 280 },
  { month: 'Dec', sales: 112 },
]

const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chart.theme,
    background: chart.background,
    data: chartData,
    series: [
      {
        type: 'bar',
        xKey: 'month',
        yKey: 'sales',
        yName: 'Sales',
        fill: chart.colors.primary,
        cornerRadius: 5,
      },
    ],
    axes: {
      y: {
        gridLine: {
          style: [
            {
              stroke: chart.withOpacity(
                chart.colors.gray,
                0.2,
              ),
            },
          ],
        },
      },
    },
    legend: {
      position: 'top',
      item: { marker: { shape: 'square' } },
    },
  }),
)
</script>
