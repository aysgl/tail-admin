<template>
  <UDropdownMenu
    :items="userMenuItems"
    :content="{
      align: 'end',
      collisionPadding: 12,
    }"
    :ui="{ content: 'min-w-48' }"
  >
    <UButton
      color="primary"
      variant="soft"
      class="gap-2"
    >
      <UAvatar
        src="/images/user/owner.jpg"
        alt="User"
        size="sm"
      />
      <span class="hidden font-medium sm:inline"
        >Musharof</span
      >
      <UIcon
        name="i-lucide-chevrons-up-down"
        class="size-4 text-dimmed"
      />
    </UButton>
  </UDropdownMenu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DropdownMenuItem } from '@nuxt/ui'

const userMenuItems = computed<
  DropdownMenuItem[][]
>(() => [
  [
    {
      label: 'Musharof Chowdhury',
      avatar: {
        src: '/images/user/owner.jpg',
        alt: 'User',
      },
      type: 'label',
    },
  ],
  [
    {
      label: 'Edit profile',
      icon: 'i-lucide-user-circle',
      to: '/profile',
    },
    {
      label: 'Account settings',
      icon: 'i-lucide-settings',
      to: '/account-settings',
    },
    {
      label: 'Support',
      icon: 'i-lucide-info',
      to: '/profile',
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-lucide-log-out',
      to: '/signin',
      onSelect: () => {
        // Implement sign out logic
        console.log('Signing out...')
      },
    },
  ],
])
</script>
