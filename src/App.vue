<template>
  <UApp>
    <ThemeProvider>
      <SidebarProvider>
        <RouterView />
      </SidebarProvider>
    </ThemeProvider>
  </UApp>
</template>

<script setup lang="ts">
import ThemeProvider from './components/layout/ThemeProvider.vue'
import SidebarProvider from './components/layout/SidebarProvider.vue'
</script>
