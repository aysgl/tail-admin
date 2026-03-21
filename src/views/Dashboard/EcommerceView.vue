<template>
  <div class="grid grid-cols-12 gap-4 md:gap-6">
    <div
      class="col-span-12 flex flex-col gap-6 xl:col-span-7">
      <EcommerceMetrics :loading="pageLoading" />
      <MonthlySalesCard
        class="min-h-0 flex-1"
        :loading="pageLoading" />
    </div>
    <div class="col-span-12 flex xl:col-span-5">
      <MonthlyTargetCard
        class="min-h-0 flex-1"
        :loading="pageLoading" />
    </div>

    <div class="col-span-12">
      <StatisticsCard :loading="pageLoading" />
    </div>

    <div class="col-span-12 flex xl:col-span-5">
      <CustomerDemographicCard
        class="min-h-0 flex-1"
        :loading="pageLoading" />
    </div>

    <div class="col-span-12 flex xl:col-span-7">
      <RecentOrdersCard
        class="min-h-0 flex-1"
        :loading="pageLoading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageLoading } from '@/composables/usePageLoading'
import EcommerceMetrics from '@/components/dashboard/EcommerceMetrics.vue'
import MonthlyTargetCard from '@/components/dashboard/MonthlyTargetCard.vue'
import MonthlySalesCard from '@/components/dashboard/MonthlySalesCard.vue'
import StatisticsCard from '@/components/dashboard/StatisticsCard.vue'
import CustomerDemographicCard from '@/components/dashboard/CustomerDemographicCard.vue'
import RecentOrdersCard from '@/components/dashboard/RecentOrdersCard.vue'

const { pageLoading } = usePageLoading()
</script>
