<template>
  <UPageHeader
    headline="User Profile"
    title="Profile"
    class="py-0 border-none"
  >
    <template #headline>
      <UBreadcrumb :items="breadcrumbItems" />
    </template>
  </UPageHeader>
  <UPageBody>
    <ProfileCard />
    <PersonalInfoCard />
    <AddressCard />
  </UPageBody>
</template>

<script setup lang="ts">
import { usePageBreadcrumb } from '@/composables/usePageBreadcrumb'
import ProfileCard from '@/components/profile/ProfileCard.vue'
import PersonalInfoCard from '@/components/profile/PersonalInfoCard.vue'
import AddressCard from '@/components/profile/AddressCard.vue'

const breadcrumbItems = usePageBreadcrumb(
  'Profile',
  'Profile',
)
</script>
