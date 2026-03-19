<template>
  <AdminLayout>
    <PageBreadcrumb
      :pageTitle="currentPageTitle"
    />
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      <div class="space-y-6">
        <ComponentCard title="Default Inputs">
          <BaseDefaultInput />
        </ComponentCard>
        <ComponentCard title="Select Inputs">
          <BaseSelectInput />
        </ComponentCard>
        <ComponentCard title="Textarea">
          <BaseTextArea />
        </ComponentCard>
        <ComponentCard title="Input States">
          <BaseInputState />
        </ComponentCard>
      </div>
      <div class="space-y-6">
        <ComponentCard title="Inputs Group">
          <BaseInputGroup />
        </ComponentCard>
        <ComponentCard title="File Input">
          <BaseFileInput />
        </ComponentCard>
        <ComponentCard title="Checkboxes">
          <BaseCheckboxInput />
        </ComponentCard>
        <ComponentCard title="Dropzone">
          <BaseDropzone />
        </ComponentCard>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import ComponentCard from '@/components/common/ComponentCard.vue'
import BaseDefaultInput from '@/components/forms/FormElements/DefaultInputs.vue'
import BaseSelectInput from '@/components/forms/FormElements/BaseSelectInput.vue'
import BaseTextArea from '@/components/forms/FormElements/TextArea.vue'
import BaseInputState from '@/components/forms/FormElements/InputState.vue'
import BaseDropzone from '@/components/forms/FormElements/BaseDropzone.vue'
import BaseCheckboxInput from '@/components/forms/FormElements/CheckboxInput.vue'
import BaseInputGroup from '@/components/forms/FormElements/InputGroup.vue'
import BaseFileInput from '@/components/forms/FormElements/FileInput.vue'

const currentPageTitle = ref('Form Elements')
</script>
