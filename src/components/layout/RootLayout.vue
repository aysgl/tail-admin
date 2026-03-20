<template>
  <MainLayout v-if="layout === 'main'">
    <RouterView v-slot="{ Component }">
      <component
        :is="Component"
        :key="route.path"
      />
    </RouterView>
  </MainLayout>
  <AuthLayout v-else-if="layout === 'auth'">
    <RouterView v-slot="{ Component }">
      <component
        :is="Component"
        :key="route.path"
      />
    </RouterView>
  </AuthLayout>
  <RouterView
    v-else
    v-slot="{ Component }"
  >
    <component
      :is="Component"
      :key="route.path"
    />
  </RouterView>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './MainLayout.vue'
import AuthLayout from './AuthLayout.vue'

const route = useRoute()

const layout = computed(() => {
  const meta = route.meta?.layout
  if (meta === 'auth' || meta === 'none')
    return meta
  return 'main'
})
</script>
