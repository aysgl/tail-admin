<template>
  <div>
    <UPageCard
      title="Personal Information"
      variant="outline">
      <div
        class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div
            class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <ProfileInfoField
              label="First Name"
              value="Musharof" />
            <ProfileInfoField
              label="Last Name"
              value="Chowdhury" />
            <ProfileInfoField
              label="Email address"
              value="randomuser@pimjo.com" />
            <ProfileInfoField
              label="Phone"
              value="+09 363 398 46" />
            <ProfileInfoField
              label="Bio"
              value="Team Manager" />
          </div>
        </div>
        <UButton
          color="primary"
          variant="outline"
          leading-icon="i-lucide-pencil"
          class="w-full lg:w-auto"
          @click="isProfileInfoModal = true">
          Edit
        </UButton>
      </div>
    </UPageCard>

    <UModal
      v-model:open="isProfileInfoModal"
      title="Edit Personal Information"
      description="Update your details to keep your profile up-to-date.">
      <template #body>
        <form class="flex flex-col">
          <div
            class="max-h-[458px] space-y-7 overflow-y-auto p-2">
            <div>
              <h5
                class="mb-5 text-lg font-medium text-highlighted lg:mb-6">
                Social Links
              </h5>
              <div
                class="grid grid-cols-1 gap-5 gap-x-6 lg:grid-cols-2">
                <UFormField label="Facebook">
                  <UInput
                    v-model="form.facebook"
                    variant="outline"
                    color="primary"
                    class="w-full" />
                </UFormField>
                <UFormField label="X.com">
                  <UInput
                    v-model="form.x"
                    variant="outline"
                    color="primary"
                    class="w-full" />
                </UFormField>
                <UFormField label="Linkedin">
                  <UInput
                    v-model="form.linkedin"
                    variant="outline"
                    color="primary"
                    class="w-full" />
                </UFormField>
                <UFormField label="Instagram">
                  <UInput
                    v-model="form.instagram"
                    variant="outline"
                    color="primary"
                    class="w-full" />
                </UFormField>
              </div>
            </div>
            <div>
              <h5
                class="mb-5 text-lg font-medium text-highlighted lg:mb-6">
                Personal Information
              </h5>
              <div
                class="grid grid-cols-1 gap-5 gap-x-6 lg:grid-cols-2">
                <UFormField label="First Name">
                  <UInput
                    v-model="form.firstName"
                    variant="outline"
                    color="primary"
                    class="w-full" />
                </UFormField>
                <UFormField label="Last Name">
                  <UInput
                    v-model="form.lastName"
                    variant="outline"
                    color="primary"
                    class="w-full" />
                </UFormField>
                <UFormField label="Email Address">
                  <UInput
                    v-model="form.email"
                    type="email"
                    variant="outline"
                    color="primary"
                    class="w-full" />
                </UFormField>
                <UFormField label="Phone">
                  <UInput
                    v-model="form.phone"
                    variant="outline"
                    color="primary"
                    class="w-full" />
                </UFormField>
                <UFormField
                  label="Bio"
                  class="col-span-2">
                  <UInput
                    v-model="form.bio"
                    variant="outline"
                    color="primary"
                    class="w-full" />
                </UFormField>
              </div>
            </div>
          </div>
        </form>
      </template>
      <template #footer="{ close }">
        <ProfileEditModalFooter
          :close="close"
          @save="saveProfile" />
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import ProfileEditModalFooter from './ProfileEditModalFooter.vue'
import ProfileInfoField from './ProfileInfoField.vue'

const isProfileInfoModal = ref(false)

const form = reactive({
  facebook: 'https://www.facebook.com/PimjoHQ',
  x: 'https://x.com/PimjoHQ',
  linkedin:
    'https://www.linkedin.com/company/pimjo/posts/?feedView=all',
  instagram: 'https://instagram.com/PimjoHQ',
  firstName: 'Musharof',
  lastName: 'Chowdhury',
  email: 'emirhanboruch55@gmail.com',
  phone: '+09 363 398 46',
  bio: 'Team Manager',
})

const saveProfile = (close: () => void) => {
  close()
}
</script>
