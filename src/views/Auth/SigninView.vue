<template>
  <AuthSplitLayout>
    <ULink
      to="/"
      class="mb-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-highlighted"
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
      Enter your email and password to sign in!
    </p>

    <AuthFormCard
      :state="state"
      @submit="handleSubmit"
    >
      <template #social>
        <UButton
          color="neutral"
          variant="soft"
          block
          class="gap-3"
        >
          <SocialIconGoogle />
          Sign in with Google
        </UButton>
        <UButton
          color="neutral"
          variant="soft"
          block
          class="gap-3"
        >
          <SocialIconX />
          Sign in with X
        </UButton>
      </template>

      <UFormField
        label="Email"
        required
      >
        <UInput
          v-model="state.email"
          type="email"
          placeholder="info@gmail.com"
          variant="outline"
          color="primary"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Password"
        required
      >
        <div class="relative">
          <UInput
            v-model="state.password"
            :type="
              showPassword ? 'text' : 'password'
            "
            placeholder="Enter your password"
            variant="outline"
            color="primary"
            class="w-full pr-11"
          />
          <UButton
            type="button"
            color="primary"
            variant="ghost"
            square
            size="sm"
            class="absolute right-1 top-1/2 -translate-y-1/2 text-muted hover:bg-accented"
            aria-label="Toggle password visibility"
            @click="showPassword = !showPassword"
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
          v-model="state.keepLoggedIn"
          label="Keep me logged in"
          color="primary"
        />
        <ULink
          to="/reset-password"
          class="text-sm text-highlighted hover:opacity-80"
        >
          Forgot password?
        </ULink>
      </div>

      <UButton
        type="submit"
        block
        color="primary"
        variant="solid"
        size="lg"
        class="bg-primary-500! text-white! hover:bg-primary-600!"
      >
        Sign In
      </UButton>

      <template #footer>
        <p
          class="mt-5 text-center text-sm text-muted sm:text-start"
        >
          Don't have an account?
          <ULink
            to="/signup"
            class="text-highlighted hover:opacity-80"
          >
            Sign Up
          </ULink>
        </p>
      </template>
    </AuthFormCard>
  </AuthSplitLayout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import AuthFormCard from '@/components/auth/AuthFormCard.vue'
import AuthSplitLayout from '@/components/auth/AuthSplitLayout.vue'
import SocialIconGoogle from '@/components/icons/SocialIconGoogle.vue'
import SocialIconX from '@/components/icons/SocialIconX.vue'

const state = reactive({
  email: '',
  password: '',
  keepLoggedIn: false,
})
const showPassword = ref(false)

const handleSubmit = () => {
  console.log('Form submitted', state)
}
</script>
