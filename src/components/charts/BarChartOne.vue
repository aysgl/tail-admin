<template>
  <div
    class="max-w-full overflow-x-auto custom-scrollbar -ml-5 min-w-[650px] xl:min-w-full pl-2"
  >
    <AgCharts :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import { computed } from 'vue'
import { AgCharts } from 'ag-charts-vue3'
import { useChartTheme } from '@/composables/useChartTheme'

const { chartTheme } = useChartTheme()

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
    theme: chartTheme.value,
    data: chartData,
    series: [
      {
        type: 'bar',
        xKey: 'month',
        yKey: 'sales',
        yName: 'Sales',
        fill: '#465fff',
        cornerRadius: 5,
      },
    ],
    legend: {
      position: 'top',
      item: {
        marker: { shape: 'square' },
      },
    },
  }),
)
</script>
