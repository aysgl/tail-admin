<template>
  <UPageCard
    variant="outline"
    :ui="pageCardUi"
  >
    <template #header>
      <div class="flex justify-between">
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
            color="neutral"
            variant="ghost"
            square
            icon="i-lucide-more-vertical"
            aria-label="Menu"
          />
        </UDropdownMenu>
      </div>
    </template>
    <div class="px-5 pb-11 sm:px-6 sm:pb-6">
      <div class="relative max-h-[195px]">
        <div
          id="chartTwo"
          class="h-full"
        >
          <div class="radial-bar-chart h-[330px]">
            <AgCharts :options="chartOptions" />
          </div>
        </div>
        <span
          class="absolute left-1/2 top-[85%] -translate-x-1/2 -translate-y-[85%] rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500"
          >+10%</span
        >
      </div>
      <p
        class="mx-auto mt-1.5 w-full max-w-[380px] text-center text-sm text-muted sm:text-base"
      >
        You earn $3287 today, it's higher than
        last month. Keep up your good work!
      </p>
    </div>
    <template #footer>
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.26816 13.6632C7.4056 13.8192 7.60686 13.9176 7.8311 13.9176C7.83148 13.9176 7.83187 13.9176 7.83226 13.9176C8.02445 13.9178 8.21671 13.8447 8.36339 13.6981L12.3635 9.70076C12.6565 9.40797 12.6567 8.9331 12.3639 8.6401C12.0711 8.34711 11.5962 8.34694 11.3032 8.63973L8.5811 11.36L8.5811 2.5C8.5811 2.08579 8.24531 1.75 7.8311 1.75C7.41688 1.75 7.0811 2.08579 7.0811 2.5L7.0811 11.3556L4.36354 8.63975C4.07055 8.34695 3.59568 8.3471 3.30288 8.64009C3.01008 8.93307 3.01023 9.40794 3.30321 9.70075L7.26816 13.6632Z"
                fill="#D92D20"
              />
            </svg>
          </p>
        </div>
        <div class="h-7 w-px bg-muted" />
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.60141 2.33683C7.73885 2.18084 7.9401 2.08243 8.16435 2.08243C8.16475 2.08243 8.16516 2.08243 8.16556 2.08243C8.35773 2.08219 8.54998 2.15535 8.69664 2.30191L12.6968 6.29924C12.9898 6.59203 12.9899 7.0669 12.6971 7.3599C12.4044 7.6529 11.9295 7.65306 11.6365 7.36027L8.91435 4.64004L8.91435 13.5C8.91435 13.9142 8.57856 14.25 8.16435 14.25C7.75013 14.25 7.41435 13.9142 7.41435 13.5L7.41435 4.64442L4.69679 7.36025C4.4038 7.65305 3.92893 7.6529 3.63613 7.35992C3.34333 7.06693 3.34348 6.59206 3.63646 6.29926L7.60141 2.33683Z"
                fill="#039855"
              />
            </svg>
          </p>
        </div>
        <div class="h-7 w-px bg-muted" />
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.60141 2.33683C7.73885 2.18084 7.9401 2.08243 8.16435 2.08243C8.16475 2.08243 8.16516 2.08243 8.16556 2.08243C8.35773 2.08219 8.54998 2.15535 8.69664 2.30191L12.6968 6.29924C12.9898 6.59203 12.9899 7.0669 12.6971 7.3599C12.4044 7.6529 11.9295 7.65306 11.6365 7.36027L8.91435 4.64004L8.91435 13.5C8.91435 13.9142 8.57856 14.25 8.16435 14.25C7.75013 14.25 7.41435 13.9142 7.41435 13.5L7.41435 4.64442L4.69679 7.36025C4.4038 7.65305 3.92893 7.6529 3.63613 7.35992C3.34333 7.06693 3.34348 6.59206 3.63646 6.29926L7.60141 2.33683Z"
                fill="#039855"
              />
            </svg>
          </p>
        </div>
      </div>
    </template>
  </UPageCard>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import type { DropdownMenuItem } from '@nuxt/ui'
import { AgCharts } from 'ag-charts-vue3'
import { computed } from 'vue'
import { useChartTheme } from '@/composables/useChartTheme'
import { pageCardUi } from '@/config/cardUi'

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
