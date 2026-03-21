<template>
  <UPageHeader
    headline="Dashboard"
    title="Sales"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <div
      class="grid grid-cols-12 gap-4 md:gap-6 h-full"
    >
      <div
        class="col-span-12 xl:col-span-7 h-full"
      >
        <SalesTrendCard :loading="pageLoading" />
      </div>
      <div class="col-span-12 flex xl:col-span-5">
        <SalesTargetDonutCard
          class="min-h-0 flex-1"
          :loading="pageLoading"
        />
      </div>
    </div>
  </UPageBody>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import SalesTrendCard from '@/components/dashboard/SalesTrendCard.vue'
import SalesTargetDonutCard from '@/components/dashboard/SalesTargetDonutCard.vue'

const breadcrumbItems = usePageBreadcrumb(
  'Dashboard',
  'Sales',
)

const pageLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    pageLoading.value = false
  }, 1500)
})
</script>
