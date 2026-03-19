<template>
  <div class="flex -space-x-2">
    <div
      v-for="(member, index) in params.data?.team"
      :key="index"
      class="size-6 overflow-hidden rounded-full border-2 border-white dark:border-gray-900"
    >
      <img
        :src="member"
        alt="team member"
        class="size-full object-cover"
      />
    </div>
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
