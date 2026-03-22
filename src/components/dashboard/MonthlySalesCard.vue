<template>
  <UPageCard
    variant="outline"
    :class="[props.class, 'flex flex-col']">
    <template #header>
      <DashboardCardHeader
        title="Monthly Sales"
        description="Monthly sales performance">
        <template #actions>
          <UDropdownMenu
            :items="CHART_CARD_MENU_ITEMS"
            :content="{ align: 'end' }">
            <UButton
              color="primary"
              variant="ghost"
              square
              icon="i-lucide-more-vertical"
              aria-label="Menu" />
          </UDropdownMenu>
        </template>
      </DashboardCardHeader>
    </template>
    <div
      class="relative min-h-[280px] flex-1 max-w-full overflow-x-auto">
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg">
        <ChartSkeletonOverlay
          variant="bar"
          class="h-[280px] w-full" />
      </div>
      <div
        id="chartOne"
        class="-ml-5 min-w-[650px] xl:min-w-full pl-2"
        :class="{ 'opacity-0': loading }">
        <AgCharts :options="chartOptions" />
      </div>
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import { AgCharts } from 'ag-charts-vue3'
import { computed } from 'vue'
import { CHART_CARD_MENU_ITEMS } from '@/constants/dashboardCardMenu'
import { chart } from '@/constants/chartColors'

const props = withDefaults(
  defineProps<{
    class?: string
    loading?: boolean
  }>(),
  { class: undefined, loading: false },
)

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

const monthlySalesSeries = [
  {
    type: 'bar' as const,
    xKey: 'month',
    yKey: 'sales',
    yName: 'Sales',
    fill: chart.withOpacity(
      chart.colors.primary,
      0.5,
    ),
    stroke: chart.colors.primary,
    strokeWidth: 2,
    cornerRadius: 50,
  },
  {
    type: 'bar' as const,
    xKey: 'month',
    yKey: 'target',
    yName: 'Target',
    fill: chart.withOpacity(
      chart.colors.warning,
      0.5,
    ),
    stroke: chart.colors.warning,
    strokeWidth: 2,
    cornerRadius: 50,
  },
]

const monthlySalesAxes = {
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
}

const monthlySalesLegend = {
  position: 'top' as const,
  item: { marker: { shape: 'circle' as const } },
}

function buildMonthlySalesChartOptions(): AgChartOptions {
  return {
    theme: chart.theme,
    background: chart.background,
    data: chartData,
    series: monthlySalesSeries,
    axes: monthlySalesAxes,
    legend: monthlySalesLegend,
  }
}

const chartOptions = computed<AgChartOptions>(
  () => buildMonthlySalesChartOptions(),
)
</script>
