<template>
  <div>
    <UPageCard
      title="Address"
      variant="outline"
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
                Country
              </p>
              <p
                class="text-sm font-medium text-highlighted"
              >
                United States
              </p>
            </div>
            <div>
              <p
                class="mb-2 text-xs leading-normal text-muted"
              >
                City/State
              </p>
              <p
                class="text-sm font-medium text-highlighted"
              >
                Phoenix, United States
              </p>
            </div>
            <div>
              <p
                class="mb-2 text-xs leading-normal text-muted"
              >
                Postal Code
              </p>
              <p
                class="text-sm font-medium text-highlighted"
              >
                ERT 2489
              </p>
            </div>
            <div>
              <p
                class="mb-2 text-xs leading-normal text-muted"
              >
                TAX ID
              </p>
              <p
                class="text-sm font-medium text-highlighted"
              >
                AS4568384
              </p>
            </div>
          </div>
        </div>
        <UButton
          color="primary"
          variant="outline"
          leading-icon="i-lucide-pencil"
          class="w-full lg:w-auto"
          @click="isProfileAddressModal = true"
        >
          Edit
        </UButton>
      </div>
    </UPageCard>

    <UModal
      v-model:open="isProfileAddressModal"
      title="Edit Address"
      description="Update your details to keep your profile up-to-date."
    >
      <template #body>
        <form class="flex flex-col">
          <div class="overflow-y-auto p-2">
            <div
              class="grid grid-cols-1 gap-5 gap-x-6 lg:grid-cols-2"
            >
              <UFormField label="Country">
                <UInput
                  v-model="form.country"
                  variant="outline"
                  color="primary"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="City/State">
                <UInput
                  v-model="form.cityState"
                  variant="outline"
                  color="primary"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="Postal Code">
                <UInput
                  v-model="form.postalCode"
                  variant="outline"
                  color="primary"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="TAX ID">
                <UInput
                  v-model="form.taxId"
                  variant="outline"
                  color="primary"
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
            color="primary"
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
