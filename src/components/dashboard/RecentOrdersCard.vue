<template>
  <UPageCard variant="outline">
    <template #header>
      <div
        class="grid w-full grid-cols-[1fr_auto] items-center gap-4">
        <h3
          class="text-lg font-semibold text-highlighted min-w-0">
          Recent Orders
        </h3>
        <div
          class="flex shrink-0 items-center justify-end gap-3">
          <UButton
            color="primary"
            variant="outline"
            icon="i-lucide-sliders-horizontal">
            Filter
          </UButton>
          <UButton
            color="primary"
            variant="outline">
            See all
          </UButton>
        </div>
      </div>
    </template>
    <div
      class="relative max-w-full overflow-x-auto">
      <div
        v-if="loading"
        class="loading-overlay absolute inset-0 z-20 overflow-hidden rounded-lg">
        <SkeletonLoadingOverlay
          variant="orders"
          class="h-full w-full" />
      </div>
      <div :class="{ 'opacity-0': loading }">
        <table class="min-w-full">
          <thead>
            <tr class="border-t border-muted">
              <th class="py-3 text-left">
                <p
                  class="font-medium text-xs text-muted">
                  Products
                </p>
              </th>
              <th class="py-3 text-left">
                <p
                  class="font-medium text-xs text-muted">
                  Category
                </p>
              </th>
              <th class="py-3 text-left">
                <p
                  class="font-medium text-xs text-muted">
                  Price
                </p>
              </th>
              <th class="py-3 text-left">
                <p
                  class="font-medium text-xs text-muted">
                  Status
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(product, index) in products"
              :key="index"
              class="border-t border-muted">
              <td class="whitespace-nowrap py-3">
                <div
                  class="flex items-center gap-3">
                  <div
                    class="h-[50px] w-[50px] overflow-hidden rounded-md">
                    <img
                      :src="product.image"
                      :alt="product.name" />
                  </div>
                  <div>
                    <p
                      class="font-medium text-sm text-highlighted">
                      {{ product.name }}
                    </p>
                    <span
                      class="text-xs text-muted">
                      {{ product.variants }}
                      Variants
                    </span>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap py-3">
                <p class="text-sm text-muted">
                  {{ product.category }}
                </p>
              </td>
              <td class="whitespace-nowrap py-3">
                <p class="text-sm text-muted">
                  {{ product.price }}
                </p>
              </td>
              <td class="whitespace-nowrap py-3">
                <UBadge
                  :color="
                    product.status === 'Delivered'
                      ? 'success'
                      : product.status ===
                          'Pending'
                        ? 'warning'
                        : 'error'
                  "
                  variant="subtle"
                  size="sm">
                  {{ product.status }}
                </UBadge>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    loading?: boolean
  }>(),
  { loading: false },
)

const products = ref([
  {
    name: 'Macbook pro 13"',
    variants: 2,
    image: '/images/product/product-01.jpg',
    category: 'Laptop',
    price: '$2399.00',
    status: 'Delivered',
  },
  {
    name: 'Apple Watch Ultra',
    variants: 1,
    image: '/images/product/product-02.jpg',
    category: 'Watch',
    price: '$879.00',
    status: 'Pending',
  },
  {
    name: 'iPhone 15 Pro Max',
    variants: 2,
    image: '/images/product/product-03.jpg',
    category: 'SmartPhone',
    price: '$1869.00',
    status: 'Delivered',
  },
  {
    name: 'iPad Pro 3rd Gen',
    variants: 2,
    image: '/images/product/product-04.jpg',
    category: 'Electronics',
    price: '$1699.00',
    status: 'Canceled',
  },
  {
    name: 'Airpods Pro 2nd Gen',
    variants: 1,
    image: '/images/product/product-05.jpg',
    category: 'Accessories',
    price: '$240.00',
    status: 'Delivered',
  },
])
</script>
