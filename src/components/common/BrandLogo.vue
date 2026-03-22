<template>
  <span
    :class="[
      'inline-flex shrink-0',
      inverted
        ? 'text-white'
        : 'text-primary-500',
      props.class,
    ]">
    <template v-if="icon">
      <LogoIcon class="h-8 w-8 shrink-0" />
    </template>
    <template v-else>
      <LogoFull
        :inverted="inverted"
        class="h-8 w-auto shrink-0" />
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '@vueuse/core'
import LogoFull from './LogoFull.vue'
import LogoIcon from './LogoIcon.vue'

const props = withDefaults(
  defineProps<{
    class?: string
    icon?: boolean
  }>(),
  { class: undefined, icon: false },
)

const colorMode = useColorMode()
const inverted = computed(
  () => colorMode.value === 'dark',
)
</script>
