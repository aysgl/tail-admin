<template>
  <UPageCard
    title="Advance Tables"
    description="Theme selection, global search, status tabs, row selection, column show/hide, and filters."
    variant="outline"
    :ui="{
      title:
        'text-lg font-semibold text-highlighted',
      description: 'mt-1 text-sm text-muted',
    }">
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
      :datasource-delay-ms="2000" />
  </UPageCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TableTheme from '@/components/tables/TableTheme.vue'

const advanceTheme = ref<
  'compact' | 'relaxed' | 'advance'
>('advance')
const advanceQuickFilter = ref('')
</script>
