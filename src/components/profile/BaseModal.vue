<template>
  <Teleport to="body">
    <div
      v-show="modelValue"
      class="fixed inset-0 flex items-center justify-center overflow-y-auto modal z-99999"
      role="dialog"
      aria-modal="true"
      :aria-hidden="!modelValue"
    >
      <div
        class="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[32px]"
        aria-hidden="true"
        @click="$emit('update:modelValue', false)"
      />
      <slot name="body" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {
  onBeforeUnmount,
  shallowRef,
  watch,
} from 'vue'

interface Props {
  modelValue: boolean
  /** Ana içeriğe inert uygulanacak eleman seçicisi (açıkken arka plan inert olur). */
  inertTarget?: string
}

const props = withDefaults(defineProps<Props>(), {
  inertTarget: '#app',
})

defineEmits<{
  'update:modelValue': [value: boolean]
}>()

// Açıkken ana içeriği inert yap (focus/click/screen reader engelleme)
const inertEl = shallowRef<Element | null>(null)

watch(
  () => props.modelValue,
  (open: boolean) => {
    const target = props.inertTarget
      ? document.querySelector(props.inertTarget)
      : null
    if (!target) return
    if (open) {
      target.setAttribute('inert', '')
      inertEl.value = target
    } else {
      target.removeAttribute('inert')
      inertEl.value = null
    }
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  if (inertEl.value) {
    inertEl.value.removeAttribute('inert')
  }
})
</script>
