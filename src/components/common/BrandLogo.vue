<template>
  <span
    :class="[
      'inline-flex shrink-0 text-primary-500',
      props.class,
    ]"
  >
    <template v-if="icon">
      <LogoIcon class="h-8 w-8 shrink-0" />
    </template>
    <template v-else>
      <LogoFull class="h-8 w-auto shrink-0" />
    </template>
  </span>
</template>

<script setup lang="ts">
import LogoFull from './LogoFull.vue'
import LogoIcon from './LogoIcon.vue'

const props = withDefaults(
  defineProps<{
    class?: string
    icon?: boolean
  }>(),
  { icon: false },
)
</script>
