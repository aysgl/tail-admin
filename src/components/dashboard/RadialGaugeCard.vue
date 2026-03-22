<template>
  <UPageCard
    title="Completion Rate"
    description="Report completion rate (Radial Gauge)"
    variant="outline">
    <div class="h-[330px]">
      <AgGauge :options="gaugeOptions" />
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import type { AgGaugeOptions } from 'ag-charts-community'
import { AgGauge } from 'ag-charts-vue3'
import { computed } from 'vue'
import { chart } from '@/constants/chartColors'

const gaugeOptions = computed<AgGaugeOptions>(
  () => ({
    type: 'radial-gauge',
    theme: chart.theme,
    background: chart.background,
    value: 78,
    scale: {
      min: 0,
      max: 100,
      fill: chart.withOpacity(
        chart.colors.gray,
        0.2,
      ),
      label: {
        enabled: false,
      },
    },
    bar: {
      fill: chart.colors.primary,
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
