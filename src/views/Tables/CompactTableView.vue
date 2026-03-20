<template>
  <UPageHeader
    headline="Tables"
    title="Compact Tables"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <UPageCard
      title="table-compact"
      description="Yoğun, sıkı görünüm. Küçük satır yüksekliği ve dar padding ile daha fazla veri sığar."
      variant="outline"
      :ui="pageCardUi"
    >
      <TableTheme
        theme="compact"
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
  'Compact Tables',
)
</script>
