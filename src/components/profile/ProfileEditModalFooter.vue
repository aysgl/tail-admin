<template>
  <div class="flex w-full gap-3 lg:justify-end">
    <UButton
      color="primary"
      variant="outline"
      class="flex-1 lg:flex-initial"
      @click="close()">
      Close
    </UButton>
    <UButton
      color="primary"
      class="flex-1 lg:flex-initial"
      @click="emit('save', close)">
      Save Changes
    </UButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  close: () => void
}>()
const emit = defineEmits<{
  save: [close: () => void]
}>()
</script>
