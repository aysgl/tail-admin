<template>
  <UDashboardGroup unit="rem">
    <UDashboardSearch
      :groups="searchGroups"
      placeholder="Search..."
    />
    <UDashboardSidebar
      v-model:open="sidebarOpen"
      v-model:collapsed="sidebarCollapsed"
      collapsible
      toggle-side="left"
      :default-size="16"
      :collapsed-size="4"
      :ui="{
        root: 'transition-[width] duration-200 ease-in-out bg-default',
      }"
    >
      <template #header="{ collapsed }">
        <HeaderLogo :collapsed="collapsed" />
      </template>

      <UNavigationMenu
        :items="items"
        orientation="vertical"
        :collapsed="sidebarCollapsed"
        tooltip
        popover
        class="-mx-2.5 px-2"
      />
    </UDashboardSidebar>

    <UDashboardPanel :ui="{ body: 'min-h-0' }">
      <template #header>
        <UDashboardNavbar
          toggle-side="left"
          :toggle="{ class: 'lg:hidden' }"
          :ui="{ root: 'bg-default' }"
        >
          <template #leading>
            <UDashboardSidebarCollapse
              class="hidden lg:flex"
            />
          </template>
          <template #right>
            <UDashboardSearchButton
              class="hidden w-full max-w-[200px] justify-start gap-2 text-muted lg:flex xl:max-w-[280px]"
              label="Search or type command..."
            />
            <UColorModeSelect />
            <NotificationMenu />
            <UserMenu />
          </template>
        </UDashboardNavbar>
      </template>

      <template #body>
        <UPage
          class="flex-1 mx-auto w-full max-w-(--breakpoint-2xl) mt-0"
        >
          <slot />
        </UPage>
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  useNavigationItems,
  useSearchGroups,
} from '@/config/navigation'
import HeaderLogo from './header/HeaderLogo.vue'
import NotificationMenu from './header/NotificationMenu.vue'
import UserMenu from './header/UserMenu.vue'

const { items } = useNavigationItems()
const searchGroups = useSearchGroups()
const sidebarOpen = ref(true)
const sidebarCollapsed = ref(false)
</script>
