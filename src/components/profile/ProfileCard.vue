<template>
  <div>
    <UCard
      variant="outline"
      :ui="{ root: 'mb-6 rounded-2xl' }"
    >
      <div
        class="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between"
      >
        <div
          class="flex w-full flex-col items-center gap-6 xl:flex-row"
        >
          <UAvatar
            src="/images/user/owner.jpg"
            alt="user"
            size="xl"
            class="size-20"
          />
          <div class="order-3 xl:order-2">
            <h4
              class="mb-2 text-center text-lg font-semibold text-gray-800 dark:text-white/90 xl:text-left"
            >
              Musharof Chowdhury
            </h4>
            <div
              class="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left"
            >
              <p
                class="text-sm text-gray-600 dark:text-gray-400"
              >
                Team Manager
              </p>
              <div
                class="hidden h-3.5 w-px bg-gray-300 xl:block dark:bg-gray-700"
              />
              <p
                class="text-sm text-gray-600 dark:text-gray-400"
              >
                Arizona, United States
              </p>
            </div>
          </div>
          <div
            class="order-2 flex grow items-center gap-2 xl:order-3 xl:justify-end"
          >
            <UButton
              v-for="link in socialLinks"
              :key="link.href"
              as="a"
              :href="link.href"
              color="neutral"
              variant="outline"
              size="sm"
              :icon="link.icon"
              :aria-label="link.label"
              target="_blank"
              rel="noopener"
              class="size-11 rounded-full"
            />
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
    </UCard>

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
                class="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6"
              >
                Social Links
              </h5>
              <div
                class="grid grid-cols-1 gap-5 gap-x-6 lg:grid-cols-2"
              >
                <UFormField
                  v-for="field in socialFields"
                  :key="field.id"
                  :label="field.label"
                >
                  <UInput
                    v-model="field.value"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
              </div>
            </div>
            <div>
              <h5
                class="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6"
              >
                Personal Information
              </h5>
              <div
                class="grid grid-cols-1 gap-5 gap-x-6 lg:grid-cols-2"
              >
                <UFormField label="First Name">
                  <UInput
                    v-model="profile.firstName"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
                <UFormField label="Last Name">
                  <UInput
                    v-model="profile.lastName"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
                <UFormField label="Email Address">
                  <UInput
                    v-model="profile.email"
                    type="email"
                    variant="outline"
                    color="neutral"
                    class="w-full"
                  />
                </UFormField>
                <UFormField label="Phone">
                  <UInput
                    v-model="profile.phone"
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
                    v-model="profile.bio"
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
import { ref, reactive } from 'vue'

const isProfileInfoModal = ref(false)

const socialLinks = [
  {
    href: 'https://www.facebook.com/PimjoHQ',
    icon: 'i-lucide-facebook',
    label: 'Facebook',
  },
  {
    href: 'https://x.com/PimjoHQ',
    icon: 'i-lucide-twitter',
    label: 'X (Twitter)',
  },
  {
    href: 'https://www.linkedin.com/company/pimjo/',
    icon: 'i-lucide-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/PimjoHQ',
    icon: 'i-lucide-instagram',
    label: 'Instagram',
  },
]

const socialFields = reactive([
  {
    id: 'facebook',
    label: 'Facebook',
    value: 'https://www.facebook.com/PimjoHQ',
  },
  {
    id: 'x',
    label: 'X.com',
    value: 'https://x.com/PimjoHQ',
  },
  {
    id: 'linkedin',
    label: 'Linkedin',
    value:
      'https://www.linkedin.com/company/pimjo/posts/?feedView=all',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: 'https://instagram.com/PimjoHQ',
  },
])

const profile = reactive({
  firstName: 'Musharof',
  lastName: 'Chowdhury',
  email: 'randomuser@pimjo.com',
  phone: '+09 363 398 46',
  bio: 'Team Manager',
})

const saveProfile = (close: () => void) => {
  console.log('Profile saved')
  close()
}
</script>
