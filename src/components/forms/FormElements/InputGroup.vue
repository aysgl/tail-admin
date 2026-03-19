<template>
  <div class="space-y-6">
    <!-- Email Input -->
    <UFormField label="Email">
      <UInput
        v-model="email"
        placeholder="info@gmail.com"
        leading-icon="i-lucide-mail"
        variant="outline"
        color="neutral"
        class="w-full"
      />
    </UFormField>

    <!-- Phone Input with Prepended Country Code -->
    <UFormField label="Phone">
      <div
        class="flex w-full overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700"
      >
        <USelect
          v-model="selectedCountry"
          :items="countrySelectItems"
          class="w-24 shrink-0 border-0 border-r border-gray-200 dark:border-gray-800 [&_[data-slot=trigger]]:rounded-none [&_[data-slot=trigger]]:border-0"
          @update:model-value="updatePhoneNumber"
        />
        <UInput
          v-model="phoneNumber"
          placeholder="+1 (555) 000-0000"
          type="tel"
          variant="none"
          class="min-w-0 flex-1 rounded-none border-0 focus:ring-0"
        />
      </div>
    </UFormField>

    <!-- Phone Input with Appended Country Code -->
    <UFormField label="Phone">
      <div
        class="flex w-full overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700"
      >
        <UInput
          v-model="phoneNumber2"
          placeholder="+1 (555) 000-0000"
          type="tel"
          variant="none"
          class="min-w-0 flex-1 rounded-none border-0 focus:ring-0"
        />
        <USelect
          v-model="selectedCountry2"
          :items="countrySelectItems"
          class="w-24 shrink-0 border-0 border-l border-gray-200 dark:border-gray-800 [&_[data-slot=trigger]]:rounded-none [&_[data-slot=trigger]]:border-0"
          @update:model-value="updatePhoneNumber2"
        />
      </div>
    </UFormField>

    <!-- URL Input -->
    <UFormField label="URL">
      <div
        class="flex w-full overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700"
      >
        <span
          class="flex items-center border-r border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400"
        >
          http://
        </span>
        <UInput
          v-model="url"
          placeholder="www.tailadmin.com"
          type="url"
          variant="none"
          class="min-w-0 flex-1 rounded-none border-0 focus:ring-0"
        />
      </div>
    </UFormField>

    <!-- Website Input with Copy Button -->
    <UFormField label="Website">
      <div
        class="flex w-full overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700"
      >
        <UInput
          v-model="website"
          type="url"
          variant="none"
          class="min-w-0 flex-1 rounded-none border-0 focus:ring-0"
        />
        <UButton
          color="neutral"
          variant="ghost"
          size="sm"
          class="shrink-0 rounded-none border-l border-gray-200 dark:border-gray-800"
          @click="copyWebsite"
        >
          <UIcon
            name="i-lucide-copy"
            class="size-4"
          />
          {{ copyText }}
        </UButton>
      </div>
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const selectedCountry = ref('US')
const selectedCountry2 = ref('US')
const phoneNumber = ref('')
const phoneNumber2 = ref('')
const url = ref('')
const website = ref('www.tailadmin.com')
const copyText = ref('Copy')

const countrySelectItems = [
  { label: 'US +1', value: 'US' },
  { label: 'GB +44', value: 'GB' },
  { label: 'CA +1', value: 'CA' },
  { label: 'AU +61', value: 'AU' },
]

const countryCodes: Record<string, string> = {
  US: '+1',
  GB: '+44',
  CA: '+1',
  AU: '+61',
}

const updatePhoneNumber = () => {
  phoneNumber.value =
    countryCodes[selectedCountry.value] ?? ''
}

const updatePhoneNumber2 = () => {
  phoneNumber2.value =
    countryCodes[selectedCountry2.value] ?? ''
}

const copyWebsite = () => {
  navigator.clipboard.writeText(website.value)
  copyText.value = 'Copied!'
  setTimeout(() => {
    copyText.value = 'Copy'
  }, 2000)
}
</script>
