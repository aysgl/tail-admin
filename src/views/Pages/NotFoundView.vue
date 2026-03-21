<template>
  <div
    class="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg p-6"
  >
    <div
      class="relative z-0 flex flex-1 flex-col items-center justify-center"
    >
      <AuthCover />
      <UPageHero
        :links="[
          {
            label: 'Back to Home Page',
            to: '/',
            color: 'primary',
            variant: 'outline',
            size: 'lg',
          },
        ]"
        class="mx-auto w-full max-w-[472px] text-center"
      >
        <template #header>
          <h1
            class="mb-8 font-bold text-4xl text-highlighted xl:text-7xl"
          >
            Page Not Found
          </h1>
          <UColorModeImage
            light="/images/error/404.svg"
            dark="/images/error/404-dark.svg"
            alt="404"
            class="mx-auto w-full max-w-[242px] sm:max-w-[472px]"
          />
          <p
            class="mt-10 mb-6 text-base text-muted sm:text-lg"
          >
            We can't seem to find the page you are
            looking for!
          </p>
        </template>
      </UPageHero>
    </div>
    <p
      class="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-muted"
    >
      &copy; {{ currentYear }} - TailAdmin
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AuthCover from '@/components/auth/AuthCover.vue'

const currentYear = computed(() =>
  new Date().getFullYear(),
)
</script>
