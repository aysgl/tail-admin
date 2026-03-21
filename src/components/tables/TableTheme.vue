<template>
  <div
    class="ag-grid-basic-table min-w-0 space-y-4 overflow-hidden"
    style="width: 100%">
    <div
      v-if="showToolbar"
      class="flex flex-wrap items-center justify-between gap-3">
      <div
        class="flex flex-wrap items-center gap-3">
        <UDropdownMenu
          v-if="showThemeSelector"
          :items="themeItems"
          :content="{ align: 'start' }">
          <UButton
            :label="themeLabels[theme]"
            color="primary"
            variant="outline"
            trailing-icon="i-lucide-chevron-down"
            aria-label="Select theme" />
        </UDropdownMenu>
        <UTabs
          v-if="showStatusTabs"
          v-model="activeStatusTab"
          :items="statusTabItems"
          :content="false"
          color="primary"
          variant="pill"
          size="sm"
          class="w-fit"
          @update:model-value="
            (v: unknown) =>
              setStatusFilter(String(v))
          " />
      </div>
      <div class="flex items-center gap-3">
        <UInput
          v-model="searchText"
          icon="i-lucide-search"
          placeholder="Filter..."
          size="md"
          variant="outline"
          color="primary"
          aria-label="Filter table"
          class="min-w-[200px] max-w-sm" />
        <UPopover v-if="showStatusTabs">
          <UButton
            color="primary"
            variant="outline"
            leading-icon="i-lucide-calendar"
            trailing-icon="i-lucide-chevron-down"
            class="min-w-[160px]">
            {{ dateRangeDisplay }}
          </UButton>
          <template #content>
            <UCalendar
              v-model="calendarDateRange"
              range
              :number-of-months="2"
              class="p-2" />
          </template>
        </UPopover>
        <UDropdownMenu
          v-if="showColumnsToggle && gridApi"
          :items="columnVisibilityItems"
          :content="{ align: 'end' }">
          <UButton
            label="Columns"
            color="primary"
            variant="outline"
            trailing-icon="i-lucide-chevron-down"
            aria-label="Columns visibility" />
        </UDropdownMenu>
        <UDropdownMenu
          v-if="gridApi"
          :items="exportMenuItems"
          :content="{ align: 'end' }">
          <UButton
            label="Export"
            color="primary"
            variant="outline"
            trailing-icon="i-lucide-chevron-down"
            leading-icon="i-lucide-download"
            aria-label="Export data" />
        </UDropdownMenu>
      </div>
    </div>
    <div
      class="relative h-[460px] w-full min-w-0 overflow-hidden">
      <div
        v-if="gridLoading"
        class="loading-overlay absolute inset-0 z-20 flex min-w-0 flex-col overflow-x-hidden overflow-y-auto rounded-lg bg/95">
        <SkeletonLoadingOverlay
          class="min-h-0 flex-1" />
      </div>
      <div
        v-show="showEmptyOverlay"
        class="empty-overlay absolute inset-0 z-10 flex items-center justify-center rounded-lg border border-gray-200 bg-elevated/95">
        <p class="text-center text-sm text-muted">
          {{ emptyOverlayMessage }}
        </p>
      </div>
      <div class="h-full min-h-0">
        <AgGridVue
          :loading="gridLoading"
          :loading-overlay-component="undefined"
          :default-col-group-def="
            defaultColGroupDef
          "
          :theme="gridTheme"
          :context="{ tableTheme: theme }"
          :column-defs="columnDefs"
          :column-types="columnTypes"
          :default-col-def="defaultColDef"
          :column-hover-highlight="true"
          :row-selection="
            showToolbar ? 'multiple' : undefined
          "
          :row-data="dateFilteredUsers"
          :quick-filter-text="searchText"
          :floating-filter="showFloatingFilter"
          :pagination="true"
          :pagination-page-size="10"
          :pagination-page-size-selector="[
            10, 25, 50, 100,
          ]"
          row-model-type="clientSide"
          dom-layout="normal"
          style="width: 100%; height: 100%"
          @grid-ready="onGridReady" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  shallowRef,
} from 'vue'
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from '@internationalized/date'
import { AgGridVue } from 'ag-grid-vue3'
import type {
  ColDef,
  ColGroupDef,
  ColTypeDef,
  ValueFormatterParams,
  GridReadyEvent,
  GridApi,
} from 'ag-grid-community'
import {
  tableThemeCompact,
  tableThemeRelaxed,
  tableThemeAdvance,
  baseColumnDef,
  advanceColumnDef,
  baseColGroupDef,
  advanceColGroupDef,
  flatColumnDefs,
  groupedColumnDefs,
} from './agGridConfiguration'
import { TABLE_USERS } from '@/data/tableUsers'
import {
  filterByQuickText,
  filterByDateRange,
} from '@/composables/useTableFilters'

