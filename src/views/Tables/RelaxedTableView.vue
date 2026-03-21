<template>
  <UPageCard
    title="Relaxed Tables"
    description="Relaxed, calm view. Generous padding, minimal hover. Readability focused."
    variant="outline"
    :ui="{
      title:
        'text-lg font-semibold text-highlighted',
      description: 'mt-1 text-sm text-muted',
    }">
    <TableTheme
      theme="relaxed"
      :show-toolbar="false"
      :datasource-delay-ms="2000" />
  </UPageCard>
</template>

<script setup lang="ts">
import TableTheme from '@/components/tables/TableTheme.vue'
</script>
