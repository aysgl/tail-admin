<template>
  <UPageCard variant="outline">
    <template #header>
      <DashboardCardHeader
        title="Customers Demographic"
        description="Number of customer based on country">
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
    <UCard variant="outline">
      <div class="relative -mx-4 -my-6">
        <div
          v-if="loading"
          class="loading-overlay absolute inset-0 z-20 flex items-center justify-center overflow-hidden rounded-lg bg/95">
          <ChartSkeletonOverlay
            variant="line"
            class="h-[212px] w-full max-w-[358px]" />
        </div>
        <div
          class="h-[212px] w-full min-w-[252px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
          :class="{ 'opacity-0': loading }">
          <AgCharts :options="chartOptions" />
        </div>
      </div>
    </UCard>
    <div class="space-y-5">
      <template v-if="loading">
        <div
          v-for="i in 2"
          :key="`sk-${i}`"
          class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="size-8 animate-pulse rounded-full bg-accented" />
            <div class="flex flex-col gap-2">
              <div
                class="h-4 w-16 animate-pulse rounded bg-accented" />
              <div
                class="h-3 w-20 animate-pulse rounded bg-accented" />
            </div>
          </div>
          <div
            class="h-2 w-24 animate-pulse rounded-full bg-accented" />
        </div>
      </template>
      <div
        v-else
        v-for="country in countries"
        :key="country.name"
        class="flex items-center justify-between">
        <UUser
          :name="country.name"
          :description="`${country.customers} Customers`"
          :avatar="{
            src: country.flag,
            alt: country.name,
          }"
          size="sm" />
        <div
          class="flex w-full max-w-[140px] items-center gap-3">
          <UProgress
            :model-value="country.percent"
            color="primary"
            size="sm"
            class="max-w-[100px]" />
          <p
            class="font-medium text-sm text-highlighted shrink-0">
            {{ country.percent }}%
          </p>
        </div>
      </div>
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import type { AgChartOptions } from 'ag-charts-community'
import { computed } from 'vue'
import { AgCharts } from 'ag-charts-vue3'
import { CHART_CARD_MENU_ITEMS } from '@/constants/dashboardCardMenu'
import { useChartTheme } from '@/composables/useChartTheme'

const countries = [
  {
    name: 'USA',
    flag: '/images/country/country-01.svg',
    customers: '2,379',
    percent: 79,
  },
  {
    name: 'France',
    flag: '/images/country/country-02.svg',
    customers: '589',
    percent: 23,
  },
]

const chartData = [
  {
    country: 'USA',
    customers: 2540,
    target: 3000,
  },
  {
    country: 'Germany',
    customers: 1520,
    target: 1800,
  },
  {
    country: 'UK',
    customers: 1450,
    target: 1600,
  },
  {
    country: 'France',
    customers: 1200,
    target: 950,
  },
  {
    country: 'Japan',
    customers: 620,
    target: 550,
  },
]

withDefaults(
  defineProps<{
    loading?: boolean
  }>(),
  { loading: false },
)

const {
  chartTheme,
  chartColors,
  chartBackground,
} = useChartTheme()

const chartOptions = computed<AgChartOptions>(
  () => ({
    theme: chartTheme.value,
    background: { fill: chartBackground },
    data: chartData,
    series: [
      {
        type: 'area',
        xKey: 'country',
        yKey: 'customers',
        yName: 'Customers',
        fill: chartColors.value.getValues(
          'primary',
          0.2,
        ),
        fillOpacity: 0.5,
        stroke: chartColors.value.getValues(
          'primary',
          0.3,
        ),
        strokeWidth: 2,
        marker: {
          size: 8,
          fill: 'transparent',
          stroke: 'transparent',
        },
        interpolation: { type: 'smooth' },
      },
      {
        type: 'line',
        xKey: 'country',
        yKey: 'target',
        yName: 'Target',
        stroke: chartColors.value.primary,
        strokeWidth: 3,
        lineDash: [8, 4],
        marker: {
          size: 8,
          fill: 'transparent',
          stroke: 'transparent',
        },
        interpolation: { type: 'smooth' },
      },
    ],
    legend: { position: 'top' },
  }),
)
</script>
