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
    >
      <TableTheme
        theme="compact"
        :show-toolbar="false"
        :datasource-delay-ms="2000"
      />
    </UPageCard>
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import TableTheme from '@/components/tables/TableTheme.vue'

const breadcrumbItems = usePageBreadcrumb(
  'Tables',
  'Compact Tables',
)
</script>
