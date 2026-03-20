<template>
  <UPageBody
    :ui="{
      base: '!m-0 !p-0 grid grid-cols-1 lg:grid-cols-2 min-h-0 flex-1 h-full bg-default',
    }"
  >
    <div
      class="flex min-h-0 min-w-0 flex-col items-start justify-center overflow-y-auto bg-default p-6 lg:p-12 max-w-xl w-full justify-self-center"
    >
      <slot />
    </div>
    <div
      class="relative hidden lg:flex min-h-0 flex-col items-center justify-center bg-primary-950 dark:bg-white/5 self-stretch w-full"
    >
      <AuthCover />
      <div
        class="relative z-1 flex flex-col items-center justify-center max-w-xs"
      >
        <slot name="branding">
          <ULink
            to="/"
            class="mb-4 block"
            aria-label="Home"
          >
            <img
              width="231"
              height="48"
              src="/images/logo/auth-logo.svg"
              alt="Logo"
            />
          </ULink>
          <p
            class="text-center text-white dark:text-primary-300"
          >
            Free and Open-Source Tailwind CSS
            Admin Dashboard Template
          </p>
        </slot>
      </div>
    </div>
  </UPageBody>
</template>

<script setup lang="ts">
import AuthCover from './AuthCover.vue'
</script>
