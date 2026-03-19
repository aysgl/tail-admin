<template>
  <div class="space-y-6">
    <!-- Error State Input -->
    <UFormField
      label="Email"
      error="This is an error message."
    >
      <UInput
        v-model="errorEmail"
        color="error"
        variant="outline"
        trailing-icon="i-lucide-circle-alert"
        class="w-full"
      />
    </UFormField>

    <!-- Success State Input -->
    <UFormField
      label="Email"
      help="This is a success message."
    >
      <UInput
        v-model="successEmail"
        color="success"
        variant="outline"
        trailing-icon="i-lucide-circle-check"
        class="w-full"
      />
    </UFormField>

    <!-- Disabled State Input -->
    <UFormField label="Email">
      <UInput
        placeholder="info@gmail.com"
        disabled
        variant="outline"
        color="neutral"
        class="w-full"
      />
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const errorEmail = ref('demoemail')
const successEmail = ref('demoemail@gmail.com')
</script>
