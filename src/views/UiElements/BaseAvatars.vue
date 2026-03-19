<template>
  <AdminLayout>
    <PageBreadcrumb
      :pageTitle="currentPageTitle"
    />
    <div class="space-y-5 sm:space-y-6">
      <ComponentCard title="Default Avatar">
        <div
          class="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <UAvatar
            v-for="size in nuxtUiSizes"
            :key="size"
            :src="avatarSrc"
            alt="User avatar"
            :size="size"
          />
        </div>
      </ComponentCard>
      <ComponentCard
        title="Avatar with online indicator"
      >
        <div
          class="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <div
            v-for="size in nuxtUiSizes"
            :key="size"
            class="relative inline-flex"
          >
            <UAvatar
              :src="avatarSrc"
              alt="User avatar"
              :size="size"
            />
            <span
              class="absolute bottom-0 right-0 size-2 rounded-full border-2 border-white bg-success dark:border-gray-900"
              :class="statusSizeMap[size]"
            />
          </div>
        </div>
      </ComponentCard>
      <ComponentCard
        title="Avatar with Offline indicator"
      >
        <div
          class="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <div
            v-for="size in nuxtUiSizes"
            :key="size"
            class="relative inline-flex"
          >
            <UAvatar
              :src="avatarSrc"
              alt="User avatar"
              :size="size"
            />
            <span
              class="absolute bottom-0 right-0 size-2 rounded-full border-2 border-white bg-error dark:border-gray-900"
              :class="statusSizeMap[size]"
            />
          </div>
        </div>
      </ComponentCard>
      <ComponentCard
        title="Avatar with busy indicator"
      >
        <div
          class="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <div
            v-for="size in nuxtUiSizes"
            :key="size"
            class="relative inline-flex"
          >
            <UAvatar
              :src="avatarSrc"
              alt="User avatar"
              :size="size"
            />
            <span
              class="absolute bottom-0 right-0 size-2 rounded-full border-2 border-white bg-warning dark:border-gray-900"
              :class="statusSizeMap[size]"
            />
          </div>
        </div>
      </ComponentCard>
      <ComponentCard
        title="Avatar with fallback (initials)"
      >
        <div
          class="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <UAvatar
            alt="Benjamin Canac"
            size="md"
          />
        </div>
      </ComponentCard>
      <ComponentCard
        title="Avatar with icon fallback"
      >
        <div
          class="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <UAvatar
            icon="i-lucide-user"
            size="md"
          />
        </div>
      </ComponentCard>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import ComponentCard from '@/components/common/ComponentCard.vue'

const currentPageTitle = ref('Avatars')

const avatarSrc = '/images/user/user-01.jpg'
const nuxtUiSizes = [
  '3xs',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
] as const

const statusSizeMap: Record<
  (typeof nuxtUiSizes)[number],
  string
> = {
  '3xs': 'size-1',
  '2xs': 'size-1',
  xs: 'size-1.5',
  sm: 'size-2',
  md: 'size-2',
  lg: 'size-2.5',
  xl: 'size-3',
  '2xl': 'size-3',
  '3xl': 'size-3.5',
}
</script>
