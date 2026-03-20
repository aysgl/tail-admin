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
      title="Bar Chart"
      variant="outline"
    >
      <BarChart />
    </UPageCard>
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import BarChart from '@/components/charts/BarChart.vue'
const breadcrumbItems = usePageBreadcrumb(
  'Charts',
  'Bar Chart',
)
</script>
