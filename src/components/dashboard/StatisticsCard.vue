<template>
  <UPageCard variant="outline">
    <template #header>
      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h3
            class="text-lg font-semibold text-highlighted"
          >
            Statistics
          </h3>
          <p class="mt-1 text-sm text-muted">
            Target you've set for each month
          </p>
        </div>
        <div
          class="grid shrink-0 grid-cols-[auto_auto] items-center gap-3"
        >
          <UTabs
            v-model="statisticsSelected"
            :items="statisticsOptions"
            :content="false"
          />
          <UPopover>
            <UButton
              color="primary"
              variant="outline"
              :label="
                statisticsDateRangeDisplay ||
                'Select Date'
              "
              icon="i-lucide-calendar"
              class="min-w-40"
              size="lg"
            />
            <template #content>
              <VDatePicker
                v-model.range="
                  statisticsDateRange
                "
                mode="date"
                :masks="{ modelValue: 'MMM d' }"
                :is-dark="{
                  selector: 'html',
                  darkClass: 'dark',
                }"
              />
            </template>
          </UPopover>
        </div>
      </div>
    </template>
    <div
      class="relative max-w-full overflow-x-auto"
    >
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg"
      >
        <ChartSkeletonOverlay
          variant="area"
          class="h-[310px] w-full"
        />
      </div>
      <div
        id="chartThree"
        class="-ml-4 min-w-[1000px] xl:min-w-full pl-2 h-[310px]"
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
import { ref, computed } from 'vue'
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

const statisticsOptions = [
  { value: 'optionOne', label: 'Monthly' },
  { value: 'optionTwo', label: 'Quarterly' },
  { value: 'optionThree', label: 'Annually' },
]
const statisticsSelected = ref('optionOne')
const statisticsDateRange = ref({
  start: new Date(
    Date.now() - 7 * 24 * 60 * 60 * 1000,
  ),
  end: new Date(),
})
const statisticsDateRangeDisplay = computed(
  () => {
    if (!statisticsDateRange.value?.start)
      return ''
    const start = statisticsDateRange.value.start
    const end =
      statisticsDateRange.value.end ?? start
    const fmt = (d: Date) =>
      d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
    return `${fmt(start)} - ${fmt(end)}`
  },
)

const chartData = [
  { month: 'Jan', sales: 180, revenue: 40 },
  { month: 'Feb', sales: 190, revenue: 30 },
  { month: 'Mar', sales: 170, revenue: 50 },
  { month: 'Apr', sales: 160, revenue: 40 },
  { month: 'May', sales: 175, revenue: 55 },
  { month: 'Jun', sales: 165, revenue: 40 },
  { month: 'Jul', sales: 170, revenue: 70 },
  { month: 'Aug', sales: 205, revenue: 100 },
  { month: 'Sep', sales: 230, revenue: 110 },
  { month: 'Oct', sales: 210, revenue: 120 },
  { month: 'Nov', sales: 240, revenue: 150 },
  { month: 'Dec', sales: 235, revenue: 140 },
]
const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chartTheme.value,
    background: { fill: chartBackground },
    data: chartData,
    series: [
      {
        type: 'area',
        xKey: 'month',
        yKey: 'sales',
        yName: 'Sales',
        fill: chartColors.value.primary,
        fillOpacity: 0.55,
        stroke: chartColors.value.primary,
        interpolation: { type: 'smooth' },
      },
      {
        type: 'area',
        xKey: 'month',
        yKey: 'revenue',
        yName: 'Revenue',
        fill: chartColors.value.primary,
        fillOpacity: 0.55,
        stroke: chartColors.value.primary,
        interpolation: { type: 'smooth' },
      },
    ],
    legend: { enabled: false },
  }),
)
</script>
