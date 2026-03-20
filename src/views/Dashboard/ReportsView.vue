<template>
  <UPageHeader
    headline="Dashboard"
    title="Reports"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <UPageCard
      title="Reports"
      variant="outline"
    >
      <div
        class="flex flex-col items-center justify-center py-16 text-center"
      >
        <div
          class="mb-4 flex size-16 items-center justify-center rounded-full bg-muted"
        >
          <UIcon
            name="i-lucide-file-text"
            class="size-8 text-muted"
          />
        </div>
        <h4
          class="mb-2 text-lg font-semibold text-default"
        >
          Detaylı Raporlar
        </h4>
        <p class="max-w-md text-sm text-muted">
          Özelleştirilebilir raporlar ve özetler
          bu sayfada listelenecek. İçerik yakında
          eklenecek.
        </p>
      </div>
    </UPageCard>
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
const breadcrumbItems = usePageBreadcrumb(
  'Dashboard',
  'Reports',
)
</script>
