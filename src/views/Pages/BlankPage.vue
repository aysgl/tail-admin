<template>
  <UPageHeader
    headline="Pages"
    title="Blank Page"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <UPageCard variant="outline">
      Add your content here.
    </UPageCard>
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
const breadcrumbItems = usePageBreadcrumb(
  'Pages',
  'Blank Page',
)
</script>
