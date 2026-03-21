<template>
  <div
    class="ag-grid-basic-table min-w-0 space-y-4 overflow-hidden"
    style="width: 100%"
  >
    <div
      v-if="showToolbar"
      class="flex flex-wrap items-center justify-between gap-3"
    >
      <div
        class="flex flex-wrap items-center gap-3"
      >
        <UDropdownMenu
          v-if="showThemeSelector"
          :items="themeItems"
          :content="{ align: 'start' }"
        >
          <UButton
            :label="themeLabels[theme]"
            color="primary"
            variant="outline"
            trailing-icon="i-lucide-chevron-down"
            aria-label="Select theme"
          />
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
          "
        />
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
          class="min-w-[200px] max-w-sm"
        />
        <UPopover v-if="showStatusTabs">
          <UButton
            color="primary"
            variant="outline"
            leading-icon="i-lucide-calendar"
            trailing-icon="i-lucide-chevron-down"
            class="min-w-[160px]"
          >
            {{ dateRangeDisplay }}
          </UButton>
          <template #content>
            <UCalendar
              v-model="calendarDateRange"
              range
              :number-of-months="2"
              class="p-2"
            />
          </template>
        </UPopover>
        <UDropdownMenu
          v-if="showColumnsToggle && gridApi"
          :items="columnVisibilityItems"
          :content="{ align: 'end' }"
        >
          <UButton
            label="Columns"
            color="primary"
            variant="outline"
            trailing-icon="i-lucide-chevron-down"
            aria-label="Columns visibility"
          />
        </UDropdownMenu>
        <UDropdownMenu
          v-if="gridApi"
          :items="exportMenuItems"
          :content="{ align: 'end' }"
        >
          <UButton
            label="Export"
            color="primary"
            variant="outline"
            trailing-icon="i-lucide-chevron-down"
            leading-icon="i-lucide-download"
            aria-label="Export data"
          />
        </UDropdownMenu>
      </div>
    </div>
    <div
      class="relative h-[460px] w-full min-w-0 overflow-hidden"
    >
      <div
        v-if="gridLoading && !useClientSide"
        class="loading-overlay absolute inset-0 z-20 flex min-w-0 flex-col overflow-x-hidden overflow-y-auto rounded-lg bg/95"
      >
        <SkeletonLoadingOverlay
          class="min-h-0 flex-1"
        />
      </div>
      <div
        v-else-if="showEmptyOverlay"
        class="empty-overlay absolute inset-0 z-10 flex items-center justify-center rounded-lg border border-gray-200 bg-elevated/95"
      >
        <p class="text-center text-sm text-muted">
          {{ emptyOverlayMessage }}
        </p>
      </div>
      <div
        class="h-full min-h-0"
        :class="{
          'invisible pointer-events-none':
            gridLoading && !useClientSide,
        }"
      >
        <AgGridVue
          :loading="
            useClientSide ? gridLoading : false
          "
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
          :row-data="
            useClientSide
              ? dateFilteredUsers
              : undefined
          "
          :quick-filter-text="
            useClientSide ? searchText : undefined
          "
          :floating-filter="showFloatingFilter"
          :pagination="true"
          :pagination-page-size="10"
          :pagination-page-size-selector="[
            10, 25, 50, 100,
          ]"
          :row-model-type="
            useClientSide
              ? 'clientSide'
              : 'serverSide'
          "
          :suppress-server-side-full-width-loading-row="
            !useClientSide
          "
          :cache-block-size="
            useClientSide ? undefined : 50
          "
          :max-blocks-in-cache="
            useClientSide ? undefined : 4
          "
          :row-buffer="
            useClientSide ? undefined : 10
          "
          :max-concurrent-datasource-requests="
            useClientSide ? undefined : 2
          "
          :block-load-debounce-millis="
            useClientSide ? undefined : 200
          "
          dom-layout="normal"
          style="width: 100%; height: 100%"
          @grid-ready="onGridReady"
        />
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
  IServerSideDatasource,
  IServerSideGetRowsRequest,
} from 'ag-grid-community'
import {
  tableThemeCompact,
  tableThemeRelaxed,
  tableThemeAdvance,
  baseColumnDef,
  advanceColumnDef,
  baseColGroupDef,
  advanceColGroupDef,
} from '@/theme/agGridTheme'

