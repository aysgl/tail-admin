<template>
  <div class="space-y-6">
    <!-- Single Select Input -->
    <UFormField label="Select Input">
      <USelect
        v-model="singleSelect"
        :items="selectItems"
        placeholder="Select Option"
        variant="outline"
        color="neutral"
        class="w-full"
      />
    </UFormField>

    <!-- Multiple Select Input -->
    <UFormField label="Multiple Select">
      <USelect
        v-model="selectedItems"
        :items="optionss"
        multiple
        placeholder="Select items..."
        variant="outline"
        color="neutral"
        value-key="value"
        class="w-full"
      />
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectItems = [
  { label: 'Marketing', value: 'marketing' },
  { label: 'Template', value: 'template' },
  { label: 'Development', value: 'development' },
]

const optionss = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'graphs', label: 'Graphs' },
]

const selectedItems = ref<string[]>([])
const singleSelect = ref('')
</script>
