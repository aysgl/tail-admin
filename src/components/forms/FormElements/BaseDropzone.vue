<template>
  <UFileUpload
    v-model="files"
    label="Drag & Drop File Here"
    description="Drag and drop your PNG, JPG, WebP, SVG images here or browse"
    accept="image/jpeg,image/png,image/gif,image/webp,image/svg+xml"
    icon="i-lucide-upload"
    variant="area"
    color="neutral"
    class="w-full min-h-48"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const files = ref(null)
</script>