type UserRow = {
  name: string
  role: string
  avatar: string
  project: string
  team: string[]
  status: string
  budget: string
  date?: string
}

function getServerSideDatasource(
  server: {
    getResponse: (
      req: IServerSideGetRowsRequest,
    ) => {
      success: boolean
      rows: UserRow[]
      lastRow?: number
    }
  },
  delayMs = 2000,
): IServerSideDatasource {
  return {
    getRows: (params) => {
      setTimeout(() => {
        const response = server.getResponse(
          params.request,
        )
        if (response.success) {
          params.success({
            rowData: response.rows,
            rowCount:
              response.lastRow ?? undefined,
          })
        } else {
          params.fail()
        }
      }, delayMs)
    },
  }
}

function filterByQuickText(
  rows: UserRow[],
  text: string,
): UserRow[] {
  if (!text?.trim()) return rows
  const q = text.toLowerCase().trim()
  return rows.filter(
    (r) =>
      r.name.toLowerCase().includes(q) ||
      r.role.toLowerCase().includes(q) ||
      r.project.toLowerCase().includes(q) ||
      r.status.toLowerCase().includes(q) ||
      r.budget.toLowerCase().includes(q) ||
      (r.date &&
        r.date.toLowerCase().includes(q)),
  )
}

function filterByFilterModel(
  rows: UserRow[],
  filterModel: unknown,
): UserRow[] {
  if (
    !filterModel ||
    typeof filterModel !== 'object'
  )
    return rows
  const model = filterModel as Record<
    string,
    {
      filterType?: string
      type?: string
      filter?: string
    }
  >
  return rows.filter((row) => {
    for (const [field, filter] of Object.entries(
      model,
    )) {
      if (!filter || typeof filter !== 'object')
        continue
      if (
        filter.filterType === 'text' &&
        filter.filter
      ) {
        const val = String(
          (row as Record<string, unknown>)[
            field
          ] ?? '',
        )
        if (
          filter.type === 'equals' &&
          val !== filter.filter
        )
          return false
        if (
          filter.type === 'contains' &&
          !val
            .toLowerCase()
            .includes(filter.filter.toLowerCase())
        )
          return false
      }
    }
    return true
  })
}

