<template>
  <UPageCard
    title="Revenue Overview"
    description="This year vs last year by category"
    variant="outline"
  >
    <div class="h-[350px]">
      <AgCharts :options="chartOptions" />
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

const currentYearData = [
  { category: 'Revenue', amount: 45000 },
  { category: 'Sales', amount: 32000 },
  { category: 'Marketing', amount: 18000 },
  { category: 'Ops', amount: 12000 },
]

const previousYearData = [
  { category: 'Revenue', amount: 38000 },
  { category: 'Sales', amount: 28000 },
  { category: 'Marketing', amount: 15000 },
  { category: 'Ops', amount: 10000 },
]

const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chartTheme.value,
    background: { fill: chartBackground },
    data: currentYearData,
    legend: { enabled: false },
    series: [
      {
        type: 'donut',
        calloutLabelKey: 'category',
        angleKey: 'amount',
        outerRadiusRatio: 1,
        innerRadiusRatio: 0.72,
        title: { text: 'This Year' },
        showInLegend: false,
        fills:
          chartColors.value.chartPaletteMuted,
        strokes:
          chartColors.value.chartPaletteMuted,
      },
      {
        type: 'donut',
        data: previousYearData,
        calloutLabelKey: 'category',
        angleKey: 'amount',
        outerRadiusRatio: 0.58,
        innerRadiusRatio: 0.2,
        title: { text: 'Last Year' },
        showInLegend: false,
        fills: [
          chartColors.value.primaryLight,
          chartColors.value.gray200,
          chartColors.value.gray300,
          chartColors.value.gray500,
        ],
        strokes: [
          chartColors.value.primaryLight,
          chartColors.value.gray200,
          chartColors.value.gray300,
          chartColors.value.gray500,
        ],
      },
    ],
  }),
)
</script>
