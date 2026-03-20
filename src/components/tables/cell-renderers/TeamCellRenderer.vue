<template>
  <div class="flex -space-x-2">
    <UAvatar
      v-for="(member, index) in params.data?.team"
      :key="index"
      :src="member"
      alt="team member"
      size="xs"
      class="size-6 shrink-0 border-2 border-white dark:border-gray-900"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  params: {
    data?: {
      team: string[]
    }
  }
}>()
</script>
