<template>
  <AdminLayout>
    <PageBreadcrumb
      :pageTitle="currentPageTitle"
    />
    <div class="space-y-5 sm:space-y-6">
      <ComponentCard title="Success Alert">
        <UAlert
          title="Heads up!"
          description="You can change the primary color in your app config."
          color="success"
          variant="soft"
          icon="i-lucide-flame"
          class="border border-success-300 border-dashed hover:border-success-500 dark:border-success-500/40 dark:bg-success-500/15 dark:hover:border-success-500 transition-all duration-300"
          close
        />
      </ComponentCard>
      <ComponentCard title="Warning Alert">
        <UAlert
          title="Heads up!"
          description="You can change the primary color in your app config."
          color="warning"
          variant="soft"
          icon="i-lucide-siren"
          class="border border-warning-300 border-dashed hover:border-warning-500 dark:border-warning-500/40 dark:hover:border-warning-500 transition-all duration-300"
          close
        />
      </ComponentCard>
      <ComponentCard title="Error Alert">
        <UAlert
          title="Heads up!"
          description="You can change the primary color in your app config."
          color="error"
          variant="soft"
          icon="i-lucide-bug"
          class="border border-error-300 border-dashed hover:border-error-500 dark:border-error-500/40 dark:hover:border-error-500 transition-all duration-300"
          close
        />
      </ComponentCard>
      <ComponentCard title="Info Alert">
        <UAlert
          title="Heads up!"
          description="You can change the primary color in your app config."
          color="info"
          variant="soft"
          icon="i-lucide-rocket"
          class="border border-info-300 border-dashed hover:border-info-500 dark:border-info-500/40 dark:bg-info-500/15 dark:hover:border-info-500 transition-all duration-300"
          close
        />
      </ComponentCard>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import ComponentCard from '@/components/common/ComponentCard.vue'
const currentPageTitle = ref('Alerts')
</script>

<style></style>
