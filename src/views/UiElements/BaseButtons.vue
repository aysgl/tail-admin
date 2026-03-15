<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div class="space-y-5 sm:space-y-6">
      <ComponentCard title="Primary Button">
        <div class="flex flex-wrap items-center gap-5">
          <Button
            size="sm"
            variant="solid"
            color="primary"
            >Button Text</Button
          >
          <Button
            size="md"
            variant="solid"
            color="primary"
            >Button Text</Button
          >
        </div>
      </ComponentCard>
      <ComponentCard title="Color Variants (variant + color)">
        <div class="flex flex-wrap items-center gap-3">
          <Button
            variant="solid"
            color="primary"
            >Primary</Button
          >
          <Button variant="secondary">Secondary</Button>
          <Button
            variant="solid"
            color="success"
            >Success</Button
          >
          <Button
            variant="solid"
            color="error"
            >Error</Button
          >
          <Button
            variant="solid"
            color="warning"
            >Warning</Button
          >
          <Button
            variant="solid"
            color="info"
            >Info</Button
          >
        </div>
      </ComponentCard>
      <ComponentCard title="Button with Icons">
        <div class="flex flex-wrap items-center gap-5">
          <Button
            variant="solid"
            color="primary"
            :startIcon="BoxIcon"
            >Left Icon</Button
          >
          <Button
            variant="solid"
            color="primary"
            :endIcon="BoxIcon"
            >Right Icon</Button
          >
        </div>
      </ComponentCard>
      <ComponentCard title="Outline, Ghost, Link (color ile)">
        <div class="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            color="primary"
            >Outline</Button
          >
          <Button
            variant="outline"
            color="success"
            >Outline Success</Button
          >
          <Button
            variant="ghost"
            color="error"
            >Ghost Error</Button
          >
          <Button
            variant="link"
            color="info"
            >Link Info</Button
          >
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
import Button from '@/components/ui/BaseButton.vue'
import { BoxIcon } from '@/icons'
const currentPageTitle = ref('Buttons')
</script>

<style></style>
