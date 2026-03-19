<template>
  <AdminLayout>
    <UPage>
      <UBreadcrumb
        :items="breadcrumbItems"
        class="mb-4"
      />
      <UPageHeader title="Profile" />

      <UPageBody>
        <ProfileCard />
        <PersonalInfoCard />
        <AddressCard />
      </UPageBody>
    </UPage>
  </AdminLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import ProfileCard from '@/components/profile/ProfileCard.vue'
import PersonalInfoCard from '@/components/profile/PersonalInfoCard.vue'
import AddressCard from '@/components/profile/AddressCard.vue'

const breadcrumbItems = computed(() => [
  { label: 'Home', to: '/' },
  { label: 'Profile' },
])
</script>
