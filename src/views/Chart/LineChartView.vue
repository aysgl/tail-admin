<template>
  <UPageHeader
    headline="Charts"
    title="Line Chart"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <UPageCard
      title="Line Chart 1"
      variant="outline"
      :ui="pageCardUi"
    >
      <LineChartOne />
    </UPageCard>
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import LineChartOne from '@/components/charts/LineChartOne.vue'
import { pageCardUi } from '@/config/cardUi'

const breadcrumbItems = usePageBreadcrumb(
  'Charts',
  'Line Chart',
)
</script>
