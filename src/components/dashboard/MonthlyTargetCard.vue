<template>
  <div
    class="rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/0.03"
  >
    <UPageCard
      variant="outline"
      :ui="{
        root: 'rounded-lg border-0 shadow-xs !bg-white dark:!bg-gray-900',
        container: 'p-5 sm:p-6 pb-11',
      }"
    >
      <template #header>
        <div
          class="flex items-center justify-between mb-0!"
        >
          <div>
            <h3
              class="text-lg font-semibold text-default"
            >
              Monthly Target
            </h3>
            <p
              class="mt-1 text-theme-sm text-muted"
            >
              Target you've set for each month
            </p>
          </div>
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
        </div>
      </template>

      <div class="relative mt-4">
        <div
          id="chartTwo"
          class="h-[330px]"
        >
          <div class="radial-bar-chart h-[330px]">
            <AgCharts :options="chartOptions" />
          </div>
        </div>
        <span
          class="absolute left-1/2 top-[85%] -translate-x-1/2 -translate-y-[85%] rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500"
        >
          +10%
        </span>
      </div>
      <p
        class="mx-auto mt-1.5 w-full max-w-[380px] text-center text-sm text-muted sm:text-base"
      >
        You earn $3287 today, it's higher than
        last month. Keep up your good work!
      </p>
    </UPageCard>

    <div
      class="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5"
    >
      <div>
        <p
          class="mb-1 text-center text-theme-xs text-muted sm:text-sm"
        >
          Target
        </p>
        <p
          class="flex items-center justify-center gap-1 text-base font-semibold text-default sm:text-lg"
        >
          $20K
          <UIcon
            name="i-lucide-trending-down"
            class="size-4 text-error-500"
          />
        </p>
      </div>
      <div
        class="h-7 w-px bg-gray-200 dark:bg-gray-800"
      />
      <div>
        <p
          class="mb-1 text-center text-theme-xs text-muted sm:text-sm"
        >
          Revenue
        </p>
        <p
          class="flex items-center justify-center gap-1 text-base font-semibold text-default sm:text-lg"
        >
          $20K
          <UIcon
            name="i-lucide-trending-up"
            class="size-4 text-success-500"
          />
        </p>
      </div>
      <div
        class="h-7 w-px bg-gray-200 dark:bg-gray-800"
      />
      <div>
        <p
          class="mb-1 text-center text-theme-xs text-muted sm:text-sm"
        >
          Today
        </p>
        <p
          class="flex items-center justify-center gap-1 text-base font-semibold text-default sm:text-lg"
        >
          $20K
          <UIcon
            name="i-lucide-trending-up"
            class="size-4 text-success-500"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import type { DropdownMenuItem } from '@nuxt/ui'
import { AgCharts } from 'ag-charts-vue3'
import { computed } from 'vue'
import { useChartTheme } from '@/composables/useChartTheme'

const { chartTheme, isDark } = useChartTheme()

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

const monthlyTargetValue = 75.55
const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chartTheme.value,
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
        fills: ['#465FFF', '#E4E7EC'],
        strokes: ['#465FFF', '#E4E7EC'],
        innerLabels: [
          {
            text: `${monthlyTargetValue.toFixed(2)}%`,
            fontSize: 36,
            fontWeight: 600,
            color: isDark.value
              ? '#E4E7EC'
              : '#1D2939',
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
