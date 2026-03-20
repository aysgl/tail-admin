<template>
  <UPageBody
    :ui="{
      base: 'h-full overflow-hidden p-0 m-0',
    }"
  >
    <div class="flex h-full min-h-0 w-full">
      <!-- Sol: Form -->
      <div
        class="flex flex-1 min-w-0 h-full flex-col items-center justify-center overflow-y-auto p-6 lg:p-12"
      >
        <div class="w-full max-w-md">
          <ULink
            to="/"
            class="mb-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-default"
            aria-label="Back to dashboard"
          >
            <UIcon
              name="i-lucide-arrow-left"
              class="size-5"
            />
            Back to dashboard
          </ULink>

          <h1
            class="mt-6 text-2xl font-bold text-highlighted"
          >
            Sign In
          </h1>
          <p class="mt-1 text-muted">
            Enter your email and password to sign
            in!
          </p>

          <UPageCard
            variant="outline"
            :ui="pageCardUi"
            class="mt-6"
          >
            <div
              class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5"
            >
              <UButton
                color="neutral"
                variant="subtle"
                block
                class="gap-3"
              >
                <UIcon
                  name="i-simple-icons-google"
                  class="size-5"
                />
                Sign in with Google
              </UButton>
              <UButton
                color="neutral"
                variant="subtle"
                block
                class="gap-3"
              >
                <UIcon
                  name="i-simple-icons-x"
                  class="size-5"
                />
                Sign in with X
              </UButton>
            </div>

            <div class="relative py-3 sm:py-5">
              <USeparator />
              <span
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-default px-3 text-sm text-muted"
              >
                Or
              </span>
            </div>

            <form
              class="space-y-5"
              @submit.prevent="handleSubmit"
            >
              <UFormField
                label="Email"
                required
              >
                <UInput
                  v-model="email"
                  type="email"
                  placeholder="info@gmail.com"
                  variant="outline"
                  color="neutral"
                  class="w-full"
                />
              </UFormField>
              <UFormField
                label="Password"
                required
              >
                <div class="relative">
                  <UInput
                    v-model="password"
                    :type="
                      showPassword
                        ? 'text'
                        : 'password'
                    "
                    placeholder="Enter your password"
                    variant="outline"
                    color="neutral"
                    class="w-full pr-11"
                  />
                  <UButton
                    type="button"
                    color="neutral"
                    variant="ghost"
                    square
                    size="sm"
                    class="absolute right-1 top-1/2 -translate-y-1/2"
                    aria-label="Toggle password visibility"
                    @click="
                      showPassword = !showPassword
                    "
                  >
                    <UIcon
                      :name="
                        showPassword
                          ? 'i-lucide-eye-off'
                          : 'i-lucide-eye'
                      "
                      class="size-5"
                    />
                  </UButton>
                </div>
              </UFormField>
              <div
                class="flex items-center justify-between"
              >
                <UCheckbox
                  v-model="keepLoggedIn"
                  label="Keep me logged in"
                  color="primary"
                />
                <ULink
                  to="/reset-password"
                  class="text-sm text-primary hover:text-primary/80"
                >
                  Forgot password?
                </ULink>
              </div>
              <UButton
                type="submit"
                block
                color="primary"
                size="lg"
              >
                Sign In
              </UButton>
            </form>

            <p
              class="mt-5 text-center text-sm text-muted sm:text-start"
            >
              Don't have an account?
              <ULink
                to="/signup"
                class="text-primary hover:text-primary/80"
              >
                Sign Up
              </ULink>
            </p>
          </UPageCard>
        </div>
      </div>

      <!-- Sağ: Branding - üst/alt sıfıra sıfır -->
      <div
        class="relative hidden lg:flex lg:w-1/2 h-full min-h-0 flex-col items-center justify-center bg-brand-950 dark:bg-white/5 self-stretch"
        aria-label="Branding"
      >
        <div
          class="absolute inset-0 overflow-hidden"
        >
          <AuthCover />
        </div>
        <div
          class="relative z-1 flex flex-col items-center justify-center max-w-xs"
        >
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
          <p class="text-center text-muted">
            Free and Open-Source Tailwind CSS
            Admin Dashboard Template
          </p>
        </div>
      </div>
    </div>
  </UPageBody>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AuthCover from '@/components/auth/AuthCover.vue'
import { pageCardUi } from '@/config/cardUi'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const keepLoggedIn = ref(false)

const handleSubmit = () => {
  console.log('Form submitted', {
    email: email.value,
    password: password.value,
    keepLoggedIn: keepLoggedIn.value,
  })
}
</script>
