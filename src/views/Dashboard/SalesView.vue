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
    <UPageCard
      title="Sales"
      variant="outline"
      :ui="pageCardUi"
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
import { pageCardUi } from '@/config/cardUi'

const breadcrumbItems = usePageBreadcrumb(
  'Dashboard',
  'Sales',
)
</script>
