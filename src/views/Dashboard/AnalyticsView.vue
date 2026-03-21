<template>
  <UPageHeader
    headline="Dashboard"
    title="Analytics"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <div class="grid grid-cols-12 gap-4 md:gap-6">
      <div class="col-span-12">
        <VisitorTrendLineCard
          :loading="pageLoading"
        />
      </div>
    </div>
  </UPageBody>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import VisitorTrendLineCard from '@/components/dashboard/VisitorTrendLineCard.vue'

const breadcrumbItems = usePageBreadcrumb(
  'Dashboard',
  'Analytics',
)

const pageLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    pageLoading.value = false
  }, 1500)
})
</script>
