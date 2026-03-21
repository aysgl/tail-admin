<template>
  <UPageBody
    :ui="{
      base: 'm-0! p-0! grid grid-cols-1 lg:grid-cols-2 min-h-0 flex-1 h-full bg',
    }">
    <div
      class="flex min-h-0 min-w-0 flex-col items-start justify-center overflow-y-auto bg p-6 lg:p-12 max-w-xl w-full justify-self-center">
      <ULink
        to="/"
        class="mb-4 block lg:hidden"
        aria-label="Home">
        <LogoFull class="h-8 w-auto shrink-0" />
      </ULink>
      <slot />
    </div>
    <div
      class="relative hidden lg:flex min-h-0 flex-col items-center justify-center bg-inverted self-stretch w-full overflow-hidden">
      <AuthCover />
      <div
        class="relative z-0 flex flex-col items-center justify-center max-w-xs">
        <slot name="branding">
          <ULink
            to="/"
            class="mb-4 block"
            aria-label="Home">
            <LogoFull
              :inverted="isDark"
              class="h-10 w-auto" />
          </ULink>
          <p class="text-center text-inverted">
            Free and Open-Source Tailwind CSS
            Admin Dashboard Template
          </p>
        </slot>
      </div>
    </div>
  </UPageBody>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '@vueuse/core'
import AuthCover from './AuthCover.vue'
import LogoFull from '@/components/common/LogoFull.vue'

const colorMode = useColorMode()
const isDark = computed(
  () => colorMode.value === 'light',
)
</script>
