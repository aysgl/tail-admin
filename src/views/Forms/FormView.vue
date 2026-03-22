<template>
  <div
    class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div class="space-y-6">
      <UPageCard
        title="Default Inputs"
        variant="outline">
        <div class="space-y-6">
          <UFormField label="Input">
            <UInput
              v-model="formData.input"
              class="w-full" />
          </UFormField>
          <UFormField
            label="Input with Placeholder">
            <UInput
              v-model="
                formData.inputWithPlaceholder
              "
              placeholder="info@gmail.com"
              class="w-full" />
          </UFormField>
          <UFormField label="Select Input">
            <USelect
              v-model="formData.selectInput"
              :items="selectItems"
              placeholder="Select Option"
              class="w-full" />
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
                class="w-full pr-11" />
              <UButton
                type="button"
                variant="ghost"
                color="primary"
                size="sm"
                square
                :icon="
                  showPassword
                    ? 'i-lucide-eye-off'
                    : 'i-lucide-eye'
                "
                class="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text"
                aria-label="Toggle password visibility"
                @click="
                  showPassword = !showPassword
                " />
            </div>
          </UFormField>
          <UFormField label="Date Picker Input">
            <UPopover>
              <UButton
                color="primary"
                variant="outline"
                trailing-icon="i-lucide-chevron-down"
                class="w-full justify-between">
                {{ dateDisplay || 'Select date' }}
              </UButton>
              <template #content>
                <UCalendar
                  v-model="date"
                  class="p-2" />
              </template>
            </UPopover>
          </UFormField>
          <UFormField label="Time Select Input">
            <UInputTime
              v-model="time"
              :hour-cycle="12"
              icon="i-lucide-clock"
              variant="outline"
              color="primary"
              class="w-full" />
          </UFormField>
          <UFormField label="Input with Payment">
            <UInput
              v-model="formData.cardNumber"
              placeholder="Card number"
              leading-icon="i-lucide-credit-card"
              class="w-full" />
          </UFormField>
        </div>
      </UPageCard>

      <UPageCard
        title="Select Inputs"
        variant="outline">
        <div class="space-y-6">
          <UFormField label="Select Input">
            <USelect
              v-model="singleSelect"
              :items="selectItems"
              placeholder="Select Option"
              class="w-full" />
          </UFormField>
          <UFormField label="Multiple Select">
            <USelect
              v-model="selectedItems"
              :items="multiSelectOptions"
              multiple
              placeholder="Select items..."
              value-key="value"
              class="w-full" />
          </UFormField>
        </div>
      </UPageCard>

      <UPageCard
        title="Textarea"
        variant="outline">
        <div class="space-y-6">
          <UFormField label="Description">
            <UTextarea
              v-model="normalDescription"
              placeholder="Enter a description..."
              :rows="6"
              class="w-full" />
          </UFormField>
          <UFormField label="Description">
            <UTextarea
              v-model="disabledDescription"
              placeholder="Enter a description..."
              :rows="6"
              disabled
              class="w-full" />
          </UFormField>
          <UFormField
            label="Description"
            error="Please enter a message in the textarea.">
            <UTextarea
              v-model="errorDescription"
              placeholder="Enter a description..."
              :rows="6"
              color="error"
              class="w-full" />
          </UFormField>
        </div>
      </UPageCard>

      <UPageCard
        title="Input States"
        variant="outline">
        <div class="space-y-6">
          <UFormField
            label="Email"
            error="This is an error message.">
            <UInput
              v-model="errorEmail"
              color="error"
              trailing-icon="i-lucide-circle-alert"
              class="w-full" />
          </UFormField>
          <UFormField
            label="Email"
            help="This is a success message.">
            <UInput
              v-model="successEmail"
              color="success"
              trailing-icon="i-lucide-circle-check"
              class="w-full" />
          </UFormField>
          <UFormField label="Email">
            <UInput
              placeholder="info@gmail.com"
              disabled
              class="w-full" />
          </UFormField>
        </div>
      </UPageCard>
    </div>

    <div class="space-y-6">
      <UPageCard
        title="Inputs Group"
        variant="outline">
        <div class="space-y-6">
          <UFormField label="Email">
            <UInput
              v-model="email"
              placeholder="info@gmail.com"
              leading-icon="i-lucide-mail"
              class="w-full" />
          </UFormField>
          <UFormField label="Phone">
            <div
              class="flex w-full overflow-hidden rounded-lg border border-muted">
              <USelect
                v-model="selectedCountry"
                :items="countrySelectItems"
                class="w-24 shrink-0 border-0 border-r border-muted **:data-[slot=trigger]:rounded-none **:data-[slot=trigger]:border-0"
                @update:model-value="
                  updatePhoneNumber
                " />
              <UInput
                v-model="phoneNumber"
                placeholder="+1 (555) 000-0000"
                type="tel"
                variant="none"
                class="min-w-0 flex-1 rounded-none border-0 focus:ring-0" />
            </div>
          </UFormField>
          <UFormField label="Phone">
            <div
              class="flex w-full overflow-hidden rounded-lg border border-muted">
              <UInput
                v-model="phoneNumber2"
                placeholder="+1 (555) 000-0000"
                type="tel"
                variant="none"
                class="min-w-0 flex-1 rounded-none border-0 focus:ring-0" />
              <USelect
                v-model="selectedCountry2"
                :items="countrySelectItems"
                class="w-24 shrink-0 border-0 border-l border-muted **:data-[slot=trigger]:rounded-none **:data-[slot=trigger]:border-0"
                @update:model-value="
                  updatePhoneNumber2
                " />
            </div>
          </UFormField>
          <UFormField label="URL">
            <div
              class="flex w-full overflow-hidden rounded-lg border border-muted">
              <span
                class="flex items-center border-r border-muted bg-transparent px-4 py-2.5 text-sm text-muted">
                http://
              </span>
              <UInput
                v-model="url"
                placeholder="www.tailadmin.com"
                type="url"
                variant="none"
                class="min-w-0 flex-1 rounded-none border-0 focus:ring-0" />
            </div>
          </UFormField>
          <UFormField label="Website">
            <div
              class="flex w-full overflow-hidden rounded-lg border border-muted">
              <UInput
                v-model="website"
                type="url"
                variant="none"
                class="min-w-0 flex-1 rounded-none border-0 focus:ring-0" />
              <UButton
                color="primary"
                variant="ghost"
                size="sm"
                class="shrink-0 rounded-none border-l border-muted"
                @click="copyWebsite">
                <UIcon
                  name="i-lucide-copy"
                  class="size-4" />
                {{ copyText }}
              </UButton>
            </div>
          </UFormField>
        </div>
      </UPageCard>

      <UPageCard
        title="File Input"
        variant="outline">
        <UFormField label="Upload file">
          <UInput
            type="file"
            class="w-full file:mr-4 file:rounded-lg file:border-0 file:bg-muted file:px-4 file:py-2.5 file:text-sm file:font-medium file:text hover:file:bg-accented" />
        </UFormField>
      </UPageCard>

      <UPageCard
        title="Checkboxes"
        variant="outline">
        <div
          class="flex flex-wrap items-center gap-8">
          <UCheckbox
            v-model="checkboxOne"
            label="Default"
            color="primary" />
          <UCheckbox
            v-model="checkboxTwo"
            label="Checked"
            color="primary" />
          <UCheckbox
            v-model="checkboxThree"
            label="Disabled"
            disabled
            color="primary" />
        </div>
      </UPageCard>

      <UPageCard
        title="Dropzone"
        variant="outline">
        <UFileUpload
          v-model="dropzoneFiles"
          label="Drag & Drop File Here"
          description="Drag and drop your PNG, JPG, WebP, SVG images here or browse"
          accept="image/jpeg,image/png,image/gif,image/webp,image/svg+xml"
          icon="i-lucide-upload"
          variant="area"
          color="primary"
          class="w-full min-h-48" />
      </UPageCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  shallowRef,
} from 'vue'
import {
  CalendarDate,
  Time,
  getLocalTimeZone,
  today,
} from '@internationalized/date'

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
const date = shallowRef<CalendarDate>(
  today(getLocalTimeZone()),
)
const time = shallowRef<Time>(new Time(12, 0, 0))
const dateDisplay = computed(() => {
  if (!date.value) return ''
  const d = date.value
  return new Date(
    d.year,
    d.month - 1,
    d.day,
  ).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

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
const copyWebsite = async () => {
  await navigator.clipboard.writeText(
    website.value,
  )
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
