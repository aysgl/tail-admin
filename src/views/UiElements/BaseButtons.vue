<template>
  <AdminLayout>
    <PageBreadcrumb
      :pageTitle="currentPageTitle"
    />
    <div class="space-y-5 sm:space-y-6">
      <ComponentCard title="Primary Button">
        <div
          class="flex flex-wrap items-center gap-5"
        >
          <UButton
            size="sm"
            variant="solid"
            color="primary"
          >
            Button Text
          </UButton>
          <UButton
            size="md"
            variant="solid"
            color="primary"
          >
            Button Text
          </UButton>
          <UButton
            size="lg"
            variant="solid"
            color="primary"
          >
            Button Text
          </UButton>
        </div>
      </ComponentCard>
      <ComponentCard
        title="Color Variants (variant + color)"
      >
        <div
          class="flex flex-wrap items-center gap-3"
        >
          <UButton
            variant="solid"
            color="primary"
          >
            Primary
          </UButton>
          <UButton
            variant="outline"
            color="neutral"
          >
            Secondary
          </UButton>
          <UButton
            variant="solid"
            color="success"
          >
            Success
          </UButton>
          <UButton
            variant="solid"
            color="error"
          >
            Error
          </UButton>
          <UButton
            variant="solid"
            color="warning"
          >
            Warning
          </UButton>
          <UButton
            variant="solid"
            color="info"
          >
            Info
          </UButton>
        </div>
      </ComponentCard>
      <ComponentCard title="Button with Icons">
        <div
          class="flex flex-wrap items-center gap-5"
        >
          <UButton
            variant="solid"
            color="primary"
            leading-icon="i-lucide-box"
          >
            Left Icon
          </UButton>
          <UButton
            variant="solid"
            color="primary"
            trailing-icon="i-lucide-box"
          >
            Right Icon
          </UButton>
          <UButton
            variant="solid"
            color="primary"
            icon="i-lucide-search"
            aria-label="Search"
          />
        </div>
      </ComponentCard>
      <ComponentCard
        title="Outline, Ghost, Link (color ile)"
      >
        <div
          class="flex flex-wrap items-center gap-3"
        >
          <UButton
            variant="outline"
            color="primary"
          >
            Outline
          </UButton>
          <UButton
            variant="outline"
            color="success"
          >
            Outline Success
          </UButton>
          <UButton
            variant="ghost"
            color="error"
          >
            Ghost Error
          </UButton>
          <UButton
            variant="link"
            color="info"
          >
            Link Info
          </UButton>
        </div>
      </ComponentCard>
      <ComponentCard
        title="Soft & Subtle variants"
      >
        <div
          class="flex flex-wrap items-center gap-3"
        >
          <UButton
            variant="soft"
            color="primary"
          >
            Soft Primary
          </UButton>
          <UButton
            variant="subtle"
            color="success"
          >
            Subtle Success
          </UButton>
        </div>
      </ComponentCard>
      <ComponentCard title="Loading state">
        <div
          class="flex flex-wrap items-center gap-3"
        >
          <UButton
            variant="solid"
            color="primary"
            loading
          >
            Loading
          </UButton>
          <UButton
            variant="outline"
            color="neutral"
            loading
            trailing-icon="i-lucide-chevron-down"
          >
            Loading
          </UButton>
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

const currentPageTitle = ref('Buttons')
</script>
