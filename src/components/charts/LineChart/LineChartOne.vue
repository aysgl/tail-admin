<template>
  <div
    class="max-w-full overflow-x-auto custom-scrollbar"
  >
    <div
      id="chartThree"
      class="-ml-4 min-w-[1000px] xl:min-w-full pl-2 h-[310px]"
    >
      <ag-charts :options="chartOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import { ref } from 'vue'
import { AgCharts } from 'ag-charts-vue3'

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

const chartOptions = ref<AgChartOptions>({
  data: chartData,
  series: [
    {
      type: 'area',
      xKey: 'month',
      yKey: 'sales',
      yName: 'Sales',
      fill: '#465FFF',
      fillOpacity: 0.55,
      stroke: '#465FFF',
    },
    {
      type: 'area',
      xKey: 'month',
      yKey: 'revenue',
      yName: 'Revenue',
      fill: '#9CB9FF',
      fillOpacity: 0.55,
      stroke: '#9CB9FF',
    },
  ],
  legend: {
    enabled: false,
  },
})
</script>

<style scoped>
.area-chart {
  width: 100%;
}
</style>
