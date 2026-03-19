<template>
  <div
    class="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6"
  >
    <div
      class="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between"
    >
      <div class="w-full">
        <h3
          class="text-lg font-semibold text-gray-800 dark:text-white/90"
        >
          Statistics
        </h3>
        <p
          class="mt-1 text-gray-600 text-theme-sm dark:text-gray-400"
        >
          Target you’ve set for each month
        </p>
      </div>

      <div class="flex items-center gap-3">
        <div class="relative">
          <div
            class="inline-flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900"
          >
            <button
              v-for="option in options"
              :key="option.value"
              @click="selected = option.value"
              :class="[
                selected === option.value
                  ? 'shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800'
                  : 'text-gray-600 dark:text-gray-400',
                'px-3 py-2 font-medium rounded-md text-theme-sm hover:text-gray-900 hover:shadow-theme-xs dark:hover:bg-gray-800 dark:hover:text-white',
              ]"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div class="relative">
          <div
            role="button"
            tabindex="0"
            @click="
              showDatePicker = !showDatePicker
            "
            @keydown.enter="
              showDatePicker = !showDatePicker
            "
            @keydown.space.prevent="
              showDatePicker = !showDatePicker
            "
            class="flex cursor-pointer items-center gap-2 pl-3 sm:pl-9 dark:bg-dark-900 h-10 w-10 sm:w-40 rounded-lg border border-gray-200 bg-white text-transparent sm:text-theme-sm sm:text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:text-transparent sm:dark:text-gray-400 dark:focus:border-brand-800"
          >
            <span class="hidden sm:inline">
              {{
                dateRangeDisplay || 'Select Date'
              }}
            </span>
          </div>
          <span
            class="absolute text-gray-600 -translate-y-1/2 pointer-events-none left-1/2 -translate-x-1/2 sm:left-3 sm:translate-x-0 top-1/2 dark:text-gray-400"
          >
            <svg
              class="fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.66659 1.5415C7.0808 1.5415 7.41658 1.87729 7.41658 2.2915V2.99984H12.5833V2.2915C12.5833 1.87729 12.919 1.5415 13.3333 1.5415C13.7475 1.5415 14.0833 1.87729 14.0833 2.2915V2.99984L15.4166 2.99984C16.5212 2.99984 17.4166 3.89527 17.4166 4.99984V7.49984V15.8332C17.4166 16.9377 16.5212 17.8332 15.4166 17.8332H4.58325C3.47868 17.8332 2.58325 16.9377 2.58325 15.8332V7.49984V4.99984C2.58325 3.89527 3.47868 2.99984 4.58325 2.99984L5.91659 2.99984V2.2915C5.91659 1.87729 6.25237 1.5415 6.66659 1.5415ZM6.66659 4.49984H4.58325C4.30711 4.49984 4.08325 4.7237 4.08325 4.99984V6.74984H15.9166V4.99984C15.9166 4.7237 15.6927 4.49984 15.4166 4.49984H13.3333H6.66659ZM15.9166 8.24984H4.08325V15.8332C4.08325 16.1093 4.30711 16.3332 4.58325 16.3332H15.4166C15.6927 16.3332 15.9166 16.1093 15.9166 15.8332V8.24984Z"
                fill=""
              />
            </svg>
          </span>
          <Teleport to="body">
            <div
              v-if="showDatePicker"
              class="fixed inset-0 z-40"
            >
              <button
                type="button"
                class="absolute inset-0 w-full h-full cursor-default"
                aria-label="Close date picker"
                @click="showDatePicker = false"
              />
              <div
                class="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-gray-200 bg-white p-4 shadow-theme-xl dark:border-gray-800 dark:bg-gray-900"
                @click.stop
              >
                <VDatePicker
                  v-model.range="dateRange"
                  mode="date"
                  :masks="{ modelValue: 'MMM d' }"
                />
              </div>
            </div>
          </Teleport>
        </div>
      </div>
    </div>
    <div
      class="max-w-full overflow-x-auto custom-scrollbar"
    >
      <div
        id="chartThree"
        class="-ml-4 min-w-[1000px] xl:min-w-full pl-2 h-[310px]"
      >
        <ag-charts :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import { ref, computed } from 'vue'

const options = [
  { value: 'optionOne', label: 'Monthly' },
  { value: 'optionTwo', label: 'Quarterly' },
  { value: 'optionThree', label: 'Annually' },
]

const selected = ref('optionOne')
const showDatePicker = ref(false)
const dateRange = ref({
  start: new Date(
    Date.now() - 7 * 24 * 60 * 60 * 1000,
  ),
  end: new Date(),
})

const dateRangeDisplay = computed(() => {
  if (!dateRange.value?.start) return ''
  const start = dateRange.value.start
  const end = dateRange.value.end ?? start
  const fmt = (d: Date) =>
    d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  return `${fmt(start)} - ${fmt(end)}`
})
import { AgCharts } from 'ag-charts-vue3'

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

const chartOptions = ref<AgChartOptions>({
  data: chartData,
  series: [
    {
      type: 'area',
      xKey: 'month',
      yKey: 'sales',
      yName: 'Sales',
      fill: '#465FFF',
      fillOpacity: 0.55,
      stroke: '#465FFF',
    },
    {
      type: 'area',
      xKey: 'month',
      yKey: 'revenue',
      yName: 'Revenue',
      fill: '#9CB9FF',
      fillOpacity: 0.55,
      stroke: '#9CB9FF',
    },
  ],
  legend: {
    enabled: false,
  },
})
</script>

<style scoped>
.area-chart {
  width: 100%;
}
</style>
