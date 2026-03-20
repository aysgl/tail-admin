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
    <UPageGrid>
      <div
        class="col-span-1 sm:col-span-2 lg:col-span-3"
      >
        <EcommerceMetrics />
      </div>
      <div class="lg:col-span-2">
        <MonthlyTargetCard />
      </div>
      <div class="lg:col-span-1">
        <MonthlySalesCard />
      </div>
      <div
        class="col-span-1 sm:col-span-2 lg:col-span-3"
      >
        <StatisticsCard />
      </div>
      <div class="lg:col-span-1">
        <CustomerDemographicCard />
      </div>
      <div class="lg:col-span-2">
        <RecentOrdersCard />
      </div>
    </UPageGrid>
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
