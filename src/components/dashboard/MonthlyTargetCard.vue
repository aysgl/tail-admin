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
      You earn $3287 today, it's higher than last
      month. Keep up your good work!
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
          $20K
          <UIcon
            name="i-lucide-trending-down"
            class="size-4 text-error-500" />
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
          $20K
          <UIcon
            name="i-lucide-trending-up"
            class="size-4 text-success-500" />
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
          $20K
          <UIcon
            name="i-lucide-trending-up"
            class="size-4 text-success-500" />
        </p>
      </div>
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import { AgCharts } from 'ag-charts-vue3'
import { computed } from 'vue'
import { CHART_CARD_MENU_ITEMS } from '@/constants/dashboardCardMenu'
import { useChartTheme } from '@/composables/useChartTheme'

const {
  chartTheme,
  isDark,
  chartColors,
  chartBackground,
} = useChartTheme()

const props = withDefaults(
  defineProps<{
    class?: string
    loading?: boolean
  }>(),
  { loading: false },
)

const monthlyTargetValue = 75
const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chartTheme.value,
    background: { fill: chartBackground },
    data: [
      {
        label: 'Progress',
        value: monthlyTargetValue,
      },
      {
        label: 'Remaining',
        value: 100 - monthlyTargetValue,
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
          chartColors.value.getValues(
            'primary',
            0.5,
          ),
          chartColors.value.getValues(
            'success',
            0.5,
          ),
        ],
        strokes: [
          chartColors.value.primary,
          chartColors.value.success,
        ],
        strokeWidth: 2,
        sectorSpacing: 2,
        cornerRadius: 50,
        innerLabels: [
          {
            text: `${monthlyTargetValue}%`,
            fontSize: 36,
            fontWeight: 600,
            color: isDark.value
              ? chartColors.value.gray200
              : chartColors.value.gray800,
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