const themeMap = {
  compact: tableThemeCompact,
  relaxed: tableThemeRelaxed,
  advance: tableThemeAdvance,
} as const

const statusTabItems = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'Active' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Cancel', value: 'Cancel' },
]

const toggleableColumns = [
  { id: 'name', label: 'User' },
  { id: 'project', label: 'Project' },
  { id: 'team', label: 'Team' },
  { id: 'status', label: 'Status' },
  { id: 'date', label: 'Tarih' },
  { id: 'budget', label: 'Budget' },
] as const

const props = withDefaults(
  defineProps<{
    theme?: 'compact' | 'relaxed' | 'advance'
    showToolbar?: boolean
    showThemeSelector?: boolean
    showStatusTabs?: boolean
    showColumnsToggle?: boolean
    showFloatingFilter?: boolean
    quickFilterText?: string
  }>(),
  {
    theme: 'advance',
    showToolbar: true,
    showThemeSelector: true,
    showStatusTabs: false,
    showColumnsToggle: true,
    showFloatingFilter: true,
    quickFilterText: '',
  },
)

const emit = defineEmits<{
  'update:theme': [
    value: 'compact' | 'relaxed' | 'advance',
  ]
  'update:quickFilterText': [value: string]
}>()

const gridApi = ref<GridApi | null>(null)
const activeStatusTab = ref<string>('all')
const searchText = ref(
  props.quickFilterText ?? '',
)
const today = new Date()
const defaultStart = new CalendarDate(
  today.getFullYear() - 2,
  today.getMonth() + 1,
  today.getDate(),
)
const defaultEnd = new CalendarDate(
  today.getFullYear() + 2,
  today.getMonth() + 1,
  today.getDate(),
)
const calendarDateRange = shallowRef<{
  start: CalendarDate
  end: CalendarDate
}>({ start: defaultStart, end: defaultEnd })

