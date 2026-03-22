<template>
  <UPageCard
    variant="outline"
    :class="[props.class, 'flex flex-col']">
    <template #header>
      <DashboardCardHeader
        title="Monthly Target"
        description="Target you've set for each month">
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

    <div class="relative mt-4">
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg">
        <ChartSkeletonOverlay
          variant="donut"
          class="h-[330px] w-full" />
      </div>
      <div
        id="chartTwo"
        class="h-[330px]"
        :class="{ 'opacity-0': loading }">
        <div class="radial-bar-chart h-[330px]">
          <AgCharts :options="chartOptions" />
        </div>
      </div>
    </div>
    <p
      class="mx-auto mt-1.5 w-full max-w-[380px] text-center text-sm text-muted sm:text-base">
      {{ description }}
    </p>

    <div
      class="flex items-center justify-center gap-5 border-t border-muted px-6 py-3.5 sm:gap-8 sm:py-5 mt-4 pt-5">
      <div>
        <p
          class="mb-1 text-center text-xs text-muted sm:text-sm">
          Target
        </p>
        <p
          class="flex items-center justify-center gap-1 text-base font-semibold text-highlighted sm:text-lg">
          {{ formatAmount(target) }}
          <UIcon
            :name="targetTrendIcon"
            :class="targetTrendIconClass" />
        </p>
      </div>
      <div class="h-7 w-px bg-muted" />
      <div>
        <p
          class="mb-1 text-center text-xs text-muted sm:text-sm">
          Revenue
        </p>
        <p
          class="flex items-center justify-center gap-1 text-base font-semibold text-highlighted sm:text-lg">
          {{ formatAmount(revenue) }}
          <UIcon
            :name="revenueTrendIcon"
            :class="revenueTrendIconClass" />
        </p>
      </div>
      <div class="h-7 w-px bg-muted" />
      <div>
        <p
          class="mb-1 text-center text-xs text-muted sm:text-sm">
          Today
        </p>
        <p
          class="flex items-center justify-center gap-1 text-base font-semibold text-highlighted sm:text-lg">
          {{ formatAmount(today) }}
          <UIcon
            :name="todayTrendIcon"
            :class="todayTrendIconClass" />
        </p>
      </div>
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import { AgCharts } from 'ag-charts-vue3'
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'
import { CHART_CARD_MENU_ITEMS } from '@/constants/dashboardCardMenu'
import { chart } from '@/constants/chartColors'

const colorMode = useColorMode()

function formatAmount(value: number): string {
  if (value >= 10_000) {
    const k = Math.round(value / 1000)
    return `$${k}K`
  }
  return `$${value.toLocaleString()}`
}

const props = withDefaults(
  defineProps<{
    class?: string
    loading?: boolean
    target?: number
    revenue?: number
    today?: number
    description?: string
    targetTrend?: 'up' | 'down' | 'neutral'
    revenueTrend?: 'up' | 'down' | 'neutral'
    todayTrend?: 'up' | 'down' | 'neutral'
  }>(),
  {
    loading: false,
    target: 20_000,
    revenue: 15_000,
    today: 3_287,
    description:
      "You earn $3,287 today, it's higher than last month. Keep up your good work!",
    targetTrend: 'neutral',
    revenueTrend: 'up',
    todayTrend: 'up',
  },
)

const progressPercent = computed(() =>
  props.target > 0
    ? Math.min(
        100,
        Math.round(
          (props.revenue / props.target) * 100,
        ),
      )
    : 0,
)

const trendConfig = {
  up: {
    icon: 'i-lucide-trending-up',
    class: 'size-4 text-success-500',
  },
  down: {
    icon: 'i-lucide-trending-down',
    class: 'size-4 text-error-500',
  },
  neutral: {
    icon: 'i-lucide-target',
    class: 'size-4 text-muted',
  },
} as const

const targetTrendIcon = computed(
  () => trendConfig[props.targetTrend].icon,
)
const targetTrendIconClass = computed(
  () => trendConfig[props.targetTrend].class,
)
const revenueTrendIcon = computed(
  () => trendConfig[props.revenueTrend].icon,
)
const revenueTrendIconClass = computed(
  () => trendConfig[props.revenueTrend].class,
)
const todayTrendIcon = computed(
  () => trendConfig[props.todayTrend].icon,
)
const todayTrendIconClass = computed(
  () => trendConfig[props.todayTrend].class,
)

const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chart.theme,
    background: chart.background,
    data: [
      {
        label: 'Progress',
        value: progressPercent.value,
      },
      {
        label: 'Remaining',
        value: 100 - progressPercent.value,
      },
    ],
    series: [
      {
        type: 'donut',
        angleKey: 'value',
        calloutLabelKey: 'label',
        innerRadiusRatio: 0.8,
        showInLegend: false,
        fills: [
          chart.withOpacity(
            chart.colors.primary,
            0.5,
          ),
          chart.withOpacity(
            chart.colors.success,
            0.5,
          ),
        ],
        strokes: [
          chart.colors.primary,
          chart.colors.success,
        ],
        strokeWidth: 2,
        sectorSpacing: 2,
        cornerRadius: 50,
        innerLabels: [
          {
            text: `${progressPercent.value}%`,
            fontSize: 36,
            fontWeight: 600,
            color:
              colorMode.value === 'dark'
                ? chart.withOpacity(
                    chart.colors.neutral,
                    0.9,
                  )
                : chart.colors.gray,
          },
        ],
      },
    ],
  }),
)
</script>

<style scoped>
.radial-bar-chart {
  width: 100%;
  max-width: 330px;
  margin: 0 auto;
}
</style>
