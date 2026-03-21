<template>
  <UPageCard
    title="Sales Target"
    description="Sales distribution vs. target ratio (Variable Radius)"
    variant="outline"
  >
    <div class="relative h-[340px]">
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg"
      >
        <ChartSkeletonOverlay
          variant="donut"
          class="h-full w-full"
        />
      </div>
      <div
        class="h-full"
        :class="{ 'opacity-0': loading }"
      >
        <AgCharts :options="chartOptions" />
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
  isDark,
  chartColors,
  chartBackground,
} = useChartTheme()

withDefaults(
  defineProps<{
    loading?: boolean
  }>(),
  { loading: false },
)

const categories = [
  {
    category: 'Q1',
    value: 28500,
    targetRatio: 0.92,
  },
  {
    category: 'Q2',
    value: 32000,
    targetRatio: 0.95,
  },
  {
    category: 'Q3',
    value: 26800,
    targetRatio: 0.88,
  },
  {
    category: 'Q4',
    value: 41500,
    targetRatio: 1.04,
  },
]

const totalValue = categories.reduce(
  (sum, item) => sum + item.value,
  0,
)
const formattedTotal = new Intl.NumberFormat(
  'en-US',
  {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    notation: 'compact',
  },
).format(totalValue)

const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chartTheme.value,
    background: { fill: chartBackground },
    data: categories,
    series: [
      {
        type: 'donut',
        calloutLabelKey: 'category',
        angleKey: 'value',
        radiusKey: 'targetRatio',
        innerRadiusRatio: 0.35,
        innerLabels: [
          {
            text: 'Total Sales',
            spacing: 4,
            fontWeight: 'bold',
          },
          {
            text: formattedTotal,
            spacing: 4,
            fontSize: 24,
            color: isDark.value
              ? chartColors.value.gray200
              : chartColors.value.gray800,
          },
        ],
        cornerRadius: 5,
        strokeWidth: 2,
        fills: [
          chartColors.value.getValues(
            'success',
            0.5,
          ),
          chartColors.value.getValues(
            'primary',
            0.5,
          ),
          chartColors.value.getValues(
            'warning',
            0.5,
          ),
          chartColors.value.getValues(
            'error',
            0.5,
          ),
        ],
        strokes: [
          chartColors.value.success,
          chartColors.value.primary,
          chartColors.value.warning,
          chartColors.value.error,
        ],
        highlight: {
          highlightedItem: {
            strokeWidth: 4,
          },
        },
      },
    ],
    legend: { enabled: false },
  }),
)
</script>