const dateFormatter = new DateFormatter('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

const isDefaultDateRange = computed(() => {
  const r = calendarDateRange.value
  return (
    r.start?.toString() ===
      defaultStart.toString() &&
    r.end?.toString() === defaultEnd.toString()
  )
})

const dateRange = computed(() => {
  const r = calendarDateRange.value
  if (!r?.start || isDefaultDateRange.value)
    return {}
  const tz = getLocalTimeZone()
  return {
    start: r.start.toDate(tz),
    end: r.end?.toDate(tz),
  }
})
const columnVisibilityState = ref<
  Record<string, boolean>
>({
  name: true,
  project: true,
  team: true,
  status: true,
  date: true,
  budget: true,
})

const theme = computed(() => props.theme)
const gridTheme = computed(
  () => themeMap[props.theme],
)

const gridLoading = ref(false)

const hasActiveFilter = computed(
  () =>
    (searchText.value?.trim()?.length ?? 0) > 0 ||
    (props.showStatusTabs &&
      activeStatusTab.value !== 'all'),
)

const displayedRowsFiltered = computed(() =>
  filterByQuickText(
    dateFilteredUsers.value,
    searchText.value,
  ),
)

const showEmptyOverlay = computed(
  () => displayedRowsFiltered.value.length === 0,
)

const emptyOverlayMessage = computed(() =>
  hasActiveFilter.value
    ? 'No results match your search criteria'
    : 'No data found',
)

const dateRangeDisplay = computed(() => {
  const r = calendarDateRange.value
  if (!r?.start || isDefaultDateRange.value)
    return 'Select date'
  const fmt = (d: CalendarDate) =>
    dateFormatter.format(
      d.toDate(getLocalTimeZone()),
    )
  return r.end &&
    r.end.toString() !== r.start.toString()
    ? `${fmt(r.start)} - ${fmt(r.end)}`
    : fmt(r.start)
})

const filteredUsers = computed(() => {
  const list = users.value
  if (activeStatusTab.value !== 'all') {
    return list.filter(
      (u) => u.status === activeStatusTab.value,
    )
  }
  return list
})

const dateFilteredUsers = computed(() =>
  filterByDateRange(
    filteredUsers.value,
    dateRange.value,
  ),
)

watch(
  () => props.quickFilterText ?? '',
  (v) => {
    if (searchText.value !== v)
      searchText.value = v
  },
  { immediate: true },
)
watch(searchText, (v) => {
  emit('update:quickFilterText', v)
})

const themeLabels: Record<
  'compact' | 'relaxed' | 'advance',
  string
> = {
  compact: 'Compact',
  relaxed: 'Relaxed',
  advance: 'Advance',
}

const themeItems = [
  {
    label: 'Compact',
    onSelect() {
      emit('update:theme', 'compact')
    },
  },
  {
    label: 'Relaxed',
    onSelect() {
      emit('update:theme', 'relaxed')
    },
  },
  {
    label: 'Advance',
    onSelect() {
      emit('update:theme', 'advance')
    },
  },
]

function onGridReady(params: GridReadyEvent) {
  gridApi.value = params.api
  gridLoading.value = false
}

function toggleColumnVisibility(
  colId: string,
  visible: boolean,
) {
  columnVisibilityState.value[colId] = visible
  gridApi.value?.setColumnsVisible(
    [colId],
    visible,
  )
}

const columnVisibilityItems = computed(() =>
  toggleableColumns.map(({ id, label }) => ({
    label,
    type: 'checkbox' as const,
    checked:
      columnVisibilityState.value[id] ?? true,
    onUpdateChecked(checked: boolean) {
      toggleColumnVisibility(id, checked)
    },
    onSelect(e: Event) {
      e.preventDefault()
    },
  })),
)

function exportToExcel() {
  gridApi.value?.exportDataAsCsv?.()
}

function exportToCsv() {
  gridApi.value?.exportDataAsCsv?.()
}

const exportMenuItems = [
  {
    label: 'Excel (.xlsx)',
    icon: 'i-lucide-file-spreadsheet',
    onSelect: exportToExcel,
  },
  {
    label: 'CSV (.csv)',
    icon: 'i-lucide-file-text',
    onSelect: exportToCsv,
  },
]

function setStatusFilter(status: string) {
  activeStatusTab.value = status
}

const users = ref(TABLE_USERS)

const columnDefs = computed<
  (ColDef | ColGroupDef)[]
>(() =>
  theme.value === 'advance'
    ? groupedColumnDefs
    : flatColumnDefs,
)

const defaultColDef = computed<ColDef>(() =>
  theme.value === 'advance'
    ? advanceColumnDef
    : baseColumnDef,
)

const defaultColGroupDef = computed(() =>
  theme.value === 'advance'
    ? advanceColGroupDef
    : baseColGroupDef,
)

const columnTypes = ref<
  Record<string, ColTypeDef>
>({
  currency: {
    width: 150,
    valueFormatter: (
      params: ValueFormatterParams,
    ) => (params.value ? `$${params.value}` : ''),
  },
  shaded: {
    cellClass: 'shaded-class',
  },
})
</script>

<style scoped>
.ag-grid-basic-table :deep(.ag-cell) {
  display: flex;
  align-items: center;
}

.ag-grid-basic-table :deep(.ag-root-wrapper) {
  border-radius: 8px;
  overflow: hidden;
}
</style>
