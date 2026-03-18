<template>
  <button
    v-if="isMobileOpen"
    type="button"
    class="fixed inset-0 w-full h-full bg-gray-900/50 z-9999 lg:hidden cursor-default border-none p-0 appearance-none"
    aria-label="Close sidebar"
    @click="toggleMobileSidebar"
  />
</template>

<script setup lang="ts">
import { useSidebar } from '@/composables/useSidebar'
const { toggleMobileSidebar, isMobileOpen } =
  useSidebar()
</script>
