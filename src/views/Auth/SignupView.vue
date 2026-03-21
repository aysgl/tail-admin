<template>
  <AuthSplitLayout>
    <AuthPageHeader
      title="Sign Up"
      description="Enter your email and password to sign up!" />

    <AuthFormCard
      :state="state"
      @submit="handleSubmit">
      <template #social>
        <AuthSocialButtons action="Sign up" />
      </template>

      <div
        class="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <UFormField
          label="First Name"
          required>
          <UInput
            v-model="state.firstName"
            placeholder="Enter your first name"
            variant="outline"
            color="primary"
            class="w-full" />
        </UFormField>
        <UFormField
          label="Last Name"
          required>
          <UInput
            v-model="state.lastName"
            placeholder="Enter your last name"
            variant="outline"
            color="primary"
            class="w-full" />
        </UFormField>
      </div>

      <UFormField
        label="Email"
        required>
        <UInput
          v-model="state.email"
          type="email"
          placeholder="Enter your email"
          variant="outline"
          color="primary"
          class="w-full" />
      </UFormField>

      <AuthPasswordField
        v-model="state.password"
        placeholder="Enter your password" />

      <div class="flex items-start gap-3">
        <UCheckbox
          v-model="state.agreeToTerms"
          color="primary"
          class="mt-0.5" />
        <p class="text-sm text-muted">
          By creating an account means you agree
          to the
          <span
            class="font-medium text-highlighted"
            >Terms and Conditions</span
          >, and our
          <span
            class="font-medium text-highlighted"
            >Privacy Policy</span
          >
        </p>
      </div>

      <AuthPrimaryButton>
        Sign Up
      </AuthPrimaryButton>

      <template #footer>
        <p
          class="mt-5 text-center text-sm text-muted sm:text-start">
          Already have an account?
          <ULink
            to="/signin"
            class="text-highlighted hover:opacity-80">
            Sign In
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
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  agreeToTerms: false,
})

const handleSubmit = () => {}
</script>
