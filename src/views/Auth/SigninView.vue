<template>
  <AuthSplitLayout>
    <AuthPageHeader
      title="Sign In"
      description="Enter your email and password to sign in!" />

    <AuthFormCard
      :state="state"
      @submit="handleSubmit">
      <template #social>
        <AuthSocialButtons action="Sign in" />
      </template>

      <UFormField
        label="Email"
        required>
        <UInput
          v-model="state.email"
          type="email"
          placeholder="info@gmail.com"
          variant="outline"
          color="primary"
          class="w-full" />
      </UFormField>

      <AuthPasswordField
        v-model="state.password"
        placeholder="Enter your password" />

      <div
        class="flex items-center justify-between">
        <UCheckbox
          v-model="state.keepLoggedIn"
          label="Keep me logged in"
          color="primary" />
        <ULink
          to="/reset-password"
          class="text-sm text-highlighted hover:opacity-80">
          Forgot password?
        </ULink>
      </div>

      <AuthPrimaryButton>
        Sign In
      </AuthPrimaryButton>

      <template #footer>
        <p
          class="mt-5 text-center text-sm text-muted sm:text-start">
          Don't have an account?
          <ULink
            to="/signup"
            class="text-highlighted hover:opacity-80">
            Sign Up
          </ULink>
        </p>
      </template>
    </AuthFormCard>
  </AuthSplitLayout>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import AuthFormCard from '@/components/auth/AuthFormCard.vue'
import AuthPageHeader from '@/components/auth/AuthPageHeader.vue'
import AuthPasswordField from '@/components/auth/AuthPasswordField.vue'
import AuthPrimaryButton from '@/components/auth/AuthPrimaryButton.vue'
import AuthSocialButtons from '@/components/auth/AuthSocialButtons.vue'
import AuthSplitLayout from '@/components/auth/AuthSplitLayout.vue'

const state = reactive({
  email: '',
  password: '',
  keepLoggedIn: false,
})

const handleSubmit = () => {}
</script>