function getFakeServer(
  allData: UserRow[],
  getQuickFilterText: () => string,
  getDateRange: () => {
    start?: Date
    end?: Date
  },
) {
  return {
    getResponse: (
      request: IServerSideGetRowsRequest,
    ) => {
      let filtered = filterByDateRange(
        allData,
        getDateRange(),
      )
      filtered = filterByQuickText(
        filtered,
        getQuickFilterText(),
      )
      filtered = filterByFilterModel(
        filtered,
        request.filterModel,
      )
      const start = request.startRow ?? 0
      const end = request.endRow ?? 10
      const rowsThisPage = filtered.slice(
        start,
        end,
      )
      return {
        success: true,
        rows: rowsThisPage,
        lastRow: filtered.length,
      }
    },
  }
}

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
    /** Server datasource gecikmesi (ms) - skeleton görünürlüğü için */
    datasourceDelayMs?: number
    /** 'server' = server-side + loading overlay, 'client' = client-side (varsayılan: showToolbar'a göre) */
    datasourceMode?: 'client' | 'server'
  }>(),
  {
    theme: 'advance',
    showToolbar: true,
    showThemeSelector: true,
    showStatusTabs: false,
    showColumnsToggle: true,
    showFloatingFilter: true,
    quickFilterText: '',
    datasourceDelayMs: 2000,
    datasourceMode: undefined,
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

const useClientSide = computed(() => {
  if (props.datasourceMode === 'server')
    return false
  if (props.datasourceMode === 'client')
    return true
  return props.showToolbar
})
const serverSideDisplayedCount = ref<number>(-1)
const serverSideDataLoaded = ref(false)
const gridLoading = ref(!useClientSide.value)

const displayedRowsForClient = computed(() =>
  filterByQuickText(
    dateFilteredUsers.value,
    searchText.value,
  ),
)

const hasActiveFilter = computed(
  () =>
    (searchText.value?.trim()?.length ?? 0) > 0 ||
    (props.showStatusTabs &&
      activeStatusTab.value !== 'all'),
)

const showEmptyOverlay = computed(() => {
  if (useClientSide.value) {
    return (
      displayedRowsForClient.value.length === 0
    )
  }
  return (
    serverSideDataLoaded.value &&
    serverSideDisplayedCount.value === 0
  )
})

const emptyOverlayMessage = computed(() =>
  hasActiveFilter.value
    ? 'No results match your search criteria'
    : 'No data found',
)

function filterByDateRange(
  rows: UserRow[],
  range: { start?: Date; end?: Date },
): UserRow[] {
  if (!range?.start && !range?.end) return rows
  const start = range.start
    ? range.start.getTime()
    : 0
  const end = range.end
    ? range.end.getTime()
    : Number.MAX_SAFE_INTEGER
  return rows.filter((r) => {
    if (!r.date?.trim()) return true
    const d = new Date(r.date).getTime()
    if (Number.isNaN(d)) return true
    return d >= start && d <= end
  })
}

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
  if (!useClientSide.value) {
    gridLoading.value = true
    const server = getFakeServer(
      users.value,
      () => searchText.value,
      () => dateRange.value,
    )
    const datasource = getServerSideDatasource(
      server,
      props.datasourceDelayMs,
    )
    params.api.setGridOption(
      'serverSideDatasource',
      datasource,
    )
    const updateDisplayedCount = () => {
      serverSideDisplayedCount.value =
        params.api.getDisplayedRowCount() ?? -1
    }
    const onServerDataReady = () => {
      gridLoading.value = false
      serverSideDataLoaded.value = true
      updateDisplayedCount()
    }
    params.api.addEventListener(
      'firstDataRendered',
      onServerDataReady,
    )
    params.api.addEventListener(
      'modelUpdated',
      () => {
        updateDisplayedCount()
        if (gridLoading.value) {
          onServerDataReady()
        }
      },
    )
  } else {
    gridLoading.value = false
    serverSideDisplayedCount.value = -1
  }
}

let refreshTimeout: ReturnType<
  typeof setTimeout
> | null = null
watch(
  [searchText, calendarDateRange],
  () => {
    if (useClientSide.value) return
    if (refreshTimeout)
      clearTimeout(refreshTimeout)
    refreshTimeout = setTimeout(() => {
      gridLoading.value = true
      gridApi.value?.refreshServerSide({
        purge: true,
      })
      refreshTimeout = null
    }, 300)
  },
  { deep: true },
)

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
  gridApi.value?.exportDataAsExcel?.()
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
  if (useClientSide.value) return
  if (!gridApi.value) return
  gridLoading.value = true
  if (status === 'all') {
    gridApi.value.setFilterModel(null)
  } else {
    gridApi.value.setFilterModel({
      status: {
        filterType: 'text',
        type: 'equals',
        filter: status,
      },
    })
  }
  gridApi.value.refreshServerSide({ purge: true })
}

const users = ref<UserRow[]>([
  {
    name: 'Lindsey Curtis',
    role: 'Web Designer',
    avatar: '/images/user/user-17.jpg',
    project: 'Agency Website',
    team: [
      '/images/user/user-22.jpg',
      '/images/user/user-23.jpg',
      '/images/user/user-24.jpg',
    ],
    status: 'Active',
    budget: '3.9K',
    date: '2025-01-15',
  },
  {
    name: 'Kaiya George',
    role: 'Project Manager',
    avatar: '/images/user/user-18.jpg',
    project: 'Technology',
    team: [
      '/images/user/user-25.jpg',
      '/images/user/user-26.jpg',
    ],
    status: 'Pending',
    budget: '24.9K',
    date: '2025-02-20',
  },
  {
    name: 'Zain Geidt',
    role: 'Content Writer',
    avatar: '/images/user/user-19.jpg',
    project: 'Blog Writing',
    team: ['/images/user/user-27.jpg'],
    status: 'Active',
    budget: '12.7K',
    date: '2025-01-28',
  },
  {
    name: 'Abram Schleifer',
    role: 'Digital Marketer',
    avatar: '/images/user/user-20.jpg',
    project: 'Social Media',
    team: [
      '/images/user/user-28.jpg',
      '/images/user/user-29.jpg',
      '/images/user/user-30.jpg',
    ],
    status: 'Cancel',
    budget: '2.8K',
    date: '2025-03-05',
  },
  {
    name: 'Carla George',
    role: 'Front-end Developer',
    avatar: '/images/user/user-21.jpg',
    project: 'Website',
    team: [
      '/images/user/user-31.jpg',
      '/images/user/user-32.jpg',
      '/images/user/user-33.jpg',
    ],
    status: 'Active',
    budget: '4.5K',
    date: '2025-02-12',
  },
])

