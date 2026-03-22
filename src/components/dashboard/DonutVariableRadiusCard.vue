<template>
  <UPageCard
    title="Revenue Overview"
    description="This year vs last year by category"
    variant="outline">
    <div class="h-[350px]">
      <AgCharts :options="chartOptions" />
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import type {
  AgChartOptions,
  AgDonutSeriesOptions,
} from 'ag-charts-community'
import { AgCharts } from 'ag-charts-vue3'
import { computed } from 'vue'
import { chart } from '@/constants/chartColors'

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

const thisYearDonutSeries: AgDonutSeriesOptions =
  {
    type: 'donut',
    calloutLabelKey: 'category',
    angleKey: 'amount',
    outerRadiusRatio: 1,
    innerRadiusRatio: 0.72,
    title: { text: 'This Year' },
    showInLegend: false,
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
  }

const lastYearDonutSeries: AgDonutSeriesOptions =
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
      chart.withOpacity(
        chart.colors.primary,
        0.85,
      ),
      chart.withOpacity(chart.colors.gray, 0.3),
      chart.withOpacity(chart.colors.gray, 0.6),
      chart.colors.gray,
    ],
    strokes: [
      chart.withOpacity(
        chart.colors.primary,
        0.85,
      ),
      chart.withOpacity(chart.colors.gray, 0.3),
      chart.withOpacity(chart.colors.gray, 0.6),
      chart.colors.gray,
    ],
  }

function buildDonutVariableRadiusChartOptions(): AgChartOptions {
  return {
    theme: chart.theme,
    background: chart.background,
    data: currentYearData,
    legend: { enabled: false },
    series: [
      thisYearDonutSeries,
      lastYearDonutSeries,
    ],
  }
}

const chartOptions = computed<AgChartOptions>(
  () => buildDonutVariableRadiusChartOptions(),
)
</script>
