<template>
  <div class="space-y-6">
    <!-- Normal Textarea -->
    <UFormField label="Description">
      <UTextarea
        v-model="normalDescription"
        placeholder="Enter a description..."
        :rows="6"
        variant="outline"
        color="neutral"
        class="w-full"
      />
    </UFormField>

    <!-- Disabled Textarea -->
    <UFormField label="Description">
      <UTextarea
        v-model="disabledDescription"
        placeholder="Enter a description..."
        :rows="6"
        disabled
        variant="outline"
        color="neutral"
        class="w-full"
      />
    </UFormField>

    <!-- Error State Textarea -->
    <UFormField
      label="Description"
      error="Please enter a message in the textarea."
    >
      <UTextarea
        v-model="errorDescription"
        placeholder="Enter a description..."
        :rows="6"
        color="error"
        variant="outline"
        class="w-full"
      />
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const normalDescription = ref('')
const disabledDescription = ref(
  'This textarea is disabled',
)
const errorDescription = ref('')
</script>
