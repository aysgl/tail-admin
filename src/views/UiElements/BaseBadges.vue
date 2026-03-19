<template>
  <AdminLayout>
    <PageBreadcrumb
      :pageTitle="currentPageTitle"
    />
    <div class="space-y-5 sm:space-y-6">
      <ComponentCard
        title="With Light Background (soft)"
      >
        <div
          class="flex flex-wrap gap-4 sm:items-center sm:justify-center"
        >
          <UBadge
            v-for="color in nuxtUiColors"
            :key="color"
            :color="color"
            variant="soft"
          >
            {{ color }}
          </UBadge>
        </div>
      </ComponentCard>
      <ComponentCard
        title="With Solid Background"
      >
        <div
          class="flex flex-wrap gap-4 sm:items-center sm:justify-center"
        >
          <UBadge
            v-for="color in nuxtUiColors"
            :key="color"
            :color="color"
            variant="solid"
          >
            {{ color }}
          </UBadge>
        </div>
      </ComponentCard>
      <ComponentCard title="Outline variant">
        <div
          class="flex flex-wrap gap-4 sm:items-center sm:justify-center"
        >
          <UBadge
            v-for="color in nuxtUiColors"
            :key="color"
            :color="color"
            variant="outline"
          >
            {{ color }}
          </UBadge>
        </div>
      </ComponentCard>
      <ComponentCard
        title="Light Background with Left Icon"
      >
        <div
          class="flex flex-wrap gap-4 sm:items-center sm:justify-center"
        >
          <UBadge
            v-for="color in nuxtUiColors"
            :key="color"
            :color="color"
            variant="soft"
            leading-icon="i-lucide-plus"
          >
            {{ color }}
          </UBadge>
        </div>
      </ComponentCard>
      <ComponentCard
        title="Solid Background with Left Icon"
      >
        <div
          class="flex flex-wrap gap-4 sm:items-center sm:justify-center"
        >
          <UBadge
            v-for="color in nuxtUiColors"
            :key="color"
            :color="color"
            variant="solid"
            leading-icon="i-lucide-plus"
          >
            {{ color }}
          </UBadge>
        </div>
      </ComponentCard>
      <ComponentCard
        title="Light Background with Right Icon"
      >
        <div
          class="flex flex-wrap gap-4 sm:items-center sm:justify-center"
        >
          <UBadge
            v-for="color in nuxtUiColors"
            :key="color"
            :color="color"
            variant="soft"
            trailing-icon="i-lucide-plus"
          >
            {{ color }}
          </UBadge>
        </div>
      </ComponentCard>
      <ComponentCard
        title="Solid Background with Right Icon"
      >
        <div
          class="flex flex-wrap gap-4 sm:items-center sm:justify-center"
        >
          <UBadge
            v-for="color in nuxtUiColors"
            :key="color"
            :color="color"
            variant="solid"
            trailing-icon="i-lucide-plus"
          >
            {{ color }}
          </UBadge>
        </div>
      </ComponentCard>
      <ComponentCard title="Sizes">
        <div
          class="flex flex-wrap items-center justify-center gap-4"
        >
          <UBadge
            v-for="size in sizes"
            :key="size"
            color="primary"
            variant="solid"
            :size="size"
          >
            {{ size }}
          </UBadge>
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

const currentPageTitle = ref('Badge')

const nuxtUiColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
  'neutral',
] as const

const sizes = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
] as const
</script>
