import 'temporal-polyfill/global'
import './assets/main.css'
import 'v-calendar/style.css'

import {
  AllCommunityModule,
  ModuleRegistry,
} from 'ag-charts-community'
import {
  AllCommunityModule as AgGridAllCommunityModule,
  ModuleRegistry as AgGridModuleRegistry,
} from 'ag-grid-community'
import {
  ExcelExportModule,
  ServerSideRowModelModule,
} from 'ag-grid-enterprise'
import { createApp } from 'vue'
import {
  setupCalendar,
  DatePicker,
} from 'v-calendar'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import router from './router'
import UserCellRenderer from '@/components/tables/cell-renderers/UserCellRenderer.vue'
import TeamCellRenderer from '@/components/tables/cell-renderers/TeamCellRenderer.vue'
import StatusCellRenderer from '@/components/tables/cell-renderers/StatusCellRenderer.vue'
import SkeletonLoadingCellRenderer from '@/components/tables/cell-renderers/SkeletonLoadingCellRenderer.vue'
import SkeletonLoadingOverlay from '@/components/tables/SkeletonLoadingOverlay.vue'
import ChartSkeletonOverlay from '@/components/charts/ChartSkeletonOverlay.vue'

ModuleRegistry.registerModules([
  AllCommunityModule,
])
AgGridModuleRegistry.registerModules([
  AgGridAllCommunityModule,
  ExcelExportModule,
  ServerSideRowModelModule,
])

const app = createApp(App)

app.component(
  'UserCellRenderer',
  UserCellRenderer,
)
app.component(
  'TeamCellRenderer',
  TeamCellRenderer,
)
app.component(
  'StatusCellRenderer',
  StatusCellRenderer,
)
app.component(
  'SkeletonLoadingCellRenderer',
  SkeletonLoadingCellRenderer,
)
app.component(
  'SkeletonLoadingOverlay',
  SkeletonLoadingOverlay,
)
app.component(
  'ChartSkeletonOverlay',
  ChartSkeletonOverlay,
)

app.use(setupCalendar, {})
app.component('VDatePicker', DatePicker)
app.use(router)
app.use(ui)

// AG Grid: Theme API kullanılıyor, legacy CSS import edilmiyor
// (Theming API ve legacy CSS aynı sayfada kullanılamaz)

app.mount('#app')
