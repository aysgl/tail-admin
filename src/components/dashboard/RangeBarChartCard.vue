<template>
  <UPageCard
    title="Visitors Distribution"
    description="Visitor distribution (Histogram instead of Range Bar)"
    variant="outline">
    <div class="max-w-full overflow-x-auto">
      <div
        class="-ml-4 min-w-[500px] pl-2 h-[310px] xl:min-w-full">
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

const chartData = [
  22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44,
  46, 48, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43,
  45, 47, 23, 45, 28, 52, 31, 55, 34, 48,
]

const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chart.theme,
    background: chart.background,
    data: chartData.map((v) => ({ value: v })),
    series: [
      {
        type: 'histogram',
        xKey: 'value',
        xName: 'Session Duration (min)',
        areaPlot: false,
        fill: chart.colors.primary,
        stroke: chart.colors.primary,
        fillOpacity: 0.7,
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
  }),
)
</script>
