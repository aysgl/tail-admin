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
      title="Relaxed Tables"
      description="Relaxed, calm view. Generous padding, minimal hover. Readability focused."
      variant="outline"
      :ui="{
        title:
          'text-lg font-semibold text-highlighted',
        description: 'mt-1 text-sm text-muted',
      }"
    >
      <TableTheme
        theme="relaxed"
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
  'Relaxed Tables',
)
</script>
