<template>
  <UPageHeader
    headline="Dashboard"
    title="Overview"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6"
    >
      <ULink
        v-for="item in dashboardLinks"
        :key="item.to"
        :to="item.to"
        class="block"
      >
        <UPageCard
          variant="outline"
          :ui="pageCardUi"
          class="transition-colors hover:border-primary/50"
        >
          <div class="flex items-center gap-4">
            <div
              class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted"
            >
              <UIcon
                :name="item.icon"
                class="size-6 text-muted"
              />
            </div>
            <div>
              <h3
                class="font-semibold text-default"
              >
                {{ item.label }}
              </h3>
              <p class="text-sm text-muted">
                {{ item.description }}
              </p>
            </div>
          </div>
        </UPageCard>
      </ULink>
    </div>
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import { pageCardUi } from '@/config/cardUi'

const breadcrumbItems = usePageBreadcrumb(
  'Dashboard',
  'Overview',
)

const dashboardLinks = [
  {
    label: 'eCommerce',
    description: 'Satış metrikleri ve siparişler',
    to: '/ecommerce',
    icon: 'i-lucide-shopping-cart',
  },
  {
    label: 'Analytics',
    description: 'Veri analizi ve istatistikler',
    to: '/analytics',
    icon: 'i-lucide-bar-chart-3',
  },
  {
    label: 'Sales',
    description: 'Satış raporları ve performans',
    to: '/sales',
    icon: 'i-lucide-trending-up',
  },
  {
    label: 'Reports',
    description: 'Detaylı raporlar ve özetler',
    to: '/reports',
    icon: 'i-lucide-file-text',
  },
]
</script>
