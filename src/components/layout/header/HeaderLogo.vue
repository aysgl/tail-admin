<template>
  <RouterLink
    to="/"
    class="flex items-center"
    aria-label="Home"
  >
    <Logo
      :icon="collapsed"
      :class="collapsed ? 'mx-auto' : ''"
    />
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Logo from '@/components/common/BrandLogo.vue'

withDefaults(
  defineProps<{
    collapsed?: boolean
  }>(),
  { collapsed: false },
)
</script>
