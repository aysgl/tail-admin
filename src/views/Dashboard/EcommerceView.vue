<template>
  <UPageHeader
    headline="Dashboard"
    title="eCommerce Dashboard"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <div class="grid grid-cols-12 gap-4 md:gap-6">
      <div
        class="col-span-12 space-y-6 xl:col-span-7"
      >
        <EcommerceMetrics />
        <MonthlySalesCard />
      </div>
      <div class="col-span-12 flex xl:col-span-5">
        <MonthlyTargetCard
          class="min-h-0 flex-1"
        />
      </div>

      <div class="col-span-12">
        <StatisticsCard />
      </div>

      <div class="col-span-12 flex xl:col-span-5">
        <CustomerDemographicCard
          class="min-h-0 flex-1"
        />
      </div>

      <div class="col-span-12 flex xl:col-span-7">
        <RecentOrdersCard
          class="min-h-0 flex-1"
        />
      </div>
    </div>
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import EcommerceMetrics from '@/components/dashboard/EcommerceMetrics.vue'
import MonthlyTargetCard from '@/components/dashboard/MonthlyTargetCard.vue'
import MonthlySalesCard from '@/components/dashboard/MonthlySalesCard.vue'
import StatisticsCard from '@/components/dashboard/StatisticsCard.vue'
import CustomerDemographicCard from '@/components/dashboard/CustomerDemographicCard.vue'
import RecentOrdersCard from '@/components/dashboard/RecentOrdersCard.vue'

const breadcrumbItems = usePageBreadcrumb(
  'Dashboard',
  'eCommerce Dashboard',
)
</script>
