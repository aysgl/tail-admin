<template>
  <div>
    <UPageCard
      title="Personal Information"
      variant="outline"
      :ui="{ ...pageCardUi }"
    >
      <div
        class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
      >
        <div>
          <div
            class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32"
          >
            <div>
              <p
                class="mb-2 text-xs leading-normal text-muted"
              >
                First Name
              </p>
              <p
                class="text-sm font-medium text-default"
              >
                Musharof
              </p>
            </div>
            <div>
              <p
                class="mb-2 text-xs leading-normal text-muted"
              >
                Last Name
              </p>
              <p
                class="text-sm font-medium text-default"
              >
                Chowdhury
              </p>
            </div>
            <div>
              <p
                class="mb-2 text-xs leading-normal text-muted"
              >
                Email address
              </p>
              <p
                class="text-sm font-medium text-default"
              >
                randomuser@pimjo.com
              </p>
            </div>
            <div>
              <p
                class="mb-2 text-xs leading-normal text-muted"
              >
                Phone
              </p>
              <p
                class="text-sm font-medium text-default"
              >
                +09 363 398 46
              </p>
            </div>
            <div>
              <p
                class="mb-2 text-xs leading-normal text-muted"
              >
                Bio
              </p>
              <p
                class="text-sm font-medium text-default"
              >
                Team Manager
              </p>
            </div>
          </div>
        </div>
        <UButton
          color="neutral"
          variant="outline"
          leading-icon="i-lucide-pencil"
          class="w-full lg:w-auto"
          @click="isProfileInfoModal = true"
        >
          Edit
        </UButton>
      </div>
    </UPageCard>

    <UModal
      v-model:open="isProfileInfoModal"
      title="Edit Personal Information"
      description="Update your details to keep your profile up-to-date."
      :ui="{ content: 'max-w-[700px]' }"
    >
      <template #body>
        <form class="flex flex-col">
          <div
            class="custom-scrollbar max-h-[458px] space-y-7 overflow-y-auto p-2"
          >
            <div>
              <h5
                class="mb-5 text-lg font-medium text-default lg:mb-6"
              >
                Social Links
              </h5>
              <div
                class="grid grid-cols-1 gap-5 gap-x-6 lg:grid-cols-2"
              >
                <UFormField label="Facebook">
                  <UInput
                    v-model="form.facebook"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
                <UFormField label="X.com">
                  <UInput
                    v-model="form.x"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
                <UFormField label="Linkedin">
                  <UInput
                    v-model="form.linkedin"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
                <UFormField label="Instagram">
                  <UInput
                    v-model="form.instagram"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
              </div>
            </div>
            <div>
              <h5
                class="mb-5 text-lg font-medium text-default lg:mb-6"
              >
                Personal Information
              </h5>
              <div
                class="grid grid-cols-1 gap-5 gap-x-6 lg:grid-cols-2"
              >
                <UFormField label="First Name">
                  <UInput
                    v-model="form.firstName"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
                <UFormField label="Last Name">
                  <UInput
                    v-model="form.lastName"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
                <UFormField label="Email Address">
                  <UInput
                    v-model="form.email"
                    type="email"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
                <UFormField label="Phone">
                  <UInput
                    v-model="form.phone"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
                <UFormField
                  label="Bio"
                  class="col-span-2"
                >
                  <UInput
                    v-model="form.bio"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
              </div>
            </div>
          </div>
        </form>
      </template>
      <template #footer="{ close }">
        <div
          class="flex w-full gap-3 lg:justify-end"
        >
          <UButton
            color="neutral"
            variant="outline"
            class="flex-1 lg:flex-initial"
            @click="close()"
          >
            Close
          </UButton>
          <UButton
            color="primary"
            class="flex-1 lg:flex-initial"
            @click="saveProfile(close)"
          >
            Save Changes
          </UButton>
        </div>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { pageCardUi } from '@/config/cardUi'
import { ref, reactive } from 'vue'

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
  console.log('Profile saved')
  close()
}
</script>
