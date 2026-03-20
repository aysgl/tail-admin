<template>
  <UPageHeader
    headline="Tables"
    title="Relaxed Tables"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <UPageCard
      title="table-relaxed"
      description="Rahat, sakin görünüm. Bol padding, minimal hover. Okunabilirlik odaklı."
      variant="outline"
      :ui="pageCardUi"
    >
      <TableTheme
        theme="relaxed"
        :show-toolbar="false"
      />
    </UPageCard>
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import { pageCardUi } from '@/config/cardUi'
import TableTheme from '@/components/tables/TableTheme.vue'

const breadcrumbItems = usePageBreadcrumb(
  'Tables',
  'Relaxed Tables',
)
</script>
