<template>
  <div>
    <UPageCard
      title="Address"
      variant="outline">
      <div
        class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div
            class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <ProfileInfoField
              label="Country"
              value="United States" />
            <ProfileInfoField
              label="City/State"
              value="Phoenix, United States" />
            <ProfileInfoField
              label="Postal Code"
              value="ERT 2489" />
            <ProfileInfoField
              label="TAX ID"
              value="AS4568384" />
          </div>
        </div>
        <UButton
          color="primary"
          variant="outline"
          leading-icon="i-lucide-pencil"
          class="w-full lg:w-auto"
          @click="isProfileAddressModal = true">
          Edit
        </UButton>
      </div>
    </UPageCard>

    <UModal
      v-model:open="isProfileAddressModal"
      title="Edit Address"
      description="Update your details to keep your profile up-to-date.">
      <template #body>
        <UForm class="flex flex-col">
          <div class="overflow-y-auto p-2">
            <div
              class="grid grid-cols-1 gap-5 gap-x-6 lg:grid-cols-2">
              <UFormField label="Country">
                <UInput
                  v-model="form.country"
                  variant="outline"
                  color="primary"
                  class="w-full" />
              </UFormField>
              <UFormField label="City/State">
                <UInput
                  v-model="form.cityState"
                  variant="outline"
                  color="primary"
                  class="w-full" />
              </UFormField>
              <UFormField label="Postal Code">
                <UInput
                  v-model="form.postalCode"
                  variant="outline"
                  color="primary"
                  class="w-full" />
              </UFormField>
              <UFormField label="TAX ID">
                <UInput
                  v-model="form.taxId"
                  variant="outline"
                  color="primary"
                  class="w-full" />
              </UFormField>
            </div>
          </div>
        </UForm>
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

const isProfileAddressModal = ref(false)

const form = reactive({
  country: 'United States',
  cityState: 'Poenix, Arizona, United States',
  postalCode: 'ERT 2489',
  taxId: 'AS4568384',
})

const saveProfile = (close: () => void) => {
  close()
}
</script>
