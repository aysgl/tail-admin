<template>
  <UDashboardGroup unit="rem">
    <UDashboardSearch
      :groups="searchGroups"
      placeholder="Search..." />
    <UDashboardSidebar
      v-model:open="sidebarOpen"
      v-model:collapsed="sidebarCollapsed"
      collapsible
      toggle-side="left"
      :default-size="16"
      :collapsed-size="4"
      :ui="{
        root: 'transition-[width] duration-200 ease-in-out bg',
      }">
      <template #header="{ collapsed }">
        <HeaderLogo :collapsed="collapsed" />
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :model-value="openSections"
          @update:model-value="setOpenSections"
          :items="items"
          orientation="vertical"
          :collapsed="collapsed"
          tooltip
          popover
          class="-mx-2.5 px-2" />
      </template>
    </UDashboardSidebar>

    <UDashboardPanel :ui="{ body: 'min-h-0' }">
      <template #header>
        <UDashboardNavbar
          toggle-side="left"
          :toggle="{ class: 'lg:hidden' }"
          :ui="{ root: 'bg' }">
          <template #leading>
            <UDashboardSidebarCollapse
              class="hidden lg:flex" />
          </template>
          <template #right>
            <UDashboardSearchButton
              class="hidden h-10 w-full max-w-[200px] justify-start gap-2 text-muted lg:flex xl:max-w-[280px]"
              label="Search or type command..." />
            <UColorModeSelect class="h-10" />
            <NotificationMenu />
            <UserMenu />
          </template>
        </UDashboardNavbar>
      </template>

      <template #body>
        <div
          id="main-scroll-container"
          class="flex-1 min-h-0 overflow-y-auto flex flex-col">
          <UPage
            class="flex-1 mx-auto w-full max-w-(--breakpoint-2xl) mt-0">
            <UPageHeader
              :headline="pageHeadline"
              :title="pageTitle"
              :description="pageDescription"
              class="py-0 border-none">
              <template #headline>
                <UBreadcrumb
                  :items="breadcrumbItems" />
              </template>
            </UPageHeader>
            <UPageBody>
              <slot />
            </UPageBody>
          </UPage>
        </div>
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  useNavigationItems,
  useSearchGroups,
  getOpenSectionsForPath,
} from '@/router/navigation'
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import HeaderLogo from './header/HeaderLogo.vue'
import NotificationMenu from './header/NotificationMenu.vue'
import UserMenu from './header/UserMenu.vue'

const route = useRoute()
const { items } = useNavigationItems()
const searchGroups = useSearchGroups()
const sidebarOpen = ref(true)
const sidebarCollapsed = ref(false)

const openSections = ref<string[]>(
  getOpenSectionsForPath(route.path),
)
watch(
  () => route.path,
  (path) => {
    openSections.value =
      getOpenSectionsForPath(path)
  },
)
function setOpenSections(
  val: string | string[] | undefined,
) {
  openSections.value =
    val === undefined
      ? []
      : Array.isArray(val)
        ? val
        : [val]
}

const pageTitle = computed(
  () => (route.meta?.title as string) ?? 'Page',
)
const pageHeadline = computed(
  () =>
    (route.meta?.headline as string) ??
    pageTitle.value,
)
const pageDescription = computed(
  () =>
    route.meta?.description as string | undefined,
)
const breadcrumbItems = usePageBreadcrumb(
  pageHeadline,
  pageTitle,
)
</script>
