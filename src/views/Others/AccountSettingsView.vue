<template>
  <UPageHeader
    headline="Account"
    title="Account Settings"
    description="Manage your account preferences and security settings."
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <UPageCard
      title="Email Address"
      variant="outline"
    >
      <div class="space-y-4 max-w-md">
        <UFormField label="Current email">
          <UInput
            v-model="email"
            type="email"
            placeholder="your@email.com"
            variant="outline"
            color="primary"
            class="w-full"
          />
        </UFormField>
        <UButton
          color="primary"
          variant="outline"
          size="sm"
        >
          Update email
        </UButton>
      </div>
    </UPageCard>

    <UPageCard
      title="Change Password"
      variant="outline"
    >
      <div class="space-y-4 max-w-md">
        <UFormField label="Current password">
          <UInput
            v-model="currentPassword"
            type="password"
            placeholder="••••••••"
            variant="outline"
            color="primary"
            class="w-full"
          />
        </UFormField>
        <UFormField label="New password">
          <UInput
            v-model="newPassword"
            type="password"
            placeholder="••••••••"
            variant="outline"
            color="primary"
            class="w-full"
          />
        </UFormField>
        <UFormField label="Confirm new password">
          <UInput
            v-model="confirmPassword"
            type="password"
            placeholder="••••••••"
            variant="outline"
            color="primary"
            class="w-full"
          />
        </UFormField>
        <UButton
          color="primary"
          variant="outline"
          size="sm"
        >
          Update password
        </UButton>
      </div>
    </UPageCard>

    <UPageCard
      title="Notifications"
      variant="outline"
    >
      <div class="space-y-4 max-w-md">
        <div
          class="flex items-center justify-between"
        >
          <div>
            <p
              class="font-medium text-gray-800 dark:text-white/90"
            >
              Email notifications
            </p>
            <p
              class="text-sm text-gray-600 dark:text-gray-400"
            >
              Receive emails about your account
              activity
            </p>
          </div>
          <UCheckbox
            v-model="emailNotifications"
            color="primary"
          />
        </div>
        <div
          class="flex items-center justify-between"
        >
          <div>
            <p
              class="font-medium text-gray-800 dark:text-white/90"
            >
              Marketing emails
            </p>
            <p
              class="text-sm text-gray-600 dark:text-gray-400"
            >
              Receive emails about new features
              and offers
            </p>
          </div>
          <UCheckbox
            v-model="marketingEmails"
            color="primary"
          />
        </div>
      </div>
    </UPageCard>
  </UPageBody>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
const breadcrumbItems = usePageBreadcrumb(
  'Account',
  'Account Settings',
)
const email = ref('randomuser@pimjo.com')
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const emailNotifications = ref(true)
const marketingEmails = ref(false)
</script>
