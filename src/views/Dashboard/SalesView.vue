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
  <UPageBody class="h-screen">
    <UPageCard
      title="Sales"
      variant="outline"
    >
      <div
        class="flex flex-col items-center justify-center py-16 text-center"
      >
        <div
          class="mb-4 flex size-16 items-center justify-center rounded-full bg-muted"
        >
          <UIcon
            name="i-lucide-trending-up"
            class="size-8 text-muted"
          />
        </div>
        <h4
          class="mb-2 text-lg font-semibold text-default"
        >
          Satış Raporları
        </h4>
        <p class="max-w-md text-sm text-muted">
          Satış performansı, hedefler ve
          karşılaştırmalar burada görüntülenecek.
          İçerik yakında eklenecek.
        </p>
      </div>
    </UPageCard>
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
const breadcrumbItems = usePageBreadcrumb(
  'Dashboard',
  'Sales',
)
</script>
