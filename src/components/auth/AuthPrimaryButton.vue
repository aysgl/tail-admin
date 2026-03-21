<template>
  <UButton
    type="submit"
    block
    color="primary"
    variant="solid"
    size="lg"
    class="bg-primary-500! text-white! hover:bg-primary-600!"
    v-bind="$attrs">
    <slot />
  </UButton>
</template>
