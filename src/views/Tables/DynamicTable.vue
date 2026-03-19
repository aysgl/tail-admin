<template>
  <AdminLayout>
    <PageBreadcrumb
      :pageTitle="currentPageTitle"
    />
    <div class="space-y-5 sm:space-y-6">
      <ComponentCard
        title="table-compact"
        desc="Yoğun, sıkı görünüm. Küçük satır yüksekliği ve dar padding ile daha fazla veri sığar."
      >
        <TableTheme
          theme="compact"
          :show-toolbar="false"
        />
      </ComponentCard>
      <ComponentCard
        title="table-relaxed"
        desc="Rahat, sakin görünüm. Bol padding, minimal hover. Okunabilirlik odaklı."
      >
        <TableTheme
          theme="relaxed"
          :show-toolbar="false"
        />
      </ComponentCard>
      <ComponentCard
        title="table-advance"
        desc="Theme seçimi, global arama, status tab'ları, satır seçimi, kolon göster/gizle ve filtreler."
      >
        <TableTheme
          v-model:theme="advanceTheme"
          v-model:quick-filter-text="
            advanceQuickFilter
          "
          :show-toolbar="true"
          :show-theme-selector="true"
          :show-status-tabs="true"
          :show-floating-filter="true"
          :datasource-delay-ms="2000"
        />
      </ComponentCard>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import ComponentCard from '@/components/common/ComponentCard.vue'
import TableTheme from '@/components/tables/TableTheme.vue'

const currentPageTitle = ref('Basic Tables')
const advanceTheme = ref<
  'compact' | 'relaxed' | 'advance'
>('advance')
const advanceQuickFilter = ref('')
</script>
