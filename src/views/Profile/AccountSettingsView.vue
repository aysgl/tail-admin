<template>
  <UPageCard
    title="Email Address"
    variant="outline">
    <div class="space-y-4 max-w-md">
      <UFormField label="Current email">
        <UInput
          v-model="email"
          v-bind="FORM_INPUT_PROPS"
          type="email"
          placeholder="your@email.com" />
      </UFormField>
      <UButton
        color="primary"
        variant="outline"
        size="sm">
        Update email
      </UButton>
    </div>
  </UPageCard>

  <UPageCard
    title="Change Password"
    variant="outline">
    <div class="space-y-4 max-w-md">
      <UFormField label="Current password">
        <UInput
          v-model="currentPassword"
          v-bind="FORM_INPUT_PROPS"
          type="password"
          placeholder="••••••••" />
      </UFormField>
      <UFormField label="New password">
        <UInput
          v-model="newPassword"
          v-bind="FORM_INPUT_PROPS"
          type="password"
          placeholder="••••••••" />
      </UFormField>
      <UFormField label="Confirm new password">
        <UInput
          v-model="confirmPassword"
          v-bind="FORM_INPUT_PROPS"
          type="password"
          placeholder="••••••••" />
      </UFormField>
      <UButton
        color="primary"
        variant="outline"
        size="sm">
        Update password
      </UButton>
    </div>
  </UPageCard>

  <UPageCard
    title="Notifications"
    variant="outline">
    <div class="space-y-4 max-w-md">
      <div
        class="flex items-center justify-between">
        <div>
          <h3
            class="text-lg font-semibold text-highlighted">
            Email notifications
          </h3>
          <p class="text-sm text-muted">
            Receive emails about your account
            activity
          </p>
        </div>
        <UCheckbox
          v-model="emailNotifications"
          color="primary" />
      </div>
      <div
        class="flex items-center justify-between">
        <div>
          <h3
            class="text-lg font-semibold text-highlighted">
            Marketing emails
          </h3>
          <p class="text-sm text-muted">
            Receive emails about new features and
            offers
          </p>
        </div>
        <UCheckbox
          v-model="marketingEmails"
          color="primary" />
      </div>
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FORM_INPUT_PROPS } from '@/constants/formInput'

const email = ref('randomuser@pimjo.com')
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const emailNotifications = ref(true)
const marketingEmails = ref(false)
</script>
