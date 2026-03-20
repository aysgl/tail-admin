<template>
  <UPageHeader
    headline="Tables"
    title="Advance Tables"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <UPageCard
      title="table-advance"
      description="Theme seçimi, global arama, status tab'ları, satır seçimi, kolon göster/gizle ve filtreler."
      variant="outline"
    >
      <TableTheme
        v-model:theme="advanceTheme"
        v-model:quick-filter-text="
          advanceQuickFilter
        "
        :show-toolbar="true"
        :show-theme-selector="true"
        :show-status-tabs="true"
        :show-floating-filter="true"
        datasource-mode="server"
        :datasource-delay-ms="2000"
      />
    </UPageCard>
  </UPageBody>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import TableTheme from '@/components/tables/TableTheme.vue'

const breadcrumbItems = usePageBreadcrumb(
  'Tables',
  'Advance Tables',
)
const advanceTheme = ref<
  'compact' | 'relaxed' | 'advance'
>('advance')
const advanceQuickFilter = ref('')
</script>
