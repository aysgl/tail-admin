<template>
  <UPageCard
    title="Compact Tables"
    description="Dense, compact view. Small row height and narrow padding fit more data."
    variant="outline"
    :ui="{
      title:
        'text-lg font-semibold text-highlighted',
      description: 'mt-1 text-sm text-muted',
    }">
    <TableTheme
      theme="compact"
      :show-toolbar="false"
      :datasource-delay-ms="2000" />
  </UPageCard>
</template>

<script setup lang="ts">
import TableTheme from '@/components/tables/TableTheme.vue'
</script>
