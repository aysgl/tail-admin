<template>
  <UPageCard
    title="Customers Demographic"
    description="Number of customer based on country"
    variant="outline"
    :ui="pageCardUi"
  >
    <div
      class="px-4 py-6 my-6 overflow-hidden border border-default rounded-2xl bg-default sm:px-6"
    >
      <div
        ref="mapRef"
        id="demographicMap"
        class="mapOne map-btn -mx-4 -my-6 h-[212px] w-[252px] 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
      />
    </div>
    <div class="space-y-5">
      <div
        v-for="country in countries"
        :key="country.name"
        class="flex items-center justify-between"
      >
        <UUser
          :name="country.name"
          :description="`${country.customers} Customers`"
          :avatar="{
            src: country.flag,
            alt: country.name,
          }"
          size="sm"
        />
        <div
          class="flex w-full max-w-[140px] items-center gap-3"
        >
          <UProgress
            :model-value="country.percent"
            color="primary"
            size="sm"
            class="max-w-[100px]"
          />
          <p
            class="font-medium text-theme-sm text-default shrink-0"
          >
            {{ country.percent }}%
          </p>
        </div>
      </div>
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world'
import { pageCardUi } from '@/config/cardUi'

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

const mapRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (mapRef.value) {
    new jsVectorMap({
      selector: mapRef.value,
      map: 'world',
      zoomButtons: false,
      regionStyle: {
        initial: {
          fontFamily: 'Outfit',
          fill: '#D9D9D9',
        },
        hover: {
          fillOpacity: 1,
          fill: '#465fff',
        },
      },
      markers: [
        {
          name: 'Egypt',
          coords: [26.8206, 30.8025],
        },
        {
          name: 'United States',
          coords: [55.3781, 3.436],
        },
        {
          name: 'United States',
          coords: [37.0902, -95.7129],
        },
      ],
      markerStyle: {
        initial: {
          strokeWidth: 1,
          fill: '#465fff',
          fillOpacity: 1,
          r: 4,
        },
        hover: {
          fill: '#465fff',
          fillOpacity: 1,
        },
        selected: {},
        selectedHover: {},
      },
    })
  }
})
</script>
