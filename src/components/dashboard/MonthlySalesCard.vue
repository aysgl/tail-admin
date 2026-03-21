<template>
  <UPageCard variant="outline">
    <template #header>
      <DashboardCardHeader
        title="Monthly Sales"
        description="Monthly sales performance"
      >
        <template #actions>
          <UDropdownMenu
            :items="chartMenuItems"
            :content="{ align: 'end' }"
          >
            <UButton
              color="primary"
              variant="ghost"
              square
              icon="i-lucide-more-vertical"
              aria-label="Menu"
            />
          </UDropdownMenu>
        </template>
      </DashboardCardHeader>
    </template>
    <div
      class="relative min-h-[280px] max-w-full overflow-x-auto"
    >
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg"
      >
        <ChartSkeletonOverlay
          variant="bar"
          class="h-[280px] w-full"
        />
      </div>
      <div
        id="chartOne"
        class="-ml-5 min-w-[650px] xl:min-w-full pl-2"
        :class="{ 'opacity-0': loading }"
      >
        <AgCharts :options="chartOptions" />
      </div>
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import type { DropdownMenuItem } from '@nuxt/ui'
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

const chartMenuItems: DropdownMenuItem[][] = [
  [
    {
      label: 'View More',
      icon: 'i-lucide-eye',
      onSelect: () =>
        console.log('View More clicked'),
    },
    {
      label: 'Delete',
      icon: 'i-lucide-trash-2',
      onSelect: () =>
        console.log('Delete clicked'),
    },
  ],
]

const chartData = [
  { month: 'Jan', sales: 168, target: 200 },
  { month: 'Feb', sales: 385, target: 350 },
  { month: 'Mar', sales: 201, target: 220 },
  { month: 'Apr', sales: 298, target: 280 },
  { month: 'May', sales: 187, target: 200 },
  { month: 'Jun', sales: 195, target: 210 },
  { month: 'Jul', sales: 291, target: 280 },
  { month: 'Aug', sales: 110, target: 150 },
  { month: 'Sep', sales: 215, target: 230 },
  { month: 'Oct', sales: 390, target: 350 },
  { month: 'Nov', sales: 280, target: 290 },
  { month: 'Dec', sales: 112, target: 180 },
]
const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chartTheme.value,
    background: { fill: chartBackground },
    data: chartData,
    series: [
      {
        type: 'bar',
        xKey: 'month',
        yKey: 'sales',
        yName: 'Sales',
        fill: chartColors.value.getValues(
          'primary',
          0.5,
        ),
        stroke: chartColors.value.primary,
        strokeWidth: 2,
        cornerRadius: 50,
      },
      {
        type: 'bar',
        xKey: 'month',
        yKey: 'target',
        yName: 'Target',
        fill: chartColors.value.getValues(
          'warning',
          0.5,
        ),
        stroke: chartColors.value.warning,
        strokeWidth: 2,
        cornerRadius: 50,
      },
    ],
    legend: {
      position: 'top',
      item: { marker: { shape: 'circle' } },
    },
  }),
)
</script>
