<template>
  <div class="grid grid-cols-12 gap-4 md:gap-6">
    <div class="col-span-12">
      <VisitorTrendLineCard
        :loading="pageLoading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageLoading } from '@/composables/usePageLoading'
import VisitorTrendLineCard from '@/components/dashboard/VisitorTrendLineCard.vue'

const { pageLoading } = usePageLoading()
</script>
