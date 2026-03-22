<template>
  <UPageCard
    title="Sales Trend"
    description="Monthly sales and revenue performance"
    variant="outline">
    <div
      class="relative min-h-[340px] max-w-full overflow-x-auto">
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg">
        <ChartSkeletonOverlay
          variant="area"
          class="h-[340px] w-full" />
      </div>
      <div
        class="-ml-4 min-w-[650px] pl-2 h-[340px] xl:min-w-full"
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
  defineProps<{ loading?: boolean }>(),
  { loading: false },
)

const chartData = [
  { month: 'Jan', sales: 168, revenue: 42 },
  { month: 'Feb', sales: 385, revenue: 96 },
  { month: 'Mar', sales: 201, revenue: 50 },
  { month: 'Apr', sales: 298, revenue: 74 },
  { month: 'May', sales: 187, revenue: 47 },
  { month: 'Jun', sales: 195, revenue: 49 },
  { month: 'Jul', sales: 291, revenue: 73 },
  { month: 'Aug', sales: 110, revenue: 28 },
  { month: 'Sep', sales: 215, revenue: 54 },
  { month: 'Oct', sales: 390, revenue: 98 },
  { month: 'Nov', sales: 280, revenue: 70 },
  { month: 'Dec', sales: 112, revenue: 28 },
]

const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chart.theme,
    background: chart.background,
    data: chartData,
    series: [
      {
        type: 'area',
        xKey: 'month',
        yKey: 'sales',
        yName: 'Sales',
        fill: chart.withOpacity(
          chart.colors.primary,
          0.85,
        ),
        fillOpacity: 0.55,
        stroke: chart.colors.primary,
        interpolation: { type: 'smooth' },
      },
      {
        type: 'area',
        xKey: 'month',
        yKey: 'revenue',
        yName: 'Revenue',
        fill: chart.colors.primary,
        fillOpacity: 0.55,
        stroke: chart.colors.primary,
        interpolation: { type: 'smooth' },
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
