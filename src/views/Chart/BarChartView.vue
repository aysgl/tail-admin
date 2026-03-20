<template>
  <UPageHeader
    headline="Charts"
    title="Bar Chart"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <UPageCard
      title="Bar Chart 1"
      variant="outline"
      :ui="pageCardUi"
    >
      <BarChartOne />
    </UPageCard>
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import BarChartOne from '@/components/charts/BarChartOne.vue'
import { pageCardUi } from '@/config/cardUi'

const breadcrumbItems = usePageBreadcrumb(
  'Charts',
  'Bar Chart',
)
</script>
