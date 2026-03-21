<template>
  <UFormField
    label="Password"
    required>
    <div class="relative">
      <UInput
        :model-value="modelValue"
        :type="showPassword ? 'text' : 'password'"
        :placeholder="placeholder"
        variant="outline"
        color="primary"
        class="w-full pr-11"
        @update:model-value="
          $emit('update:modelValue', $event)
        " />
      <UButton
        type="button"
        color="primary"
        variant="ghost"
        square
        size="sm"
        class="absolute right-1 top-1/2 -translate-y-1/2 text-muted hover:bg-accented"
        aria-label="Toggle password visibility"
        @click="showPassword = !showPassword">
        <UIcon
          :name="
            showPassword
              ? 'i-lucide-eye-off'
              : 'i-lucide-eye'
          "
          class="size-5" />
      </UButton>
    </div>
  </UFormField>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
  placeholder?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()

const showPassword = ref(false)
</script>