const flatColumnDefs: ColDef[] = [
  {
    headerName: 'User',
    field: 'name',
    flex: 2,
    cellRenderer: 'UserCellRenderer',
    loadingCellRenderer:
      'SkeletonLoadingCellRenderer',
    sortable: true,
  },
  {
    headerName: 'Project Name',
    field: 'project',
    flex: 1.5,
    loadingCellRenderer:
      'SkeletonLoadingCellRenderer',
    sortable: true,
  },
  {
    headerName: 'Team',
    field: 'team',
    flex: 1.5,
    cellRenderer: 'TeamCellRenderer',
    loadingCellRenderer:
      'SkeletonLoadingCellRenderer',
  },
  {
    headerName: 'Status',
    field: 'status',
    colId: 'status',
    flex: 1,
    cellRenderer: 'StatusCellRenderer',
    loadingCellRenderer:
      'SkeletonLoadingCellRenderer',
    filter: true,
  },
  {
    headerName: 'Tarih',
    field: 'date',
    colId: 'date',
    flex: 1,
    loadingCellRenderer:
      'SkeletonLoadingCellRenderer',
    sortable: true,
    filter: 'agDateColumnFilter',
    valueFormatter: (
      params: ValueFormatterParams,
    ) =>
      params.value
        ? new Date(
            params.value,
          ).toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        : '',
  },
  {
    headerName: 'Budget',
    field: 'budget',
    flex: 1,
    loadingCellRenderer:
      'SkeletonLoadingCellRenderer',
    sortable: true,
  },
]

const groupedColumnDefs: (
  | ColDef
  | ColGroupDef
)[] = [
  {
    headerName: 'User & Project',
    children: [
      {
        headerName: 'User',
        field: 'name',
        flex: 2,
        cellRenderer: 'UserCellRenderer',
        loadingCellRenderer:
          'SkeletonLoadingCellRenderer',
        sortable: true,
      },
      {
        headerName: 'Project Name',
        field: 'project',
        flex: 1.5,
        loadingCellRenderer:
          'SkeletonLoadingCellRenderer',
        sortable: true,
      },
    ],
  },
  {
    headerName: 'Team',
    children: [
      {
        headerName: 'Team',
        field: 'team',
        flex: 1.5,
        cellRenderer: 'TeamCellRenderer',
        loadingCellRenderer:
          'SkeletonLoadingCellRenderer',
      },
    ],
  },
  {
    headerName: 'Status, Tarih & Budget',
    children: [
      {
        headerName: 'Status',
        field: 'status',
        colId: 'status',
        flex: 1,
        cellRenderer: 'StatusCellRenderer',
        loadingCellRenderer:
          'SkeletonLoadingCellRenderer',
        filter: true,
      },
      {
        headerName: 'Tarih',
        field: 'date',
        colId: 'date',
        flex: 1,
        loadingCellRenderer:
          'SkeletonLoadingCellRenderer',
        sortable: true,
        filter: 'agDateColumnFilter',
        valueFormatter: (
          params: ValueFormatterParams,
        ) =>
          params.value
            ? new Date(
                params.value,
              ).toLocaleDateString('tr-TR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
            : '',
      },
      {
        headerName: 'Budget',
        field: 'budget',
        flex: 1,
        loadingCellRenderer:
          'SkeletonLoadingCellRenderer',
        sortable: true,
      },
    ],
  },
]

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
