<template>
  <div class="space-y-6">
    <div
      class="flex flex-wrap items-center gap-8"
    >
      <!-- Default Checkbox -->
      <UCheckbox
        v-model="checkboxOne"
        label="Default"
        color="primary"
      />

      <!-- Checked Checkbox -->
      <UCheckbox
        v-model="checkboxTwo"
        label="Checked"
        color="primary"
      />

      <!-- Disabled Checkbox -->
      <UCheckbox
        v-model="checkboxThree"
        label="Disabled"
        disabled
        color="primary"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkboxOne = ref(false)
const checkboxTwo = ref(true)
const checkboxThree = ref(true)
</script>
