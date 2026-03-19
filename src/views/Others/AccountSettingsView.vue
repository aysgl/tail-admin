<template>
  <AdminLayout>
    <PageBreadcrumb
      :pageTitle="currentPageTitle"
    />

    <UPage>
      <UPageHeader
        title="Account Settings"
        description="Manage your account preferences and security settings."
      />

      <UPageBody>
        <!-- Email Section -->
        <div
          class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"
        >
          <h4
            class="mb-6 text-lg font-semibold text-gray-800 dark:text-white/90"
          >
            Email Address
          </h4>
          <div class="space-y-4 max-w-md">
            <UFormField label="Current email">
              <UInput
                v-model="email"
                type="email"
                placeholder="your@email.com"
                variant="outline"
                color="neutral"
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
        </div>

        <!-- Password Section -->
        <div
          class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"
        >
          <h4
            class="mb-6 text-lg font-semibold text-gray-800 dark:text-white/90"
          >
            Change Password
          </h4>
          <div class="space-y-4 max-w-md">
            <UFormField label="Current password">
              <UInput
                v-model="currentPassword"
                type="password"
                placeholder="••••••••"
                variant="outline"
                color="neutral"
                class="w-full"
              />
            </UFormField>
            <UFormField label="New password">
              <UInput
                v-model="newPassword"
                type="password"
                placeholder="••••••••"
                variant="outline"
                color="neutral"
                class="w-full"
              />
            </UFormField>
            <UFormField
              label="Confirm new password"
            >
              <UInput
                v-model="confirmPassword"
                type="password"
                placeholder="••••••••"
                variant="outline"
                color="neutral"
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
        </div>

        <!-- Notifications Section -->
        <div
          class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"
        >
          <h4
            class="mb-6 text-lg font-semibold text-gray-800 dark:text-white/90"
          >
            Notifications
          </h4>
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
                  Receive emails about your
                  account activity
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
                  Receive emails about new
                  features and offers
                </p>
              </div>
              <UCheckbox
                v-model="marketingEmails"
                color="primary"
              />
            </div>
          </div>
        </div>
      </UPageBody>
    </UPage>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'

const currentPageTitle = ref('Account Settings')
const email = ref('randomuser@pimjo.com')
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const emailNotifications = ref(true)
const marketingEmails = ref(false)
</script>
