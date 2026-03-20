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
      title="Line Chart"
      variant="outline"
    >
      <LineChart />
    </UPageCard>
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import LineChart from '@/components/charts/LineChart.vue'
const breadcrumbItems = usePageBreadcrumb(
  'Charts',
  'Line Chart',
)
</script>
