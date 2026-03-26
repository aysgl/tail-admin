<template>
  <UPageCard
    title="Visitor Trend"
    description="Visitor, new user, and return rate"
    variant="outline">
    <div class="relative h-[400px] w-full">
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg">
        <ChartSkeletonOverlay
          variant="line"
          class="h-full w-full" />
      </div>
      <div
        class="h-full w-full"
        :class="{ 'opacity-0': loading }">
        <AgCharts
          class="h-full w-full"
          :options="chartOptions" />
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

// Çeyreklik veri, kesişen çizgiler
const chartData = [
  {
    period: 'Q1',
    ziyaretci: 180,
    yeni: 220,
    donus: 150,
  },
  {
    period: 'Q2',
    ziyaretci: 280,
    yeni: 195,
    donus: 265,
  },
  {
    period: 'Q3',
    ziyaretci: 240,
    yeni: 310,
    donus: 225,
  },
  {
    period: 'Q4',
    ziyaretci: 320,
    yeni: 265,
    donus: 290,
  },
]

/** AG Charts “Streaming Music Sales” örneğindeki Line (çizgili) pattern */
const stripedLinePatternFill = {
  type: 'pattern' as const,
  path: 'M0,6 Q4,1 8,6 T16,6',
  width: 6,
  height: 6,
  strokeWidth: 3,
  fill: 'none' as const,
  opacity: 0.8,
}

const lineSeries = (
  yKey: string,
  yName: string,
  color: string,
) => ({
  type: 'line' as const,
  xKey: 'period',
  yKey,
  yName,
  stroke: color,
  strokeWidth: 5,
  marker: {
    size: 10,
    fill: color,
    stroke: color,
  },
  interpolation: { type: 'smooth' as const },
})

const areaSeriesWithStripedFill = (
  yKey: string,
  yName: string,
  color: string,
) => ({
  type: 'area' as const,
  xKey: 'period',
  yKey,
  yName,
  stroke: color,
  strokeWidth: 5,
  fill: stripedLinePatternFill,
  marker: {
    size: 10,
    fill: color,
    stroke: color,
  },
  interpolation: { type: 'smooth' as const },
})

function buildChartOptions(): AgChartOptions {
  return {
    theme: chart.theme,
    background: chart.background,
    data: chartData,
    series: [
      areaSeriesWithStripedFill(
        'ziyaretci',
        'Visitor',
        chart.colors.primary,
      ),
      lineSeries(
        'yeni',
        'New User',
        chart.colors.warning,
      ),
      lineSeries(
        'donus',
        'Return Rate',
        chart.colors.success,
      ),
    ],
    axes: {
      y: {
        gridLine: {
          style: [
            {
              stroke: chart.withOpacity(
                chart.colors.primary,
                0.2,
              ),
            },
          ],
        },
      },
    },
    legend: { position: 'top' },
  }
}

const chartOptions = computed<AgChartOptions>(
  () => buildChartOptions(),
)
</script>
