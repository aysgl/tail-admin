<template>
  <div class="relative min-h-[280px]">
    <div
      v-if="loading"
      class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg">
      <ChartSkeletonOverlay
        variant="area"
        class="h-full w-full" />
    </div>
    <AgCharts
      v-show="!loading"
      :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import { computed } from 'vue'
import { AgCharts } from 'ag-charts-vue3'
import { useChartTheme } from '@/composables/useChartTheme'

const {
  chartTheme,
  chartColors,
  chartBackground,
} = useChartTheme()

const chartData = [
  { month: 'Jan', sales: 180, revenue: 40 },
  { month: 'Feb', sales: 190, revenue: 30 },
  { month: 'Mar', sales: 170, revenue: 50 },
  { month: 'Apr', sales: 160, revenue: 40 },
  { month: 'May', sales: 175, revenue: 55 },
  { month: 'Jun', sales: 165, revenue: 40 },
  { month: 'Jul', sales: 170, revenue: 70 },
  { month: 'Aug', sales: 205, revenue: 100 },
  { month: 'Sep', sales: 230, revenue: 110 },
  { month: 'Oct', sales: 210, revenue: 120 },
  { month: 'Nov', sales: 240, revenue: 150 },
  { month: 'Dec', sales: 235, revenue: 140 },
]

withDefaults(
  defineProps<{
    loading?: boolean
  }>(),
  { loading: false },
)

const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chartTheme.value,
    background: { fill: chartBackground },
    data: chartData,
    series: [
      {
        type: 'area',
        xKey: 'month',
        yKey: 'sales',
        yName: 'Sales',
        fill: chartColors.value.primary,
        fillOpacity: 0.55,
        stroke: chartColors.value.primary,
      },
      {
        type: 'area',
        xKey: 'month',
        yKey: 'revenue',
        yName: 'Revenue',
        fill: chartColors.value.primaryLight,
        fillOpacity: 0.55,
        stroke: chartColors.value.primaryLight,
      },
    ],
    legend: {
      enabled: false,
    },
  }),
)
</script>

<style scoped>
.area-chart {
  width: 100%;
}
</style>
