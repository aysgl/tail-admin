<template>
  <UButton
    color="neutral"
    variant="soft"
    block
    class="gap-3">
    <SocialIconGoogle />
    {{ action }} with Google
  </UButton>
  <UButton
    color="neutral"
    variant="soft"
    block
    class="gap-3">
    <SocialIconX />
    {{ action }} with X
  </UButton>
</template>

<script setup lang="ts">
import SocialIconGoogle from '@/components/icons/SocialIconGoogle.vue'
import SocialIconX from '@/components/icons/SocialIconX.vue'

withDefaults(
  defineProps<{
    action?: 'Sign in' | 'Sign up'
  }>(),
  { action: 'Sign in' },
)
</script>
