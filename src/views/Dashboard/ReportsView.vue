<template>
  <div class="grid grid-cols-12 gap-4 md:gap-6">
    <div
      class="col-span-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <ReportSummaryCard
        v-for="report in REPORT_SUMMARIES"
        :key="report.title"
        :title="report.title"
        :description="report.description"
        :value="report.value"
        :icon="report.icon"
        :color="report.color" />
    </div>
    <div class="col-span-12 xl:col-span-7 h-full">
      <SimpleDonutCard :loading="pageLoading" />
    </div>
    <div class="col-span-12 flex xl:col-span-5">
      <UPageCard
        class="min-h-0 flex-1 w-full"
        title="Recent Reports"
        description="Recently created reports"
        variant="outline">
        <div class="relative min-h-[200px]">
          <div
            v-if="pageLoading"
            class="loading-overlay absolute inset-0 z-20 flex flex-col overflow-hidden rounded-lg">
            <ReportListSkeleton
              class="h-full w-full" />
          </div>
          <div
            class="divide-y divide-muted"
            :class="{
              'opacity-0': pageLoading,
            }">
            <div
              v-for="report in RECENT_REPORTS"
              :key="report.id"
              class="flex flex-wrap items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
              <div>
                <p
                  class="font-medium text-highlighted">
                  {{ report.name }}
                </p>
                <div
                  class="mt-1 flex items-center gap-2 text-sm text-muted">
                  <UBadge
                    :color="
                      report.type === 'Revenue'
                        ? 'success'
                        : report.type === 'Sales'
                          ? 'primary'
                          : 'neutral'
                    "
                    variant="subtle"
                    size="sm">
                    {{ report.type }}
                  </UBadge>
                  <span>{{ report.date }}</span>
                </div>
              </div>
              <div class="flex gap-2">
                <UButton
                  color="primary"
                  variant="ghost"
                  size="sm"
                  icon="i-lucide-download"
                  aria-label="Download" />
                <UButton
                  color="primary"
                  variant="ghost"
                  size="sm"
                  icon="i-lucide-eye"
                  aria-label="View" />
              </div>
            </div>
          </div>
        </div>
      </UPageCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageLoading } from '@/composables/usePageLoading'
import ReportListSkeleton from '@/components/dashboard/ReportListSkeleton.vue'
import ReportSummaryCard from '@/components/dashboard/ReportSummaryCard.vue'
import SimpleDonutCard from '@/components/dashboard/SimpleDonutCard.vue'
import {
  RECENT_REPORTS,
  REPORT_SUMMARIES,
} from '@/data/reports'

const { pageLoading } = usePageLoading()
</script>
