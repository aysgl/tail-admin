<template>
  <UApp>
    <UHeader v-if="showAppHeader">
      <template #title>
        <RouterLink
          to="/"
          class="flex items-center gap-2"
          aria-label="TailAdmin"
        >
          <Logo />
        </RouterLink>
      </template>
    </UHeader>

    <UMain
      :class="
        layout === 'auth'
          ? 'min-h-screen h-screen pt-0'
          : ''
      "
    >
      <RootLayout />
    </UMain>
  </UApp>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import RootLayout from '@/components/layout/RootLayout.vue'
import Logo from '@/components/common/BrandLogo.vue'

const route = useRoute()
const layout = computed(
  () => (route.meta?.layout as string) ?? 'main',
)

// Main layout has its own UDashboardNavbar; auth pages (signin/signup) are fullscreen without header
const showAppHeader = computed(
  () => layout.value === 'none',
)
</script>
