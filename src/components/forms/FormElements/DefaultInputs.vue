<template>
  <div class="space-y-6">
    <!-- Text Input -->
    <UFormField label="Input">
      <UInput
        v-model="formData.input"
        variant="outline"
        color="neutral"
        class="w-full"
      />
    </UFormField>

    <!-- Input with Placeholder -->
    <UFormField label="Input with Placeholder">
      <UInput
        v-model="formData.inputWithPlaceholder"
        placeholder="info@gmail.com"
        variant="outline"
        color="neutral"
        class="w-full"
      />
    </UFormField>

    <!-- Select Input -->
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

    <!-- Password Input -->
    <UFormField label="Password Input">
      <div class="relative">
        <UInput
          v-model="formData.password"
          :type="
            showPassword ? 'text' : 'password'
          "
          placeholder="Enter your password"
          variant="outline"
          color="neutral"
          class="w-full pr-11"
        />
        <button
          type="button"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          aria-label="Toggle password visibility"
          @click="showPassword = !showPassword"
        >
          <UIcon
            :name="
              showPassword
                ? 'i-lucide-eye-off'
                : 'i-lucide-eye'
            "
            class="size-5"
          />
        </button>
      </div>
    </UFormField>

    <!-- Date Picker Input -->
    <UFormField label="Date Picker Input">
      <UPopover>
        <UButton
          color="neutral"
          variant="outline"
          trailing-icon="i-lucide-chevron-down"
          class="w-full justify-between"
        >
          {{ dateDisplay || 'Select date' }}
        </UButton>
        <template #content>
          <VDatePicker
            v-model="date"
            mode="date"
            :masks="{ modelValue: 'YYYY-MM-DD' }"
          />
        </template>
      </UPopover>
    </UFormField>

    <!-- Time Select Input -->
    <UFormField label="Time Select Input">
      <div
        role="button"
        tabindex="0"
        class="flex h-11 w-full cursor-pointer items-center rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
        @click="showTimePicker = !showTimePicker"
        @keydown.enter="
          showTimePicker = !showTimePicker
        "
        @keydown.space.prevent="
          showTimePicker = !showTimePicker
        "
      >
        {{ timeDisplay || 'Select time' }}
      </div>
      <Teleport to="body">
        <div
          v-if="showTimePicker"
          class="fixed inset-0 z-40"
        >
          <button
            type="button"
            class="absolute inset-0 h-full w-full cursor-default"
            aria-label="Close time picker"
            @click="showTimePicker = false"
          />
          <div
            class="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-gray-200 bg-white p-4 shadow-theme-xl dark:border-gray-800 dark:bg-gray-900"
            @click.stop
          >
            <VDatePicker
              v-model="time"
              mode="time"
              :is24hr="false"
            />
          </div>
        </div>
      </Teleport>
    </UFormField>

    <!-- Input with Payment -->
    <UFormField label="Input with Payment">
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
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const showPassword = ref(false)
const showTimePicker = ref(false)

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

const dateDisplay = computed(() => {
  if (!date.value) return ''
  return date.value.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

const timeDisplay = computed(() => {
  if (!time.value) return ''
  return time.value.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
})
</script>
