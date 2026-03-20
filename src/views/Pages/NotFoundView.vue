<template>
  <UMain
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-default p-6"
  >
    <div
      class="relative z-1 flex flex-1 flex-col items-center justify-center"
    >
      <AuthCover />
      <UPageHero
        :links="[
          {
            label: 'Back to Home Page',
            to: '/',
            color: 'neutral',
            variant: 'outline',
            size: 'lg',
          },
        ]"
        class="mx-auto w-full max-w-[472px] text-center"
      >
        <template #header>
          <h1
            class="mb-8 font-bold text-title-md text-default xl:text-title-2xl"
          >
            Page Not Found
          </h1>
          <img
            src="/images/error/404.svg"
            alt="404"
            class="mx-auto w-full max-w-[242px] dark:hidden sm:max-w-[472px]"
          />
          <img
            src="/images/error/404-dark.svg"
            alt="404"
            class="mx-auto hidden w-full max-w-[242px] dark:block sm:max-w-[472px]"
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
  </UMain>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AuthCover from '@/components/auth/AuthCover.vue'

const currentYear = computed(() =>
  new Date().getFullYear(),
)
</script>
