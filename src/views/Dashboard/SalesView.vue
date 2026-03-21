<template>
  <div
    class="grid grid-cols-12 gap-4 md:gap-6 h-full">
    <div class="col-span-12 xl:col-span-7 h-full">
      <SalesTrendCard :loading="pageLoading" />
    </div>
    <div class="col-span-12 flex xl:col-span-5">
      <SalesTargetDonutCard
        class="min-h-0 flex-1"
        :loading="pageLoading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageLoading } from '@/composables/usePageLoading'
import SalesTrendCard from '@/components/dashboard/SalesTrendCard.vue'
import SalesTargetDonutCard from '@/components/dashboard/SalesTargetDonutCard.vue'

const { pageLoading } = usePageLoading()
</script>
