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
import { useChartTheme } from '@/composables/useChartTheme'

const {
  chartTheme,
  chartColors,
  chartBackground,
} = useChartTheme()

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

const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chartTheme.value,
    background: { fill: chartBackground },
    data: chartData,
    series: [
      {
        type: 'line',
        xKey: 'period',
        yKey: 'ziyaretci',
        yName: 'Visitor',
        stroke: chartColors.value.primary,
        strokeWidth: 5,
        marker: {
          size: 10,
          fill: chartColors.value.primary,
          stroke: chartColors.value.primary,
        },
        interpolation: { type: 'smooth' },
      },
      {
        type: 'line',
        xKey: 'period',
        yKey: 'yeni',
        yName: 'New User',
        stroke: chartColors.value.warning,
        strokeWidth: 5,
        marker: {
          size: 10,
          fill: chartColors.value.warning,
          stroke: chartColors.value.warning,
        },
        interpolation: { type: 'smooth' },
      },
      {
        type: 'line',
        xKey: 'period',
        yKey: 'donus',
        yName: 'Return Rate',
        stroke: chartColors.value.success,
        strokeWidth: 5,
        marker: {
          size: 10,
          fill: chartColors.value.success,
          stroke: chartColors.value.success,
        },
        interpolation: { type: 'smooth' },
      },
    ],
    legend: { position: 'top' },
  }),
)
</script>
