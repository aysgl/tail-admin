<template>
  <AuthSplitLayout>
    <ULink
      to="/"
      class="mb-6 inline-flex items-center gap-2 text-sm text-muted dark:text-gray-400 transition-colors hover:text-default dark:hover:text-gray-200"
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
      Sign Up
    </h1>
    <p class="mt-1 text-muted dark:text-gray-400">
      Enter your email and password to sign up!
    </p>

    <AuthFormCard
      :state="state"
      @submit="handleSubmit"
    >
      <template #social>
        <UButton
          color="primary"
          variant="soft"
          block
          class="gap-3 dark:bg-primary-500/20 dark:text-primary-200 dark:hover:bg-primary-500/30 dark:border dark:border-primary-500/30"
        >
          <UIcon
            name="i-simple-icons-google"
            class="size-5"
          />
          Sign up with Google
        </UButton>
        <UButton
          color="primary"
          variant="soft"
          block
          class="gap-3 dark:bg-primary-500/20 dark:text-primary-200 dark:hover:bg-primary-500/30 dark:border dark:border-primary-500/30"
        >
          <UIcon
            name="i-simple-icons-x"
            class="size-5"
          />
          Sign up with X
        </UButton>
      </template>

      <div
        class="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        <UFormField
          label="First Name"
          required
        >
          <UInput
            v-model="state.firstName"
            placeholder="Enter your first name"
            variant="outline"
            color="primary"
            class="w-full"
          />
        </UFormField>
        <UFormField
          label="Last Name"
          required
        >
          <UInput
            v-model="state.lastName"
            placeholder="Enter your last name"
            variant="outline"
            color="primary"
            class="w-full"
          />
        </UFormField>
      </div>

      <UFormField
        label="Email"
        required
      >
        <UInput
          v-model="state.email"
          type="email"
          placeholder="Enter your email"
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
            class="absolute right-1 top-1/2 -translate-y-1/2 dark:text-gray-400 dark:hover:bg-gray-800"
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

      <div class="flex items-start gap-3">
        <UCheckbox
          v-model="state.agreeToTerms"
          color="primary"
          class="mt-0.5"
        />
        <p
          class="text-sm text-muted dark:text-gray-400"
        >
          By creating an account means you agree
          to the
          <span
            class="font-medium text-default dark:text-gray-200"
            >Terms and Conditions</span
          >, and our
          <span
            class="font-medium text-default dark:text-gray-200"
            >Privacy Policy</span
          >
        </p>
      </div>

      <UButton
        type="submit"
        block
        color="primary"
        variant="solid"
        size="lg"
        class="bg-primary-500! text-white! hover:bg-primary-600! dark:bg-primary-500! dark:text-white!"
      >
        Sign Up
      </UButton>

      <template #footer>
        <p
          class="mt-5 text-center text-sm text-muted dark:text-gray-400 sm:text-start"
        >
          Already have an account?
          <ULink
            to="/signin"
            class="text-primary hover:text-primary/80"
          >
            Sign In
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

const state = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  agreeToTerms: false,
})
const showPassword = ref(false)

const handleSubmit = () => {
  console.log('Form submitted', state)
}
</script>
