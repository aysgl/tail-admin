<template>
  <UPageCard
    title="Completion Rate"
    description="Report completion rate (Radial Gauge)"
    variant="outline"
  >
    <div class="h-[330px]">
      <AgGauge :options="gaugeOptions" />
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import type { AgGaugeOptions } from 'ag-charts-community'
import { AgGauge } from 'ag-charts-vue3'
import { computed } from 'vue'
import { useChartTheme } from '@/composables/useChartTheme'

const {
  chartTheme,
  chartColors,
  chartBackground,
} = useChartTheme()

const gaugeOptions = computed<AgGaugeOptions>(
  () => ({
    type: 'radial-gauge',
    theme: chartTheme.value,
    background: { fill: chartBackground },
    value: 78,
    scale: {
      min: 0,
      max: 100,
      fill: chartColors.value.gray200,
      label: {
        enabled: false,
      },
    },
    bar: {
      fill: chartColors.value.primary,
    },
    label: {
      formatter: ({ value }: { value: number }) =>
        `${value}%`,
    },
    secondaryLabel: {
      text: 'Tamamlanan',
    },
  }),
)
</script>
