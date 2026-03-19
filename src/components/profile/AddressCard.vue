<template>
  <div>
    <UCard
      variant="outline"
      :ui="{ root: 'rounded-2xl' }"
    >
      <div
        class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
      >
        <div>
          <h4
            class="mb-6 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6"
          >
            Address
          </h4>
          <div
            class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32"
          >
            <div>
              <p
                class="mb-2 text-xs leading-normal text-gray-600 dark:text-gray-400"
              >
                Country
              </p>
              <p
                class="text-sm font-medium text-gray-800 dark:text-white/90"
              >
                United States
              </p>
            </div>
            <div>
              <p
                class="mb-2 text-xs leading-normal text-gray-600 dark:text-gray-400"
              >
                City/State
              </p>
              <p
                class="text-sm font-medium text-gray-800 dark:text-white/90"
              >
                Phoenix, United States
              </p>
            </div>
            <div>
              <p
                class="mb-2 text-xs leading-normal text-gray-600 dark:text-gray-400"
              >
                Postal Code
              </p>
              <p
                class="text-sm font-medium text-gray-800 dark:text-white/90"
              >
                ERT 2489
              </p>
            </div>
            <div>
              <p
                class="mb-2 text-xs leading-normal text-gray-600 dark:text-gray-400"
              >
                TAX ID
              </p>
              <p
                class="text-sm font-medium text-gray-800 dark:text-white/90"
              >
                AS4568384
              </p>
            </div>
          </div>
        </div>
        <UButton
          color="neutral"
          variant="outline"
          leading-icon="i-lucide-pencil"
          class="edit-button"
          @click="isProfileAddressModal = true"
        >
          Edit
        </UButton>
      </div>
    </UCard>

    <UModal
      v-model:open="isProfileAddressModal"
      title="Edit Address"
      description="Update your details to keep your profile up-to-date."
      :ui="{ content: 'max-w-[700px]' }"
    >
      <template #body>
        <form class="flex flex-col">
          <div
            class="custom-scrollbar overflow-y-auto p-2"
          >
            <div
              class="grid grid-cols-1 gap-5 gap-x-6 lg:grid-cols-2"
            >
              <UFormField label="Country">
                <UInput
                  v-model="form.country"
                  variant="outline"
                  color="neutral"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="City/State">
                <UInput
                  v-model="form.cityState"
                  variant="outline"
                  color="neutral"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="Postal Code">
                <UInput
                  v-model="form.postalCode"
                  variant="outline"
                  color="neutral"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="TAX ID">
                <UInput
                  v-model="form.taxId"
                  variant="outline"
                  color="neutral"
                  class="w-full"
                />
              </UFormField>
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

const isProfileAddressModal = ref(false)

const form = reactive({
  country: 'United States',
  cityState: 'Poenix, Arizona, United States',
  postalCode: 'ERT 2489',
  taxId: 'AS4568384',
})

const saveProfile = (close: () => void) => {
  console.log('Profile saved')
  close()
}
</script>
