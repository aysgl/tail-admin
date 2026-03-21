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
      title="Compact Tables"
      description="Dense, compact view. Small row height and narrow padding fit more data."
      variant="outline"
      :ui="{
        title:
          'text-lg font-semibold text-highlighted',
        description: 'mt-1 text-sm text-muted',
      }"
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
