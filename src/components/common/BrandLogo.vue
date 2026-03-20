<template>
  <span
    :class="['inline-flex shrink-0', props.class]"
  >
    <template v-if="icon">
      <img
        class="h-8 w-8 shrink-0"
        src="/images/logo/logo-icon.svg"
        alt="Logo"
      />
    </template>
    <template v-else>
      <UColorModeImage
        light="/images/logo/logo.svg"
        dark="/images/logo/logo-dark.svg"
        alt="Logo"
        class="h-8 w-auto shrink-0"
      />
    </template>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: string
    icon?: boolean
  }>(),
  { icon: false },
)
</script>
