<template>
  <UPageCard variant="outline">
    <template #header>
      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3
            class="text-lg font-semibold text-highlighted">
            Statistics
          </h3>
          <p class="mt-1 text-sm text-muted">
            Target you've set for each month
          </p>
        </div>
        <div
          class="grid shrink-0 grid-cols-[auto_auto] items-center gap-3">
          <UTabs
            v-model="statisticsSelected"
            :items="statisticsOptions"
            :content="false" />
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
              size="lg" />
            <template #content>
              <UCalendar
                v-model="statisticsDateRange"
                range
                :number-of-months="2"
                class="p-2" />
            </template>
          </UPopover>
        </div>
      </div>
    </template>
    <div
      class="relative max-w-full overflow-x-auto">
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg">
        <ChartSkeletonOverlay
          variant="area"
          class="h-[310px] w-full" />
      </div>
      <div
        id="chartThree"
        class="-ml-4 min-w-[1000px] xl:min-w-full pl-2 h-[310px]"
        :class="{ 'opacity-0': loading }">
        <AgCharts :options="chartOptions" />
      </div>
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import { AgCharts } from 'ag-charts-vue3'
import { ref, computed, shallowRef } from 'vue'
import { CalendarDate } from '@internationalized/date'
import { chart } from '@/constants/chartColors'

withDefaults(
  defineProps<{ loading?: boolean }>(),
  { loading: false },
)

const statisticsOptions = [
  { value: 'optionOne', label: 'Monthly' },
  { value: 'optionTwo', label: 'Quarterly' },
  { value: 'optionThree', label: 'Annually' },
]
const statisticsSelected = ref('optionOne')
const now = new Date()
const weekAgo = new Date(
  Date.now() - 7 * 24 * 60 * 60 * 1000,
)
const statisticsDateRange = shallowRef<{
  start: CalendarDate
  end: CalendarDate
}>({
  start: new CalendarDate(
    weekAgo.getFullYear(),
    weekAgo.getMonth() + 1,
    weekAgo.getDate(),
  ),
  end: new CalendarDate(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
  ),
})
const statisticsDateRangeDisplay = computed(
  () => {
    if (!statisticsDateRange.value?.start)
      return ''
    const start = statisticsDateRange.value.start
    const end =
      statisticsDateRange.value.end ?? start
    const fmt = (d: CalendarDate) =>
      new Date(
        d.year,
        d.month - 1,
        d.day,
      ).toLocaleDateString('en-US', {
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
    theme: chart.theme,
    background: chart.background,
    data: chartData,
    series: [
      {
        type: 'area',
        xKey: 'month',
        yKey: 'sales',
        yName: 'Sales',
        fill: chart.colors.primary,
        fillOpacity: 0.55,
        stroke: chart.colors.primary,
        interpolation: { type: 'smooth' },
      },
      {
        type: 'area',
        xKey: 'month',
        yKey: 'revenue',
        yName: 'Revenue',
        fill: chart.colors.primary,
        fillOpacity: 0.55,
        stroke: chart.colors.primary,
        interpolation: { type: 'smooth' },
      },
    ],
    axes: {
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
    },
    legend: { enabled: false },
  }),
)
</script>
