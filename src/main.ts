import './assets/main.css'
import 'jsvectormap/dist/jsvectormap.css'
import 'v-calendar/style.css'

import {
  AllCommunityModule,
  ModuleRegistry,
} from 'ag-charts-community'
import { createApp } from 'vue'
import {
  setupCalendar,
  DatePicker,
} from 'v-calendar'
import App from './App.vue'
import router from './router'

ModuleRegistry.registerModules([
  AllCommunityModule,
])

const app = createApp(App)

app.use(setupCalendar, {})
app.component('VDatePicker', DatePicker)
app.use(router)
app.mount('#app')
