<template>
  <div
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6"
  >
    <UPageCard
      v-for="metric in metrics"
      :key="metric.label"
      variant="outline"
      class="h-full"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15"
      >
        <UIcon
          :name="metric.icon"
          class="size-6 text-primary"
        />
      </div>
      <div class="mt-4">
        <span class="text-sm text-muted">{{
          metric.label
        }}</span>
        <h4
          class="mt-1 font-bold text-2xl text-highlighted"
        >
          {{ metric.value }}
        </h4>
        <div
          class="mt-3 h-[64px] w-full overflow-hidden rounded-md"
        >
          <AgCharts
            :options="metric.chartOptions.value"
          />
        </div>
      </div>
    </UPageCard>
  </div>
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

const sparklineData = (vals: number[]) =>
  vals.map((v, i) => ({ i, v }))

type ChartColorKey =
  | 'primary'
  | 'primaryLight'
  | 'gray300'
  | 'gray500'

function createSparklineOptions(
  data: { i: number; v: number }[],
  colorKey: ChartColorKey,
) {
  return computed<AgChartOptions>(() => {
    const c = chartColors.value[colorKey]
    return {
      theme: chartTheme.value,
      background: { fill: chartBackground },
      data,
      series: [
        {
          type: 'area',
          xKey: 'i',
          yKey: 'v',
          fill: c,
          fillOpacity: 0.5,
          stroke: c,
          strokeWidth: 2,
          marker: { enabled: false },
        },
      ],
      legend: { enabled: false },
      padding: {
        top: 4,
        right: 4,
        bottom: 4,
        left: 4,
      },
    }
  })
}

const metrics = [
  {
    label: 'Visitor',
    value: '12,458',
    icon: 'i-lucide-users',
    color: 'primary' as const,
    chartOptions: createSparklineOptions(
      sparklineData([
        220, 280, 190, 310, 260, 340, 290,
      ]),
      'primary',
    ),
  },
  {
    label: 'Page Views',
    value: '48,392',
    icon: 'i-lucide-eye',
    color: 'primary' as const,
    chartOptions: createSparklineOptions(
      sparklineData([
        1200, 1350, 1180, 1420, 1280, 1550, 1480,
      ]),
      'primaryLight',
    ),
  },
  {
    label: 'Avg Duration (min)',
    value: '4.2',
    icon: 'i-lucide-clock',
    color: 'primary' as const,
    chartOptions: createSparklineOptions(
      sparklineData([
        3.2, 3.8, 4.1, 3.9, 4.5, 4.2, 4.8,
      ]),
      'gray300',
    ),
  },
  {
    label: 'Bounce Rate',
    value: '28%',
    icon: 'i-lucide-trending-down',
    color: 'neutral' as const,
    chartOptions: createSparklineOptions(
      sparklineData([32, 30, 29, 28, 27, 28, 26]),
      'gray500',
    ),
  },
]
</script>
