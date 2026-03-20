<template>
  <UPageHeader
    headline="Form"
    title="Form"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      <div class="space-y-6">
        <UPageCard
          title="Default Inputs"
          variant="outline"
          :ui="pageCardUi"
        >
          <div class="space-y-6">
            <UFormField label="Input">
              <UInput
                v-model="formData.input"
                variant="outline"
                color="neutral"
                class="w-full"
              />
            </UFormField>
            <UFormField
              label="Input with Placeholder"
            >
              <UInput
                v-model="
                  formData.inputWithPlaceholder
                "
                placeholder="info@gmail.com"
                variant="outline"
                color="neutral"
                class="w-full"
              />
            </UFormField>
            <UFormField label="Select Input">
              <USelect
                v-model="formData.selectInput"
                :items="selectItems"
                placeholder="Select Option"
                variant="outline"
                color="neutral"
                class="w-full"
              />
            </UFormField>
            <UFormField label="Password Input">
              <div class="relative">
                <UInput
                  v-model="formData.password"
                  :type="
                    showPassword
                      ? 'text'
                      : 'password'
                  "
                  placeholder="Enter your password"
                  variant="outline"
                  color="neutral"
                  class="w-full pr-11"
                />
                <UButton
                  type="button"
                  variant="ghost"
                  color="neutral"
                  size="sm"
                  square
                  :icon="
                    showPassword
                      ? 'i-lucide-eye-off'
                      : 'i-lucide-eye'
                  "
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  aria-label="Toggle password visibility"
                  @click="
                    showPassword = !showPassword
                  "
                />
              </div>
            </UFormField>
            <UFormField label="Date Picker Input">
              <UPopover>
                <UButton
                  color="neutral"
                  variant="outline"
                  trailing-icon="i-lucide-chevron-down"
                  class="w-full justify-between"
                >
                  {{
                    dateDisplay || 'Select date'
                  }}
                </UButton>
                <template #content>
                  <VDatePicker
                    v-model="date"
                    mode="date"
                    :masks="{
                      modelValue: 'YYYY-MM-DD',
                    }"
                    :is-dark="{
                      selector: 'html',
                      darkClass: 'dark',
                    }"
                  />
                </template>
              </UPopover>
            </UFormField>
            <UFormField label="Time Select Input">
              <UPopover>
                <UButton
                  color="neutral"
                  variant="outline"
                  trailing-icon="i-lucide-chevron-down"
                  class="w-full justify-between"
                >
                  {{
                    timeDisplay || 'Select time'
                  }}
                </UButton>
                <template #content>
                  <VDatePicker
                    v-model="time"
                    mode="time"
                    :is24hr="false"
                    :is-dark="{
                      selector: 'html',
                      darkClass: 'dark',
                    }"
                  />
                </template>
              </UPopover>
            </UFormField>
            <UFormField
              label="Input with Payment"
            >
              <UInput
                v-model="formData.cardNumber"
                placeholder="Card number"
                leading-icon="i-lucide-credit-card"
                variant="outline"
                color="neutral"
                class="w-full"
              />
            </UFormField>
          </div>
        </UPageCard>

        <UPageCard
          title="Select Inputs"
          variant="outline"
          :ui="pageCardUi"
        >
          <div class="space-y-6">
            <UFormField label="Select Input">
              <USelect
                v-model="singleSelect"
                :items="selectItems"
                placeholder="Select Option"
                variant="outline"
                color="neutral"
                class="w-full"
              />
            </UFormField>
            <UFormField label="Multiple Select">
              <USelect
                v-model="selectedItems"
                :items="multiSelectOptions"
                multiple
                placeholder="Select items..."
                variant="outline"
                color="neutral"
                value-key="value"
                class="w-full"
              />
            </UFormField>
          </div>
        </UPageCard>

        <UPageCard
          title="Textarea"
          variant="outline"
          :ui="pageCardUi"
        >
          <div class="space-y-6">
            <UFormField label="Description">
              <UTextarea
                v-model="normalDescription"
                placeholder="Enter a description..."
                :rows="6"
                variant="outline"
                color="neutral"
                class="w-full"
              />
            </UFormField>
            <UFormField label="Description">
              <UTextarea
                v-model="disabledDescription"
                placeholder="Enter a description..."
                :rows="6"
                disabled
                variant="outline"
                color="neutral"
                class="w-full"
              />
            </UFormField>
            <UFormField
              label="Description"
              error="Please enter a message in the textarea."
            >
              <UTextarea
                v-model="errorDescription"
                placeholder="Enter a description..."
                :rows="6"
                color="error"
                variant="outline"
                class="w-full"
              />
            </UFormField>
          </div>
        </UPageCard>

        <UPageCard
          title="Input States"
          variant="outline"
          :ui="pageCardUi"
        >
          <div class="space-y-6">
            <UFormField
              label="Email"
              error="This is an error message."
            >
              <UInput
                v-model="errorEmail"
                color="error"
                variant="outline"
                trailing-icon="i-lucide-circle-alert"
                class="w-full"
              />
            </UFormField>
            <UFormField
              label="Email"
              help="This is a success message."
            >
              <UInput
                v-model="successEmail"
                color="success"
                variant="outline"
                trailing-icon="i-lucide-circle-check"
                class="w-full"
              />
            </UFormField>
            <UFormField label="Email">
              <UInput
                placeholder="info@gmail.com"
                disabled
                variant="outline"
                color="neutral"
                class="w-full"
              />
            </UFormField>
          </div>
        </UPageCard>
      </div>

      <div class="space-y-6">
        <UPageCard
          title="Inputs Group"
          variant="outline"
          :ui="pageCardUi"
        >
          <div class="space-y-6">
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
            <UFormField label="Phone">
              <div
                class="flex w-full overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700"
              >
                <USelect
                  v-model="selectedCountry"
                  :items="countrySelectItems"
                  class="w-24 shrink-0 border-0 border-r border-gray-200 dark:border-gray-800 [&_[data-slot=trigger]]:rounded-none [&_[data-slot=trigger]]:border-0"
                  @update:model-value="
                    updatePhoneNumber
                  "
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
                  @update:model-value="
                    updatePhoneNumber2
                  "
                />
              </div>
            </UFormField>
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
        </UPageCard>

        <UPageCard
          title="File Input"
          variant="outline"
          :ui="pageCardUi"
        >
          <UFormField label="Upload file">
            <UInput
              type="file"
              variant="outline"
              color="neutral"
              class="w-full file:mr-4 file:rounded-lg file:border-0 file:bg-gray-100 file:px-4 file:py-2.5 file:text-sm file:font-medium file:text-gray-700 hover:file:bg-gray-200 dark:file:bg-gray-800 dark:file:text-gray-300 dark:hover:file:bg-gray-700"
            />
          </UFormField>
        </UPageCard>

        <UPageCard
          title="Checkboxes"
          variant="outline"
          :ui="pageCardUi"
        >
          <div
            class="flex flex-wrap items-center gap-8"
          >
            <UCheckbox
              v-model="checkboxOne"
              label="Default"
              color="primary"
            />
            <UCheckbox
              v-model="checkboxTwo"
              label="Checked"
              color="primary"
            />
            <UCheckbox
              v-model="checkboxThree"
              label="Disabled"
              disabled
              color="primary"
            />
          </div>
        </UPageCard>

        <UPageCard
          title="Dropzone"
          variant="outline"
          :ui="pageCardUi"
        >
          <UFileUpload
            v-model="dropzoneFiles"
            label="Drag & Drop File Here"
            description="Drag and drop your PNG, JPG, WebP, SVG images here or browse"
            accept="image/jpeg,image/png,image/gif,image/webp,image/svg+xml"
            icon="i-lucide-upload"
            variant="area"
            color="neutral"
            class="w-full min-h-48"
          />
        </UPageCard>
      </div>
    </div>
  </UPageBody>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import { pageCardUi } from '@/config/cardUi'

const breadcrumbItems = usePageBreadcrumb(
  'Form',
  'Form',
)

const showPassword = ref(false)
const formData = reactive({
  input: '',
  inputWithPlaceholder: '',
  selectInput: '',
  password: '',
  cardNumber: '',
})
const selectItems = [
  { label: 'Marketing', value: 'marketing' },
  { label: 'Template', value: 'template' },
  { label: 'Development', value: 'development' },
]
const date = ref<Date | null>(null)
const time = ref<Date | null>(null)
const dateDisplay = computed(() =>
  date.value
    ? date.value.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '',
)
const timeDisplay = computed(() =>
  time.value
    ? time.value.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
    : '',
)

const singleSelect = ref('')
const selectedItems = ref<string[]>([])
const multiSelectOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'graphs', label: 'Graphs' },
]

const normalDescription = ref('')
const disabledDescription = ref(
  'This textarea is disabled',
)
const errorDescription = ref('')

const errorEmail = ref('demoemail')
const successEmail = ref('demoemail@gmail.com')

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

const checkboxOne = ref(false)
const checkboxTwo = ref(true)
const checkboxThree = ref(true)

const dropzoneFiles = ref(null)
</script>
